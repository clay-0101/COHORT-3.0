import React, { useEffect, useRef } from "react";
import { FolderGit2, Mail, ArrowUpRight, ArrowUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const GITHUB_URL = "https://github.com/clay-0101";
const EMAIL = "mailto:sainicarry@gmail.com";

const RESUME_URL =
  "https://docs.google.com/document/d/1KS3Kr_ZzuLHcf9hX2zPu9z9HnlO2zLxI74TWPA5aCvQ/edit?usp=sharing";

const PROCESS_SCROLL_Y = 15841.666015625;

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".footer-main",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
        .from(".footer-reveal-line", {
          scaleX: 0,
          transformOrigin: "center",
          duration: 1,
          ease: "power4.out",
        })
        .from(
          ".footer-top-item",
          {
            y: 30,
            opacity: 0,
            filter: "blur(8px)",
            stagger: 0.08,
            duration: 0.7,
            ease: "power4.out",
          },
          "-=0.5"
        )
        .from(
          ".footer-floating",
          {
            opacity: 0,
            scale: 0.6,
            stagger: 0.08,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        );

      gsap.set(".carry-letter", {
        y: 150,
        opacity: 0,
        rotateX: 85,
        rotateZ: 0,
        scaleY: 1.15,
        transformOrigin: "50% 100%",
        filter: "blur(10px)",
      });

      gsap.set(".footer-main-title", {
        xPercent: -50,
        yPercent: -50,
        scaleX: 1,
        scaleY: 1,
        rotateX: 12,
        rotateY: -3,
        skewX: -6,
      });

      const carryTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".footer-stage",
          start: "top 92%",
          end: "bottom 12%",
          scrub: 1.15,
          invalidateOnRefresh: true,
        },
      });

      carryTimeline.to(".carry-letter", {
        y: 0,
        opacity: 1,
        rotateX: 0,
        scaleY: 1,
        filter: "blur(0px)",
        stagger: {
          each: 0.12,
          from: "center",
        },
        duration: 1.35,
        ease: "power4.out",
      });

      carryTimeline.to(
        ".carry-letter",
        {
          x: (i) => [-82, -38, 0, 38, 82][i] || 0,
          y: (i) => [-38, 24, -48, 24, -38][i] || 0,
          rotateZ: (i) => [-8, 5, -3, 5, -8][i] || 0,
          rotateX: (i) => [18, -10, 14, -10, 18][i] || 0,
          rotateY: (i) => [-10, 5, 0, -5, 10][i] || 0,
          scaleY: (i) => [1.16, 1.05, 1.2, 1.05, 1.16][i] || 1,
          duration: 1,
          ease: "none",
        },
        "+=0.03"
      );

      carryTimeline.to(
        ".footer-main-title",
        {
          scaleX: 1.16,
          scaleY: 1.13,
          rotateX: 9,
          rotateY: -5,
          skewX: -10,
          yPercent: -57,
          duration: 1,
          ease: "none",
        },
        "<"
      );

      carryTimeline.to(
        ".carry-hover-letter",
        {
          color: "#dff8ff",
          textShadow:
            "0 0 14px rgba(98,217,255,.2),0 0 45px rgba(98,217,255,.08)",
          duration: 0.75,
          ease: "power2.out",
        },
        "<0.2"
      );

      carryTimeline.to(".carry-letter", {
        x: 0,
        y: -15,
        rotateZ: 0,
        rotateX: 0,
        rotateY: 0,
        scaleY: 1.06,
        duration: 1,
        ease: "power2.out",
      });

      carryTimeline.to(
        ".footer-main-title",
        {
          scaleX: 1.28,
          scaleY: 1.18,
          rotateX: 3,
          rotateY: 0,
          skewX: -6,
          yPercent: -65,
          duration: 1,
          ease: "none",
        },
        "<"
      );

      carryTimeline.to(
        ".carry-hover-letter",
        {
          color: "#f0efe9",
          textShadow: "0 0 0 transparent",
          duration: 0.45,
          ease: "power2.out",
        },
        "<0.25"
      );

      const cleanups = [];

      const hoverLetters = gsap.utils.toArray(".carry-hover-letter");

      hoverLetters.forEach((letter, index) => {
        const enter = () => {
          gsap.killTweensOf(hoverLetters);

          gsap.to(hoverLetters, {
            y: 0,
            scale: 1,
            rotateZ: 0,
            color: "#f0efe9",
            textShadow: "0 0 0 transparent",
            duration: 0.22,
            ease: "power2.out",
            overwrite: true,
          });

          gsap.to(letter, {
            y: -24,
            scale: 1.08,
            rotateZ: index % 2 === 0 ? -5 : 5,
            color: "#62d9ff",
            textShadow:
              "0 0 18px rgba(98,217,255,.45),0 0 45px rgba(98,217,255,.2)",
            duration: 0.42,
            ease: "back.out(1.6)",
            overwrite: true,
          });

          hoverLetters.forEach((other, otherIndex) => {
            if (other === letter) return;

            const distance = Math.abs(index - otherIndex);

            if (distance === 1) {
              gsap.to(other, {
                y: -9,
                scale: 1.035,
                rotateZ: otherIndex < index ? -1.5 : 1.5,
                duration: 0.4,
                ease: "power3.out",
                overwrite: true,
              });
            }

            if (distance === 2) {
              gsap.to(other, {
                y: -4,
                scale: 1.012,
                duration: 0.4,
                ease: "power3.out",
                overwrite: true,
              });
            }
          });
        };

        const leave = () => {
          gsap.killTweensOf(hoverLetters);

          gsap.to(hoverLetters, {
            y: 0,
            scale: 1,
            rotateZ: 0,
            color: "#f0efe9",
            textShadow: "0 0 0 transparent",
            duration: 0.6,
            ease: "elastic.out(1,.42)",
            overwrite: true,
          });
        };

        letter.addEventListener("mouseenter", enter);
        letter.addEventListener("mouseleave", leave);

        cleanups.push(() => {
          letter.removeEventListener("mouseenter", enter);
          letter.removeEventListener("mouseleave", leave);
        });
      });

      gsap.utils.toArray(".footer-social").forEach((button) => {
        const icon = button.querySelector(".footer-social-icon");
        const arrow = button.querySelector(".footer-social-arrow");

        const enter = () => {
          gsap.to(button, {
            y: -5,
            scale: 1.025,
            duration: 0.35,
            ease: "power3.out",
            overwrite: true,
          });

          if (icon) {
            gsap.to(icon, {
              rotate: -12,
              scale: 1.12,
              duration: 0.35,
              ease: "power3.out",
              overwrite: true,
            });
          }

          if (arrow) {
            gsap.to(arrow, {
              x: 4,
              y: -4,
              rotate: 8,
              duration: 0.35,
              ease: "power3.out",
              overwrite: true,
            });
          }
        };

        const leave = () => {
          gsap.to(button, {
            y: 0,
            scale: 1,
            duration: 0.45,
            ease: "power3.out",
            overwrite: true,
          });

          if (icon) {
            gsap.to(icon, {
              rotate: 0,
              scale: 1,
              duration: 0.45,
              ease: "power3.out",
              overwrite: true,
            });
          }

          if (arrow) {
            gsap.to(arrow, {
              x: 0,
              y: 0,
              rotate: 0,
              duration: 0.45,
              ease: "power3.out",
              overwrite: true,
            });
          }
        };

        button.addEventListener("mouseenter", enter);
        button.addEventListener("mouseleave", leave);

        cleanups.push(() => {
          button.removeEventListener("mouseenter", enter);
          button.removeEventListener("mouseleave", leave);
        });
      });

      gsap.utils.toArray(".footer-link").forEach((link) => {
        const enter = () =>
          gsap.to(link, {
            x: 7,
            duration: 0.3,
            ease: "power3.out",
            overwrite: true,
          });

        const leave = () =>
          gsap.to(link, {
            x: 0,
            duration: 0.4,
            ease: "power3.out",
            overwrite: true,
          });

        link.addEventListener("mouseenter", enter);
        link.addEventListener("mouseleave", leave);

        cleanups.push(() => {
          link.removeEventListener("mouseenter", enter);
          link.removeEventListener("mouseleave", leave);
        });
      });

      gsap.utils.toArray(".footer-top-button").forEach((button) => {
        const arrow = button.querySelector(".footer-top-arrow");

        const enter = () => {
          gsap.to(button, {
            y: -5,
            scale: 1.025,
            duration: 0.35,
            ease: "power3.out",
            overwrite: true,
          });

          if (arrow) {
            gsap.to(arrow, {
              y: -4,
              rotate: -45,
              scale: 1.1,
              duration: 0.35,
              ease: "back.out(1.7)",
              overwrite: true,
            });
          }
        };

        const leave = () => {
          gsap.to(button, {
            y: 0,
            scale: 1,
            duration: 0.45,
            ease: "power3.out",
            overwrite: true,
          });

          if (arrow) {
            gsap.to(arrow, {
              y: 0,
              rotate: 0,
              scale: 1,
              duration: 0.45,
              ease: "power3.out",
              overwrite: true,
            });
          }
        };

        button.addEventListener("mouseenter", enter);
        button.addEventListener("mouseleave", leave);

        cleanups.push(() => {
          button.removeEventListener("mouseenter", enter);
          button.removeEventListener("mouseleave", leave);
        });
      });

      gsap.to(".footer-grid", {
        backgroundPosition: "0px 100px",
        ease: "none",
        scrollTrigger: {
          trigger: ".footer-main",
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      gsap.utils.toArray(".footer-floating").forEach((element, index) => {
        gsap.to(element, {
          y: index % 2 === 0 ? -45 : 45,
          x: index % 2 === 0 ? 15 : -15,
          rotate: index % 2 === 0 ? 3 : -3,
          ease: "none",
          scrollTrigger: {
            trigger: ".footer-main",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });

      gsap.from(".footer-bottom-item", {
        y: 25,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".footer-bottom",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());

      return () => cleanups.forEach((cleanup) => cleanup());
    }, footerRef);

    return () => ctx.revert();
  }, []);

  // PROCESS NAVIGATION
  const handleProcessClick = (e) => {
    e.preventDefault();

    // Agar already home page par hain
    if (window.location.pathname === "/") {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: {
          y: PROCESS_SCROLL_Y,
          autoKill: false,
        },
        ease: "power4.inOut",
      });

      return;
    }

    // Agar kisi aur page par hain to home page par jaake
    // Process ki exact scroll position par le jao.
    window.location.href = `/#process`;
  };

  // BACK TO TOP
  const handleBackToTop = () => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: {
        y: 0,
        autoKill: false,
      },
      ease: "power4.inOut",
    });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800;900&family=DM+Mono:wght@300;400;500&family=Inter:wght@400;500;600;700;800&display=swap');

        .footer-main {
          font-family: "Inter", sans-serif;
        }

        .footer-display {
          font-family: "Barlow Condensed", sans-serif;
        }

        .footer-mono {
          font-family: "DM Mono", monospace;
        }

        .footer-grid {
          background-image:
            linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px);
          background-size: 62px 62px;
          will-change: background-position;
        }

        .footer-noise {
          background-image: radial-gradient(
            rgba(255,255,255,.04) 1px,
            transparent 1px
          );
          background-size: 5px 5px;
          opacity: .15;
        }

        .footer-stage {
          perspective: 1400px;
          perspective-origin: 50% 50%;
        }

        .footer-main-title {
          position: absolute;
          transform-origin: center center;
          transform-style: preserve-3d;
          perspective: 1200px;
          will-change: transform;
          white-space: nowrap;
          cursor: default;
          pointer-events: none;
        }

        .carry-letter {
          display: inline-block;
          letter-spacing: -.085em;
          line-height: .72;
          transform-origin: 50% 100%;
          transform-style: preserve-3d;
          backface-visibility: hidden;
          will-change: transform, opacity, filter;
          perspective: 1000px;
        }

        .carry-hover-letter {
          display: inline-block;
          color: #f0efe9;
          transform-origin: 50% 100%;
          transform-style: preserve-3d;
          backface-visibility: hidden;
          will-change: transform, color, text-shadow;
          cursor: pointer;
          user-select: none;
          pointer-events: auto;
        }

        .footer-link {
          position: relative;
          transition: color .3s ease;
        }

        .footer-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 0;
          height: 1px;
          background: #62d9ff;
          transition: width .35s cubic-bezier(.65,0,.35,1);
        }

        .footer-link:hover {
          color: #62d9ff;
        }

        .footer-link:hover::after {
          width: 100%;
        }

        .footer-social {
          will-change: transform;
          transition:
            border-color .3s ease,
            background .3s ease,
            color .3s ease;
        }

        .footer-social:hover {
          border-color: rgba(98,217,255,.7);
          background: rgba(98,217,255,.08);
          color: #62d9ff;
        }

        .footer-top-button {
          will-change: transform;
        }

        @media(max-width:768px) {
          .footer-grid {
            background-size: 42px 42px;
          }

          .carry-letter {
            letter-spacing: -.065em;
          }

          .footer-main-title {
            max-width: 100vw;
          }
        }

        @media(prefers-reduced-motion:reduce) {
          .footer-main *,
          .footer-main *::before,
          .footer-main *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      <footer
        ref={footerRef}
        className="footer-main relative min-h-screen overflow-hidden bg-[#08090a] text-white"
      >
        <div className="footer-grid pointer-events-none absolute inset-0" />
        <div className="footer-noise pointer-events-none absolute inset-0" />

        <div className="pointer-events-none absolute left-1/2 top-[45%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#62d9ff]/[0.035] blur-[120px]" />

        <div className="absolute left-5 top-5 h-7 w-7 border-l border-t border-white/30 md:left-8 md:top-8" />
        <div className="absolute right-5 top-5 h-7 w-7 border-r border-t border-white/30 md:right-8 md:top-8" />
        <div className="absolute bottom-5 left-5 h-7 w-7 border-b border-l border-white/20 md:bottom-8 md:left-8" />
        <div className="absolute bottom-5 right-5 h-7 w-7 border-b border-r border-white/20 md:right-8 md:bottom-8" />

        <div className="relative z-10 flex min-h-screen flex-col px-5 pt-7 md:px-10 md:pt-9 lg:px-[5vw]">

          {/* TOP */}
          <div className="flex items-center justify-between">
            <a href="/" className="footer-top-item group flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-[10px] font-bold transition duration-300 group-hover:rotate-12 group-hover:border-[#62d9ff] group-hover:text-[#62d9ff]">
                C
              </span>

              <span className="text-sm font-semibold">
                Carry
              </span>
            </a>

            <div className="footer-top-item hidden items-center gap-2 md:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-[#62d9ff] shadow-[0_0_12px_#62d9ff]" />

              <span className="footer-mono text-[9px] uppercase tracking-[.25em] text-white/40">
                Available for work
              </span>
            </div>
          </div>

          {/* TOP CONTENT */}
          <div className="mt-24 grid grid-cols-1 gap-12 md:mt-28 md:grid-cols-12 lg:mt-32">

            {/* ABOUT */}
            <div className="footer-top-item md:col-span-4">
              <div className="footer-mono mb-5 text-[9px] uppercase tracking-[.3em] text-white/30">
                01 / About
              </div>

              <h3 className="footer-display text-4xl font-bold uppercase leading-[.85] tracking-tight md:text-5xl">
                Frontend
                <br />
                <span className="text-white/35">
                  Developer
                </span>
              </h3>

              <p className="footer-mono mt-6 max-w-[300px] text-[10px] leading-[1.8] text-white/40">
                Building interfaces, experimenting with motion and turning ideas
                into digital experiences.
              </p>
            </div>

            {/* NAVIGATE */}
            <div className="footer-top-item md:col-span-3 lg:col-span-2">
              <div className="footer-mono mb-5 text-[9px] uppercase tracking-[.3em] text-white/30">
                02 / Navigate
              </div>

              <nav className="flex flex-col gap-3 text-sm">

                {/* ABOUT */}
                <a
                  href="/about"
                  className="footer-link w-fit"
                >
                  About
                </a>

                {/* PROCESS */}
                <a
                  href="/#process"
                  className="footer-link w-fit"
                  onClick={handleProcessClick}
                >
                  Process
                </a>

                {/* WORK */}
                <a
                  href="/projects"
                  className="footer-link w-fit"
                >
                  Work
                </a>

                {/* RESUME */}
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link w-fit"
                >
                  Resume
                </a>

              </nav>
            </div>

            {/* CONNECT */}
            <div className="footer-top-item md:col-span-5 lg:col-start-9">
              <div className="footer-mono mb-5 text-[9px] uppercase tracking-[.3em] text-white/30">
                03 / Connect
              </div>

              <div className="flex flex-wrap gap-3">

                {/* GITHUB */}
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-xs text-white/70"
                >
                  <FolderGit2
                    className="footer-social-icon"
                    size={14}
                    strokeWidth={1.7}
                  />

                  <span>
                    GitHub
                  </span>

                  <ArrowUpRight
                    className="footer-social-arrow text-white/30"
                    size={12}
                  />
                </a>

                {/* EMAIL */}
                <a
                  href={EMAIL}
                  className="footer-social flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-xs text-white/70"
                >
                  <Mail
                    className="footer-social-icon"
                    size={14}
                    strokeWidth={1.7}
                  />

                  <span>
                    Mail
                  </span>

                  <ArrowUpRight
                    className="footer-social-arrow text-white/30"
                    size={12}
                  />
                </a>

              </div>

              {/* BACK TO TOP */}
              <button
                type="button"
                onClick={handleBackToTop}
                className="footer-top-button group mt-7 flex h-[52px] w-full max-w-[390px] items-center justify-between rounded-full border border-white/15 bg-white/[0.03] px-6 text-xs font-semibold uppercase tracking-[0.15em] text-white/70 transition-all duration-300 hover:border-[#62d9ff]/70 hover:bg-[#62d9ff]/10 hover:text-[#62d9ff]"
              >
                <span>
                  Back to top
                </span>

                <span className="footer-top-arrow flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-[#62d9ff] group-hover:bg-[#62d9ff] group-hover:text-black">
                  <ArrowUp
                    size={16}
                    strokeWidth={2}
                  />
                </span>
              </button>
            </div>
          </div>

          {/* FLOATING DETAILS */}
          <div className="footer-floating footer-mono absolute left-[7%] top-[48%] hidden text-[8px] tracking-[.25em] text-white/20 md:block">
            &lt; / interface &gt;
          </div>

          <div className="footer-floating footer-mono absolute right-[8%] top-[39%] hidden text-[8px] tracking-[.25em] text-white/20 md:block">
            GSAP.timeline()
          </div>

          <div className="footer-floating footer-mono absolute left-[13%] top-[68%] hidden text-[8px] tracking-[.25em] text-[#62d9ff]/40 md:block">
            62.217° / 28.421°
          </div>

          <div className="footer-floating absolute right-[13%] top-[69%] hidden h-2 w-2 rounded-full bg-[#62d9ff] shadow-[0_0_15px_#62d9ff] md:block" />

          {/* CARRY STAGE */}
          <div className="footer-stage relative mt-auto h-[65vh] min-h-[500px] md:h-[70vh] lg:h-[75vh]">

            <div className="footer-reveal-line absolute left-1/2 top-1/2 h-px w-[72%] -translate-x-1/2 bg-white/10" />

            <div className="footer-main-title left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">

              {"CARRY".split("").map((letter, index) => (
                <span
                  key={index}
                  className="carry-letter footer-display text-[34vw] font-black uppercase md:text-[25vw] lg:text-[21vw]"
                >
                  <span className="carry-hover-letter">
                    {letter}
                  </span>
                </span>
              ))}

            </div>

            <div className="footer-mono absolute bottom-8 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap text-[8px] uppercase tracking-[.35em] text-white/25">
              Scroll / Create / Repeat
            </div>
          </div>

          {/* BOTTOM */}
          <div className="footer-bottom relative border-t border-white/10 py-6">

            <div className="grid grid-cols-2 gap-7 text-[9px] uppercase tracking-[.13em] text-white/35 md:grid-cols-4">

              {/* COPYRIGHT */}
              <div className="footer-bottom-item">
                <p>
                  © CARRY / 2026
                </p>

                <p className="mt-1">
                  ALL RIGHTS RESERVED
                </p>
              </div>

              {/* STACK */}
              <div className="footer-bottom-item hidden md:block">
                <p>
                  STACK
                </p>

                <p className="mt-1 text-white/60">
                  REACT / GSAP / TAILWIND
                </p>
              </div>

              {/* SOCIAL LINKS */}
              <div className="footer-bottom-item flex flex-col gap-2">

                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link flex w-fit items-center gap-2 text-white/55"
                >
                  <FolderGit2 size={12} />
                  GitHub
                </a>

                <a
                  href={EMAIL}
                  className="footer-link flex w-fit items-center gap-2 text-white/55"
                >
                  <Mail size={12} />
                  Email
                </a>

              </div>

              {/* BACK TO TOP */}
              <div className="footer-bottom-item flex justify-end">

                <button
                  type="button"
                  className="footer-top-button group flex items-center gap-2 text-white/50"
                  onClick={handleBackToTop}
                >
                  <span>
                    Back to top
                  </span>

                  <span className="footer-top-arrow flex h-7 w-7 items-center justify-center rounded-full border border-white/15 transition duration-300 group-hover:border-[#62d9ff] group-hover:bg-[#62d9ff] group-hover:text-black">
                    <ArrowUp size={13} />
                  </span>
                </button>

              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;