import { useLayoutEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eye, Code2, X, ArrowUpRight, Home } from "lucide-react";

import productiveDashBoardImg from "../../assets/das.png";
import spendly from "../../assets/spendly.png";
import leaf from "../../assets/leaf.png";
import sundown from "../../assets/sundown.png";
import quizly from "../../assets/quizly.png";
import emstool from "../../assets/emstool.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "SkyMart",
    number: "01",
    category: "E-Commerce",
    image:
      "https://media.licdn.com/dms/image/v2/D4D22AQHhdmbkxP88Aw/feedshare-shrink_800/B4DZ.O4McSIEAc-/0/1784808524003?e=1787788800&v=beta&t=ZGo5KGqCK0ocfHP8kWTjCzq8_Z3b5cioATAWIo3Don4",
    live: "https://skymart-beta.vercel.app/",
    github:
      "https://github.com/clay-0101/COHORT-3.0/tree/main/React/REACT-PROJECTS/MART",
  },
  {
    id: 2,
    title: "SUNDOWN",
    number: "02",
    category: "Clone",
    image: sundown,
    live: "https://clay-0101.github.io/Sundown-Studio-Clone/",
    github: "https://github.com/clay-0101/Sundown-Studio-Clone",
  },
  {
    id: 3,
    title: "Expense Tracker",
    number: "03",
    category: "Web Application",
    image: spendly,
    live: "https://spendly-kappa-vert.vercel.app/",
    github:
      "https://github.com/clay-0101/COHORT-3.0/tree/main/Expense%20Tracker",
  },
  {
    id: 4,
    title: "Clone Ui",
    number: "04",
    category: "Clone",
    image: leaf,
    live: "https://two-leaves-and-a-bud-sigma.vercel.app/",
    github:
      "https://github.com/clay-0101/COHORT-3.0/tree/main/Task/Assignment-6",
  },
  {
    id: 5,
    title: "Productive Dashboard",
    number: "05",
    category: "Creative Development",
    image: productiveDashBoardImg,
    live: "https://productive-dashboard-two.vercel.app/",
    github:
      "https://github.com/clay-0101/COHORT-3.0/tree/main/Task/Assignment-12",
  },
  {
    id: 6,
    title: "Quizly",
    number: "06",
    category: "Quiz",
    image: quizly,
    live: "https://quizly-azure-nine.vercel.app/",
    github:
      "https://github.com/clay-0101/COHORT-3.0/tree/main/REDUX/Quiz-App",
  },
  {
    id: 7,
    title: "EMS",
    number: "07",
    category: "Managment",
    image: emstool,
    live: "https://emstool.vercel.app/",
    github: "https://github.com/clay-0101/EMS",
  },
];

