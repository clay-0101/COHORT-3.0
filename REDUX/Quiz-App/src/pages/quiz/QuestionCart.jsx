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
            {/* ambient dot-grid backdrop */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:radial-gradient(#DAD7C7_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_60%_55%_at_50%_35%,black_40%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_60%_55%_at_50%_35%,black_40%,transparent_100%)]"
            />

            {/* floating decorative card, echoing the setup screen */}
            <div
                className="pointer-events-none absolute left-[5%] top-[12%] hidden w-32 animate-[float-y_5s_ease-in-out_infinite] rounded-2xl border border-[#DAD7C7] bg-white p-3 text-left shadow-[0_10px_30px_-12px_rgba(28,43,30,0.25)] motion-reduce:animate-none lg:block"
                style={{ "--r": "-6deg", animationDelay: "0.2s" }}
            >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EAF3DE] text-[#3B6D11]">
                    <Sparkles size={12} />
                </span>
                <p className="font-body mt-2 text-[10px] font-medium text-[#8A8879]">Stay sharp</p>
            </div>

            {/* Main card — width grows with the question text up to a cap, so short questions stay compact and long ones expand sideways before wrapping */}
            <div key={questionNum} className="font-body relative flex h-full max-h-full w-fit min-w-[320px] max-w-[92vw] animate-[fade-up-14_0.6s_ease_both] flex-col rounded-[28px] border border-[#E3E1D5] bg-white p-5 shadow-[0_16px_40px_-20px_rgba(28,43,30,0.25)] motion-reduce:animate-none sm:min-w-[420px] sm:max-w-2xl sm:p-8">

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
                                        ? "scale-y-125 animate-[glow-pulse_1.8s_ease-in-out_infinite] bg-[#1C2B1E] motion-reduce:animate-none"
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
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EDEBE0] text-[#8A8879] transition-all duration-200 ease-in-out hover:rotate-90 hover:bg-[#DAD7C7] hover:text-[#1C2B1E]"
                    >
                        <X size={16} />
                    </button>
                </div>

                {/* Scrollable zone: question + options grow here, card height stays fixed */}
                <div className="mt-6 min-h-0 flex-1 overflow-y-auto pr-1">
                    {/* Eyebrow: question number + category */}
                    <div className="flex items-center justify-between">
                        <span className="font-body inline-flex items-center gap-1.5 rounded-full border border-[#C9A227]/30 bg-[#EAF3DE] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#3B6D11]">
                            Question {String(questionNum).padStart(2, "0")}
                        </span>
                        <span className="font-mono text-[11px] uppercase tracking-widest text-[#B4B2A9]">
                            {question.category}
                        </span>
                    </div>

                    {/* Question text */}
                    <h2
                        key={`q-${questionNum}`}
                        className="font-display mt-4 animate-[fade-up-14_0.6s_ease_both] text-2xl font-semibold leading-[1.2] text-[#1C2B1E] motion-reduce:animate-none sm:text-[28px]"
                        style={{ animationDelay: "0.08s" }}
                    >
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
                                    className={`flex cursor-pointer animate-[option-in_0.4s_ease_both] items-center gap-3.5 rounded-xl px-2 py-2.5 transition-transform duration-150 hover:translate-x-0.5 motion-reduce:animate-none ${
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
                                        {isSelected && (
                                            <span className="h-2.5 w-2.5 animate-[pop-in_0.35s_cubic-bezier(0.34,1.56,0.64,1)_both] rounded-full bg-[#1C2B1E] motion-reduce:animate-none" />
                                        )}
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
                    <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#B4B2A9] transition-all duration-150 hover:bg-[#EDEBE0] hover:text-[#1C2B1E] active:scale-[0.85]">
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
                            className="group relative flex items-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-[#A6E65C] to-[#8FD84A] px-7 py-2.5 text-sm font-semibold text-[#1C2B1E] shadow-[0_10px_20px_-8px_rgba(166,230,92,0.65)] transition-transform duration-200 active:scale-95 hover:-translate-y-0.5 after:absolute after:left-[-75%] after:top-0 after:h-full after:w-1/2 after:[background:linear-gradient(120deg,transparent,rgba(255,255,255,0.55),transparent)] after:skew-x-[-20deg] after:transition-[left] after:duration-500 after:ease-in-out after:content-[''] hover:after:left-[130%]"
                        >
                            Submit
                        </button>
                    ) : (
                        <button
                            onClick={() => dispatch(nextPage())}
                            className="group relative flex items-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-[#A6E65C] to-[#8FD84A] px-7 py-2.5 text-sm font-semibold text-[#1C2B1E] shadow-[0_10px_20px_-8px_rgba(166,230,92,0.65)] transition-transform duration-200 active:scale-95 hover:-translate-y-0.5 after:absolute after:left-[-75%] after:top-0 after:h-full after:w-1/2 after:[background:linear-gradient(120deg,transparent,rgba(255,255,255,0.55),transparent)] after:skew-x-[-20deg] after:transition-[left] after:duration-500 after:ease-in-out after:content-[''] hover:after:left-[130%]"
                        >
                            Next
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}