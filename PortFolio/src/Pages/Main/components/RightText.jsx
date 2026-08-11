import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const BuildingBadge = () => {
  const sideText = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      tl.from(sideText.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 1.6,
      });
    }, sideText);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sideText}
      className="pointer-events-none absolute bottom-6 right-6 z-10 text-right font-mono text-[10px] leading-relaxed text-black/80 sm:bottom-10 sm:right-10 sm:text-xs"
    >
      <p>BUILDING THE</p>
      <p>NEXT VERSION</p>
      <p>IN PUBLIC</p>
    </div>
  );
};

export default BuildingBadge;