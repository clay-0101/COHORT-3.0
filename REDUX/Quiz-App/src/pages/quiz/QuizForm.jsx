import React from "react";
import { useForm } from "react-hook-form";
import { getQuiz } from '../../api/QuizApi'
import { useDispatch, useSelector } from "react-redux";
import { setQuizStarted } from "../../features/quizSlice";
import { Sparkles, ListChecks, ArrowRight } from "lucide-react";



export default function QuizForm() {
    let dispatch = useDispatch()


    let { reset, handleSubmit, register, formState: { errors } } = useForm({ mode: 'onChange' })
    return (
        <div className="relative flex min-h-[80vh] w-full flex-1 items-center justify-center overflow-hidden px-6 py-14 sm:px-6">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&display=swap');
                .qf-serif { font-family: 'Fraunces', serif; }
                .qf-sans { font-family: 'Inter', sans-serif; }

                @keyframes qfFadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes qfFloat { 0%, 100% { transform: translateY(0) rotate(var(--r, 0deg)); } 50% { transform: translateY(-10px) rotate(var(--r, 0deg)); } }
                .qf-in { animation: qfFadeUp 0.7s ease both; }
                .qf-float { animation: qfFloat 5s ease-in-out infinite; }

                .qf-cta { position: relative; overflow: hidden; }
                .qf-cta::after {
                    content: '';
                    position: absolute;
                    top: 0; left: -75%;
                    width: 50%; height: 100%;
                    background: linear-gradient(120deg, transparent, rgba(255,255,255,0.55), transparent);
                    transform: skewX(-20deg);
                    transition: left 0.6s ease;
                }
                .qf-cta:hover::after { left: 130%; }

                @media (prefers-reduced-motion: reduce) { .qf-in, .qf-float { animation: none; } }
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

            {/* floating decorative cards */}
            <div
                className="qf-float pointer-events-none absolute left-[6%] top-[14%] hidden w-36 rounded-2xl border border-[#DAD7C7] bg-white p-3.5 text-left shadow-[0_10px_30px_-12px_rgba(28,43,30,0.25)] lg:block"
                style={{ "--r": "-7deg", animationDelay: "0.2s" }}
            >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EAF3DE] text-[#3B6D11]">
                    <ListChecks size={13} />
                </span>
                <p className="qf-sans mt-2 text-[11px] font-medium text-[#8A8879]">10–50 questions</p>
            </div>

            <div
                className="qf-float pointer-events-none absolute right-[6%] top-[22%] hidden w-36 rounded-2xl border border-[#DAD7C7] bg-white p-3.5 text-left shadow-[0_10px_30px_-12px_rgba(28,43,30,0.25)] lg:block"
                style={{ "--r": "6deg", animationDelay: "0.6s" }}
            >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F5E9F7] text-[#7A3E91]">
                    <Sparkles size={13} />
                </span>
                <p className="qf-sans mt-2 text-[11px] font-medium text-[#8A8879]">Pick your difficulty</p>
            </div>

            <div className="relative w-full max-w-md">
                {/* eyebrow */}
                <span className="qf-in qf-sans mb-5 inline-flex items-center gap-1.5 rounded-full border border-[#C9A227]/30 bg-[#EAF3DE] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#3B6D11]">
                    <Sparkles size={12} className="text-[#C9A227]" />
                    Setup
                </span>

                {/* headline */}
                <h1
                    className="qf-in qf-serif text-3xl font-semibold leading-[1.15] text-[#1C2B1E] sm:text-4xl"
                    style={{ animationDelay: "0.08s" }}
                >
                    Set up your <span className="text-[#C9A227]">quiz.</span>
                </h1>

                <p
                    className="qf-in qf-sans mt-3 max-w-sm text-sm leading-relaxed text-[#8A8879] sm:text-base"
                    style={{ animationDelay: "0.16s" }}
                >
                    Customize the quiz according to your preference, then start.
                </p>

                <form
                    onSubmit={handleSubmit((data) => {
                        getQuiz(data, dispatch)
                        dispatch(setQuizStarted(true))
                        reset()
                    })}
                    className="qf-in qf-sans mt-8 flex flex-col gap-5"
                    style={{ animationDelay: "0.24s" }}
                >
                    {/* Number of questions */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-[#1C2B1E]">
                            Number of questions
                        </label>
                        <input
                            {...register('totalQuiz', {
                                required: 'Fill this field',
                                min: {
                                    value: 10,
                                    message: 'Mininum value 10'
                                },
                                max: {
                                    value: 50,
                                    message: 'Maximum value 50'
                                }
                            })}
                            type="number"
                            placeholder="e.g. 10"
                            className="w-full rounded-xl border border-[#DAD7C7] bg-white px-4 py-3 text-sm text-[#1C2B1E] outline-none transition-colors placeholder:text-[#B4B2A9] focus:border-[#1C2B1E] focus:ring-2 focus:ring-[#A6E65C]/40"
                        />
                        {errors.totalQuiz && <p className="mt-1.5 text-[12px] text-[#B5533F]">{errors.totalQuiz.message}</p>}
                    </div>

                    {/* Difficulty */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-[#1C2B1E]">
                            Difficulty
                        </label>
                        <select
                            {...register('difficulty', {
                                required: 'Please select difficulty level'
                            })}
                            className="w-full rounded-xl border border-[#DAD7C7] bg-white px-4 py-3 text-sm text-[#1C2B1E] outline-none transition-colors focus:border-[#1C2B1E] focus:ring-2 focus:ring-[#A6E65C]/40">
                            <option value="">Select difficulty</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                        {errors.difficulty && <p className="mt-1.5 text-[12px] text-[#B5533F]">{errors.difficulty.message}</p>}
                    </div>

                    {/* Category */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-[#1C2B1E]">
                            Category
                        </label>
                        <select
                            {...register('category', {
                                required: "Please select a category"
                            })}
                            className="w-full rounded-xl border border-[#DAD7C7] bg-white px-4 py-3 text-sm text-[#1C2B1E] outline-none transition-colors focus:border-[#1C2B1E] focus:ring-2 focus:ring-[#A6E65C]/40">
                            <option value="">Select category</option>
                            <option value="general">General knowledge</option>
                            <option value="science">Science</option>
                            <option value="history">History</option>
                            <option value="sports">Sports</option>
                            <option value="geography">Geography</option>
                            <option value="movies">Movies</option>
                            <option value="music">Music</option>
                        </select>
                        {errors.category && <p className="mt-1.5 text-[12px] text-[#B5533F]">{errors.category.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="qf-cta group mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#A6E65C] to-[#8FD84A] px-8 py-3 text-base font-semibold text-[#1C2B1E] shadow-[0_12px_24px_-8px_rgba(166,230,92,0.65)] transition-transform duration-200 active:scale-95 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-8px_rgba(166,230,92,0.8)]"
                    >
                        Start Quiz
                        <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                </form>
            </div>
        </div>
    );
}