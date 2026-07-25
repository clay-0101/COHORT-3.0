import React from "react";
import { Trophy, RotateCcw, Home } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { resetQuiz } from "../../features/quizSlice"

export default function ScoreScreen() {
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let value = useSelector((state) => state.quiz.value)
    let selectedAnswers = useSelector((state) => state.quiz.selectedAnswers)
    const score = value.reduce((acc, q, idx) => {
        return acc + (q.correctAnswer === selectedAnswers[idx] ? 1 : 0);
    }, 0);
    const accuracy = Math.round((score / value.length) * 100);

    let message = "";
    if (accuracy === 100) {
        message = "Perfect! You nailed every question.";
    } else if (accuracy >= 80) {
        message = "Great job! You scored really well.";
    } else if (accuracy >= 50) {
        message = "Not bad! Keep practicing to improve.";
    } else {
        message = "Don't worry, try again and you'll get better.";
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1C2B1E]/40 px-6 backdrop-blur-sm">
            <div className="relative w-full max-w-md rounded-3xl border border-[#DAD7C7] bg-white p-8 text-center shadow-xl sm:p-10">
                {/* Icon */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF3DE]">
                    <Trophy size={28} className="text-[#3B6D11]" />
                </div>

                {/* Label */}
                <span className="mt-6 block font-mono text-xs font-semibold tracking-widest text-[#B4B2A9]">
                    QUIZ COMPLETE
                </span>

                {/* Score */}
                <h2 className="mt-3 text-5xl font-bold text-[#1C2B1E]">
                    {score}<span className="text-2xl text-[#B4B2A9]">/{value.length}</span>
                </h2>

                <p className="mt-3 text-sm text-[#8A8879]">
                   {message}
                </p>

                {/* Stats row */}
                <div className="mt-8 grid grid-cols-3 divide-x divide-[#DAD7C7] rounded-2xl border border-[#DAD7C7] py-4">
                    <div>
                        <p className="text-lg font-bold text-[#1C2B1E]">{score}</p>
                        <p className="mt-1 text-xs text-[#8A8879]">Correct</p>
                    </div>
                    <div>
                        <p className="text-lg font-bold text-[#1C2B1E]">{value.length - score}</p>
                        <p className="mt-1 text-xs text-[#8A8879]">Wrong</p>
                    </div>
                    <div>
                        <p className="text-lg font-bold text-[#1C2B1E]">{accuracy}%</p>
                        <p className="mt-1 text-xs text-[#8A8879]">Accuracy</p>
                    </div>
                </div>

                {/* Actions */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <button
                        onClick={() => {
                            dispatch(resetQuiz())
                            navigate('/')
                        }}
                        className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-[#DAD7C7] px-6 py-3 text-sm font-semibold text-[#1C2B1E] hover:bg-[#F1EFE8]">
                        <Home size={16} />
                        Home
                    </button>
                    <button
                        onClick={() => {
                            navigate('/quiz')
                            dispatch(resetQuiz())
                        }}
                        className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#A6E65C] px-6 py-3 text-sm font-semibold text-[#1C2B1E] shadow-sm transition-transform active:scale-95 hover:brightness-95">
                        <RotateCcw size={16} />
                        Try Again
                    </button>
                </div>
            </div>
        </div>
    );
}