import React from "react";
import { useNavigate } from "react-router";
import { ArrowRight, CheckCircle2, XCircle, Sparkles } from "lucide-react";

export default function HomePage() {
  let navigate = useNavigate();

  return (
    <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
      {/* ambient dot-grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:radial-gradient(#DAD7C7_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black_40%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black_40%,transparent_100%)]"
      />

      {/* floating quiz-card mockups (decorative, hidden on mobile) */}
      <div
        className="pointer-events-none absolute left-[6%] top-[18%] hidden w-40 animate-[float-y_5s_ease-in-out_infinite] rounded-2xl border border-[#DAD7C7] bg-white p-4 text-left shadow-[0_10px_30px_-12px_rgba(28,43,30,0.25)] motion-reduce:animate-none md:block"
        style={{ "--r": "-8deg", animationDelay: "0.2s" }}
      >
        <p className="font-body text-[11px] font-medium text-[#8A8879]">
          Capital of Japan?
        </p>
        <div className="mt-2 flex items-center gap-1.5 text-[#3B6D11]">
          <CheckCircle2 size={14} />
          <span className="font-body text-xs font-semibold">Tokyo</span>
        </div>
      </div>

      <div
        className="pointer-events-none absolute right-[6%] top-[26%] hidden w-40 animate-[float-y_5s_ease-in-out_infinite] rounded-2xl border border-[#DAD7C7] bg-white p-4 text-left shadow-[0_10px_30px_-12px_rgba(28,43,30,0.25)] motion-reduce:animate-none md:block"
        style={{ "--r": "7deg", animationDelay: "0.6s" }}
      >
        <p className="font-body text-[11px] font-medium text-[#8A8879]">
          2 + 2 × 2 = ?
        </p>
        <div className="mt-2 flex items-center gap-1.5 text-[#C0504D]">
          <XCircle size={14} />
          <span className="font-body text-xs font-semibold">8</span>
        </div>
      </div>

      {/* eyebrow badge */}
      <span
        className="font-body mb-5 inline-flex animate-[fade-up-14_0.7s_ease_both] items-center gap-1.5 rounded-full border border-[#C9A227]/30 bg-[#EAF3DE] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#3B6D11] motion-reduce:animate-none"
      >
        <Sparkles size={12} className="text-[#C9A227]" />
        Quiz App
      </span>

      {/* headline */}
      <h1
        className="font-display max-w-2xl animate-[fade-up-14_0.7s_ease_both] text-4xl font-semibold leading-[1.15] text-[#1C2B1E] motion-reduce:animate-none sm:text-5xl md:text-6xl"
        style={{ animationDelay: "0.08s" }}
      >
        Test what you know,{" "}
        <span className="text-[#C9A227]">one question</span> at a time.
      </h1>

      {/* subheadline */}
      <p
        className="font-body mt-5 max-w-md animate-[fade-up-14_0.7s_ease_both] text-sm leading-relaxed text-[#8A8879] motion-reduce:animate-none sm:text-base"
        style={{ animationDelay: "0.16s" }}
      >
        A simple and clean quiz experience — check your knowledge, track your
        progress, and revisit your saved questions later.
      </p>

      {/* CTA */}
      <button
        onClick={() => navigate("/quiz")}
        className="font-body group relative mt-10 flex animate-[fade-up-14_0.7s_ease_both] items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-[#A6E65C] to-[#8FD84A] px-8 py-3.5 text-base font-semibold text-[#1C2B1E] shadow-[0_12px_24px_-8px_rgba(166,230,92,0.65)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-8px_rgba(166,230,92,0.8)] motion-reduce:animate-none after:absolute after:left-[-75%] after:top-0 after:h-full after:w-1/2 after:[background:linear-gradient(120deg,transparent,rgba(255,255,255,0.55),transparent)] after:skew-x-[-20deg] after:transition-[left] after:duration-500 after:ease-in-out after:content-[''] hover:after:left-[130%]"
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
        className="font-body mt-14 flex animate-[fade-up-14_0.7s_ease_both] items-center gap-6 text-left motion-reduce:animate-none sm:gap-10"
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
              <p className="font-display text-xl font-semibold text-[#1C2B1E]">
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