const ShowCase = () => {
  const sectionRef = useRef(null);
  const movingRef = useRef(null);
  const markerRefs = useRef([]);
  const pathContainerRef = useRef(null);
  const svgRef = useRef(null);
  const guideLineRef = useRef(null);
  const drawLineRef = useRef(null);

  const [selectedProject, setSelectedProject] = useState(null);

  const getPosition = (index) => {
    const total = projects.length;

    const sidePattern = [
      63,
      20,
      82,
      22,
      63,
      18,
      78,
      18,
      70,
      10,
      85,
      25,
    ];

    const left = sidePattern[index % sidePattern.length];

    const top =
      total === 1
        ? 50
        : 4 + (index / (total - 1)) * 84;

    return {
      left: `${left}%`,
      top: `${top}%`,
    };
  };

  const pathHeight = Math.max(300, projects.length * 48);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const movingObject = movingRef.current;
      const pathContainer = pathContainerRef.current;

      if (!movingObject || !pathContainer) return;

      let animationTimeline;

      const updatePath = () => {
        const containerRect =
          pathContainer.getBoundingClientRect();

        const startRect =
          movingObject.getBoundingClientRect();

        const startCenter = {
          x:
            startRect.left +
            startRect.width / 2 -
            containerRect.left,

          y:
            startRect.top +
            startRect.height / 2 -
            containerRect.top,
        };

        const markerCenters = markerRefs.current
          .filter(Boolean)
          .map((marker) => {
            const rect = marker.getBoundingClientRect();

            return {
              x:
                rect.left +
                rect.width / 2 -
                containerRect.left,

              y:
                rect.top +
                rect.height / 2 -
                containerRect.top,
            };
          });

        if (svgRef.current) {
          svgRef.current.setAttribute(
            "viewBox",
            `0 0 ${containerRect.width} ${containerRect.height}`
          );
        }

        const points = [
          startCenter,
          ...markerCenters,
        ];

        if (points.length < 2) return null;

        let d = `M ${points[0].x} ${points[0].y}`;

        for (let i = 1; i < points.length; i++) {
          const previous = points[i - 1];
          const current = points[i];

          const midX =
            (previous.x + current.x) / 2;

          d += `
            C
            ${midX} ${previous.y},
            ${midX} ${current.y},
            ${current.x} ${current.y}
          `;
        }

        guideLineRef.current?.setAttribute("d", d);
        drawLineRef.current?.setAttribute("d", d);

        if (drawLineRef.current) {
          const length =
            drawLineRef.current.getTotalLength();

          drawLineRef.current.style.strokeDasharray =
            String(length);

          drawLineRef.current.style.strokeDashoffset =
            String(length);
        }

        return {
          points,
          startCenter,
          pathData: d,
        };
      };

      const layout = updatePath();

      if (!layout) return;

      const {
        startCenter,
        pathData,
      } = layout;

      const motionPath =
        document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );

      motionPath.setAttribute("d", pathData);

      const totalLength =
        motionPath.getTotalLength();

      gsap.set(movingObject, {
        x: 0,
        y: 0,
        opacity: 0,
        scale: 0,
        transformOrigin: "center center",
      });

      const intro = gsap.timeline();

      intro.fromTo(
        sectionRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
        }
      );

      intro.fromTo(
        sectionRef.current.querySelector("h2"),
        {
          y: 45,
          opacity: 0,
          filter: "blur(12px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power3.out",
        },
        "-=0.35"
      );

      intro.fromTo(
        sectionRef.current.querySelectorAll(
          "h2 ~ div span"
        ),
        {
          opacity: 0,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
        },
        "-=0.5"
      );

      intro.fromTo(
        markerRefs.current,
        {
          opacity: 0,
          scale: 0.82,
          y: 35,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "back.out(1.4)",
        },
        "-=0.25"
      );

      intro.to(
        movingObject,
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.55"
      );

      const progressObject = {
        progress: 0,
      };

      animationTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      animationTimeline.to(
        progressObject,
        {
          progress: 1,
          duration: 1,
          ease: "none",

          onUpdate: () => {
            const distance =
              totalLength *
              progressObject.progress;

            const point =
              motionPath.getPointAtLength(
                distance
              );

            gsap.set(movingObject, {
              x: point.x - startCenter.x,
              y: point.y - startCenter.y,
            });
          },
        },
        0
      );

      if (drawLineRef.current) {
        animationTimeline.to(
          drawLineRef.current,
          {
            strokeDashoffset: 0,
            duration: 1,
            ease: "none",
          },
          0
        );
      }

      const handleResize = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener(
        "resize",
        handleResize
      );

      return () => {
        window.removeEventListener(
          "resize",
          handleResize
        );
      };
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [projects.length]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

        .project-showcase {
          font-family: 'DM Sans', sans-serif;
        }

        .ps-mono {
          font-family: 'JetBrains Mono', monospace;
        }

        @keyframes psScan {
          0% {
            transform: translateY(-10%);
            opacity: 0;
          }

          8% {
            opacity: 0.5;
          }

          92% {
            opacity: 0.5;
          }

          100% {
            transform: translateY(110%);
            opacity: 0;
          }
        }

        .ps-scanline {
          animation: psScan 7s linear infinite;
        }

        @keyframes psCursorPulse {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }

          50% {
            transform: scale(1.25);
            opacity: 0.15;
          }

          100% {
            transform: scale(1);
            opacity: 0.6;
          }
        }

        .ps-cursor-ring {
          animation: psCursorPulse 2.2s ease-in-out infinite;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="project-showcase relative overflow-hidden bg-[#070707] text-white"
      >
        {/* HOME BUTTON */}
        <NavLink
          to="/"
          className="group absolute left-6 top-6 z-[80] flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-4 py-2.5 text-xs font-medium text-white/75 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white hover:text-black sm:left-10 sm:top-8"
        >
          <Home
            size={14}
            strokeWidth={1.8}
            className="transition-transform duration-300 group-hover:-translate-x-0.5"
          />
          <span>Home</span>
        </NavLink>

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.09)_1px,transparent_1px)] [background-size:80px_80px]" />

          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:20px_20px]" />

          <div className="absolute left-[20%] top-[15%] h-[450px] w-[450px] rounded-full bg-violet-500/[0.08] blur-[120px]" />

          <div className="absolute right-[5%] top-[38%] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.06] blur-[140px]" />

          <div className="absolute bottom-[10%] left-[30%] h-[400px] w-[400px] rounded-full bg-pink-500/[0.05] blur-[130px]" />

          <div className="absolute right-[22%] top-[62%] h-[380px] w-[380px] rounded-full bg-[#FFC24B]/[0.05] blur-[130px]" />

          <div className="absolute left-[6%] top-[85%] h-[340px] w-[340px] rounded-full bg-[#E4572E]/[0.05] blur-[120px]" />

          <div className="absolute left-[8%] top-0 h-full w-px bg-white/[0.06]" />

          <div className="absolute right-[8%] top-0 h-full w-px bg-white/[0.06]" />

          <div className="absolute left-[8%] top-[18%] h-2 w-2 rounded-full bg-cyan-400/50" />

          <div className="absolute right-[8%] top-[48%] h-2 w-2 rounded-full bg-violet-400/50" />

          <div className="absolute left-[14%] top-[75%] h-1.5 w-1.5 rounded-full bg-[#FFC24B]/50" />

          <div className="absolute right-[16%] top-[82%] h-1.5 w-1.5 rounded-full bg-[#E4572E]/50" />

          <div className="absolute left-0 top-[30%] h-px w-[18%] bg-gradient-to-r from-transparent to-white/10" />

          <div className="absolute right-0 top-[70%] h-px w-[18%] bg-gradient-to-l from-transparent to-white/10" />

          <div className="absolute left-6 top-6 h-9 w-9 border-l border-t border-white/20 sm:left-10 sm:top-10" />

          <div className="absolute right-6 top-6 h-9 w-9 border-r border-t border-white/20 sm:right-10 sm:top-10" />

          <div className="absolute bottom-6 left-6 h-9 w-9 border-b border-l border-white/20 sm:bottom-10 sm:left-10" />

          <div className="absolute bottom-6 right-6 h-9 w-9 border-b border-r border-white/20 sm:bottom-10 sm:right-10" />

          <div className="ps-scanline absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />

          <span className="ps-mono absolute left-[6%] top-[8%] rotate-[-3deg] text-[10px] tracking-wide text-cyan-300/25 sm:text-xs">
            {"<Component />"}
          </span>

          <span className="ps-mono absolute right-[9%] top-[20%] rotate-[2deg] text-[10px] tracking-wide text-violet-300/25 sm:text-xs">
            gsap.timeline()
          </span>

          <span className="ps-mono absolute left-[9%] top-[41%] rotate-[1deg] text-[10px] tracking-wide text-[#FFC24B]/25 sm:text-xs">
            useEffect(() =&gt; {"{}"})
          </span>

          <span className="ps-mono absolute right-[7%] top-[58%] rotate-[-2deg] text-[10px] tracking-wide text-[#E4572E]/25 sm:text-xs">
            REC 00:12:44
          </span>

          <span className="ps-mono absolute left-[11%] top-[73%] rotate-[2deg] text-[10px] tracking-wide text-cyan-300/20 sm:text-xs">
            1920×1080 · 24fps
          </span>

          <span className="ps-mono absolute right-[10%] top-[91%] rotate-[-1deg] text-[10px] tracking-wide text-violet-300/20 sm:text-xs">
            git commit -m "ship"
          </span>
        </div>

        <div className="relative z-30 flex h-[20vh] min-h-[150px] flex-col items-center justify-center px-5 text-center">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.45em] text-white/35 sm:text-xs">
            Selected Work
          </p>

          <h2 className="text-[42px] font-semibold leading-none tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            Projects
          </h2>

          <div className="mt-5 flex items-center gap-3">
            <span className="h-px w-10 bg-white/20" />

            <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">
              Scroll to explore
            </span>

            <span className="h-px w-10 bg-white/20" />
          </div>
        </div>

        <div
          ref={pathContainerRef}
          style={{
            height: `${pathHeight}vh`,
          }}
          className="relative"
        >
          <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/[0.05] to-transparent" />

          <svg
            ref={svgRef}
            className="pointer-events-none absolute inset-0 z-[6] h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              ref={guideLineRef}
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1.5"
              strokeDasharray="1 7"
              strokeLinecap="round"
            />

            <path
              ref={drawLineRef}
              fill="none"
              stroke="rgba(228,87,46,0.55)"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>

          {projects.map((project, index) => {
            const position = getPosition(index);

            return (
              <div
                key={project.id}
                style={{
                  left: position.left,
                  top: position.top,
                }}
                className="absolute z-10 -translate-x-1/2"
              >
                <button
                  ref={(element) => {
                    markerRefs.current[index] = element;
                  }}
                  onClick={() =>
                    setSelectedProject(project)
                  }
                  className="group relative h-[300px] w-[500px] overflow-hidden rounded-2xl border border-white/[0.15] bg-[#111] text-left shadow-[0_22px_60px_rgba(0,0,0,0.65)] transition-all duration-500 hover:-translate-y-2 hover:border-white/35 hover:shadow-[0_30px_75px_rgba(0,0,0,0.8)] max-[700px]:h-[150px] max-[700px]:w-[240px] max-[420px]:h-[125px] max-[420px]:w-[200px]"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/5" />

                  <div className="absolute left-2.5 top-2.5 flex h-6 w-6 items-center justify-center rounded-full border border-white/25 bg-black/30 text-[8px] font-medium backdrop-blur-md">
                    {project.number}
                  </div>

                  <div className="absolute right-2.5 top-2.5 flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                    <ArrowUpRight
                      size={12}
                      strokeWidth={1.8}
                    />
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="truncate text-[9px] uppercase tracking-[0.2em] text-white/45">
                      {project.category}
                    </p>

                    <h3 className="truncate text-[16px] font-semibold leading-tight tracking-[-0.02em]">
                      {project.title}
                    </h3>
                  </div>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
                </button>
              </div>
            );
          })}

          <div
            ref={movingRef}
            className="pointer-events-none absolute left-[63%] top-[4%] z-30 h-14 w-14 -translate-x-1/2 sm:h-16 sm:w-16"
          >
            <div className="relative flex h-full w-full items-center justify-center">
              <div className="absolute h-10 w-10 rounded-full bg-[#E4572E]/25 blur-xl sm:h-12 sm:w-12" />

              <span className="ps-cursor-ring absolute h-9 w-9 rounded-full border border-white/25 sm:h-10 sm:w-10" />

              <svg
                viewBox="0 0 48 48"
                className="relative h-8 w-8 -rotate-[18deg] drop-shadow-[0_8px_16px_rgba(0,0,0,0.65)] sm:h-9 sm:w-9"
              >
                <path
                  d="M6 42 L10 32 L30 12 L36 18 L16 38 Z"
                  fill="#F4F1EC"
                  stroke="#0a0a0a"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />

                <path
                  d="M30 12 L36 18 L40.5 13.5 C42.3 11.7 42.3 8.8 40.5 7 C38.7 5.2 35.8 5.2 34 7 Z"
                  fill="#E4572E"
                  stroke="#0a0a0a"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />

                <path
                  d="M6 42 L10 32 L14.5 36.5 Z"
                  fill="#0a0a0a"
                />

                <circle
                  cx="7.3"
                  cy="40.2"
                  r="1.5"
                  fill="#FFC24B"
                />
              </svg>

              <span className="ps-mono absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/15 bg-black/50 px-2 py-0.5 text-[8px] uppercase tracking-widest text-white/55 backdrop-blur-sm sm:text-[9px]">
                tracing the work
              </span>
            </div>
          </div>
        </div>

        <div className="relative z-30 flex h-[20vh] min-h-[150px] items-center justify-center px-5 text-center">
          <div>
            <p className="text-[9px] uppercase tracking-[0.35em] text-white/25">
              End of collection
            </p>

            <div className="mx-auto mt-4 h-px w-16 bg-white/10" />
          </div>
        </div>

        {selectedProject && (
          <div
            onClick={() =>
              setSelectedProject(null)
            }
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-5 backdrop-blur-lg"
          >
            <div
              onClick={(event) =>
                event.stopPropagation()
              }
              className="relative w-full max-w-[520px] overflow-hidden rounded-[28px] border border-white/15 bg-[#101010] shadow-[0_40px_120px_rgba(0,0,0,0.85)]"
            >
              <button
                onClick={() =>
                  setSelectedProject(null)
                }
                className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md transition hover:bg-white hover:text-black"
              >
                <X
                  size={18}
                  strokeWidth={1.8}
                />
              </button>

              <div className="relative h-[330px] w-full">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-black/10" />

                <div className="absolute bottom-5 left-6">
                  <p className="text-[9px] uppercase tracking-[0.35em] text-white/45">
                    {selectedProject.number} /{" "}
                    {selectedProject.category}
                  </p>

                  <h3 className="mt-2 text-3xl font-semibold tracking-[-0.05em]">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              <div className="flex gap-3 p-6 pt-2">
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-medium text-black transition hover:bg-white/85"
                >
                  <Eye
                    size={18}
                    strokeWidth={1.8}
                  />
                  Live
                </a>

                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  <Code2
                    size={18}
                    strokeWidth={1.8}
                  />
                  Code
                </a>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default ShowCase;