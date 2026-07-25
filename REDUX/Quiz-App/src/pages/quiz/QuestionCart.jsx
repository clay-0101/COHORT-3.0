import React from "react";
import { BookmarkOff, Bookmark, X } from "lucide-react";
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
        <div className="relative z-0 flex min-h-[80vh] w-full items-center justify-center px-4 py-10 sm:px-6 sm:py-16">
            
            {/* Background layers */}
            <div className="absolute inset-4 top-6 translate-x-2 translate-y-6 rotate-1 rounded-3xl bg-[#1C2B1E]/70 sm:translate-x-3 sm:translate-y-10" />
            <div className="absolute inset-4 top-6 -translate-x-2 -translate-y-2 -rotate-1 rounded-3xl bg-[#A6E65C]/90 sm:-translate-x-5 sm:-translate-y-5" />

            {/* Main card */}
            <div className="relative z-10 flex w-full max-w-2xl flex-col rounded-3xl border border-[#DAD7C7] bg-white p-5 shadow-sm sm:p-8 md:p-10">

                {/* Close button (top-right corner) */}
                <button
                    onClick={() => {
                        dispatch(resetQuiz());
                        navigate("/"); // back to home
                    }}
                    className="absolute right-4 top-4 text-[#8A8879] hover:text-[#C0392B]"
                >
                    <X size={20} />
                </button>

                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full px-3 py-1 text-xs font-semibold bg-[#A6E65C]/30 text-[#1C2B1E]">
                        {question.category}
                    </span>
                    <span className="rounded-full px-3 py-1 text-xs font-semibold bg-[#A6E65C]/50 text-[#1C2B1E]">
                        {question.type}
                    </span>
                </div>

                {/* Question number */}
                <span className="mt-4 font-mono text-xs font-semibold tracking-widest text-[#1C2B1E]">
                    Question {questionNum}
                </span>

                {/* Question text */}
                <h2 className="mt-3 text-xl font-bold leading-tight text-[#1C2B1E] sm:text-2xl md:text-3xl">
                    {question.question}
                </h2>

                {/* Options */}
                <span className="mt-6 font-mono text-xs tracking-widest text-[#B4B2A9] sm:mt-8">
                   Please select an option, otherwise this question will not be counted in your marks
                </span>
                <div className="mt-4 flex flex-col gap-4">
                    {question.choices.map((choice, idx) => (
                        <label key={idx} className="flex cursor-pointer items-center gap-3">
                            <input
                                type="radio"
                                name={`option-${questionNum}`}
                                value={choice}
                                checked={selectedAnswers[questionNum - 1] === choice}
                                onChange={(e) =>
                                    dispatch(setSelectedAnswer({ questionNum, answer: e.target.value }))
                                }
                                className="h-5 w-5 shrink-0 border-[#DAD7C7] text-[#1C2B1E] accent-[#A6E65C]"
                            />
                            <span className="text-sm text-[#1C2B1E] sm:text-base">{choice}</span>
                        </label>
                    ))}
                </div>

                {/* Footer actions */}
                <div className="mt-8 flex flex-wrap items-center justify-between gap-3 sm:mt-10">
                    <button>
                        {question.saved ? (
                            <BookmarkOff
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
                    <div className="flex flex-wrap items-center gap-2">
                        <button
                            onClick={() => dispatch(prevPage())}
                            className="rounded-2xl px-4 py-2.5 text-sm font-semibold text-[#1C2B1E] hover:bg-[#F1EFE8] sm:px-6 sm:py-3"
                        >
                            Back
                        </button>
                        {questionNum === value.length ? (
                            <button
                                onClick={() => navigate("/score")}
                                className="rounded-2xl bg-[#A6E65C] px-6 py-2.5 text-sm font-semibold text-[#1C2B1E] sm:px-8 sm:py-3"
                            >
                                Submit
                            </button>
                        ) : (
                            <button
                                onClick={() => dispatch(nextPage())}
                                className="rounded-2xl bg-[#A6E65C] px-6 py-2.5 text-sm font-semibold text-[#1C2B1E] sm:px-8 sm:py-3"
                            >
                                Next
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
