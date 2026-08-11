import { useEffect, useRef, Fragment } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HEADING_TEXT =
  "For Developers, Founders, Agencies, and Teams That Need the Site to Feel as Premium as the Product.";

const CARDS = [
  {
    title: "Creative Front-End Developers",
    text: "Build highly engaging web experiences with ready-to-use animations and components without spending days on physics and math.",
  },
  {
    title: "Tech Stack",
    text: "Make your launch page feel more premium without hiring a full motion team. Use Vault to speed up build cycles, and raise perceived product quality.",
  },
  {
    title: "Learning Path",
    text: "Deliver premium sites to your clients faster. Use our library to build high-end award-winning websites with minimal effort.",
  },
  {
    title: "Work Showcase",
    text: "Empower your teams to build faster and maintain high UI/UX standards across all company products without heavy technical debt.",
  },
  {
    title: "Connect Me",
    text: "Increase conversions with landing pages that feel expensive and premium. Capture your audience's attention instantly.",
  },
];

const Bio = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const heading = headingRef.current;
      const cards = cardsRef.current.filter(Boolean);

      const verticalSpace = 20;
      const cssGap = 8;

      const getHeights = () => {
        const count = cards.length;
        const totalGapSpace = (count - 1) * cssGap;

        let headerOffset = 0;

        if (window.innerWidth < 1024 && heading) {
          headerOffset = heading.offsetHeight + 24;
        }

        const totalAvailableHeight =
          window.innerHeight -
          verticalSpace -
          totalGapSpace -
          headerOffset;

        const baseHeight = totalAvailableHeight / count;
        const activeHeight = baseHeight * 1.75;
        const remainingHeight = totalAvailableHeight - activeHeight;
        const smallHeight = remainingHeight / (count - 1);

        return {
          activeHeight,
          smallHeight,
        };
      };

      const setCardsInitialState = () => {
        const { activeHeight, smallHeight } = getHeights();

        gsap.set(cards, {
          height: smallHeight,
          minHeight: smallHeight,
          backgroundColor: "#191919",
          color: "#ffffff",
        });

        gsap.set(".card-content", {
          height: 0,
          opacity: 0,
        });

        gsap.set(cards[0], {
          height: activeHeight,
          minHeight: activeHeight,
          backgroundColor: "#d3d3d3",
          color: "#000000",
        });

        const firstContent = cards[0]?.querySelector(".card-content");

        if (firstContent) {
          gsap.set(firstContent, {
            height: firstContent.scrollHeight,
            opacity: 1,
          });
        }
      };

      setCardsInitialState();

      // ==========================================
      // 1. HEADING DOWNWARD SCROLL ANIMATION
      // Ye text ko scroll ke sath neeche move karega aur end par rok dega
      // ==========================================
      gsap.to(heading, {
        y: () => {
          // Window ki height me se text ki height aur thodi margin (100px) minus kar di
          // Taaki text screen ke bottom se bahar na chala jaye
          const maxMove = window.innerHeight - heading.offsetHeight - 100;
          return maxMove > 0 ? maxMove : 0;
        },
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1, // Scroll ke sath smoothly chalne ke liye
          invalidateOnRefresh: true,
        },
      });

      // ==========================================
      // 2. CARDS ACCORDION ANIMATION
      // ==========================================
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      timeline.to({}, { duration: 0.5 }); // Starting buffer

      cards.forEach((card, index) => {
        if (index === cards.length - 1) return;

        const nextCard = cards[index + 1];
        const currentContent = card.querySelector(".card-content");
        const nextContent = nextCard.querySelector(".card-content");

        timeline.to(card, {
          height: () => getHeights().smallHeight,
          minHeight: () => getHeights().smallHeight,
          backgroundColor: "#191919",
          color: "#ffffff",
          ease: "none",
          duration: 1,
        });

        timeline.to(
          currentContent,
          {
            height: 0,
            opacity: 0,
            ease: "none",
            duration: 1,
          },
          "<"
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
          "<"
        );

        timeline.to(
          nextContent,
          {
            height: () => nextContent.scrollHeight,
            opacity: 1,
            ease: "none",
            duration: 1,
          },
          "<"
        );
      });

      const handleResize = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", handleResize);

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-20 min-h-[320vh] w-full bg-black font-['Inter'] text-white"
    >
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden bg-black px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[56px]">
        <div className="relative h-full w-full">
          <div className="grid h-full w-full grid-cols-1 gap-6 lg:grid-cols-[40%_60%] lg:gap-6 xl:gap-8">
            {/* Left Side - Text */}
            <div className="relative flex flex-col justify-start pt-6 lg:pt-[7%]">
              <h1
                ref={headingRef}
                className="text-[34px] font-[400] leading-[1.08] tracking-[-1.8px] sm:text-[40px] sm:tracking-[-2px] md:text-[46px] md:tracking-[-2.2px] lg:max-w-[520px] lg:text-[48px] xl:text-[54px] xl:tracking-[-2.5px] will-change-transform"
              >
                {HEADING_TEXT.split(" ").map((word, wi, arr) => (
                  <Fragment key={wi}>
                    <span className="inline-block whitespace-nowrap">
                      {word}
                    </span>
                    {wi < arr.length - 1 ? " " : ""}
                  </Fragment>
                ))}
              </h1>
            </div>

            {/* Right Side - Cards */}
            <div className="cards-wrapper relative z-10 flex h-full flex-col justify-center gap-2">
              {CARDS.map((card, i) => (
                <div
                  key={i}
                  ref={(el) => (cardsRef.current[i] = el)}
                  className="relative flex shrink-0 cursor-pointer flex-col justify-center overflow-hidden rounded-[12px] border border-white/[0.06] bg-[#191919] px-6 sm:px-8 md:px-9 lg:px-10"
                >
                  <h3 className="relative z-10 text-[20px] font-[400] leading-[1.15] tracking-[-0.9px] sm:text-[22px] sm:tracking-[-1px] md:text-[24px] lg:text-[28px] lg:tracking-[-1.2px]">
                    {card.title}
                  </h3>

                  <div className="card-content overflow-hidden">
                    <div className="relative z-10 mt-3 flex flex-col gap-5 sm:mt-5 lg:gap-8">
                      <p className="max-w-[85%] text-[15px] leading-[1.5] opacity-80 sm:text-[16px] lg:text-[18px]">
                        {card.text}
                      </p>

                      <a
                        href="#"
                        className="w-max border-b border-current pb-0.5 text-[13px] font-[500] tracking-wide sm:text-[14px]"
                      >
                        Start with Free Effects ↗
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;