import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import carryPhoto from "../../assets/carry.png";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const root = useRef(null);
  const timecodeRef = useRef(null);
  const playheadRef = useRef(null);

  const clip1 = useRef(null);
  const clip2 = useRef(null);
  const clip3 = useRef(null);
  const clip4 = useRef(null);

  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);
  const card4 = useRef(null);

  const dot1 = useRef(null);
  const dot2 = useRef(null);
  const dot3 = useRef(null);
  const dot4 = useRef(null);

  const activeIndexRef = useRef(-1);

  const [accentColor, setAccentColor] = useState("#E4572E");

  const colors = [
    "#E4572E",
    "#FFC24B",
    "#2F6F6B",
    "#5DC8FF",
    "#8B5CF6",
    "#FF7DB8",
    "#F3F1EC",
    "#141414",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".ab-home-btn", { opacity: 0, x: -20, duration: 0.5 })
        .from(".ab-ruler span", { opacity: 0, y: -6, stagger: 0.01, duration: 0.4 }, "-=0.2")
        .from(".ab-eyebrow", { opacity: 0, y: 12, duration: 0.5 }, "-=0.2")
        .from(".ab-name-accent", { scaleX: 0, transformOrigin: "left center", duration: 0.6 }, "-=0.1")
        .from(".ab-name", { opacity: 0, y: 40, skewX: -6, duration: 0.8 }, "-=0.5")
        .from(".ab-role", { opacity: 0, y: 16, duration: 0.5 }, "-=0.4")
        .from(".ab-photo-wrap", { opacity: 0, scale: 0.85, rotate: -4, duration: 0.9 }, "-=0.5")
        .from(".ab-panel", { opacity: 0, y: 20, stagger: 0.12, duration: 0.6 }, "-=0.6")
        .from(".ab-pin", { opacity: 0, scale: 0, stagger: 0.08, duration: 0.4, ease: "back.out(2)" }, "-=0.4")
        .from(".ab-rec", { opacity: 0, duration: 0.3 }, "-=0.2");

      gsap.utils.toArray(".ab-pin").forEach((pin, i) => {
        gsap.to(pin, { y: i % 2 === 0 ? -10 : 10, duration: 2.4 + i * 0.3, yoyo: true, repeat: -1, ease: "sine.inOut" });
      });

      gsap.utils.toArray(".eq-bar").forEach((bar, i) => {
        gsap.to(bar, { scaleY: 0.3 + Math.random() * 0.7, duration: 0.4 + i * 0.07, yoyo: true, repeat: -1, ease: "sine.inOut" });
      });

      gsap.from(".ab-stack-row", {
        scrollTrigger: { trigger: ".ab-stack-panel", start: "top 80%" },
        opacity: 0, x: -24, stagger: 0.08, duration: 0.5, ease: "power2.out",
      });

      gsap.utils.toArray(".ab-sticky").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 85%" },
          opacity: 0, y: 24, duration: 0.6, ease: "back.out(1.6)",
        });
      });

      gsap.to(".ab-progress-fill", {
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom bottom", scrub: 0.5 },
        width: "100%",
      });

      gsap.to(".ab-noise", {
        scrollTrigger: { trigger: root.current, scrub: 1 },
        y: 80, ease: "none",
      });

      const clipEls = [clip1.current, clip2.current, clip3.current, clip4.current];
      const cardEls = [card1.current, card2.current, card3.current, card4.current];
      const dotEls = [dot1.current, dot2.current, dot3.current, dot4.current];

      const clipRanges = [[0.02, 0.22], [0.24, 0.46], [0.48, 0.66], [0.68, 0.96]];

      cardEls.forEach((card) => {
        if (card) gsap.set(card, { opacity: 0, y: 18 });
      });

      ScrollTrigger.create({
        trigger: ".ab-timeline-stage",
        start: "top top+=80",
        end: "+=1400",
        scrub: 1,
        pin: true,
        pinSpacing: true,

        onUpdate: (self) => {
          const p = self.progress;

          if (playheadRef.current) playheadRef.current.style.left = `${p * 100}%`;

          const totalFrames = Math.floor(p * 480);
          const sec = Math.floor(totalFrames / 24) % 60;
          const min = Math.floor(totalFrames / 24 / 60);
          const frame = totalFrames % 24;

          if (timecodeRef.current) {
            timecodeRef.current.textContent = `00:${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}:${String(frame).padStart(2, "0")}`;
          }

          let activeIndex = -1;

          clipRanges.forEach((range, i) => {
            const active = p >= range[0] && p <= range[1];
            if (active) activeIndex = i;

            const el = clipEls[i];
            if (!el) return;

            gsap.to(el, {
              scaleY: active ? 1.15 : 1,
              boxShadow: active ? "0 0 0 2px rgba(255,255,255,0.6)" : "0 0 0 0px rgba(255,255,255,0)",
              duration: 0.15,
              overwrite: true,
            });
          });

          if (activeIndex !== activeIndexRef.current) {
            activeIndexRef.current = activeIndex;

            cardEls.forEach((card, i) => {
              if (!card) return;
              gsap.killTweensOf(card);

              if (i === activeIndex) {
                gsap.fromTo(card, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out", overwrite: true });
              } else {
                gsap.set(card, { opacity: 0, y: 18 });
              }
            });

            dotEls.forEach((dot, i) => {
              if (!dot) return;

              gsap.to(dot, {
                scale: i === activeIndex ? 1.6 : 1,
                backgroundColor: i === activeIndex ? accentColor : "#d4d4d4",
                duration: 0.2,
                overwrite: true,
              });
            });
          }
        },

        onLeaveBack: () => {
          activeIndexRef.current = -1;

          cardEls.forEach((card) => {
            if (!card) return;
            gsap.killTweensOf(card);
            gsap.set(card, { opacity: 0, y: 18 });
          });

          clipEls.forEach((clip) => {
            if (!clip) return;
            gsap.set(clip, { scaleY: 1, boxShadow: "none" });
          });

          dotEls.forEach((dot) => {
            if (!dot) return;
            gsap.set(dot, { scale: 1, backgroundColor: "#d4d4d4" });
          });
        },

        onLeave: () => {
          activeIndexRef.current = -1;

          cardEls.forEach((card) => {
            if (!card) return;
            gsap.killTweensOf(card);
            gsap.set(card, { opacity: 0, y: 18 });
          });
        },
      });
    }, root);

    return () => ctx.revert();
  }, [accentColor]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

        .fnt-marker { font-family: 'Permanent Marker', cursive; }
        .fnt-grotesk { font-family: 'Space Grotesk', sans-serif; }
        .fnt-mono { font-family: 'JetBrains Mono', monospace; }

        @keyframes recBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.25; }
        }

        .ab-rec-dot { animation: recBlink 1.1s infinite; }
        .eq-bar { transform-origin: bottom; }
      `}</style>

      <section ref={root} className="relative min-h-screen w-full overflow-hidden bg-[#F3F1EC] text-[#141414] fnt-grotesk select-none">
        <div className="ab-noise pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

        <Link to="/" className="ab-home-btn fixed left-4 top-4 z-40 flex items-center gap-1.5 rounded-sm border border-black/10 bg-white px-3 py-1.5 fnt-mono text-[11px] text-black/70 shadow-md transition-colors duration-200 hover:bg-[#141414] hover:text-white sm:left-6 sm:top-6">
          <span className="text-sm">←</span> Home
        </Link>

        <div className="ab-ruler relative z-10 flex items-center gap-6 overflow-hidden border-b border-black/10 px-6 py-2 fnt-mono text-[10px] tracking-wider text-black/40">
          <span>0</span><span>100</span><span>200</span><span>300</span><span>400</span><span>500</span><span>600</span><span>700</span><span>800</span><span>900</span><span>1000</span><span>1100</span><span>1200</span><span>1300</span>
        </div>

        <div className="fixed left-0 top-0 z-30 h-[3px] w-full bg-black/5">
          <div className="ab-progress-fill h-full w-0 bg-gradient-to-r from-[#E4572E] via-[#FFC24B] to-[#2F6F6B]" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-5 pb-24 pt-10 sm:px-6 sm:pb-32 sm:pt-14 md:px-10">
          <div className="ab-eyebrow mb-6 flex flex-wrap items-center gap-3">
            <span className="rotate-[-3deg] rounded-sm bg-[#141414] px-3 py-1 fnt-mono text-[11px] uppercase tracking-widest text-[#F3F1EC]">Building Interfaces</span>
            <span className="rotate-[2deg] rounded-sm border border-[#2F6F6B]/40 bg-[#DCEFEE] px-3 py-1 fnt-mono text-[11px] text-[#1F5451] shadow-sm">React · Redux · GSAP</span>
            <span className="rotate-[-1deg] rounded-sm border border-[#E4572E]/30 bg-[#FDE3DA] px-3 py-1 fnt-mono text-[11px] text-[#B23A19] shadow-sm">Editing Reels & Clips</span>
          </div>

          <div className="relative inline-block">
            <span className="ab-name-accent absolute -bottom-2 left-0 h-6 w-full -rotate-1 bg-[#FFC24B]/70 sm:h-8 md:h-10" />
            <h1 className="ab-name relative fnt-marker text-[16vw] leading-[0.85] tracking-tight text-[#141414] sm:text-[9vw] md:text-[7.5rem]">Carry</h1>
          </div>

          <div className="ab-role mt-3 flex flex-wrap items-center gap-3 sm:gap-4">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">Frontend Developer</h2>
            <span className="h-1 w-1 rounded-full bg-[#E4572E]" />
            <p className="fnt-mono text-xs text-black/50 sm:text-sm">interfaces · motion · edits</p>
          </div>

          <div className="relative mt-10 grid grid-cols-1 gap-8 sm:mt-14 sm:gap-10 md:grid-cols-[260px_1fr_260px] md:items-start lg:grid-cols-[280px_1fr_280px]">
            <div className="ab-panel ab-stack-panel relative rounded-md border border-black/10 bg-white/90 p-4 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.3)] backdrop-blur-sm md:sticky md:top-10">
              <div className="mb-3 flex items-center justify-between border-b border-black/10 pb-2">
                <span className="text-sm font-semibold">Tech Stack</span>
                <div className="flex gap-1"><span className="h-2 w-2 rounded-full bg-[#E4572E]" /><span className="h-2 w-2 rounded-full bg-[#2F6F6B]" /></div>
              </div>

              <ul className="space-y-2">
                <li className="ab-stack-row group flex items-center justify-between rounded px-2 py-1.5 text-sm transition-colors duration-200 hover:bg-[#141414] hover:text-[#F3F1EC]"><span className="font-medium">React JS</span><span className="rounded-sm bg-[#DCEAFB] px-1.5 py-0.5 fnt-mono text-[10px] uppercase tracking-wide text-[#1E4D8C] group-hover:bg-white/10 group-hover:text-white/60">core</span></li>
                <li className="ab-stack-row group flex items-center justify-between rounded px-2 py-1.5 text-sm transition-colors duration-200 hover:bg-[#141414] hover:text-[#F3F1EC]"><span className="font-medium">Redux</span><span className="rounded-sm bg-[#EBE1FB] px-1.5 py-0.5 fnt-mono text-[10px] uppercase tracking-wide text-[#5B2E9C] group-hover:bg-white/10 group-hover:text-white/60">state</span></li>
                <li className="ab-stack-row group flex items-center justify-between rounded px-2 py-1.5 text-sm transition-colors duration-200 hover:bg-[#141414] hover:text-[#F3F1EC]"><span className="font-medium">JavaScript (ES6+)</span><span className="rounded-sm bg-[#FDF3D0] px-1.5 py-0.5 fnt-mono text-[10px] uppercase tracking-wide text-[#8A6D00] group-hover:bg-white/10 group-hover:text-white/60">core</span></li>
                <li className="ab-stack-row group flex items-center justify-between rounded px-2 py-1.5 text-sm transition-colors duration-200 hover:bg-[#141414] hover:text-[#F3F1EC]"><span className="font-medium">CSS / Tailwind</span><span className="rounded-sm bg-[#FDE3DA] px-1.5 py-0.5 fnt-mono text-[10px] uppercase tracking-wide text-[#B23A19] group-hover:bg-white/10 group-hover:text-white/60">style</span></li>
                <li className="ab-stack-row group flex items-center justify-between rounded px-2 py-1.5 text-sm transition-colors duration-200 hover:bg-[#141414] hover:text-[#F3F1EC]"><span className="font-medium">GSAP</span><span className="rounded-sm bg-[#DCEFEE] px-1.5 py-0.5 fnt-mono text-[10px] uppercase tracking-wide text-[#1F5451] group-hover:bg-white/10 group-hover:text-white/60">motion</span></li>
                <li className="ab-stack-row group flex items-center justify-between rounded px-2 py-1.5 text-sm transition-colors duration-200 hover:bg-[#141414] hover:text-[#F3F1EC]"><span className="font-medium">Video Editing</span><span className="rounded-sm bg-[#FADCEC] px-1.5 py-0.5 fnt-mono text-[10px] uppercase tracking-wide text-[#9C2E6B] group-hover:bg-white/10 group-hover:text-white/60">extra</span></li>
              </ul>

              <div className="ab-sticky mt-4 -rotate-2 rounded-sm bg-[#FFE07D] px-3 py-2 text-xs font-medium leading-snug shadow-sm">Also edits videos — polish doesn't stop at the browser.</div>

              <div className="mt-4 flex items-end gap-1 rounded-md bg-[#141414] px-3 py-3">
                <span className="eq-bar h-6 w-1.5 rounded-full bg-[#E4572E]" /><span className="eq-bar h-8 w-1.5 rounded-full bg-[#FFC24B]" /><span className="eq-bar h-4 w-1.5 rounded-full bg-[#2F6F6B]" /><span className="eq-bar h-9 w-1.5 rounded-full bg-[#5DC8FF]" /><span className="eq-bar h-5 w-1.5 rounded-full bg-[#8B5CF6]" /><span className="eq-bar h-7 w-1.5 rounded-full bg-[#FF7DB8]" /><span className="ml-2 fnt-mono text-[10px] text-white/40">audio.wav</span>
              </div>
            </div>

            <div className="ab-photo-wrap relative mx-auto flex justify-center">
              <div className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 rotate-[-2deg] rounded-sm border border-black/10 bg-white px-3 py-1 fnt-mono text-[10px] text-black/50 shadow-sm">412 × 612</div>

              <div className="ab-rec absolute -top-2 right-6 z-20 flex items-center gap-1.5 rounded-full bg-[#141414] px-2.5 py-1 shadow-md sm:right-10"><span className="ab-rec-dot h-1.5 w-1.5 rounded-full bg-[#E4572E]" /><span className="fnt-mono text-[10px] text-white">REC</span></div>

              <div className="group relative">
                <img src={carryPhoto} alt="Carry" className="relative z-10 w-[220px] object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.25)] transition-transform duration-500 ease-out group-hover:-translate-y-2 sm:w-[280px] md:w-[320px] lg:w-[360px]" />
                <div className="absolute inset-0 -z-0 translate-x-2 translate-y-3 rounded-md bg-gradient-to-br from-[#FFC24B]/30 to-[#2F6F6B]/20 blur-md transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-5" />
              </div>

              <span className="ab-pin absolute z-20 flex items-center gap-1 rounded-full bg-violet-500 px-2.5 py-1 text-[11px] font-medium text-white shadow-md" style={{ top: "40%", left: "2%" }}><span className="h-1.5 w-1.5 rounded-full bg-white/80" />JS</span>
              <span className="ab-pin absolute z-20 flex items-center gap-1 rounded-full bg-orange-500 px-2.5 py-1 text-[11px] font-medium text-white shadow-md" style={{ top: "48%", left: "82%" }}><span className="h-1.5 w-1.5 rounded-full bg-white/80" />REACT</span>
              <span className="ab-pin absolute z-20 flex items-center gap-1 rounded-full bg-emerald-500 px-2.5 py-1 text-[11px] font-medium text-white shadow-md" style={{ top: "62%", left: "0%" }}><span className="h-1.5 w-1.5 rounded-full bg-white/80" />GSAP</span>
              <span className="ab-pin absolute z-20 flex items-center gap-1 rounded-full bg-pink-500 px-2.5 py-1 text-[11px] font-medium text-white shadow-md" style={{ top: "70%", left: "84%" }}><span className="h-1.5 w-1.5 rounded-full bg-white/80" />REDUX</span>

              <div className="ab-sticky absolute -bottom-8 right-0 rotate-[3deg] rounded-sm bg-white px-3 py-2 fnt-mono text-[11px] text-black/60 shadow-md md:right-[-1rem]">Pixel perfect,<br />shipped fast.</div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="ab-panel rounded-md border border-black/10 bg-[#141414] p-4 text-[#F3F1EC] shadow-lg">
                <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2 text-sm font-semibold"><span>Color Styles</span><span className="text-white/40">·</span></div>

                <div className="flex flex-wrap gap-3">
                  {colors.map((color) => (
                    <button
                      key={color}
                      type="button"
                      title={`Use ${color}`}
                      onClick={() => setAccentColor(color)}
                      className={`h-7 w-7 rounded-full border border-white/20 transition-all duration-200 hover:scale-125 ${accentColor === color ? "scale-125 ring-2 ring-white ring-offset-2 ring-offset-[#141414]" : ""}`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
                  <span className="fnt-mono text-[10px] text-white/40">ACTIVE</span>
                  <span className="fnt-mono text-[10px]" style={{ color: accentColor }}>{accentColor}</span>
                </div>
              </div>

              <div className="ab-panel rounded-md border border-black/10 bg-white/90 p-4 shadow-sm">
                <div className="mb-3 flex items-center justify-between border-b border-black/10 pb-2 text-sm font-semibold"><span>Currently</span></div>
                <p className="text-sm text-black/70">Shipping component libraries and dashboard UIs, one hover state at a time.</p>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-black/10"><div className="h-full w-[80%] rounded-full bg-gradient-to-r from-[#2F6F6B] to-[#5DC8FF]" /></div>
                <span className="mt-1 block fnt-mono text-[10px] text-black/40">80% caffeinated</span>
              </div>

              <div className="ab-panel rounded-md border border-black/10 bg-white/90 p-4 fnt-mono text-[11px] text-black/50 shadow-sm"><p>barcode</p><p className="tracking-[0.3em]">2026 0811 0142</p></div>
            </div>
          </div>

          <div className="ab-timeline-stage relative mt-24 rounded-md border-2 border-black/10 bg-white p-4 shadow-lg sm:mt-32 sm:p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2"><span className="fnt-mono text-[11px] uppercase tracking-widest text-black/40">Project Timeline</span><span ref={timecodeRef} className="fnt-mono text-sm font-semibold" style={{ color: accentColor }}>00:00:00:00</span></div>

            <div className="relative h-16 overflow-hidden rounded bg-[#141414] sm:h-20">
              <div ref={clip1} className="absolute inset-y-2 left-[2%] w-[20%] rounded bg-[#FF5D5D] transition-transform duration-200" />
              <div ref={clip2} className="absolute inset-y-2 left-[24%] w-[22%] rounded bg-[#5DC8FF] transition-transform duration-200" />
              <div ref={clip3} className="absolute inset-y-2 left-[48%] w-[18%] rounded bg-[#8B5CF6] transition-transform duration-200" />
              <div ref={clip4} className="absolute inset-y-2 left-[68%] w-[28%] rounded bg-[#FFC24B] transition-transform duration-200" />
              <div ref={playheadRef} className="absolute inset-y-0 left-0 w-[2px]" style={{ backgroundColor: accentColor }} />
            </div>

            <div className="mt-3 flex justify-between fnt-mono text-[9px] text-black/40 sm:text-[10px]"><span>React JS</span><span>Redux</span><span>GSAP</span><span>Video Edit</span></div>

            <div className="mt-3 flex items-center justify-center gap-2">
              <span ref={dot1} className="h-2 w-2 rounded-full bg-[#d4d4d4]" />
              <span ref={dot2} className="h-2 w-2 rounded-full bg-[#d4d4d4]" />
              <span ref={dot3} className="h-2 w-2 rounded-full bg-[#d4d4d4]" />
              <span ref={dot4} className="h-2 w-2 rounded-full bg-[#d4d4d4]" />
            </div>

            <div className="relative mt-6 h-40 overflow-hidden rounded-md border border-black/10 bg-[#FAF9F5] sm:h-36">
              <div ref={card1} className="absolute inset-0 flex flex-col justify-center gap-2 border-l-4 border-[#FF5D5D] px-5 py-4"><span className="fnt-mono text-[10px] uppercase tracking-widest text-[#B23A19]">Clip 01 / Component Architecture</span><h3 className="text-lg font-semibold">React JS</h3><p className="max-w-md text-sm text-black/60">Reusable, accessible components built with hooks and clean state boundaries — nothing tangled, nothing repeated.</p></div>
              <div ref={card2} className="absolute inset-0 flex flex-col justify-center gap-2 border-l-4 border-[#5DC8FF] px-5 py-4"><span className="fnt-mono text-[10px] uppercase tracking-widest text-[#1E5C87]">Clip 02 / Predictable State</span><h3 className="text-lg font-semibold">Redux</h3><p className="max-w-md text-sm text-black/60">Global state managed through actions and reducers, kept lean so the data flow stays easy to trace.</p></div>
              <div ref={card3} className="absolute inset-0 flex flex-col justify-center gap-2 border-l-4 border-[#8B5CF6] px-5 py-4"><span className="fnt-mono text-[10px] uppercase tracking-widest text-[#5B2E9C]">Clip 03 / Motion & Micro-interactions</span><h3 className="text-lg font-semibold">GSAP</h3><p className="max-w-md text-sm text-black/60">Scroll-triggered reveals, hover feedback and orchestrated page-load sequences — this whole page runs on it.</p></div>
              <div ref={card4} className="absolute inset-0 flex flex-col justify-center gap-2 border-l-4 border-[#FFC24B] px-5 py-4"><span className="fnt-mono text-[10px] uppercase tracking-widest text-[#8A6D00]">Clip 04 / Post-Production</span><h3 className="text-lg font-semibold">Video Editing</h3><p className="max-w-md text-sm text-black/60">Cutting, grading and exporting clips — the same eye for timing that goes into every UI transition.</p></div>
            </div>

            <p className="mt-3 text-center fnt-mono text-[10px] text-black/30">scroll to move the playhead</p>
          </div>

          <div className="mt-6 flex flex-col items-start justify-between gap-8 border-t border-black/10 pt-8 sm:mt-8 md:flex-row md:items-end">
            <p className="max-w-md text-base leading-snug text-black/70 sm:text-lg">"Clean code, clear motion, and a UI that explains itself before the user has to ask."</p>
            <div className="flex items-center gap-2 rounded-sm border border-black/10 bg-white px-3 py-1.5 fnt-mono text-xs text-black/50 shadow-sm"><span className="h-2 w-2 rotate-45" style={{ backgroundColor: accentColor }} />Scroll to explore</div>
          </div>
        </div>
      </section>
    </>
  );
}
