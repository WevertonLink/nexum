import type { ReactNode } from "react";
import { CONCEPT_BY_ID } from "@/content/concepts";
import { cn } from "@/lib/utils";

const TOKEN = /(\[\[([a-z0-9_]+)(?:\|([^\]]+))?\]\]|\*\*([^*]+)\*\*)/g;

type Props = {
  text: string;
  className?: string;
  onTerm?: (conceptId: string) => void;
};

export function RichText({ text, className, onTerm }: Props) {
  const parts: ReactNode[] = [];
  let last = 0;
  let i = 0;
  let m: RegExpExecArray | null;
  const src = text;
  const matcher = new RegExp(TOKEN.source, "g");
  while ((m = matcher.exec(src))) {
    if (m.index > last) parts.push(src.slice(last, m.index));
    if (m[2]) {
      const id = m[2];
      const concept = CONCEPT_BY_ID[id];
      const label = m[3] || concept?.name || id;
      parts.push(
        <button
          key={`t${i++}`}
          type="button"
          className="term-link"
          onClick={() => onTerm?.(id)}
        >
          {label}
        </button>,
      );
    } else if (m[4]) {
      parts.push(
        <strong key={`b${i++}`} className="font-semibold text-fg">
          {m[4]}
        </strong>,
      );
    }
    last = m.index + m[0].length;
  }
  if (last < src.length) parts.push(src.slice(last));
  return <span className={cn("leading-relaxed", className)}>{parts}</span>;
}
