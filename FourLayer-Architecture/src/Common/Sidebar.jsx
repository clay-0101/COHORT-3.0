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

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* backdrop, mobile only */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-30 bg-black/70 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside
        className={`fixed z-40 inset-y-0 left-0 w-64 shrink-0 flex flex-col
        bg-[#121216] border-r border-white/5 px-5 py-6
        overflow-hidden
        transition-transform duration-300 ease-out
        lg:translate-x-0
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* close button, mobile only */}
        <button
          onClick={onClose}
          className="lg:hidden self-end mb-2 text-white/50 hover:text-white"
        >
          <X size={20} />
        </button>

        {/* Brand mark */}
        <div className="flex items-center gap-2 px-1 mb-10">
          <span
            className="text-[26px] leading-none font-extrabold tracking-tight text-white"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            De<span className="text-[#FF2D46]">&lt;</span>
          </span>
          <span
            className="text-[11px] uppercase tracking-[0.25em] text-white/40 mt-1"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Music
          </span>
          {/* equalizer signature */}
          <span className="flex items-end gap-[3px] h-3 ml-1">
            <span className="w-[3px] bg-[#FF2D46] animate-[eq1_1s_ease-in-out_infinite]" />
            <span className="w-[3px] bg-[#FF2D46] animate-[eq2_1s_ease-in-out_infinite]" />
            <span className="w-[3px] bg-[#FF2D46] animate-[eq3_1s_ease-in-out_infinite]" />
          </span>
        </div>

        {/* Primary nav */}
        <nav className="flex flex-col gap-1 mb-8">
          <a
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 bg-white/[0.06] text-white font-medium"
          >
            <Home size={18} className="text-[#FF2D46]" />
            Home
          </a>
          <a
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-white/60 hover:text-white hover:bg-white/[0.04] transition-colors"
          >
            <Compass size={18} />
            Discovery
          </a>
          <a
            href="#"
            className="flex items-center justify-between rounded-lg px-3 py-2.5 text-white/60 hover:text-white hover:bg-white/[0.04] transition-colors"
          >
            <span className="flex items-center gap-3">
              <Clock size={18} />
              Coming soon
            </span>
            <span className="text-[11px] font-semibold bg-[#FF2D46] text-white rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </a>
        </nav>


        <div className="mt-auto pt-6">
          <a
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-white/60 hover:text-white hover:bg-white/[0.04] transition-colors"
          >
            <Settings size={18} />
            Settings
          </a>
        </div>
      </aside>
    </>
  );
}

export default Sidebar
/* ========================= /SIDEBAR ========================= */