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
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600;700&display=swap');
                .ss-serif { font-family: 'Fraunces', serif; }
                .ss-sans { font-family: 'Inter', sans-serif; }

                @keyframes ssRise { from { opacity: 0; transform: translateY(16px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
                @keyframes ssFadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes ssPop { 0% { transform: scale(0.4); opacity: 0; } 60% { transform: scale(1.08); opacity: 1; } 100% { transform: scale(1); } }
                @keyframes ssSparkle { 0%, 100% { opacity: 0.25; transform: translateY(0) scale(0.9); } 50% { opacity: 1; transform: translateY(-4px) scale(1.1); } }
                @keyframes ssGlowPulse { 0%, 100% { opacity: 0.35; } 50% { opacity: 0.7; } }

                .ss-in { animation: ssRise 0.5s cubic-bezier(0.22, 1, 0.36, 1) both; }
                .ss-item { animation: ssFadeUp 0.5s ease both; }
                .ss-trophy { animation: ssPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s both; }
                .ss-sparkle { animation: ssSparkle 2.2s ease-in-out infinite; }
                .ss-ring-glow { animation: ssGlowPulse 2.4s ease-in-out infinite; }

                .ss-ring-progress { transition: stroke-dashoffset 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.1s; }

                .ss-cta { position: relative; overflow: hidden; }
                .ss-cta::after {
                    content: '';
                    position: absolute;
                    top: 0; left: -75%;
                    width: 50%; height: 100%;
                    background: linear-gradient(120deg, transparent, rgba(255,255,255,0.55), transparent);
                    transform: skewX(-20deg);
                    transition: left 0.6s ease;
                }
                .ss-cta:hover::after { left: 130%; }

                @media (prefers-reduced-motion: reduce) {
                    .ss-in, .ss-item, .ss-trophy, .ss-sparkle, .ss-ring-glow { animation: none; }
                    .ss-ring-progress { transition: none; }
                }
            `}</style>

            <div className="ss-in ss-sans relative w-full max-w-md overflow-hidden rounded-[28px] border border-[#E3E1D5] bg-white p-6 text-center shadow-[0_24px_60px_-20px_rgba(28,43,30,0.35)] sm:p-8">

                {/* ambient dot-grid, same language as the rest of the app */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.3]"
                    style={{
                        backgroundImage: "radial-gradient(#DAD7C7 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                        maskImage: "radial-gradient(ellipse 70% 55% at 50% 0%, black 30%, transparent 100%)",
                        WebkitMaskImage: "radial-gradient(ellipse 70% 55% at 50% 0%, black 30%, transparent 100%)",
                    }}
                />

                {/* Ring + trophy — the signature element, doubles as the accuracy readout */}
                <div className="relative mx-auto flex h-28 w-28 items-center justify-center">
                    <div
                        className="ss-ring-glow absolute inset-0 rounded-full blur-xl"
                        style={{ backgroundColor: tier.glow }}
                    />
                    <svg viewBox="0 0 96 96" className="relative h-28 w-28 -rotate-90">
                        <circle cx="48" cy="48" r={radius} fill="none" stroke="#EDEBE0" strokeWidth="6" />
                        <circle
                            cx="48" cy="48" r={radius} fill="none"
                            stroke={tier.ring} strokeWidth="6" strokeLinecap="round"
                            strokeDasharray={circumference}
                            strokeDashoffset={drawn ? circumference * (1 - accuracy / 100) : circumference}
                            className="ss-ring-progress"
                        />
                    </svg>
                    <div
                        className="ss-trophy absolute flex h-14 w-14 items-center justify-center rounded-full"
                        style={{ backgroundColor: tier.bg }}
                    >
                        <Trophy size={24} style={{ color: tier.text }} />
                    </div>

                    {celebrate && (
                        <>
                            <Sparkles size={13} className="ss-sparkle absolute -right-1 top-1" style={{ color: tier.ring, animationDelay: "0.2s" }} />
                            <Sparkles size={10} className="ss-sparkle absolute -left-2 bottom-3" style={{ color: tier.ring, animationDelay: "0.7s" }} />
                            <Sparkles size={9} className="ss-sparkle absolute right-2 -bottom-1" style={{ color: tier.ring, animationDelay: "1.1s" }} />
                        </>
                    )}
                </div>

                {/* Label */}
                <span className="ss-item mt-5 block font-mono text-xs font-semibold tracking-widest text-[#1C2B1E]" style={{ animationDelay: "0.25s" }}>
                    QUIZ COMPLETE
                </span>

                {/* Score */}
                <h2 className="ss-item ss-serif mt-2 text-4xl font-semibold text-[#1C2B1E] sm:text-5xl" style={{ animationDelay: "0.32s" }}>
                    {displayScore}<span className="text-xl text-[#C7C4B6] sm:text-2xl">/{value.length}</span>
                </h2>

                <p className="ss-item mt-3 text-sm text-[#8A8879]" style={{ animationDelay: "0.4s" }}>
                    {message}
                </p>

                {/* Stats row */}
                <div className="ss-item mt-8 grid grid-cols-3 divide-x divide-[#E3E1D5] rounded-2xl border border-[#E3E1D5] py-4" style={{ animationDelay: "0.48s" }}>
                    <div>
                        <p className="ss-serif text-lg font-semibold text-[#1C2B1E]">{score}</p>
                        <p className="mt-1 text-[11px] text-[#B4B2A9]">Correct</p>
                    </div>
                    <div>
                        <p className="ss-serif text-lg font-semibold text-[#1C2B1E]">{value.length - score}</p>
                        <p className="mt-1 text-[11px] text-[#B4B2A9]">Wrong</p>
                    </div>
                    <div>
                        <p className="ss-serif text-lg font-semibold" style={{ color: tier.ring }}>{accuracy}%</p>
                        <p className="mt-1 text-[11px] text-[#B4B2A9]">Accuracy</p>
                    </div>
                </div>

                {/* Actions */}
                <div className="ss-item mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "0.56s" }}>
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
                        className="ss-cta group flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#A6E65C] to-[#8FD84A] px-6 py-3 text-sm font-semibold text-[#1C2B1E] shadow-[0_10px_20px_-8px_rgba(166,230,92,0.65)] transition-transform duration-200 active:scale-95 hover:-translate-y-0.5">
                        <RotateCcw size={16} className="transition-transform duration-300 group-hover:-rotate-180" />
                        Try Again
                    </button>
                </div>
            </div>
        </div>
    );
}