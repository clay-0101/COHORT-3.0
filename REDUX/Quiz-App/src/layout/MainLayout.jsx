import React, { useState } from "react";
import { Home, PlayCircle, Bookmark, Menu, X, Sparkles } from "lucide-react";
import HomePage from "../pages/home/HomePage"
import { NavLink, Outlet, useNavigate } from "react-router"
import { useSelector } from "react-redux";


export default function MainLayout() {
  let navigate = useNavigate()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  let isQuizStarted = useSelector((state) => state.quiz.isQuizStarted)



  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#E7E4D5]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&display=swap');
        .ql-serif { font-family: 'Fraunces', serif; }
        .ql-sans { font-family: 'Inter', sans-serif; }
        .ql-navlink { position: relative; transition: background-color 0.2s ease, color 0.2s ease, transform 0.15s ease; }
        .ql-navlink:active { transform: scale(0.98); }
        .ql-navlink .ql-icon-wrap { transition: background-color 0.2s ease, color 0.2s ease; }
      `}</style>

      {/* Mobile top bar */}
      <div className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between border-b border-[#DAD7C7] bg-[#E7E4D5]/90 px-4 py-3 backdrop-blur-md md:hidden">
        <span className="ql-serif text-lg font-semibold tracking-tight text-[#1C2B1E]">
          Quiz<span className="text-[#C9A227]">ly</span>
        </span>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="rounded-lg p-2 text-[#1C2B1E] transition-colors hover:bg-[#DAD7C7]"
        >
          {isSidebarOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed z-10 top-0 left-0 h-full w-64 shrink-0 border-r border-[#DAD7C7] bg-[#E7E4D5] px-4 pb-6 pt-6 transition-transform duration-200 md:static md:translate-x-0 md:flex md:flex-col md:pt-8
        ${isSidebarOpen ? "translate-x-0 pt-20" : "-translate-x-full"}`}
      >
        <div className="mb-10 hidden items-center gap-2 px-2 md:flex">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1C2B1E] text-[#A6E65C]">
            <Sparkles size={16} />
          </span>
          <span className="ql-serif text-xl font-semibold tracking-tight text-[#1C2B1E]">
            Quiz<span className="text-[#C9A227]">ly</span>
          </span>
        </div>

        <nav className="flex flex-col gap-1">
          <NavLink
            to={'/'}
            end
            className={({ isActive }) => {
              return isActive
                ? 'ql-navlink ql-sans flex items-center gap-3 rounded-xl bg-[#1C2B1E] px-4 py-3 text-sm font-medium text-[#F3F6EC] shadow-sm'
                : 'ql-navlink ql-sans flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#5E5C50] hover:bg-[#DAD7C7]/70 hover:text-[#1C2B1E]'
            }}
          >
            <Home size={18} />
            Home
          </NavLink>

          <NavLink
            to={'/quiz'}
            className={({ isActive }) => {
              return isActive
                ? 'ql-navlink ql-sans flex items-center gap-3 rounded-xl bg-[#1C2B1E] px-4 py-3 text-sm font-medium text-[#F3F6EC] shadow-sm'
                : 'ql-navlink ql-sans flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#5E5C50] hover:bg-[#DAD7C7]/70 hover:text-[#1C2B1E]'
            }}
          >
            <PlayCircle size={18} />
            Start Quiz
          </NavLink>

          <NavLink
            to={isQuizStarted ? '/quiz' : '/saved'}
            className={({ isActive }) => {
              return isActive
                ? !isQuizStarted ? 'ql-navlink ql-sans flex items-center gap-3 rounded-xl bg-[#1C2B1E] px-4 py-3 text-sm font-medium text-[#F3F6EC] shadow-sm'
                : 'ql-navlink ql-sans flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium bg-[#C0504D]/15 text-[#8A3A38] hover:bg-[#C0504D]/20' : 'ql-navlink ql-sans flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#5E5C50] hover:bg-[#DAD7C7]/70 hover:text-[#1C2B1E]'
            }}
          >
            <Bookmark size={18} />
            Saved
          </NavLink>
        </nav>

        <div className="mt-auto hidden px-2 pt-6 md:block">
          <div className="rounded-xl border border-[#DAD7C7] bg-white/60 px-3 py-3">
            <p className="ql-sans text-[11px] leading-relaxed text-[#8A8879]">
              One question at a time — track your progress as you go.
            </p>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile when sidebar open */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-[5] bg-black/20 md:hidden" />
      )}


      <main className="flex min-h-0 flex-1 flex-col overflow-y-auto pt-16 md:pt-0">
        <div className="flex min-h-0 flex-1 items-center justify-center overflow-y-auto bg-white md:m-4 md:rounded-3xl md:border md:border-[#DAD7C7] md:shadow-[0_20px_50px_-24px_rgba(28,43,30,0.18)]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}