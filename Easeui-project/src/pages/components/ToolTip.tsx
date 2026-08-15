import React from 'react'
import ComponentDemo from '../ComponentsDemo'
import { Button } from '@/components'
import { useState } from 'react'
import PropsTable from '@/components/Personal/PropsTable'

type Props = {}

const ToolTip = (props: Props) => {
    const [showFade, setShowFade] = useState(false);
    const [showFlip, setShowFlip] = useState(false);
    const [showFullscreen, setShowFullscreen] = useState(false);
    const [showPoll, setShowPoll] = useState(false);


    const fadeToolKit = `
import { useState } from "react";

const [showFade, setShowFade] = useState(false);

<div className="relative">
    <button
        onMouseEnter={() => setShowFade(true)}
        onMouseLeave={() => setShowFade(false)}
        className="rounded-lg bg-black px-5 py-3 text-sm font-medium text-white"
    >
        Fade Tooltip
    </button>

    <div
        className={\`absolute bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-3 py-2 text-xs text-white transition-opacity duration-300 \${
            showFade
                ? "opacity-100"
                : "pointer-events-none opacity-0"
        }\`}
    >
        This is a fade tooltip
    </div>
</div>
`;
    const sideToolKit = `
import { useState } from "react";

const [showSide, setShowSide] = useState(false);

<div
    className="relative flex min-h-[220px] w-full items-center justify-center px-4 py-12"
    onMouseEnter={() => setShowSide(true)}
    onMouseLeave={() => setShowSide(false)}
>
    <button className="rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white">
        Side Tooltip
    </button>

    <div
        className={\`absolute left-[calc(50%+55px)] top-1/2 z-30 w-[calc(100vw-80px)] max-w-[280px] -translate-y-1/2 rounded-2xl border border-white/10 bg-[#171717] p-4 text-white shadow-2xl transition-all duration-500 \${
            showSide
                ? "translate-x-0 scale-100 opacity-100"
                : "pointer-events-none -translate-x-4 scale-95 opacity-0"
        }\`}
    >
        <div className="absolute left-[-9px] top-1/2 -translate-y-1/2 border-y-[9px] border-r-[9px] border-y-transparent border-r-[#171717]" />

        <div className="mb-2 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-400">
                ✦
            </div>

            <p className="text-sm font-semibold text-white">
                Quick Information
            </p>
        </div>

        <p className="text-xs leading-5 text-white/55 sm:text-sm">
            Here you can find some additional information about this feature.
        </p>
    </div>
</div>
`;
    const quickTipToolKit = `
import { useState } from "react";

const [showQuickTip, setShowQuickTip] = useState(false);

<div
    className="relative"
    onMouseEnter={() => setShowQuickTip(true)}
    onMouseLeave={() => setShowQuickTip(false)}
>
    <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#171717] text-white shadow-sm">
        ↑
    </button>

    <div
        className={\`absolute bottom-full left-1/2 z-30 mb-4 w-[calc(100vw-32px)] max-w-[380px] -translate-x-1/2 rounded-[18px] border border-white/10 bg-[#171717] p-3 text-white shadow-2xl transition-all duration-500 sm:p-4 \${
            showQuickTip
                ? "translate-y-0 scale-100 opacity-100"
                : "pointer-events-none translate-y-3 scale-95 opacity-0"
        }\`}
    >
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 border-x-[10px] border-t-[13px] border-x-transparent border-t-[#171717]" />

        <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[13px] border border-white/10 bg-[#0f0f0f] sm:h-20 sm:w-20">
                <div className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] sm:h-11 sm:w-11">
                    <div className="absolute h-6 w-6 rounded-full border border-indigo-400/40 sm:h-7 sm:w-7" />
                    <div className="absolute h-3.5 w-3.5 rounded-full border border-indigo-400/70 sm:h-4 sm:w-4" />

                    <svg
                        className="relative h-4 w-4 text-indigo-400 sm:h-5 sm:w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                    >
                        <path d="M12 16V4" />
                        <path d="m7 9 5-5 5 5" />
                        <path d="M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" />
                    </svg>
                </div>
            </div>

            <div className="min-w-0 flex-1">
                <p className="mb-1 text-sm font-semibold leading-tight text-white sm:text-base">
                    Quick tip
                </p>

                <p className="text-[11px] leading-4 text-white/55 sm:text-xs sm:leading-5">
                    Use this shortcut to quickly access your favorite features.
                </p>
            </div>
        </div>
    </div>
</div>
`;
    const pollToolKit = `
import { useState } from "react";

const [showPoll, setShowPoll] = useState(false);

<div
    className="relative"
    onMouseEnter={() => setShowPoll(true)}
    onMouseLeave={() => setShowPoll(false)}
>
    <button
        onFocus={() => setShowPoll(true)}
        onBlur={() => setShowPoll(false)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-xl text-gray-700 shadow-sm"
    >
        ⓘ
    </button>

    <div
        className={\`absolute left-1/2 top-full z-30 mt-4 w-[calc(100vw-32px)] max-w-[380px] -translate-x-1/2 rounded-[18px] bg-[#171717] p-3 text-white shadow-2xl transition-all duration-500 sm:p-4 \${
            showPoll
                ? "translate-y-0 rotate-0 scale-100 opacity-100"
                : "pointer-events-none translate-y-3 rotate-2 scale-95 opacity-0"
        }\`}
    >
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 border-x-[10px] border-b-[13px] border-x-transparent border-b-[#171717]" />

        <h3 className="mb-3 text-base font-medium sm:text-lg">
            Simple Poll tutorial
        </h3>

        <div className="mb-4 rounded-xl bg-[#b7adff] p-3">
            <div className="mb-2 flex items-center gap-2">
                <div className="h-7 w-[55%] max-w-44 rounded-full bg-[#9388e8] p-1">
                    <div className="h-5 w-5 rounded-full bg-white" />
                </div>

                <div className="ml-auto h-6 w-6 shrink-0 rounded-full bg-[#a29aec]" />
            </div>

            <div className="mb-2 flex items-center gap-2">
                <div className="flex h-7 w-[55%] max-w-44 items-center rounded-full bg-black px-3">
                    <span className="text-sm">✦</span>
                </div>

                <div className="ml-auto flex shrink-0 gap-1">
                    <div className="h-6 w-6 rounded-full bg-[#a29aec]" />
                    <div className="h-6 w-6 rounded-full bg-[#a29aec]" />
                </div>
            </div>

            <div className="flex items-center gap-2">
                <div className="h-7 w-[38%] max-w-28 rounded-full bg-[#9388e8] p-1">
                    <div className="h-5 w-5 rounded-full bg-white" />
                </div>

                <div className="ml-auto h-6 w-6 rounded-full bg-[#a29aec]" />
            </div>
        </div>

        <p className="mb-4 text-xs leading-5 text-gray-300 sm:text-sm sm:leading-6">
            Learn how to create a Simple Poll to effortlessly gather user
            votes and feedback.
        </p>

        <button className="w-full rounded-xl border border-gray-600 bg-[#303030] px-3 py-2 text-sm transition-colors duration-200 hover:bg-[#3b3b3b]">
            Watch tutorial
            <span className="ml-2 text-gray-400">6:30</span>
        </button>
    </div>
</div>
`;


    const propsData = [
        {
            prop: "trigger",
            type: `"hover" | "focus"`,
            default: `"hover"`,
            description:
                "Defines the interaction used to display the tooltip.",
        },
        {
            prop: "position",
            type: `"top" | "bottom" | "right"`,
            default: `"top"`,
            description:
                "Controls the direction from which the tooltip is displayed.",
        },
        {
            prop: "animation",
            type: `"fade" | "slideUp" | "slideDown" | "slideRight"`,
            default: `"fade"`,
            description:
                "Defines the visual animation used when the tooltip appears and disappears.",
        },
        {
            prop: "content",
            type: "string | React.ReactNode",
            default: "-",
            description:
                "Content displayed inside the tooltip.",
        },
        {
            prop: "delay",
            type: "number",
            default: "0",
            description:
                "Controls the delay before the tooltip appears.",
        },
        {
            prop: "className",
            type: "string",
            default: "-",
            description:
                "Additional custom class names for styling the tooltip.",
        },
    ];

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-12">
            <header className="space-y-2">
                <p
                    className="text-4xl font-bold tracking-tight"
                    style={{ color: "var(--text-color)" }}
                >
                    ToolTip
                </p>

                <p className="text-lg text-gray-600">
                    Displays additional context without cluttering the UI.
                </p>
            </header>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Usage</h2>

                <ComponentDemo code={fadeToolKit}>
                    <div className="relative">
                        <button
                            onMouseEnter={() => setShowFade(true)}
                            onMouseLeave={() => setShowFade(false)}
                            className="rounded-lg bg-black px-5 py-3 text-sm font-medium text-white"
                        >
                            Fade Tooltip
                        </button>

                        <div
                            className={`absolute bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-3 py-2 text-xs text-white transition-opacity duration-300 ${showFade
                                ? "opacity-100"
                                : "pointer-events-none opacity-0"
                                }`}
                        >
                            This is a fade tooltip
                        </div>
                    </div>
                </ComponentDemo>

                <ComponentDemo code={sideToolKit}>
                    <div
                        className="relative flex min-h-[220px] w-full items-center justify-center px-4 py-12"
                        onMouseEnter={() => setShowFlip(true)}
                        onMouseLeave={() => setShowFlip(false)}
                    >
                        <button className="rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-indigo-500">
                            Side Tooltip
                        </button>

                        <div
                            className={`absolute left-[calc(50%+55px)] top-1/2 z-30 w-[calc(100vw-80px)] max-w-[280px] -translate-y-1/2 rounded-2xl border border-white/10 bg-[#171717] p-4 text-white shadow-2xl transition-all duration-500 ${showFlip
                                ? "translate-x-0 scale-100 opacity-100"
                                : "pointer-events-none -translate-x-4 scale-95 opacity-0"
                                }`}
                        >
                            <div className="absolute left-[-9px] top-1/2 -translate-y-1/2 border-y-[9px] border-r-[9px] border-y-transparent border-r-[#171717]" />

                            <div className="mb-2 flex items-center gap-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-400">
                                    ✦
                                </div>

                                <p className="text-sm font-semibold text-white">
                                    Quick Information
                                </p>
                            </div>

                            <p className="text-xs leading-5 text-white/55 sm:text-sm">
                                Here you can find some additional information about this
                                feature without taking extra space from the main interface.
                            </p>
                        </div>
                    </div>
                </ComponentDemo>

                <ComponentDemo code={quickTipToolKit}>
                    <div className="flex min-h-[260px] w-full items-center justify-center px-4 py-20">
                        <div
                            className="relative"
                            onMouseEnter={() => setShowFullscreen(true)}
                            onMouseLeave={() => setShowFullscreen(false)}
                        >
                            <button
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#171717] text-white shadow-sm transition-all duration-300 hover:border-indigo-400/50 hover:bg-indigo-500/10"
                            >
                                ↑
                            </button>

                            <div
                                className={`absolute bottom-full left-1/2 z-30 mb-4 w-[calc(100vw-32px)] max-w-[360px] -translate-x-1/2 rounded-[18px] border border-white/10 bg-[#171717] p-3 text-white shadow-2xl transition-all duration-500 sm:max-w-[380px] sm:p-4 ${showFullscreen
                                    ? "translate-y-0 scale-100 opacity-100"
                                    : "pointer-events-none translate-y-3 scale-95 opacity-0"
                                    }`}
                            >
                                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 border-x-[10px] border-t-[13px] border-x-transparent border-t-[#171717]" />

                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[13px] border border-white/10 bg-[#0f0f0f] sm:h-20 sm:w-20">
                                        <div className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] sm:h-11 sm:w-11">
                                            <div className="absolute h-6 w-6 rounded-full border border-indigo-400/40 sm:h-7 sm:w-7" />

                                            <div className="absolute h-3.5 w-3.5 rounded-full border border-indigo-400/70 sm:h-4 sm:w-4" />

                                            <svg
                                                className="relative h-4 w-4 text-indigo-400 sm:h-5 sm:w-5"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                            >
                                                <path d="M12 16V4" />
                                                <path d="m7 9 5-5 5 5" />
                                                <path d="M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <p className="mb-1 text-sm font-semibold leading-tight text-white sm:text-base">
                                            Quick tip
                                        </p>

                                        <p className="text-[11px] leading-4 text-white/55 sm:text-xs sm:leading-5">
                                            Use this shortcut to quickly access your favorite features.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ComponentDemo>

                <ComponentDemo code={pollToolKit}>
                    <div className="flex min-h-[300px] w-full items-center justify-center px-4 py-20">
                        <div
                            className="relative"
                            onMouseEnter={() => setShowPoll(true)}
                            onMouseLeave={() => setShowPoll(false)}
                        >
                            <button
                                onFocus={() => setShowPoll(true)}
                                onBlur={() => setShowPoll(false)}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-xl text-gray-700 shadow-sm transition-all duration-300 hover:bg-gray-100"
                            >
                                ⓘ
                            </button>

                            <div
                                className={`absolute left-1/2 top-full z-30 mt-4 w-[calc(100vw-32px)] max-w-[380px] -translate-x-1/2 rounded-[18px] bg-[#171717] p-3 text-white shadow-2xl transition-all duration-500 sm:p-4 ${showPoll
                                    ? "translate-y-0 rotate-0 scale-100 opacity-100"
                                    : "pointer-events-none translate-y-3 rotate-2 scale-95 opacity-0"
                                    }`}
                            >
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 border-x-[10px] border-b-[13px] border-x-transparent border-b-[#171717]" />

                                <h3 className="mb-3 text-base font-medium sm:text-lg">
                                    Simple Poll tutorial
                                </h3>

                                <div className="mb-4 rounded-xl bg-[#b7adff] p-3">
                                    <div className="mb-2 flex items-center gap-2">
                                        <div className="h-7 w-[55%] max-w-44 rounded-full bg-[#9388e8] p-1">
                                            <div className="h-5 w-5 rounded-full bg-white" />
                                        </div>

                                        <div className="ml-auto h-6 w-6 shrink-0 rounded-full bg-[#a29aec]" />
                                    </div>

                                    <div className="mb-2 flex items-center gap-2">
                                        <div className="flex h-7 w-[55%] max-w-44 items-center rounded-full bg-black px-3">
                                            <span className="text-sm">✦</span>
                                        </div>

                                        <div className="ml-auto flex shrink-0 gap-1">
                                            <div className="h-6 w-6 rounded-full bg-[#a29aec]" />
                                            <div className="h-6 w-6 rounded-full bg-[#a29aec]" />
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <div className="h-7 w-[38%] max-w-28 rounded-full bg-[#9388e8] p-1">
                                            <div className="h-5 w-5 rounded-full bg-white" />
                                        </div>

                                        <div className="ml-auto h-6 w-6 rounded-full bg-[#a29aec]" />
                                    </div>
                                </div>

                                <p className="mb-4 text-xs leading-5 text-gray-300 sm:text-sm sm:leading-6">
                                    Learn how to create a Simple Poll to effortlessly gather
                                    user votes and feedback.
                                </p>

                                <button className="w-full rounded-xl border border-gray-600 bg-[#303030] px-3 py-2 text-sm transition-colors duration-200 hover:bg-[#3b3b3b]">
                                    Watch tutorial
                                    <span className="ml-2 text-gray-400">6:30</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </ComponentDemo>
            </section>
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">API Reference</h2>
                <PropsTable data={propsData} />
            </section>
        </div>
    )
}

export default ToolTip