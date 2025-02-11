import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const gradientTextVariants = cva(
  "bg-clip-text text-transparent",
  {
    variants: {
      variant: {
        slate: "bg-gradient-to-t from-muted-foreground via-primary to-primary",
        colored: "bg-gradient-to-t from-indigo-500 via-pink-500 via-60% to-orange-500",
      },
      direction: {
        left: "bg-gradient-to-l",
        right: "bg-gradient-to-tr",
        top: "bg-gradient-to-t",
        bottom: "bg-gradient-to-b",
      },
    },
    defaultVariants: {
      variant: "slate",
      direction: "top",
    },
  }
);

export interface GradientTextProps
  extends React.HTMLAttributes<HTMLSpanElement>,
  VariantProps<typeof gradientTextVariants> { }

export function GradientText({
  className,
  variant,
  direction,
  children,
  ...props

}: GradientTextProps) {
  return (
    <span
      className={cn(gradientTextVariants({ variant, direction, className }))}
      {...props}
    >
      {children}
    </span>
  );
}