import { Slot } from "@radix-ui/react-slot";
import React, { useEffect, useRef } from "react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { cn } from "@/libs/utils";
// import gsap from "gsap";
import { entranceAnimations } from "@/libs/animations/entranceAnimation";
import { hoverAnimations } from "@/libs/animations/hoverAnimation";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  onClick?: () => void;
  animation?: keyof typeof entranceAnimations;
  hoverAnimation?: keyof typeof hoverAnimations;
}

const buttonVariants = cva(
  `inline-flex items-center cursor-pointer justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50`,
  {
    variants: {
      variant: {
        dark: "bg-slate-900 text-white",
        primary: "bg-indigo-600 hover:bg-indigo-700 text-white",
        secondary: "bg-indigo-500 hover:bg-indigo-700 text-white",
        destructive: "bg-red-700 text-white hover:bg-red-900",
        ok: "bg-green-500 hover:bg-green-700",
        ghost: "bg-gray-50 hover:bg-gray-100 text-gray-700",
        link: "bg-transparent hover:bg-transparent text-indigo-600",
        outline:
          "bg-transparent hover:bg-gray-100 text-gray-700 border border-gray-300",
      },
      size: {
        default: "px-9 py-3",
        sm: "px-4 py-2",
        lg: "px-14 py-4",
        xl: "px-16 py-4",
        icon: "w-12 h-12",
        full: "w-full h-12",
        auto: "w-auto h-auto",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      animation = "fadeIn",
      hoverAnimation = "jiggle",
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
      const el = buttonRef.current;
      if (!el || animation === "none") return;
      entranceAnimations[animation]?.(el);
    }, [animation]);

    const handleMouseEnter = () => {
      const el = buttonRef.current;
      if (!el) return;
      hoverAnimations[hoverAnimation]?.(el);
    };

    const handleMouseLeave = () => {
      gsap.to(buttonRef.current, {
        scale: 1,
        rotation: 0,
        y: 0,
        duration: 0.3,
      });
    };

    const handleMouseDown = () => {
      gsap.to(buttonRef.current, { scale: 0.92, duration: 0.1 });
    };

    const handleMouseUp = () => {
      gsap.to(buttonRef.current, {
        scale: 1.05,
        duration: 0.15,
        ease: "back.out(2)",
      });
    };

    return (
      <Comp
        ref={(node) => {
          buttonRef.current = node as HTMLButtonElement;
          if (typeof ref === "function") ref(node as HTMLButtonElement);
          else if (ref)
            (ref as React.MutableRefObject<HTMLButtonElement | null>).current =
              node;
        }}
        className={cn(buttonVariants({ variant, size, className }))}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
export { Button, buttonVariants };
