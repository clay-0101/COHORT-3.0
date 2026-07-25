import React from "react";
import { use } from "react";
import { useNavigate } from "react-router";

export default function HomePage() {
 let navigate =    useNavigate()
    return (
        <div className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
            <span className="mb-4 rounded-full bg-[#EAF3DE] px-4 py-1 text-xs font-semibold tracking-wide text-[#3B6D11]">
                QUIZ APP
            </span>

            <h1 className="max-w-xl text-4xl font-bold leading-tight text-[#1C2B1E] sm:text-5xl">
                Test what you know, one question at a time.
            </h1>

            <p className="mt-4 max-w-md text-sm text-[#8A8879] sm:text-base">
                A simple and clean quiz app — check your knowledge, track your progress, and revisit your saved questions later.
            </p>

            <button
            onClick={()=>navigate('/quiz')}
            className="mt-10 rounded-2xl bg-[#A6E65C] px-8 py-3 text-base font-semibold text-[#1C2B1E] shadow-sm hover:brightness-95">
                Start Quiz
            </button>
        </div>
    );
}