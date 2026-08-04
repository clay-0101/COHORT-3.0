import { useEffect, useRef, useState } from "react";
import { usePlayer } from "../../hooks/playerHook";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { playTrackAction } from "../../api/searchApi";

export default function MusicPlayerCard() {

    let { id } = useParams()
    let dispatch = useDispatch()
    let { play } = useSelector((state) => state.play)
    useEffect(() => {
        dispatch(playTrackAction(id))
    }, [id])



    let { progressPercent,
        formatTime,
        handleSeek,
        skipForward,
        skipBack,
        togglePlay,
        audioRef,
        isPlaying, setIsPlaying,
        currentTime, setCurrentTime,
        duration, setDuration } = usePlayer()
    return (
        <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* full page background image, blurred */}
            <img
                src={play.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl"
            />
            {/* dark overlay on top of the blurred background for readability */}
            <div className="absolute inset-0 bg-black/60" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />

            {/* audio element - driven by custom controls below */}
            <audio
                ref={audioRef}
                src={play.preview}
            />

            {/* footer credit like the reference image */}
            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-wide z-10">
                Edit by : Photoeditor / Pict by : Pinterest
            </span>

            {/* glass player card - squarish */}
            <div className="relative z-10 w-[90%] max-w-sm rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-white/5 backdrop-blur-2xl">
                {/* card content */}
                <div className="flex flex-col px-6 py-6">
                    {/* track artwork */}
                    <div className="w-full aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                        <img
                            src={play.image}
                            alt="No Regrets album art"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* track info */}
                    <div className="mt-5">
                        <h2 className="text-white text-base sm:text-lg font-semibold tracking-wide">
                            {play.songName}
                        </h2>
                        <p className="mt-2 text-white/50 text-xs leading-relaxed line-clamp-3">
                            A soulful journey crafted by {play.artistName}, blending rhythm and emotion in every beat.

                            Experience pure energy as {play.artistName} delivers a vibrant mix of sound and style.

                        </p>
                    </div>

                    {/* timeline on top */}
                    <div className="mt-5">
                        <input
                            type="range"
                            min="0"
                            max={duration || 0}
                            value={currentTime}
                            onChange={handleSeek}
                            className="w-full h-1.5 rounded-full appearance-none cursor-pointer bg-white/20 accent-white [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md"
                            style={{
                                background: `linear-gradient(to right, rgba(255,255,255,0.9) ${progressPercent}%, rgba(255,255,255,0.2) ${progressPercent}%)`,
                            }}
                        />
                        <div className="mt-1.5 flex items-center justify-between text-[11px] text-white/50">
                            <span>{formatTime(currentTime)}</span>
                            <span>{formatTime(duration)}</span>
                        </div>
                    </div>

                    {/* prev - play - next, centered */}
                    <div className="mt-5 flex items-center justify-center gap-6">
                        <button
                            onClick={skipBack}
                            aria-label="Previous"
                            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center text-white"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path d="M6 6h2v12H6zM20 6v12l-8.5-6z" />
                            </svg>
                        </button>

                        <button
                            onClick={togglePlay}
                            aria-label="Play"
                            className="w-14 h-14 rounded-full bg-white/25 hover:bg-white/35 transition flex items-center justify-center text-white shadow-lg"
                        >
                            {isPlaying ? (
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
                                </svg>
                            ) : (
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-0.5">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            )}
                        </button>

                        <button
                            onClick={skipForward}
                            aria-label="Next"
                            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center text-white"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path d="M16 6h2v12h-2zM4 6v12l8.5-6z" />
                            </svg>
                        </button>
                    </div>

                    <button className="mt-5 mx-auto flex items-center gap-1.5 bg-black/70 hover:bg-black/90 transition text-white text-xs font-medium px-4 py-2 rounded-full">
                        <span className="text-sm leading-none">+</span>
                        Creativestyle
                    </button>
                </div>
            </div>
        </div>
    );
}