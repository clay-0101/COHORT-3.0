import React from "react";
import { useNavigate } from "react-router";
import { ArrowRight, CheckCircle2, XCircle, Sparkles } from "lucide-react";

export default function HomePage() {
  let navigate = useNavigate();

  return (
    <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&display=swap');

        .qz-serif { font-family: 'Fraunces', serif; }
        .qz-sans { font-family: 'Inter', sans-serif; }

        @keyframes qzFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes qzFloat {
          0%, 100% { transform: translateY(0) rotate(var(--r, 0deg)); }
          50% { transform: translateY(-10px) rotate(var(--r, 0deg)); }
        }
        .qz-in { animation: qzFadeUp 0.7s ease both; }
        .qz-float { animation: qzFloat 5s ease-in-out infinite; }

        .qz-cta { position: relative; overflow: hidden; }
        .qz-cta::after {
          content: '';
          position: absolute;
          top: 0; left: -75%;
          width: 50%; height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.55), transparent);
          transform: skewX(-20deg);
          transition: left 0.6s ease;
        }
        .qz-cta:hover::after { left: 130%; }

        @media (prefers-reduced-motion: reduce) {
          .qz-in, .qz-float { animation: none; }
        }
      `}</style>

      {/* ambient dot-grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(#DAD7C7 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 40%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 40%, black 40%, transparent 100%)",
        }}
      />

      {/* floating quiz-card mockups (decorative, hidden on mobile) */}
      <div
        className="qz-float pointer-events-none absolute left-[6%] top-[18%] hidden w-40 rounded-2xl border border-[#DAD7C7] bg-white p-4 text-left shadow-[0_10px_30px_-12px_rgba(28,43,30,0.25)] md:block"
        style={{ "--r": "-8deg", animationDelay: "0.2s" }}
      >
        <p className="qz-sans text-[11px] font-medium text-[#8A8879]">
          Capital of Japan?
        </p>
        <div className="mt-2 flex items-center gap-1.5 text-[#3B6D11]">
          <CheckCircle2 size={14} />
          <span className="qz-sans text-xs font-semibold">Tokyo</span>
        </div>
      </div>

      <div
        className="qz-float pointer-events-none absolute right-[6%] top-[26%] hidden w-40 rounded-2xl border border-[#DAD7C7] bg-white p-4 text-left shadow-[0_10px_30px_-12px_rgba(28,43,30,0.25)] md:block"
        style={{ "--r": "7deg", animationDelay: "0.6s" }}
      >
        <p className="qz-sans text-[11px] font-medium text-[#8A8879]">
          2 + 2 × 2 = ?
        </p>
        <div className="mt-2 flex items-center gap-1.5 text-[#C0504D]">
          <XCircle size={14} />
          <span className="qz-sans text-xs font-semibold">8</span>
        </div>
      </div>

      {/* eyebrow badge */}
      <span className="qz-in qz-sans mb-5 inline-flex items-center gap-1.5 rounded-full border border-[#C9A227]/30 bg-[#EAF3DE] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#3B6D11]">
        <Sparkles size={12} className="text-[#C9A227]" />
        Quiz App
      </span>

      {/* headline */}
      <h1
        className="qz-in qz-serif max-w-2xl text-4xl font-semibold leading-[1.15] text-[#1C2B1E] sm:text-5xl md:text-6xl"
        style={{ animationDelay: "0.08s" }}
      >
        Test what you know,{" "}
        <span className="text-[#C9A227]">one question</span> at a time.
      </h1>

      {/* subheadline */}
      <p
        className="qz-in qz-sans mt-5 max-w-md text-sm leading-relaxed text-[#8A8879] sm:text-base"
        style={{ animationDelay: "0.16s" }}
      >
        A simple and clean quiz experience — check your knowledge, track your
        progress, and revisit your saved questions later.
      </p>

      {/* CTA */}
      <button
        onClick={() => navigate("/quiz")}
        className="qz-in qz-cta qz-sans group mt-10 flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#A6E65C] to-[#8FD84A] px-8 py-3.5 text-base font-semibold text-[#1C2B1E] shadow-[0_12px_24px_-8px_rgba(166,230,92,0.65)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-8px_rgba(166,230,92,0.8)]"
        style={{ animationDelay: "0.24s" }}
      >
        Start Quiz
        <ArrowRight
          size={18}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </button>

      {/* stats row */}
      <div
        className="qz-in qz-sans mt-14 flex items-center gap-6 text-left sm:gap-10"
        style={{ animationDelay: "0.32s" }}
      >
        {[
          ["500+", "Questions"],
          ["12", "Categories"],
          ["100%", "Free"],
        ].map(([value, label], i) => (
          <React.Fragment key={label}>
            {i !== 0 && <span className="h-8 w-px bg-[#DAD7C7]" />}
            <div>
              <p className="qz-serif text-xl font-semibold text-[#1C2B1E]">
                {value}
              </p>
              <p className="text-[11px] uppercase tracking-wide text-[#8A8879]">
                {label}
              </p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}