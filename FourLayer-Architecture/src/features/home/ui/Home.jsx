import { useState } from "react";
import {
    Home,
    Compass,
    Clock,
    Settings,
    Search,
    Bell,
    Play,
    Download,
    MoreHorizontal,
    Volume2,
    Menu,
    X,
} from "lucide-react";

import Sidebar from "../../../Common/Sidebar";
import useHome from "../hooks/homeHooks";
import SearchResult from "./components/searchResult";

export default function DeLessMusic() {
    let { searchHandle,setTrackName } = useHome()
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="h-screen  overflow-hidden bg-[#0B0B0E] text-white">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600&display=swap');
        @keyframes eq1 { 0%,100% { height: 40%; } 50% { height: 100%; } }
        @keyframes eq2 { 0%,100% { height: 100%; } 50% { height: 45%; } }
        @keyframes eq3 { 0%,100% { height: 60%; } 50% { height: 90%; } }
        body { font-family: 'Inter', sans-serif; }
      `}</style>

            <div className="flex h-full">
                <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />


                <main className="dem-main scrollbar-thin scrollbar-thumb-[#ff0741c8]  flex-1 min-w-0 h-full overflow-y-auto overflow-x-hidden lg:ml-64">
                    {/* Top nav */}
                    <header className="flex items-center justify-between gap-4 px-5 sm:px-8 py-5">
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="lg:hidden text-white/70 hover:text-white"
                            >
                                <Menu size={22} />
                            </button>
                            <nav
                                className="hidden md:flex items-center gap-8 text-[15px]"
                                style={{ fontFamily: "'Poppins', sans-serif" }}
                            >
                                <a href="#" className="font-semibold text-white">
                                    Songs
                                </a>
                  
                            </nav>
                        </div>

                        <div className="flex  items-center gap-2 sm:gap-3 md:gap-5 min-w-0">
                            <div className="flex relative items-center gap-2 bg-white/[0.06] border border-white/10 focus-within:border-[#FF2D46]/60 rounded-lg px-2.5 sm:px-3 py-1.5 sm:py-2 w-74 sm:w-100 md:w-100 lg:w-[42vw] min-w-0 transition-colors">
                                <Search size={16} className="text-white/40 shrink-0" />
                                <input
                                    onChange={(e)=>{
                                        setTrackName(e.target.value)
                                    }}
                                    type="text"
                                    placeholder="Search..."
                                    className="bg-transparent outline-none text-xs sm:text-sm placeholder:text-white/35 w-full min-w-0"
                                />
                                <div className="absolute top-full left-0 mt-2 w-full z-50">
                                    <SearchResult />
                                </div>
                            </div>
                            <button className="relative text-white/70 hover:text-white">
                                <Bell size={20} />
                                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#FF2D46]" />
                            </button>
                            <div className="flex items-center gap-2 pl-1">
                                <span className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FF2D46] to-[#7A1030] flex items-center justify-center text-sm font-bold">
                                    SS
                                </span>
                                <div className="hidden sm:block leading-tight">
                                    <p className="text-sm font-medium">Suriya Sharma</p>
                                    <p className="text-xs text-white/40">@uxid.sharmasd...</p>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Hero */}
                    <section className="px-5 sm:px-8">
                        <div className="relative rounded-2xl overflow-hidden h-[300px] sm:h-[400px] lg:h-[440px] bg-gradient-to-br from-[#3A0A14] via-[#1B0C16] to-[#0B0B0E]">
                            {/* ambient art shapes stand in for cover art */}
                            <div className="absolute -right-10 -bottom-16 w-80 h-80 rounded-full bg-[#FF2D46]/25 blur-3xl" />
                            <div className="absolute right-10 top-10 w-40 h-40 rounded-full bg-[#7A1DFF]/20 blur-3xl" />

                            <div className="relative z-10 flex flex-col h-full justify-between p-6 sm:p-9">
                                <div>
                                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white/10 backdrop-blur px-3 py-1 rounded-full">
                                        🔥 Now Trending
                                    </span>
                                </div>

                                <div className="max-w-xl">
                                    <div className="flex gap-2 mb-3">
                                        <span className="text-xs font-medium bg-white/10 px-3 py-1 rounded-full">
                                            Synthwave
                                        </span>
                                        <span className="text-xs font-medium bg-white/10 px-3 py-1 rounded-full">
                                            Nightdrive
                                        </span>
                                    </div>
                                    <h1
                                        className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight mb-3"
                                        style={{ fontFamily: "'Poppins', sans-serif" }}
                                    >
                                        Midnight Circuit
                                    </h1>
                                    <p className="text-sm sm:text-[15px] text-white/60 mb-6 max-w-md">
                                        Arjun Vale rides a pulsing analog synth line through a city
                                        that never sleeps — three minutes of pure neon momentum.
                                    </p>

                                    <div className="flex items-center gap-3">
                                        <button className="flex items-center gap-2 bg-white text-black font-semibold px-5 py-2.5 rounded-lg hover:bg-white/90 transition-colors">
                                            <Play size={16} fill="black" />
                                            Play
                                        </button>
                                        <button className="flex items-center gap-2 bg-white/10 backdrop-blur font-medium px-5 py-2.5 rounded-lg hover:bg-white/20 transition-colors">
                                            <Download size={16} />
                                            Download
                                        </button>
                                        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                                            <MoreHorizontal size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-6 right-6 flex items-center gap-3">
                                <span className="text-xs font-medium bg-white/10 backdrop-blur px-2.5 py-1 rounded">
                                    Explicit
                                </span>
                                <button className="w-9 h-9 flex items-center justify-center rounded-full bg-black/40 backdrop-blur hover:bg-black/60 transition-colors">
                                    <Volume2 size={16} />
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Recommended */}
                    <section className="px-5 sm:px-8 py-9">
                        <div className="flex items-center justify-between mb-5">
                            <h2
                                className="text-lg sm:text-xl font-bold"
                                style={{ fontFamily: "'Poppins', sans-serif" }}
                            >
                                Recommended Tracks
                            </h2>
                            <a
                                href="#"
                                className="text-sm font-medium text-white/50 hover:text-white transition-colors"
                            >
                                See all
                            </a>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                            {/* Track 1 */}
                            <div className="group relative rounded-xl overflow-hidden bg-[#17171C] border border-white/5">
                                <div className="relative h-36 sm:h-44 bg-gradient-to-br from-[#3A1D6E] to-[#12081F] flex items-center justify-center">
                                    <span className="absolute top-2 left-2 text-[10px] font-semibold bg-black/50 px-2 py-0.5 rounded">
                                        Explicit
                                    </span>
                                    <button className="w-11 h-11 rounded-full bg-white/15 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Play size={18} fill="white" />
                                    </button>
                                </div>
                                <div className="p-3">
                                    <p className="font-semibold text-sm truncate">Velvet Rain</p>
                                    <p className="text-xs text-white/40 mb-2">Lo-fi · Nia Brooks</p>
                                    <div className="flex items-center justify-between text-[11px] text-white/40">
                                        <span>♪ 88.5k plays</span>
                                        <span>3:42</span>
                                    </div>
                                </div>
                            </div>

                            {/* Track 2 */}
                            <div className="group relative rounded-xl overflow-hidden bg-[#17171C] border border-white/5">
                                <div className="relative h-36 sm:h-44 bg-gradient-to-br from-[#0E3A4A] to-[#081820] flex items-center justify-center">
                                    <span className="absolute top-2 left-2 text-[10px] font-semibold bg-black/50 px-2 py-0.5 rounded">
                                        Chill
                                    </span>
                                    <button className="w-11 h-11 rounded-full bg-white/15 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Play size={18} fill="white" />
                                    </button>
                                </div>
                                <div className="p-3">
                                    <p className="font-semibold text-sm truncate">Stellar Drift</p>
                                    <p className="text-xs text-white/40 mb-2">Ambient · Kai Renner</p>
                                    <div className="flex items-center justify-between text-[11px] text-white/40">
                                        <span>♪ 41.2k plays</span>
                                        <span>4:19</span>
                                    </div>
                                </div>
                            </div>

                            {/* Track 3 */}
                            <div className="group relative rounded-xl overflow-hidden bg-[#17171C] border border-white/5">
                                <div className="relative h-36 sm:h-44 bg-gradient-to-br from-[#4A0E1E] to-[#1A0508] flex items-center justify-center">
                                    <span className="absolute top-2 left-2 text-[10px] font-semibold bg-black/50 px-2 py-0.5 rounded">
                                        Bass
                                    </span>
                                    <button className="w-11 h-11 rounded-full bg-white/15 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Play size={18} fill="white" />
                                    </button>
                                </div>
                                <div className="p-3">
                                    <p className="font-semibold text-sm truncate">Concrete Pulse</p>
                                    <p className="text-xs text-white/40 mb-2">Bass House · DJ Rook</p>
                                    <div className="flex items-center justify-between text-[11px] text-white/40">
                                        <span>♪ 120k plays</span>
                                        <span>3:05</span>
                                    </div>
                                </div>
                            </div>

                            {/* Track 4 */}
                            <div className="group relative rounded-xl overflow-hidden bg-[#17171C] border-2 border-[#FF2D46]/60">
                                <div className="relative h-36 sm:h-44 bg-gradient-to-br from-[#7A1030] to-[#1A0508] flex items-center justify-center">
                                    <span className="absolute top-2 left-2 text-[10px] font-semibold bg-black/50 px-2 py-0.5 rounded flex items-center gap-1">
                                        <span className="flex items-end gap-[2px] h-2.5">
                                            <span className="w-[2px] bg-[#FF2D46] animate-[eq1_1s_ease-in-out_infinite]" />
                                            <span className="w-[2px] bg-[#FF2D46] animate-[eq2_1s_ease-in-out_infinite]" />
                                            <span className="w-[2px] bg-[#FF2D46] animate-[eq3_1s_ease-in-out_infinite]" />
                                        </span>
                                        Playing
                                    </span>
                                    <button className="w-11 h-11 rounded-full bg-white/15 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Play size={18} fill="white" />
                                    </button>
                                </div>
                                <div className="p-3">
                                    <p className="font-semibold text-sm truncate">Midnight Circuit</p>
                                    <p className="text-xs text-white/40 mb-2">Synthwave · Arjun Vale</p>
                                    <div className="flex items-center justify-between text-[11px] text-white/40">
                                        <span>♪ 210k plays</span>
                                        <span>3:00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}