import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { y as cn } from "./router-BqUbigV-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-CRWNAEw-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium transition-transform duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent select-none", {
	variants: {
		variant: {
			primary: "bg-accent text-accent-fg shadow-soft hover:brightness-110",
			secondary: "bg-bg-elevated text-fg border border-border hover:border-border-strong",
			ghost: "bg-transparent text-fg hover:bg-surface",
			danger: "bg-danger-soft text-danger border border-danger/20",
			outline: "border border-border-strong bg-transparent text-fg hover:bg-surface"
		},
		size: {
			sm: "h-10 px-3 text-sm rounded-[10px]",
			md: "h-12 px-4 text-[15px] rounded-md",
			lg: "h-14 px-5 text-base rounded-lg",
			icon: "size-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
	ref,
	className: cn(buttonVariants({
		variant,
		size
	}), className),
	...props
}));
Button.displayName = "Button";
//#endregion
export { Button as t };
