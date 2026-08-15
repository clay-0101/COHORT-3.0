import React, { useEffect, useRef } from "react";
import { Input, type InputProps } from "./Input";
import { cn } from "@/libs/utils";
import gsap from "gsap";

type Props = InputProps & {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  iconColor?: string;
  animated?: boolean;
};

export const InputWithIcon = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      icon,
      iconPosition = "left",
      className,
      iconColor = "#9ca3af",
      animated = true,
      ...props
    },
    ref
  ) => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const iconRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (!animated || !iconRef.current || !wrapperRef.current) return;
      const input = wrapperRef.current.querySelector("input");

      const handleFocus = () => {
        gsap.to(iconRef.current, {
          scale: 1.15,
          y: 0,
          color: "#3b82f6",
          duration: 0.15,
          ease: "power2.out",
        });
      };
      const handleBlur = () => {
        gsap.to(iconRef.current, {
          scale: 1,
          y: 0,
          color: iconColor,
          duration: 0.25,
          ease: "power2.out",
        });
      };

      input?.addEventListener("focus", handleFocus);
      input?.addEventListener("blur", handleBlur);

      return () => {
        input?.removeEventListener("focus", handleFocus);
        input?.removeEventListener("blur", handleBlur);
      };
    }, [animated, iconColor]);

    const paddingClass = icon
      ? iconPosition === "left"
        ? "pl-12"
        : "pr-12"
      : "";

    return (
      <div ref={wrapperRef} className="relative w-full">
        {icon && iconPosition === "left" && (
          <div
            ref={iconRef}
            className={cn(
              "absolute left-4 top-11 -translate-y-1/2 text-gray-400 transition-all duration-200 pointer-events-none",
              animated && "will-change-transform will-change-color"
            )}
            style={{ color: iconColor }}
          >
            {icon}
          </div>
        )}

        <Input
          ref={ref}
          {...props}
          className={cn(
            "rounded-xl border border-gray-300 bg-white shadow-sm hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200",
            paddingClass,
            className
          )}
        />

        {icon && iconPosition === "right" && (
          <div
            ref={iconRef}
            className={cn(
              "absolute right-1/2 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-200 pointer-events-none",
              animated && "will-change-transform will-change-color"
            )}
            style={{ color: iconColor }}
          >
            {icon}
          </div>
        )}
      </div>
    );
  }
);

InputWithIcon.displayName = "InputWithIcon";
