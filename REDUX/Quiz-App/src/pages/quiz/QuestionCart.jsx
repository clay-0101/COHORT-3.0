import React from "react";
import { BookmarkOff, Bookmark, X, Sparkles } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage, setSelectedAnswer, getQuestionData, resetQuiz } from "../../features/quizSlice";
import { saveToLocal } from "../../features/saveQuiz";
import { useNavigate } from "react-router";

export default function QuestionCard({ question }) {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let value = useSelector((state) => state.quiz.value);
    let questionNum = useSelector((state) => state.quiz.questionNum);
    let selectedAnswers = useSelector((state) => state.quiz.selectedAnswers);
    let savedCards = useSelector((state) => state.saveQuiz.value);

    return (
        <div className="relative flex h-full max-h-full w-full items-center justify-center px-4 py-4 sm:px-6 sm:py-6">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600;700&display=swap');
                .qc-serif { font-family: 'Fraunces', serif; }
                .qc-sans { font-family: 'Inter', sans-serif; }

                @keyframes qcFadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes qcFloat { 0%, 100% { transform: translateY(0) rotate(var(--r, 0deg)); } 50% { transform: translateY(-10px) rotate(var(--r, 0deg)); } }
                @keyframes qcOptionIn { from { opacity: 0; transform: translateX(-8px); } to { opacity: 1; transform: translateX(0); } }
                @keyframes qcPop { 0% { transform: scale(0); } 60% { transform: scale(1.25); } 100% { transform: scale(1); } }
                @keyframes qcGlow { 0%, 100% { box-shadow: 0 0 0 0 rgba(28,43,30,0.35); } 50% { box-shadow: 0 0 0 4px rgba(28,43,30,0); } }
                .qc-in { animation: qcFadeUp 0.6s ease both; }
                .qc-float { animation: qcFloat 5s ease-in-out infinite; }
                .qc-option-in { animation: qcOptionIn 0.4s ease both; }
                .qc-pop { animation: qcPop 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) both; }
                .qc-glow { animation: qcGlow 1.8s ease-in-out infinite; }

                .qc-cta { position: relative; overflow: hidden; }
                .qc-cta::after {
                    content: '';
                    position: absolute;
                    top: 0; left: -75%;
                    width: 50%; height: 100%;
                    background: linear-gradient(120deg, transparent, rgba(255,255,255,0.55), transparent);
                    transform: skewX(-20deg);
                    transition: left 0.6s ease;
                }
                .qc-cta:hover::after { left: 130%; }

                .qc-option:hover { transform: translateX(2px); }
                .qc-option { transition: transform 0.15s ease, background-color 0.15s ease; }

                .qc-close:hover { transform: rotate(90deg); }
                .qc-close { transition: transform 0.25s ease, background-color 0.15s ease, color 0.15s ease; }

                .qc-bookmark:active { transform: scale(0.85); }
                .qc-bookmark { transition: transform 0.15s ease, background-color 0.15s ease, color 0.15s ease; }

                @media (prefers-reduced-motion: reduce) {
                    .qc-in, .qc-float, .qc-option-in, .qc-pop, .qc-glow { animation: none; }
                }
            `}</style>

            {/* ambient dot-grid backdrop */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.35]"
                style={{
                    backgroundImage: "radial-gradient(#DAD7C7 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                    maskImage: "radial-gradient(ellipse 60% 55% at 50% 35%, black 40%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(ellipse 60% 55% at 50% 35%, black 40%, transparent 100%)",
                }}
            />

            {/* floating decorative cards, echoing the setup screen */}
            <div
                className="qc-float pointer-events-none absolute left-[5%] top-[12%] hidden w-32 rounded-2xl border border-[#DAD7C7] bg-white p-3 text-left shadow-[0_10px_30px_-12px_rgba(28,43,30,0.25)] lg:block"
                style={{ "--r": "-6deg", animationDelay: "0.2s" }}
            >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EAF3DE] text-[#3B6D11]">
                    <Sparkles size={12} />
                </span>
                <p className="qc-sans mt-2 text-[10px] font-medium text-[#8A8879]">Stay sharp</p>
            </div>

            {/* Main card — width grows with the question text up to a cap, so short questions stay compact and long ones expand sideways before wrapping */}
            <div key={questionNum} className="qc-in qc-sans relative flex h-full max-h-full w-fit min-w-[320px] max-w-[92vw] flex-col rounded-[28px] border border-[#E3E1D5] bg-white p-5 shadow-[0_16px_40px_-20px_rgba(28,43,30,0.25)] sm:min-w-[420px] sm:max-w-2xl sm:p-8">

                {/* Progress + close — fixed, never scrolls */}
                <div className="flex shrink-0 items-center gap-3">
                    <div className="flex flex-1 gap-1.5">
                        {Array.from({ length: value.length }).map((_, i) => (
                            <span
                                key={i}
                                className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                                    i < questionNum - 1
                                        ? "bg-[#1C2B1E]"
                                        : i === questionNum - 1
                                        ? "qc-glow scale-y-125 bg-[#1C2B1E]"
                                        : "bg-[#E3E1D5]"
                                }`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={() => {
                            dispatch(resetQuiz());
                            navigate("/");
                        }}
                        className="qc-close flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EDEBE0] text-[#8A8879] hover:bg-[#DAD7C7] hover:text-[#1C2B1E]"
                    >
                        <X size={16} />
                    </button>
                </div>

                {/* Scrollable zone: question + options grow here, card height stays fixed */}
                <div className="mt-6 min-h-0 flex-1 overflow-y-auto pr-1">
                    {/* Eyebrow: question number + category */}
                    <div className="flex items-center justify-between">
                        <span className="qc-sans inline-flex items-center gap-1.5 rounded-full border border-[#C9A227]/30 bg-[#EAF3DE] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#3B6D11]">
                            Question {String(questionNum).padStart(2, "0")}
                        </span>
                        <span className="font-mono text-[11px] uppercase tracking-widest text-[#B4B2A9]">
                            {question.category}
                        </span>
                    </div>

                    {/* Question text */}
                    <h2 key={`q-${questionNum}`} className="qc-serif qc-in mt-4 text-2xl font-semibold leading-[1.2] text-[#1C2B1E] sm:text-[28px]" style={{ animationDelay: "0.08s" }}>
                        {question.question}
                    </h2>

                    {/* Options */}
                    <span className="mt-7 block font-mono text-[11px] tracking-widest text-[#B4B2A9]">
                        SELECT ONLY ONE
                    </span>
                    <div className="mt-4 flex flex-col">
                        {question.choices.map((choice, idx) => {
                            const isSelected = selectedAnswers[questionNum - 1] === choice;
                            return (
                                <label
                                    key={`${questionNum}-${idx}`}
                                    className={`qc-option qc-option-in flex cursor-pointer items-center gap-3.5 rounded-xl px-2 py-2.5 ${
                                        isSelected ? "bg-[#F6F9F0]" : "hover:bg-[#FAFAF7]"
                                    }`}
                                    style={{ animationDelay: `${0.08 + idx * 0.06}s` }}
                                >
                                    <input
                                        type="radio"
                                        name={`option-${questionNum}`}
                                        value={choice}
                                        checked={isSelected}
                                        onChange={(e) =>
                                            dispatch(setSelectedAnswer({ questionNum, answer: e.target.value }))
                                        }
                                        className="sr-only"
                                    />
                                    <span
                                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                                            isSelected ? "border-[#1C2B1E]" : "border-[#C7C4B6]"
                                        }`}
                                    >
                                        {isSelected && <span className="qc-pop h-2.5 w-2.5 rounded-full bg-[#1C2B1E]" />}
                                    </span>
                                    <span className="text-base text-[#1C2B1E]">{choice}</span>
                                </label>
                            );
                        })}
                    </div>
                </div>

                {/* Unanswered note + bookmark — fixed, never scrolls */}
                <div className="mt-4 flex shrink-0 items-center justify-between gap-3 border-t border-[#EDEBE0] pt-4">
                    <p className="text-[11px] leading-relaxed text-[#B4B2A9]">
                        Unanswered questions won't count toward your score.
                    </p>
                    <button className="qc-bookmark flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#B4B2A9] hover:bg-[#EDEBE0] hover:text-[#1C2B1E]">
                        {question.saved ? (
                            <BookmarkOff
                                size={16}
                                onClick={() => {
                                    let bookMarkOff = value.map((val) =>
                                        val.id === question.id ? { ...val, saved: false } : val
                                    );
                                    let removeFromLocal = savedCards.filter((val) => val.id !== question.id);
                                    dispatch(getQuestionData(bookMarkOff));
                                    dispatch(saveToLocal(removeFromLocal));
                                }}
                            />
                        ) : (
                            <Bookmark
                                size={16}
                                onClick={() => {
                                    let addBookMark = value.map((val) =>
                                        val.id === question.id ? { ...val, saved: true } : val
                                    );
                                    dispatch(getQuestionData(addBookMark));
                                    dispatch(saveToLocal([...savedCards, question]));
                                }}
                            />
                        )}
                    </button>
                </div>

                {/* Footer actions — fixed, never scrolls */}
                <div className="mt-5 flex shrink-0 items-center justify-end gap-5">
                    <button
                        onClick={() => dispatch(prevPage())}
                        className="text-sm font-semibold text-[#1C2B1E] transition-all duration-150 hover:opacity-60 active:scale-95"
                    >
                        Back
                    </button>
                    {questionNum === value.length ? (
                        <button
                            onClick={() => navigate("/score")}
                            className="qc-cta group flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#A6E65C] to-[#8FD84A] px-7 py-2.5 text-sm font-semibold text-[#1C2B1E] shadow-[0_10px_20px_-8px_rgba(166,230,92,0.65)] transition-transform duration-200 active:scale-95 hover:-translate-y-0.5"
                        >
                            Submit
                        </button>
                    ) : (
                        <button
                            onClick={() => dispatch(nextPage())}
                            className="qc-cta group flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#A6E65C] to-[#8FD84A] px-7 py-2.5 text-sm font-semibold text-[#1C2B1E] shadow-[0_10px_20px_-8px_rgba(166,230,92,0.65)] transition-transform duration-200 active:scale-95 hover:-translate-y-0.5"
                        >
                            Next
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}