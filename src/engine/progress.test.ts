import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { MODULES } from "../content/modules";
import {
  canAdvanceModule,
  emptyModuleProgress,
  isModuleUnlocked,
  moduleOverall,
} from "./progress";
import { getNextAction } from "./recommendation";
import { validateContent } from "./validate";

describe("progress", () => {
  it("module 1 is unlocked with empty state", () => {
    assert.equal(isModuleUnlocked("module_01", {}), true);
  });

  it("module 6 warns locked until prerequisites advance", () => {
    assert.equal(isModuleUnlocked("module_06", {}), false);
    const modules = {
      module_04: { ...emptyModuleProgress(), completed: true, content: 100 },
    };
    assert.equal(isModuleUnlocked("module_06", modules), false);
  });

  it("overall is multidimensional, not content-only", () => {
    const p = {
      ...emptyModuleProgress(),
      content: 100,
      comprehension: 0,
      recall: 0,
      contrast: 0,
      application: 0,
    };
    assert.ok(moduleOverall(p) < 100);
    assert.ok(moduleOverall(p) > 0);
  });

  it("canAdvance does not require perfection", () => {
    const p = {
      ...emptyModuleProgress(),
      content: 80,
      questionsAnswered: ["a", "b"],
    };
    assert.equal(canAdvanceModule(p), true);
  });
});

describe("recommendation", () => {
  it("asks for onboarding first", () => {
    const action = getNextAction({
      onboardingComplete: false,
      session: null,
      modules: {},
      concepts: {},
    });
    assert.equal(action.type, "onboarding");
  });

  it("resumes an incomplete session before starting a new module", () => {
    const action = getNextAction({
      onboardingComplete: true,
      session: { moduleId: "module_04", currentBlockId: "m04-q", completed: false },
      modules: {},
      concepts: {},
    });
    assert.equal(action.type, "resume_session");
    if (action.type === "resume_session") assert.equal(action.moduleId, "module_04");
  });

  it("prioritizes overdue fragile review", () => {
    const action = getNextAction({
      onboardingComplete: true,
      session: null,
      modules: { module_01: { ...emptyModuleProgress(), completed: true, content: 100 } },
      concepts: {
        action_potential: {
          state: "RECALL_WEAK",
          nextReviewAt: 1,
          originModule: "module_04",
        },
      },
      now: 1_000_000,
    });
    assert.equal(action.type, "review");
  });
});

describe("content", () => {
  it("ships 32 modules with valid graph", () => {
    assert.equal(MODULES.length, 32);
    const issues = validateContent().filter((i) => i.severity === "error");
    assert.deepEqual(issues, []);
  });
});
