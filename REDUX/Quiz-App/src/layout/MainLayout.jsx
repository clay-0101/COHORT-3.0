import React, { useState } from "react";
import { Home, PlayCircle, Bookmark, Menu, X } from "lucide-react";
import HomePage from "../pages/home/HomePage"
import { NavLink, Outlet, useNavigate } from "react-router"

export default function MainLayout() {
  let navigate = useNavigate()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const linkClass = ({ isActive }) => {
    return isActive
      ? 'flex items-center gap-3 rounded-xl bg-[#A6E65C] px-4 py-3 text-sm font-medium text-[#1C2B1E]'
      : 'flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#5E5C50] hover:bg-[#DAD7C7]'
  }

  return (
    <div className="flex min-h-screen w-full bg-[#E7E4D5]">
      {/* Mobile top bar */}
      <div className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between border-b border-[#DAD7C7] bg-[#E7E4D5] px-4 py-3 md:hidden">
        <span className="text-lg font-bold text-[#1C2B1E]">Quizly</span>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="rounded-lg p-2 text-[#1C2B1E] hover:bg-[#DAD7C7]"
        >
          {isSidebarOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed z-10 top-0 left-0 h-full w-64 shrink-0 border-r border-[#DAD7C7] bg-[#E7E4D5] px-4 pb-6 pt-6 transition-transform duration-200 md:static md:translate-x-0 md:flex md:flex-col md:pt-8
        ${isSidebarOpen ? "translate-x-0 pt-20" : "-translate-x-full"}`}
      >
        <div className="mb-10 hidden px-2 md:block">
          <span className="text-xl font-bold text-[#1C2B1E]">Quizly</span>
        </div>

        <nav className="flex flex-col gap-1">
          <NavLink
            to={'/'}
            end
            className={linkClass}
          >
            <Home size={18} />
            Home
          </NavLink>

          <NavLink
            to={'/quiz'}
            className={linkClass}
          >
            <PlayCircle size={18} />
            Start Quiz
          </NavLink>

          <NavLink
            to={'/saved'}
            className={linkClass}
          >
            <Bookmark size={18} />
            Saved
          </NavLink>
        </nav>
      </aside>

      {/* Overlay for mobile when sidebar open */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-[5] bg-black/20 md:hidden" />
      )}

    
      <main className="flex flex-1 flex-col pt-16 md:pt-0">
        <div className="flex justify-center items-center flex-1 bg-white md:m-4 md:rounded-3xl md:border md:border-[#DAD7C7]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}