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
        {/* ambient dot-grid backdrop */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:radial-gradient(#DAD7C7_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black_40%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black_40%,transparent_100%)]"
        />

        {/* floating bookmark card, decorative */}
        <div
          className="pointer-events-none absolute left-[8%] top-[20%] hidden w-36 animate-[float-y_5s_ease-in-out_infinite] rounded-2xl border border-[#DAD7C7] bg-white p-3.5 text-left shadow-[0_10px_30px_-12px_rgba(28,43,30,0.25)] motion-reduce:animate-none md:block"
          style={{ "--r": "-7deg", animationDelay: "0.2s" }}
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EAF3DE] text-[#3B6D11]">
            <Bookmark size={13} />
          </span>
          <p className="font-body mt-2 text-[11px] font-medium text-[#8A8879]">Saved for later</p>
        </div>

        <div
          className="pointer-events-none absolute right-[8%] top-[30%] hidden w-36 animate-[float-y_5s_ease-in-out_infinite] rounded-2xl border border-[#DAD7C7] bg-white p-3.5 text-left shadow-[0_10px_30px_-12px_rgba(28,43,30,0.25)] motion-reduce:animate-none md:block"
          style={{ "--r": "6deg", animationDelay: "0.6s" }}
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F5E9F7] text-[#7A3E91]">
            <Bookmark size={13} />
          </span>
          <p className="font-body mt-2 text-[11px] font-medium text-[#8A8879]">Review anytime</p>
        </div>

        {/* eyebrow */}
        <span className="font-body mb-5 inline-flex animate-[fade-up-14_0.7s_ease_both] items-center gap-1.5 rounded-full border border-[#C9A227]/30 bg-[#EAF3DE] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#3B6D11] motion-reduce:animate-none">
          <Sparkles size={12} className="text-[#C9A227]" />
          Saved
        </span>

        {/* headline */}
        <h1
          className="font-display max-w-lg animate-[fade-up-14_0.7s_ease_both] text-3xl font-semibold leading-[1.15] text-[#1C2B1E] motion-reduce:animate-none sm:text-4xl md:text-5xl"
          style={{ animationDelay: "0.08s" }}
        >
          Nothing saved <span className="text-[#C9A227]">yet.</span>
        </h1>

        {/* subheadline */}
        <p
          className="font-body mt-4 max-w-sm animate-[fade-up-14_0.7s_ease_both] text-sm leading-relaxed text-[#8A8879] motion-reduce:animate-none sm:text-base"
          style={{ animationDelay: "0.16s" }}
        >
          Bookmark any question while you quiz and it'll show up here — ready
          whenever you want to review it.
        </p>

        {/* CTA */}
        <button
          onClick={() => navigate("/quiz")}
          className="font-body group relative mt-9 flex animate-[fade-up-14_0.7s_ease_both] items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-[#A6E65C] to-[#8FD84A] px-7 py-3 text-sm font-semibold text-[#1C2B1E] shadow-[0_12px_24px_-8px_rgba(166,230,92,0.65)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-8px_rgba(166,230,92,0.8)] motion-reduce:animate-none after:absolute after:left-[-75%] after:top-0 after:h-full after:w-1/2 after:[background:linear-gradient(120deg,transparent,rgba(255,255,255,0.55),transparent)] after:skew-x-[-20deg] after:transition-[left] after:duration-500 after:ease-in-out after:content-[''] hover:after:left-[130%]"
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
      <div className="font-body mb-7 flex items-end justify-between">
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