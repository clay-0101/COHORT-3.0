import React, { useState } from "react";
import { CheckCircle2, HelpCircle, Trash2, RotateCw } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { saveToLocal } from "../../features/saveQuiz"
import { getQuestionData } from "../../features/quizSlice"

const PALETTE = [
    { bg: "#EAF3DE", text: "#3B6D11" },
    { bg: "#FBEFE3", text: "#B5713B" },
    { bg: "#E8F0FB", text: "#2C5AA0" },
    { bg: "#F5E9F7", text: "#7A3E91" },
];

export default function SavedQuestionCard({ item, index }) {
    const [showAnswer, setShowAnswer] = useState(false);
    let savedCards = useSelector((state) => state.saveQuiz.value)
    let value = useSelector((state) => state.quiz.value)
    let dispatch = useDispatch()
    const accent = PALETTE[index % PALETTE.length];

    return (
        <div
            className="font-body animate-[card-enter_0.5s_cubic-bezier(0.16,1,0.3,1)_both] [perspective:1400px] motion-reduce:animate-none motion-reduce:[transition:none]"
            style={{ animationDelay: `${Math.min(index, 10) * 0.06}s` }}
        >
            <div
                onClick={() => setShowAnswer(!showAnswer)}
                className={`relative h-60 w-full cursor-pointer [transform-style:preserve-3d] transition-transform duration-[550ms] [transition-timing-function:cubic-bezier(0.4,0.2,0.2,1)] motion-reduce:transition-none ${
                    showAnswer ? "[transform:rotateY(180deg)]" : "hover:[transform:translateY(-4px)]"
                }`}
            >
                {/* FRONT — question */}
                <div className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-[#E3E1D5] bg-white p-5 shadow-[0_10px_30px_-18px_rgba(28,43,30,0.3)] transition-shadow duration-[250ms] ease-in-out [backface-visibility:hidden] [-webkit-backface-visibility:hidden] hover:shadow-[0_16px_36px_-16px_rgba(28,43,30,0.35)]">
                    <div className="flex items-start justify-between">
                        <span
                            className="flex h-9 w-9 items-center justify-center rounded-full"
                            style={{ backgroundColor: accent.bg, color: accent.text }}
                        >
                            <HelpCircle size={17} />
                        </span>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                let bookMarkOff = value.map((val) => {
                                    return val.id === item.id ? { ...val, saved: false } : val
                                })
                                let removeFromLocal = savedCards.filter((val) => {
                                    return val.id !== item.id
                                })
                                dispatch(getQuestionData(bookMarkOff))
                                dispatch(saveToLocal(removeFromLocal))
                            }}
                            className="flex h-8 w-8 items-center justify-center rounded-full text-[#C7C4B6] transition-colors hover:bg-[#FBE7E4] hover:text-[#C0392B]"
                        >
                            <Trash2 size={14} />
                        </button>
                    </div>

                    <p className="line-clamp-4 text-sm font-semibold leading-snug text-[#1C2B1E] sm:text-base">
                        {item.question}
                    </p>

                    <div className="flex items-center justify-between">
                        <span
                            className="rounded-full px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider"
                            style={{ backgroundColor: accent.bg, color: accent.text }}
                        >
                            {item.category}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] font-medium text-[#B4B2A9]">
                            <RotateCw size={11} />
                            Tap to flip
                        </span>
                    </div>
                </div>

                {/* BACK — answer */}
                <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl border p-5 text-center shadow-[0_10px_30px_-18px_rgba(28,43,30,0.3)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)]"
                    style={{ backgroundColor: accent.bg, borderColor: accent.bg }}
                >
                    <span
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/70"
                        style={{ color: accent.text }}
                    >
                        <CheckCircle2 size={18} />
                    </span>
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-widest" style={{ color: accent.text }}>
                        Correct answer
                    </p>
                    <p className="text-base font-bold leading-snug" style={{ color: accent.text }}>
                        {item.correctAnswer}
                    </p>
                </div>
            </div>
        </div>
    );
}