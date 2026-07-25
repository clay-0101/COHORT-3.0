import React from "react";
import { useForm } from "react-hook-form";
import { getQuiz } from '../../api/QuizApi'
import { useDispatch, useSelector } from "react-redux";
import { setQuizStarted } from "../../features/quizSlice";



export default function QuizForm() {
    let dispatch = useDispatch()
  

    let { reset, handleSubmit, register, formState: { errors } } = useForm({ mode: 'onChange' })
    return (
        <div className="flex min-h-[80vh] w-full flex-1 items-center justify-center px-6 py-12">
            <div className="w-full max-w-lg">
                <span className="mb-3 inline-block rounded-full bg-[#EAF3DE] px-4 py-1 text-xs font-semibold tracking-wide text-[#3B6D11]">
                    SETUP
                </span>

                <h1 className="text-3xl font-bold text-[#1C2B1E] sm:text-4xl">
                    Set up your quiz
                </h1>
                <p className="mt-2 text-sm text-[#8A8879]">
                    Customize the quiz according to your preference, then start.
                </p>

                <form
                    onSubmit={handleSubmit((data) => {
                        getQuiz(data, dispatch)
                        dispatch(setQuizStarted(true))
                        reset()
                    })}
                    className="mt-8 flex flex-col gap-6">
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
                            className="w-full rounded-xl border border-[#DAD7C7] bg-white px-4 py-3 text-sm text-[#1C2B1E] outline-none placeholder:text-[#B4B2A9] focus:border-[#A6E65C] focus:ring-2 focus:ring-[#A6E65C]/40"
                        />
                    </div>
                    {errors.totalQuiz && <p className="text-[12px] text-red-600">{errors.totalQuiz.message}</p>}

                    {/* Difficulty */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-[#1C2B1E]">
                            Difficulty
                        </label>
                        <select
                            {...register('difficulty',{
                                required : 'Please select difficulty level'
                            })}
                            className="w-full rounded-xl border border-[#DAD7C7] bg-white px-4 py-3 text-sm text-[#1C2B1E] outline-none focus:border-[#A6E65C] focus:ring-2 focus:ring-[#A6E65C]/40">
                            <option value="">Select difficulty</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                     {errors.difficulty && <p className="text-[12px] text-red-600">{errors.difficulty.message}</p>}
                    {/* Category */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-[#1C2B1E]">
                            Category
                        </label>
                        <select
                            {...register('category', {
                                required : "Please select a category"
                            })}
                            className="w-full rounded-xl border border-[#DAD7C7] bg-white px-4 py-3 text-sm text-[#1C2B1E] outline-none focus:border-[#A6E65C] focus:ring-2 focus:ring-[#A6E65C]/40">
                            <option value="">Select category</option>
                            <option value="general">General knowledge</option>
                            <option value="science">Science</option>
                            <option value="history">History</option>
                            <option value="sports">Sports</option>
                            <option value="geography">Geography</option>
                            <option value="movies">Movies</option>
                            <option value="music">Music</option>
                        </select>
                    </div>
                    {errors.category && <p className="text-[12px] text-red-600">{errors.category.message}</p>}
                    <button
                        type="submit"
                        className="mt-4 w-full rounded-2xl bg-[#A6E65C] px-8 py-3 text-base font-semibold text-[#1C2B1E] shadow-sm transition-transform active:scale-95 hover:brightness-95"
                    >
                        Start Quiz
                    </button>
                </form>
            </div>
        </div>
    );
}
localStorage.clear()