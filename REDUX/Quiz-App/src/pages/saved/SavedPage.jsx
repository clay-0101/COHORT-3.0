import React from 'react'
import SavedQuestionCard from './SavedQuestionCard'
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { Bookmark, Sparkles, ArrowRight } from "lucide-react"

const SavedPage = () => {
  const savedCards = useSelector((state) => state.saveQuiz.value) || []
  const navigate = useNavigate()

  // 1. Conditional Rendering: Empty State Screen — mirrors the HomePage hero
  if (savedCards.length === 0) {
    return (
      <div className="relative flex min-h-[70vh] w-full flex-col items-center justify-center overflow-hidden px-6 py-16 text-center">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&display=swap');
          .sp-serif { font-family: 'Fraunces', serif; }
          .sp-sans { font-family: 'Inter', sans-serif; }

          @keyframes spFadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes spFloat { 0%, 100% { transform: translateY(0) rotate(var(--r, 0deg)); } 50% { transform: translateY(-10px) rotate(var(--r, 0deg)); } }
          .sp-in { animation: spFadeUp 0.7s ease both; }
          .sp-float { animation: spFloat 5s ease-in-out infinite; }

          .sp-cta { position: relative; overflow: hidden; }
          .sp-cta::after {
            content: '';
            position: absolute;
            top: 0; left: -75%;
            width: 50%; height: 100%;
            background: linear-gradient(120deg, transparent, rgba(255,255,255,0.55), transparent);
            transform: skewX(-20deg);
            transition: left 0.6s ease;
          }
          .sp-cta:hover::after { left: 130%; }

          @media (prefers-reduced-motion: reduce) { .sp-in, .sp-float { animation: none; } }
        `}</style>

        {/* ambient dot-grid backdrop */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: "radial-gradient(#DAD7C7 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage: "radial-gradient(ellipse 60% 50% at 50% 40%, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 40%, black 40%, transparent 100%)",
          }}
        />

        {/* floating bookmark card, decorative */}
        <div
          className="sp-float pointer-events-none absolute left-[8%] top-[20%] hidden w-36 rounded-2xl border border-[#DAD7C7] bg-white p-3.5 text-left shadow-[0_10px_30px_-12px_rgba(28,43,30,0.25)] md:block"
          style={{ "--r": "-7deg", animationDelay: "0.2s" }}
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EAF3DE] text-[#3B6D11]">
            <Bookmark size={13} />
          </span>
          <p className="sp-sans mt-2 text-[11px] font-medium text-[#8A8879]">Saved for later</p>
        </div>

        <div
          className="sp-float pointer-events-none absolute right-[8%] top-[30%] hidden w-36 rounded-2xl border border-[#DAD7C7] bg-white p-3.5 text-left shadow-[0_10px_30px_-12px_rgba(28,43,30,0.25)] md:block"
          style={{ "--r": "6deg", animationDelay: "0.6s" }}
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F5E9F7] text-[#7A3E91]">
            <Bookmark size={13} />
          </span>
          <p className="sp-sans mt-2 text-[11px] font-medium text-[#8A8879]">Review anytime</p>
        </div>

        {/* eyebrow */}
        <span className="sp-in sp-sans mb-5 inline-flex items-center gap-1.5 rounded-full border border-[#C9A227]/30 bg-[#EAF3DE] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#3B6D11]">
          <Sparkles size={12} className="text-[#C9A227]" />
          Saved
        </span>

        {/* headline */}
        <h1
          className="sp-in sp-serif max-w-lg text-3xl font-semibold leading-[1.15] text-[#1C2B1E] sm:text-4xl md:text-5xl"
          style={{ animationDelay: "0.08s" }}
        >
          Nothing saved <span className="text-[#C9A227]">yet.</span>
        </h1>

        {/* subheadline */}
        <p
          className="sp-in sp-sans mt-4 max-w-sm text-sm leading-relaxed text-[#8A8879] sm:text-base"
          style={{ animationDelay: "0.16s" }}
        >
          Bookmark any question while you quiz and it'll show up here — ready
          whenever you want to review it.
        </p>

        {/* CTA */}
        <button
          onClick={() => navigate("/quiz")}
          className="sp-in sp-cta sp-sans group mt-9 flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#A6E65C] to-[#8FD84A] px-7 py-3 text-sm font-semibold text-[#1C2B1E] shadow-[0_12px_24px_-8px_rgba(166,230,92,0.65)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-8px_rgba(166,230,92,0.8)]"
          style={{ animationDelay: "0.24s" }}
        >
          Start a quiz
          <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    )
  }

  // 2. Normal Grid Rendering
  return (
    <div className="w-full px-4 py-6 sm:px-8 sm:py-8 md:px-10">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        .sp-sans { font-family: 'Inter', sans-serif; }
      `}</style>
      <div className="sp-sans mb-7 flex items-end justify-between">
        <div>
          <h2 className="text-xl font-bold text-[#1C2B1E] sm:text-2xl">Saved questions</h2>
          <p className="mt-1 text-sm text-[#B4B2A9]">Tap a card to flip and see the answer.</p>
        </div>
        <span className="flex h-8 min-w-8 items-center justify-center rounded-full bg-[#F5F4EC] px-2.5 font-mono text-xs font-semibold tracking-widest text-[#8A8879]">
          {String(savedCards.length).padStart(2, "0")}
        </span>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {savedCards.map((item, index) => (
          <SavedQuestionCard key={item.id || item.question} item={item} index={index} />
        ))}
      </div>
    </div>
  )
}

export default SavedPage