import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-transform duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-accent-fg shadow-soft hover:brightness-110",
        secondary:
          "bg-bg-elevated text-fg border border-border hover:border-border-strong",
        ghost: "bg-transparent text-fg hover:bg-surface",
        danger: "bg-danger-soft text-danger border border-danger/20",
        outline: "border border-border-strong bg-transparent text-fg hover:bg-surface",
      },
      size: {
        sm: "h-10 px-3 text-sm rounded-[10px]",
        md: "h-12 px-4 text-[15px] rounded-md",
        lg: "h-14 px-5 text-base rounded-lg",
        icon: "size-11 rounded-md",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>
>(({ className, variant, size, ...props }, ref) => (
  <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
));
Button.displayName = "Button";

export { buttonVariants };
