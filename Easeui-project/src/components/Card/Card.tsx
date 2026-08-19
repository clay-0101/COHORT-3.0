import React, {  useRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import { hoverAnimations } from "@/libs/animations/hoverAnimation";
import gsap from "gsap";

const cardVariants = cva(
  "rounded-lg transition-all duration-300 cursor-pointer overflow-hidden",
  {
    variants: {
      variant: {
        light: "bg-white text-gray-800 shadow-lg hover:shadow-xl",
        dark: "bg-slate-800 text-white shadow-md hover:shadow-lg",
        outline:
          "border border-gray-300 bg-transparent text-gray-800 dark:border-gray-700",
      },
      // hoverEffect: {
      //   none: "",
      //   scale: "hover:scale-[1.02]",
      //   shadow: "hover:shadow-xl",
      //   lift: "hover:-translate-y-1 hover:shadow-xl",
      //   rotate: "hover:rotate-1",
      // },
      size: {
        sm: "p-3 text-sm",
        md: "p-6 text-base",
        lg: "p-8 text-lg",
      },
    },
    defaultVariants: {
      variant: "light",
      size: "md",
    },
  }
);

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
  title?: string;
  description?: string;
  image?: string;
  ratio?: "square" | "16:9" | "4:3";
  footer?: React.ReactNode;
  animate?: boolean;
  hoverAnimation?: keyof typeof hoverAnimations;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      asChild = false,
      title,
      description,
      children,
      className,
      variant,
      image,
      ratio = "16:9",
      size,
      footer,
      animate = true,
      hoverAnimation = "none",
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "div";
    const cardRef = useRef<HTMLDivElement | null>(null);

    // 🧠 Mouse Handlers
    // const handleMouseEnter = () => {
    //   const el = cardRef.current;
    //   if (!el) return;
    //   hoverAnimations[hoverAnimation]?.(el);
    // };

    // const handleMouseLeave = () => {
    //   const el = cardRef.current;
    //   if (!el) return;
    //   gsap.to(el, {
    //     scale: 1,
    //     rotation: 0,
    //     y: 0,
    //     duration: 0.3,
    //     ease: "power2.out",
    //   });
    // };

    const handleMouseEnter = () => {
      const el = cardRef.current;
      if (!el) return;
      hoverAnimations[hoverAnimation]?.(el);
    };

    const handleMouseLeave = () => {
      const el = cardRef.current;
      if (!el) return;
      hoverAnimations.reset(el);
    };

    const handleMouseDown = () => {
      const el = cardRef.current;
      if (!el) return;
      gsap.to(el, { scale: 0.95, duration: 0.1, ease: "power1.inOut" });
    };

    const handleMouseUp = () => {
      const el = cardRef.current;
      if (!el) return;
      gsap.to(el, { scale: 1.05, duration: 0.1, ease: "back.out(2)" });
    };

    const imageRatio =
      ratio === "16:9"
        ? "aspect-video"
        : ratio === "4:3"
        ? "aspect-[4/3]"
        : "aspect-square";

    return (
      <Comp
        ref={(node) => {
          cardRef.current = node as HTMLDivElement;
          if (typeof ref === "function") ref(node as HTMLDivElement);
          else if (ref) ref.current = node as HTMLDivElement;
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className={cn(cardVariants({ variant, size }), className)}
        role="article"
        tabIndex={0}
        {...props}
      >
        {image && (
          <div className={`${imageRatio} mb-4`}>
            <img
              src={image}
              alt={title || "Card image"}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        )}

        {title && (
          <h3 className="font-semibold text-lg mb-2 text-[inherit]">{title}</h3>
        )}

        {description && (
          <p className="text-gray-500 mb-4 text-[inherit]">{description}</p>
        )}

        {children}

        {footer && <div className="mt-4">{footer}</div>}
      </Comp>
    );
  }
);

Card.displayName = "Card";
export { Card, cardVariants };
