import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroText = () => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const paraRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
      });

      tl.from([line1Ref.current, line2Ref.current, line3Ref.current], {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
      })
        .from(
          paraRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4"
        )
    
        .from(
          btnRef.current,
          {
            y: 30,
           opacity : 0,
            duration: 0.6,
          },
          "-=0.3"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="pointer-events-none absolute left-0 top-0 z-10 flex h-full w-full flex-col justify-center gap-4 px-5 sm:gap-6 sm:px-10 lg:max-w-2xl lg:px-16">
      <h1 className="max-w-[85%] text-4xl font-semibold leading-[1.05] tracking-tight text-black xs:text-5xl sm:max-w-none sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[88px]">
        <span className="block overflow-hidden">
          <span ref={line1Ref} className="block">
            Innovation
          </span>
        </span>
        <span className="block overflow-hidden">
          <span ref={line2Ref} className="block">
            Without
          </span>
        </span>
        <span className="block overflow-hidden">
          <span ref={line3Ref} className="block">
            Limits.
          </span>
        </span>
      </h1>

      <p
        ref={paraRef}
        className="max-w-[75%] text-xs text-black/70 sm:max-w-sm sm:text-sm md:text-[12px]"
      >
        Driven by curiosity, I design meaningful products, push boundaries of technology, and inspire through the journey of making.
      </p>

      <div>
        <a
          ref={btnRef}
          href="#work"
          className="font-mono pointer-events-auto inline-block rounded-full bg-white px-5 py-2.5 text-xs font-medium text-black shadow-sm hover:shadow-md sm:px-6 sm:py-3 sm:text-[13px]"
        
        >
          Explore my work
        </a>
      </div>
    </div>
  );
};

export default HeroText;
