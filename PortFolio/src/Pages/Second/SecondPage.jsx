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

            gsap.set(cards, {
                x: 0,
                y: 0,
                scale: 1,
                rotation: 0,
                opacity: 1,
            });

            const split = SplitText.create(text, {
                type: "chars",
            });

            const chars = split.chars;

            gsap.set(text, {
                y: 20,
                opacity: 0,
            });

            gsap.set(chars, {
                x: 120,
                opacity: 0,
            });

            gsap.set(sideCards, {
                x: "120vw",
                y: 0,
                scale: 0.8,
                rotation: 0,
                opacity: 1,
            });

            const radiusX = 430;
            const radiusY = 300;

            const circlePositions = cards.map((_, index) => {
                const angle =
                    (index / cards.length) * Math.PI * 2 - Math.PI / 2;

                return {
                    x: Math.cos(angle) * radiusX,
                    y: Math.sin(angle) * radiusY,
                };
            });

            const snakePath = [
                { x: 430, y: -300 },
                { x: 620, y: -420 },
                { x: 850, y: -300 },
                { x: 1050, y: -50 },
                { x: 900, y: 250 },
                { x: 650, y: 430 },
                { x: 300, y: 500 },
                { x: -100, y: 400 },
                { x: -500, y: 220 },
                { x: -800, y: -50 },
                { x: -1000, y: -350 },
                { x: -1150, y: -700 },
                { x: -1300, y: -1000 },
            ];

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=10000",
                    scrub: 3,
                    pin: true,
                    anticipatePin: 1,
                },
            });

            tl.to(
                cards,
                {
                    x: (index) => circlePositions[index].x,
                    y: (index) => circlePositions[index].y,
                    scale: 1,
                    rotation: 0,
                    duration: 3,
                    stagger: {
                        each: 0.12,
                    },
                    ease: "power2.inOut",
                },
                0
            );

            tl.to(
                {},
                {
                    duration: 1.5,
                }
            );

            tl.to(cards, {
                duration: 6,
                motionPath: {
                    path: snakePath,
                    curviness: 1.5,
                    autoRotate: false,
                },
                scale: 1,
                rotation: 0,
                stagger: {
                    each: 0.5,
                },
                ease: "none",
            });

            tl.to(
                text,
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power2.out",
                },
                "-=1.5"
            );

            tl.to(
                chars,
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    stagger: 0.06,
                },
                "-=0.5"
            );

            tl.to(
                {},
                {
                    duration: 0.8,
                }
            );

            tl.to(
                text,
                {
                    y: -30,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.inOut",
                }
            );
            tl.to(
                sideCards,
                {
                    x: (index) => {

                        const positions = [
                            -300,
                            -250,
                            140,
                            260,
                            600,
                            750
                        ];
                        return positions[index];
                    },
                    y: (index) => {
                        const positions = [
                            -220, 80, -220, 80, -220, 80
                        ];
                        return positions[index];
                    },
                    scale: (index) => {
                        const scales = [
                            0.85, 1, 0.9, 1.05, 0.88, 0.95
                        ];
                        return scales[index];
                    },
                    rotation: 0,
                    duration: 3.9,
                    stagger: {
                        each: 0.5,
                    },
                    ease: "power3.out",
                },
                "-=0.2"
            );

            tl.to(
                {},
                {
                    duration: 1.5,
                }
            );

            tl.to(
                sideCards,
                {
                    y: "120vh",
                    rotation: "random(-25, 25)",
                    scale: 0.85,
                    duration: 2.5,
                    stagger: {
                        from: "end",
                        each: 0.15,
                    },
                    ease: "power3.in",
                }
            );

            tl.to(
                cards,
                {
                    y: "120vh",
                    rotation: "random(-25, 25)",
                    duration: 2,
                    stagger: {
                        from: "end",
                        each: 0.12,
                    },
                    ease: "power3.in",
                },
                "-=1.5"
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <main className="w-full overflow-hidden bg-black text-white">
            <section
                ref={sectionRef}
                className="relative h-screen w-full overflow-hidden"
            >
                <div className="relative flex h-full w-full items-center justify-center">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="image-card absolute left-1/2 top-1/2 -ml-[130px] -mt-[90px] h-[180px] w-[260px] overflow-hidden rounded-[14px] bg-[#222] shadow-[0_20px_60px_rgba(0,0,0,0.45)] will-change-transform"
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
                            className="side-card absolute left-[20%] top-1/2 -mt-[90px] h-[18vw] w-[30vw] overflow-hidden rounded-[14px] bg-[#222] shadow-[0_20px_60px_rgba(0,0,0,0.45)] will-change-transform"
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
                        className="betania-patmos-in-gdl-regular relative z-20 w-[85vw] max-w-[650px] break-words text-center text-[1.5rem] font-medium leading-[1.8] tracking-wide text-white"
                    >
                        I’m Carry, a frontend developer passionate about building
                        modern, responsive, and user-focused digital experiences. With
                        expertise in React, Tailwind CSS, GSAP animations, and emerging
                        web technologies, I specialize in transforming ideas into
                        interactive products that feel intuitive and inspiring. My
                        approach blends clean code with creative design, ensuring every
                        project is not just functional but also visually engaging.
                        Driven by curiosity, I constantly experiment with new
                        frameworks and tools, turning challenges into opportunities to
                        innovate and share meaningful stories through technology.
                    </p>
                </div>
            </section>

            <section className="flex h-screen w-full items-center justify-center bg-[#111]">
                <h1 className="text-6xl font-bold">
                    My Projects
                </h1>
            </section>
        </main>
    );
}

export default SecondPage;