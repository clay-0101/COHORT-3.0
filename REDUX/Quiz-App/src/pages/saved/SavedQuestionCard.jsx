import React, { useState } from "react";
import { CheckCircle2, Layers, Trash2, ChevronDown } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { saveToLocal } from "../../features/saveQuiz"
import {getQuestionData} from "../../features/quizSlice"

export default function SavedQuestionCard({ item }) {
    const [showAnswer, setShowAnswer] = useState(false);
    let savedCards = useSelector((state) => state.saveQuiz.value)
    let value = useSelector((state) => state.quiz.value)
    let dispatch = useDispatch()
    return (
        <div className="w-full rounded-2xl border border-[#DAD7C7] bg-white px-5 py-4 transition-colors hover:border-[#A6E65C]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                {/* Question */}
                <div className="flex items-center gap-3 sm:flex-1">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EAF3DE] text-[#3B6D11]">
                        <Layers size={16} />
                    </span>
                    <p className="text-sm font-medium text-[#1C2B1E] sm:text-base">
                        {item.question}
                    </p>
                </div>

                {/* Meta info + actions */}
                <div className="flex flex-wrap items-center gap-2 sm:shrink-0">
                    <span className="rounded-full border border-[#DAD7C7] px-3 py-1 text-xs font-medium text-[#5E5C50]">
                        {item.category}
                    </span>

                    <span className="rounded-full border border-[#DAD7C7] px-3 py-1 text-xs font-medium text-[#5E5C50]">
                        {item.type}
                    </span>

                    <button
                        onClick={() => setShowAnswer(!showAnswer)}
                        className="flex items-center gap-1 rounded-full border border-[#DAD7C7] px-3 py-1 text-xs font-medium text-[#5E5C50] hover:bg-[#F1EFE8]"
                    >
                        Answer
                        <ChevronDown
                            size={13}
                            className={`transition-transform ${showAnswer ? "rotate-180" : ""}`}
                        />
                    </button>

                    <button

                        className="flex h-7 w-7 items-center justify-center rounded-full text-[#8A8879] hover:bg-[#FBE7E4] hover:text-[#C0392B]"
                    >
                        <Trash2
                            onClick={() => {
                                let bookMarkOff = value.map((val) => {
                                    return val.id === item.id ? { ...val, saved: false } : val
                                })
                                let removeFromLocal = savedCards.filter((val) => {
                                    return val.id !== item.id
                                })

                                dispatch(getQuestionData(bookMarkOff))
                                dispatch(saveToLocal(removeFromLocal))
                            }}
                            size={15} />
                    </button>
                </div>
            </div>

            {/* Answer reveal */}
            {showAnswer && (
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-[#EAF3DE] px-4 py-3">
                    <CheckCircle2 size={16} className="shrink-0 text-[#3B6D11]" />
                    <p className="text-sm font-medium text-[#3B6D11]">
                        {item.correctAnswer}
                    </p>
                </div>
            )}
        </div>
    );
}