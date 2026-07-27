import React, { useEffect, useState } from "react";
import { Trophy, RotateCcw, Home, Sparkles } from "lucide-react";
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

    // tiered accent — the ring, glow, and trophy all read the same "temperature" as the score
    const tier =
        accuracy === 100 ? { ring: "#C9A227", glow: "#C9A227", bg: "#FBF3DA", text: "#8A6B12" } :
        accuracy >= 80 ? { ring: "#3B6D11", glow: "#A6E65C", bg: "#EAF3DE", text: "#3B6D11" } :
        accuracy >= 50 ? { ring: "#B98A2E", glow: "#E4C275", bg: "#FBF1DD", text: "#8A6519" } :
        { ring: "#B5533F", glow: "#E7A392", bg: "#FBEAE6", text: "#95412F" };

    const celebrate = accuracy >= 80;

    // animate the ring sweep + the score count-up on mount
    const radius = 42;
    const circumference = 2 * Math.PI * radius;
    const [drawn, setDrawn] = useState(false);
    const [displayScore, setDisplayScore] = useState(0);

    useEffect(() => {
        const raf = requestAnimationFrame(() => setDrawn(true));
        const duration = 700;
        const start = performance.now();
        let frame;
        const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            setDisplayScore(Math.round(progress * score));
            if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        return () => {
            cancelAnimationFrame(raf);
            cancelAnimationFrame(frame);
        };
    }, [score]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1C2B1E]/40 px-4 backdrop-blur-sm sm:px-6">
            <div className="font-body relative w-full max-w-md animate-[rise-in_0.5s_cubic-bezier(0.22,1,0.36,1)_both] overflow-hidden rounded-[28px] border border-[#E3E1D5] bg-white p-6 text-center shadow-[0_24px_60px_-20px_rgba(28,43,30,0.35)] motion-reduce:animate-none sm:p-8">

                {/* ambient dot-grid, same language as the rest of the app */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.3] [background-image:radial-gradient(#DAD7C7_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,black_30%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,black_30%,transparent_100%)]"
                />

                {/* Ring + trophy — the signature element, doubles as the accuracy readout */}
                <div className="relative mx-auto flex h-28 w-28 items-center justify-center">
                    <div
                        className="absolute inset-0 animate-[ring-glow_2.4s_ease-in-out_infinite] rounded-full blur-xl motion-reduce:animate-none"
                        style={{ backgroundColor: tier.glow }}
                    />
                    <svg viewBox="0 0 96 96" className="relative h-28 w-28 -rotate-90">
                        <circle cx="48" cy="48" r={radius} fill="none" stroke="#EDEBE0" strokeWidth="6" />
                        <circle
                            cx="48" cy="48" r={radius} fill="none"
                            stroke={tier.ring} strokeWidth="6" strokeLinecap="round"
                            strokeDasharray={circumference}
                            strokeDashoffset={drawn ? circumference * (1 - accuracy / 100) : circumference}
                            className="transition-[stroke-dashoffset] duration-[900ms] delay-[100ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
                        />
                    </svg>
                    <div
                        className="absolute flex h-14 w-14 animate-[pop-scale_0.6s_cubic-bezier(0.34,1.56,0.64,1)_0.15s_both] items-center justify-center rounded-full motion-reduce:animate-none"
                        style={{ backgroundColor: tier.bg }}
                    >
                        <Trophy size={24} style={{ color: tier.text }} />
                    </div>

                    {celebrate && (
                        <>
                            <Sparkles
                                size={13}
                                className="absolute -right-1 top-1 animate-[sparkle-pulse_2.2s_ease-in-out_infinite] motion-reduce:animate-none"
                                style={{ color: tier.ring, animationDelay: "0.2s" }}
                            />
                            <Sparkles
                                size={10}
                                className="absolute -left-2 bottom-3 animate-[sparkle-pulse_2.2s_ease-in-out_infinite] motion-reduce:animate-none"
                                style={{ color: tier.ring, animationDelay: "0.7s" }}
                            />
                            <Sparkles
                                size={9}
                                className="absolute right-2 -bottom-1 animate-[sparkle-pulse_2.2s_ease-in-out_infinite] motion-reduce:animate-none"
                                style={{ color: tier.ring, animationDelay: "1.1s" }}
                            />
                        </>
                    )}
                </div>

                {/* Label */}
                <span
                    className="mt-5 block animate-[fade-up-10_0.5s_ease_both] font-mono text-xs font-semibold tracking-widest text-[#1C2B1E] motion-reduce:animate-none"
                    style={{ animationDelay: "0.25s" }}
                >
                    QUIZ COMPLETE
                </span>

                {/* Score */}
                <h2
                    className="font-display mt-2 animate-[fade-up-10_0.5s_ease_both] text-4xl font-semibold text-[#1C2B1E] motion-reduce:animate-none sm:text-5xl"
                    style={{ animationDelay: "0.32s" }}
                >
                    {displayScore}<span className="text-xl text-[#C7C4B6] sm:text-2xl">/{value.length}</span>
                </h2>

                <p
                    className="mt-3 animate-[fade-up-10_0.5s_ease_both] text-sm text-[#8A8879] motion-reduce:animate-none"
                    style={{ animationDelay: "0.4s" }}
                >
                    {message}
                </p>

                {/* Stats row */}
                <div
                    className="mt-8 grid animate-[fade-up-10_0.5s_ease_both] grid-cols-3 divide-x divide-[#E3E1D5] rounded-2xl border border-[#E3E1D5] py-4 motion-reduce:animate-none"
                    style={{ animationDelay: "0.48s" }}
                >
                    <div>
                        <p className="font-display text-lg font-semibold text-[#1C2B1E]">{score}</p>
                        <p className="mt-1 text-[11px] text-[#B4B2A9]">Correct</p>
                    </div>
                    <div>
                        <p className="font-display text-lg font-semibold text-[#1C2B1E]">{value.length - score}</p>
                        <p className="mt-1 text-[11px] text-[#B4B2A9]">Wrong</p>
                    </div>
                    <div>
                        <p className="font-display text-lg font-semibold" style={{ color: tier.ring }}>{accuracy}%</p>
                        <p className="mt-1 text-[11px] text-[#B4B2A9]">Accuracy</p>
                    </div>
                </div>

                {/* Actions */}
                <div
                    className="mt-8 flex animate-[fade-up-10_0.5s_ease_both] flex-col gap-3 motion-reduce:animate-none sm:flex-row"
                    style={{ animationDelay: "0.56s" }}
                >
                    <button
                        onClick={() => {
                            dispatch(resetQuiz())
                            navigate('/')
                        }}
                        className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#E3E1D5] px-6 py-3 text-sm font-semibold text-[#1C2B1E] transition-all duration-150 hover:bg-[#F5F4EC] active:scale-95">
                        <Home size={16} />
                        Home
                    </button>
                    <button
                        onClick={() => {
                            navigate('/quiz')
                            dispatch(resetQuiz())
                        }}
                        className="group relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#A6E65C] to-[#8FD84A] px-6 py-3 text-sm font-semibold text-[#1C2B1E] shadow-[0_10px_20px_-8px_rgba(166,230,92,0.65)] transition-transform duration-200 active:scale-95 hover:-translate-y-0.5 after:absolute after:left-[-75%] after:top-0 after:h-full after:w-1/2 after:[background:linear-gradient(120deg,transparent,rgba(255,255,255,0.55),transparent)] after:skew-x-[-20deg] after:transition-[left] after:duration-500 after:ease-in-out after:content-[''] hover:after:left-[130%]">
                        <RotateCcw size={16} className="transition-transform duration-300 group-hover:-rotate-180" />
                        Try Again
                    </button>
                </div>
            </div>
        </div>
    );
}