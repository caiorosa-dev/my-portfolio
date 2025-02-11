import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const titleVariants = cva(
  "text-center font-bold tracking-tight",
  {
    variants: {
      size: {
        default: "text-4xl sm:text-6xl lg:text-7xl",
        sm: "text-2xl sm:text-3xl lg:text-4xl",
        lg: "text-5xl sm:text-7xl lg:text-8xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export interface TitleProps extends VariantProps<typeof titleVariants> {
  children: React.ReactNode;
  className?: string;
}

export function Title({ children, size, className }: TitleProps) {
  return <h1 className={cn(titleVariants({ size }), className)}>{children}</h1>;
}
