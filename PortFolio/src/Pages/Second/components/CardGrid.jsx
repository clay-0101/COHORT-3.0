import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CardsGrid = () => {
  const sectionRef = useRef(null);
  const topRowRefs = useRef([]);
  const bottomRowRefs = useRef([]);

  topRowRefs.current = [];
  bottomRowRefs.current = [];

  const addTopRef = (el) => {
    if (el && !topRowRefs.current.includes(el)) {
      topRowRefs.current.push(el);
    }
  };

  const addBottomRef = (el) => {
    if (el && !bottomRowRefs.current.includes(el)) {
      bottomRowRefs.current.push(el);
    }
  };

  // Placeholder random images - replace with your own later
  const topImages = [
    "https://picsum.photos/seed/carry1/600/500",
    "https://picsum.photos/seed/carry2/600/500",
    "https://picsum.photos/seed/carry3/600/500",
  ];

  const bottomImages = [
    "https://picsum.photos/seed/carry4/600/500",
    "https://picsum.photos/seed/carry5/600/500",
    "https://picsum.photos/seed/carry6/600/500",
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([...topRowRefs.current, ...bottomRowRefs.current], {
        y: 60,
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Top row - apna stagger
      tl.to(topRowRefs.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.18,
      });

      // Bottom row - thodi delay ke baad shuru, apna alag stagger
      tl.to(
        bottomRowRefs.current,
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.25,
        },
        "-=0.5" // thoda overlap taaki randomness feel aaye, poora sequential na lage
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-black px-5 py-16 sm:px-10 sm:py-24 lg:px-16"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {topImages.map((img, i) => (
          <div
            key={`top-${i}`}
            ref={addTopRef}
            className="h-[280px] w-full overflow-hidden rounded-2xl sm:h-[340px] lg:h-[390px]"
          >
            <img
              src={img}
              alt={`card-${i}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="mx-auto mt-5 grid max-w-[1400px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {bottomImages.map((img, i) => (
          <div
            key={`bottom-${i}`}
            ref={addBottomRef}
            className="h-[260px] w-full overflow-hidden rounded-2xl sm:h-[300px] lg:h-[350px]"
          >
            <img
              src={img}
              alt={`card-${i + 3}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardsGrid;