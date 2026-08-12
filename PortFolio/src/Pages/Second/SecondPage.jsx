import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { SplitText } from "gsap/SplitText";

import img from "../../assets/front.png";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, SplitText);

function SecondPage() {
    const sectionRef = useRef(null);
    const textRef = useRef(null);

    const images = [
        "https://i.pinimg.com/736x/e9/33/c1/e933c15f2574ece0173d2de717320d1f.jpg",
        "https://i.pinimg.com/736x/14/61/03/1461039350a80710ca888d87a2075134.jpg",
        "https://i.pinimg.com/736x/9c/47/38/9c4738cdc8a0f02d3828e93e9445fd04.jpg",
        "https://i.pinimg.com/736x/73/e3/94/73e394c2479b7e6d3841384add74dff0.jpg",
        "https://i.pinimg.com/1200x/03/a1/4d/03a14dd60b638d4cb00c5a844255c32d.jpg",
        "https://i.pinimg.com/736x/cb/03/24/cb0324304d5cb614994c1ec030e8f36c.jpg",
        img,
    ];

    const images2 = [
        "https://i.pinimg.com/736x/e9/33/c1/e933c15f2574ece0173d2de717320d1f.jpg",
        "https://i.pinimg.com/736x/14/61/03/1461039350a80710ca888d87a2075134.jpg",
        "https://i.pinimg.com/736x/9c/47/38/9c4738cdc8a0f02d3828e93e9445fd04.jpg",
        "https://i.pinimg.com/736x/73/e3/94/73e394c2479b7e6d3841384add74dff0.jpg",
        "https://i.pinimg.com/1200x/03/a1/4d/03a14dd60b638d4cb00c5a844255c32d.jpg",
        "https://i.pinimg.com/736x/cb/03/24/cb0324304d5cb614994c1ec030e8f36c.jpg",
    ];

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".image-card");
            const sideCards = gsap.utils.toArray(".side-card");
            const text = textRef.current;

            const mm = gsap.matchMedia();

            const setupAnimation = ({ radiusX, radiusY, snakePath, sideX, sideY, sideScale, scrollLength, textSize }) => {
                const split = SplitText.create(text, { type: "words,chars", wordsClass: "paragraph-word", charsClass: "paragraph-char" });
                const chars = split.chars;

                gsap.set(cards, { x: 0, y: 0, scale: 1, rotation: 0, opacity: 1 });
                gsap.set(sideCards, { x: "120vw", y: 0, scale: 0.7, rotation: 0, opacity: 1 });
                gsap.set(text, { opacity: 0, y: 0, fontSize: textSize });
                gsap.set(chars, { color: "#4d4d4d", opacity: 0.35 });

                const circlePositions = cards.map((_, index) => {
                    const angle = (index / cards.length) * Math.PI * 2 - Math.PI / 2;
                    return { x: Math.cos(angle) * radiusX, y: Math.sin(angle) * radiusY };
                });

                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: `+=${scrollLength}`,
                        scrub: 1,
                        pin: true,
                        pinSpacing: true,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    },
                });

                timeline.to(cards, { x: (index) => circlePositions[index].x, y: (index) => circlePositions[index].y, scale: 1, rotation: 0, duration: 2, stagger: 0.08, ease: "power2.inOut" }, 0);
                timeline.to({}, { duration: 0.5 });
                timeline.addLabel("loopStart");
                timeline.to(cards, { duration: 4, motionPath: { path: snakePath, curviness: 1.5, autoRotate: false }, scale: 1, rotation: 0, stagger: { each: 0.25 }, ease: "none" }, "loopStart");
                timeline.to(text, { opacity: 1, duration: 0.4, ease: "power2.out" }, "loopStart+=2");
                timeline.to(chars, { keyframes: [{ color: "#E4572E", opacity: 1, duration: 0.08 }, { color: "#ffffff", opacity: 1, duration: 0.12 }], stagger: 0.008, ease: "none" }, "loopStart+=2.1");
                timeline.to({}, { duration: 0.4 });
                timeline.to(text, { y: -25, opacity: 0, duration: 0.6, ease: "power3.inOut" });
                timeline.to(sideCards, { x: (index) => sideX[index], y: (index) => sideY[index], scale: (index) => sideScale[index], rotation: 0, duration: 2.5, stagger: 0.25, ease: "power3.out" }, "-=0.1");
                timeline.to({}, { duration: 0.5 });
                timeline.to(sideCards, { y: "120vh", rotation: "random(-20, 20)", scale: 0.8, duration: 1.4, stagger: { from: "end", each: 0.1 }, ease: "power3.in" });
                timeline.to(cards, { y: "120vh", rotation: "random(-20, 20)", duration: 1.2, stagger: { from: "end", each: 0.08 }, ease: "power3.in" }, "-=0.9");

                return () => {
                    split.revert();
                    timeline.kill();
                };
            };

            mm.add("(max-width: 639px)", () => {
                return setupAnimation({
                    radiusX: 115,
                    radiusY: 90,
                    scrollLength: 4200,
                    textSize: "1.25rem",
                    snakePath: [{ x: 115, y: -90 }, { x: 170, y: -135 }, { x: 240, y: -100 }, { x: 285, y: -10 }, { x: 240, y: 90 }, { x: 150, y: 135 }, { x: 40, y: 155 }, { x: -80, y: 125 }, { x: -180, y: 70 }, { x: -250, y: 0 }, { x: -285, y: -100 }, { x: -320, y: -200 }],
                    sideX: ["-55vw", "-33vw", "-11vw", "11vw", "33vw", "55vw"],
                    sideY: [-105, 75, -105, 75, -105, 75],
                    sideScale: [0.55, 0.65, 0.6, 0.7, 0.58, 0.62],
                });
            });

            mm.add("(min-width: 640px) and (max-width: 1023px)", () => {
                return setupAnimation({
                    radiusX: 260,
                    radiusY: 180,
                    scrollLength: 5000,
                    textSize: "1.7rem",
                    snakePath: [{ x: 260, y: -180 }, { x: 390, y: -270 }, { x: 550, y: -190 }, { x: 680, y: -20 }, { x: 580, y: 160 }, { x: 410, y: 270 }, { x: 180, y: 320 }, { x: -100, y: 270 }, { x: -350, y: 150 }, { x: -530, y: -10 }, { x: -650, y: -220 }, { x: -730, y: -430 }],
                    sideX: [-290, -240, -30, 40, 220, 300],
                    sideY: [-150, 90, -150, 90, -150, 90],
                    sideScale: [0.7, 0.82, 0.76, 0.9, 0.72, 0.8],
                });
            });

            mm.add("(min-width: 1024px)", () => {
                return setupAnimation({
                    radiusX: 430,
                    radiusY: 300,
                    scrollLength: 6000,
                    textSize: "2.2rem",
                    snakePath: [{ x: 430, y: -300 }, { x: 620, y: -420 }, { x: 850, y: -300 }, { x: 1050, y: -50 }, { x: 900, y: 250 }, { x: 650, y: 430 }, { x: 300, y: 500 }, { x: -100, y: 400 }, { x: -500, y: 220 }, { x: -800, y: -50 }, { x: -1000, y: -350 }, { x: -1150, y: -700 }, { x: -1300, y: -1000 }],
                    sideX: [-500, -450, -60, 60, 400, 550],
                    sideY: [-220, 80, -220, 80, -220, 80],
                    sideScale: [0.85, 1, 0.9, 1.05, 0.88, 0.95],
                });
            });

            requestAnimationFrame(() => {
                ScrollTrigger.refresh();
            });

            return () => {
                mm.revert();
            };
        }, sectionRef);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <main className="w-full overflow-hidden bg-black text-white">
            <section
                ref={sectionRef}
                className="relative h-screen min-h-[560px] w-full overflow-hidden"
            >
                <div className="relative flex h-full w-full items-center justify-center">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="image-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[10px] bg-[#222] shadow-[0_20px_60px_rgba(0,0,0,0.45)] will-change-transform sm:rounded-[12px] lg:rounded-[14px]"
                            style={{
                                width: "clamp(145px, 20vw, 260px)",
                                height: "clamp(100px, 14vw, 180px)",
                            }}
                        >
                            <img
                                src={image}
                                alt={`Project ${index + 1}`}
                                className="block h-full w-full object-cover"
                            />
                        </div>
                    ))}

                    {images2.map((image, index) => (
                        <div
                            key={`side-${index}`}
                            className="side-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-sm:w-[clamp(85px,40vw,170px)] max-sm:h-[clamp(58px,26vw,115px)] sm:w-[clamp(165px,30vw,420px)] sm:h-[clamp(110px,18vw,250px)] overflow-hidden rounded-[10px] bg-[#222] shadow-[0_20px_60px_rgba(0,0,0,0.45)] will-change-transform sm:rounded-[12px] lg:rounded-[14px]"
                        >
                            <img
                                src={image}
                                alt={`Side project ${index + 1}`}
                                className="block h-full w-full object-cover"
                            />
                        </div>
                    ))}

                    <p
                        ref={textRef}
                        className="avenir relative z-20 mx-auto w-[94vw] max-w-[1000px] text-center text-[10px] font-medium leading-[1.45] tracking-normal text-white sm:w-[88vw] sm:text-[14px] sm:leading-[1.45] md:w-[80vw] md:text-[2.2rem] md:leading-[1.35]"
                        style={{
                            overflowWrap: "normal",
                            wordBreak: "normal",
                        }}
                    >
                        I’m Carry, a frontend developer passionate about building modern,
                        responsive, and user-focused digital experiences. With expertise in React,
                        Tailwind CSS, GSAP animations, and emerging web technologies, I specialize
                        in transforming ideas into interactive products that feel intuitive and
                        inspiring. My approach blends clean code with creative design, ensuring
                        every project is not just functional but also visually engaging. Driven by
                        curiosity, I constantly experiment with new frameworks and tools, turning
                        challenges into opportunities to innovate and share meaningful stories
                        through technology.
                    </p>
                </div>
            </section>

            <style>{`
        .paragraph-word {
          display: inline-block;
          white-space: nowrap;
        }

        .paragraph-char {
          display: inline;
        }

        @media (max-width: 639px) {
          .paragraph-word {
            white-space: normal;
          }

          .paragraph-char {
            display: inline;
          }
        }

        @media (min-width: 640px) {
          .paragraph-word {
            white-space: nowrap;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .image-card,
          .side-card,
          .paragraph-char {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
        </main>
    );
}

export default SecondPage;