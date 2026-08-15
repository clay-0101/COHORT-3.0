import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Input, type InputProps } from "./Input";

export const AnimatedInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const elRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      const el = elRef.current;
      if (!el) return;

      el.style.willChange = "box-shadow, transform";

      const onFocus = () => {
        gsap.fromTo(
          el,
          { boxShadow: "0 0 0 rgba(0,0,0,0)" },
          {
            boxShadow: "0 6px 20px rgba(59,130,246,0.12)",
            duration: 0.15,
            ease: "power2.inOut",
          }
        );
        gsap.fromTo(
          el,
          { y: 0 },
          { y: -2, duration: 0.10, ease: "power2.out" }
        );
      };
      const onBlur = () => {
        gsap.to(el, {
          boxShadow: "0 0 0 rgba(0,0,0,0)",
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      el.addEventListener("focus", onFocus);
      el.addEventListener("blur", onBlur);

      return () => {
        el.removeEventListener("focus", onFocus);
        el.removeEventListener("blur", onBlur);
      };
    }, []);

    // forward refs: prefer external ref, else internal elRef
    return (
      <Input
        ref={(node) => {
          elRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) (ref as any).current = node;
        }}
        {...props}
        className={className}
      />
    );
  }
);
AnimatedInput.displayName = "AnimatedInput";
