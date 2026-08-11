import { useEffect, useRef } from "react";
import gsap from "gsap";
import { NavLink } from "react-router";

const HeroText = () => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const paraRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
      });

      tl.from([line1Ref.current, line2Ref.current], {
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
            opacity: 0,
            duration: 0.6,
          },
          "-=0.3"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex items-end px-5 pb-24 sm:px-10 sm:pb-20 lg:max-w-2xl lg:items-center lg:px-16 lg:pb-0">
      <div className="flex w-full flex-col gap-4 text-center sm:gap-6 lg:text-left">

        <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[80px] lg:text-black xl:text-[88px]">
          <span className="block overflow-hidden">
            <span ref={line1Ref} className="block">
              Frontend Developer,
            </span>
          </span>

          <span className="block overflow-hidden">
            <span ref={line2Ref} className="block">
              In Motion.
            </span>
          </span>
        </h1>

        <p
          ref={paraRef}
          className="mx-auto max-w-[290px] text-xs text-white/70 sm:max-w-sm sm:text-sm md:text-[12px] lg:mx-0 lg:text-black/70"
        >
          I build interfaces with React, Redux, and GSAP — fast, animated,
          and made to feel alive on scroll. Also edit the reels that show
          them off.
        </p>

        <div>
          <NavLink
            ref={btnRef}
            to="/projects"
            className="pointer-events-auto inline-block rounded-full bg-white px-5 py-2.5 font-mono text-xs font-medium text-black shadow-sm hover:shadow-md sm:px-6 sm:py-3 sm:text-[13px]"
          >
            Explore my work
          </NavLink>
        </div>

      </div>
    </div>
  );
};

export default HeroText;