import { Play } from "lucide-react";

export default function SearchResultItem({track}) {
    return (
        <div className="flex items-center justify-between gap-3 bg-[#17171C] hover:bg-[#1E1E24] border border-white/5 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 w-full transition-colors cursor-pointer">
            {/* left: art + text */}
            <div className="flex items-center gap-3 min-w-0">
                <img
                    src={track.image}
                    alt="song cover"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover shrink-0"
                />
                <div className="min-w-0">
                    <p className="text-sm sm:text-[15px] font-semibold text-white truncate">
                        {track.songName}
                    </p>
                    <p className="text-xs sm:text-sm text-white/40 truncate">
                        By <span className="text-white/60 font-medium">{track.artistName}</span>
                    </p>
                </div>
            </div>

            {/* right: play button */}
            <button className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 flex items-center justify-center rounded-full bg-[#FF2D46] hover:bg-[#ff4560] transition-colors">
                <Play size={14} fill="white" className="text-white translate-x-[1px]" />
            </button>
        </div>
    );
}