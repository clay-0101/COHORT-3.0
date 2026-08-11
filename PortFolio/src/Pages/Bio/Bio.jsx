import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Bio = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;
      const verticalSpace = 20;
      const cssGap = 8;

      const getHeights = () => {
        const count = cards.length;
        const totalGapSpace = (count - 1) * cssGap;
        let headerOffset = 0;

        if (window.innerWidth < 1024 && headingRef.current) {
          headerOffset = headingRef.current.offsetHeight + 24;
        }

        const totalAvailableHeight = window.innerHeight - verticalSpace - totalGapSpace - headerOffset;
        
        const baseHeight = totalAvailableHeight / count;
        const activeHeight = baseHeight * 1.75;
        const remainingHeight = totalAvailableHeight - activeHeight;
        const smallHeight = remainingHeight / (count - 1);

        return { activeHeight, smallHeight };
      };

      const setInitialState = () => {
        const { activeHeight, smallHeight } = getHeights();

        gsap.set(cards, {
          height: smallHeight,
          minHeight: smallHeight,
          backgroundColor: "#191919",
          color: "#ffffff",
        });
        
        gsap.set(".card-content", { height: 0, opacity: 0 });

        gsap.set(cards[0], {
          height: activeHeight,
          minHeight: activeHeight,
          backgroundColor: "#d3d3d3",
          color: "#000000",
        });
        
        const firstContent = cards[0]?.querySelector(".card-content");
        if (firstContent) {
          gsap.set(firstContent, { height: firstContent.scrollHeight, opacity: 1 });
        }
      };

      setInitialState();

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, index) => {
        if (index === cards.length - 1) return;

        const nextCard = cards[index + 1];
        const currentContent = card.querySelector(".card-content");
        const nextContent = nextCard.querySelector(".card-content");

        timeline.to(
          card,
          {
            height: () => getHeights().smallHeight,
            minHeight: () => getHeights().smallHeight,
            backgroundColor: "#191919",
            color: "#ffffff",
            ease: "none",
            duration: 1,
          },
          index
        );
        
        timeline.to(
          currentContent,
          {
            height: 0,
            opacity: 0,
            ease: "none",
            duration: 1,
          },
          index
        );

        timeline.to(
          nextCard,
          {
            height: () => getHeights().activeHeight,
            minHeight: () => getHeights().activeHeight,
            backgroundColor: "#d3d3d3",
            color: "#000000",
            ease: "none",
            duration: 1,
          },
          index
        );
        
        timeline.to(
          nextContent,
          {
            height: () => nextContent.scrollHeight,
            opacity: 1,
            ease: "none",
            duration: 1,
          },
          index
        );
      });

      if (window.innerWidth >= 1024 && headingRef.current) {
        gsap.to(headingRef.current, {
          y: () => {
            const parent = headingRef.current.parentElement;
            return parent.clientHeight - headingRef.current.clientHeight;
          },
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      }

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[320vh] w-full bg-[#0b0b0b] text-white font-['Inter']"
    >
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[56px]">
        <div className="grid h-full w-full grid-cols-1 gap-6 lg:grid-cols-[40%_60%] lg:gap-6 xl:gap-8">
          
          <div className="relative z-20 flex h-auto lg:h-full items-start">
            <h1
              ref={headingRef}
              className="max-w-[520px] text-[34px] leading-[1.08] font-[400] tracking-[-1.8px] sm:text-[40px] sm:tracking-[-2px] md:text-[46px] md:tracking-[-2.2px] lg:text-[48px] xl:text-[54px] xl:tracking-[-2.5px]"
            >
              For Developers,
              <br />
              Founders, Agencies, and
              <br />
              Teams That Need the
              <br />
              Site to Feel as Premium
              <br />
              as the Product.
            </h1>
          </div>

          <div className="relative z-10 flex h-full flex-col justify-center gap-2">
            
            {/* Card 1 */}
            <div
              ref={(el) => (cardsRef.current[0] = el)}
              onClick={() => console.log("Card 1 Clicked")}
              className="relative flex shrink-0 flex-col justify-center overflow-hidden rounded-[12px] border border-white/[0.06] bg-[#191919] px-6 sm:px-8 md:px-9 lg:px-10 cursor-pointer"
            >
              <h3 className="relative z-10 text-[20px] leading-[1.15] font-[400] tracking-[-0.9px] sm:text-[22px] sm:tracking-[-1px] md:text-[24px] lg:text-[28px] lg:tracking-[-1.2px]">
                Creative Front-End Developers
              </h3>
              <div className="card-content overflow-hidden">
                <div className="relative z-10 mt-3 sm:mt-5 flex flex-col gap-5 lg:gap-8">
                  <p className="max-w-[85%] text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.5] text-inherit opacity-80">
                    Build highly engaging web experiences with ready-to-use animations and components without spending days on physics and math.
                  </p>
                  <a href="#" className="w-max border-b border-current pb-0.5 text-[13px] sm:text-[14px] font-[500] tracking-wide">
                    Start with Free Effects ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              ref={(el) => (cardsRef.current[1] = el)}
              onClick={() => console.log("Card 2 Clicked")}
              className="relative flex shrink-0 flex-col justify-center overflow-hidden rounded-[12px] border border-white/[0.06] bg-[#191919] px-6 sm:px-8 md:px-9 lg:px-10 cursor-pointer"
            >
              <h3 className="relative z-10 text-[20px] leading-[1.15] font-[400] tracking-[-0.9px] sm:text-[22px] sm:tracking-[-1px] md:text-[24px] lg:text-[28px] lg:tracking-[-1.2px]">
                Tech Stack
              </h3>
              <div className="card-content overflow-hidden">
                <div className="relative z-10 mt-3 sm:mt-5 flex flex-col gap-5 lg:gap-8">
                  <p className="max-w-[85%] text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.5] text-inherit opacity-80">
                    Make your launch page feel more premium without hiring a full motion team. Use Vault to speed up build cycles, and raise perceived product quality.
                  </p>
                  <a href="#" className="w-max border-b border-current pb-0.5 text-[13px] sm:text-[14px] font-[500] tracking-wide">
                    Start with Free Effects ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              ref={(el) => (cardsRef.current[2] = el)}
              onClick={() => console.log("Card 3 Clicked")}
              className="relative flex shrink-0 flex-col justify-center overflow-hidden rounded-[12px] border border-white/[0.06] bg-[#191919] px-6 sm:px-8 md:px-9 lg:px-10 cursor-pointer"
            >
              <h3 className="relative z-10 text-[20px] leading-[1.15] font-[400] tracking-[-0.9px] sm:text-[22px] sm:tracking-[-1px] md:text-[24px] lg:text-[28px] lg:tracking-[-1.2px]">
                Learning Path
              </h3>
              <div className="card-content overflow-hidden">
                <div className="relative z-10 mt-3 sm:mt-5 flex flex-col gap-5 lg:gap-8">
                  <p className="max-w-[85%] text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.5] text-inherit opacity-80">
                    Deliver premium sites to your clients faster. Use our library to build high-end award-winning websites with minimal effort.
                  </p>
                  <a href="#" className="w-max border-b border-current pb-0.5 text-[13px] sm:text-[14px] font-[500] tracking-wide">
                    Start with Free Effects ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div
              ref={(el) => (cardsRef.current[3] = el)}
              onClick={() => console.log("Card 4 Clicked")}
              className="relative flex shrink-0 flex-col justify-center overflow-hidden rounded-[12px] border border-white/[0.06] bg-[#191919] px-6 sm:px-8 md:px-9 lg:px-10 cursor-pointer"
            >
              <h3 className="relative z-10 text-[20px] leading-[1.15] font-[400] tracking-[-0.9px] sm:text-[22px] sm:tracking-[-1px] md:text-[24px] lg:text-[28px] lg:tracking-[-1.2px]">
                Work Showcase
              </h3>
              <div className="card-content overflow-hidden">
                <div className="relative z-10 mt-3 sm:mt-5 flex flex-col gap-5 lg:gap-8">
                  <p className="max-w-[85%] text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.5] text-inherit opacity-80">
                    Empower your teams to build faster and maintain high UI/UX standards across all company products without heavy technical debt.
                  </p>
                  <a href="#" className="w-max border-b border-current pb-0.5 text-[13px] sm:text-[14px] font-[500] tracking-wide">
                    Start with Free Effects ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div
              ref={(el) => (cardsRef.current[4] = el)}
              onClick={() => console.log("Card 5 Clicked")}
              className="relative flex shrink-0 flex-col justify-center overflow-hidden rounded-[12px] border border-white/[0.06] bg-[#191919] px-6 sm:px-8 md:px-9 lg:px-10 cursor-pointer"
            >
              <h3 className="relative z-10 text-[20px] leading-[1.15] font-[400] tracking-[-0.9px] sm:text-[22px] sm:tracking-[-1px] md:text-[24px] lg:text-[28px] lg:tracking-[-1.2px]">
                Connect Me
              </h3>
              <div className="card-content overflow-hidden">
                <div className="relative z-10 mt-3 sm:mt-5 flex flex-col gap-5 lg:gap-8">
                  <p className="max-w-[85%] text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.5] text-inherit opacity-80">
                    Increase conversions with landing pages that feel expensive and premium. Capture your audience's attention instantly.
                  </p>
                  <a href="#" className="w-max border-b border-current pb-0.5 text-[13px] sm:text-[14px] font-[500] tracking-wide">
                    Start with Free Effects ↗
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;