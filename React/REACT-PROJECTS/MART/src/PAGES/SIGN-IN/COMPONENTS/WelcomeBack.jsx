// src/components/WelcomeComponent.jsx
import React from 'react';
import { Zap, } from "lucide-react";

const WelcomeBack = () => {

  return (
      <div className="relative flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-16 overflow-hidden">
        {/* subtle background glow */}
        <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-lime-400/10 blur-[120px]" />

        <div className="relative z-10 max-w-xl">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-24">
            <div className="flex items-center justify-center h-11 w-11 rounded-full bg-[#c8f400]">
              <Zap className="h-6 w-6 text-black fill-black" />
            </div>
            <span className="text-2xl font-bold text-white">
              Sky<span className="text-[#c8f400]">Mart</span>
            </span>
          </div>

          {/* Eyebrow */}
          <p className="text-[#c8f400] font-semibold tracking-[0.2em] text-sm mb-4">
            WELCOME BACK
          </p>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl font-medium leading-[1.05] text-white mb-6">
            Shop the future.
            <br />
            <span className="text-[#c8f400]">Today.</span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-400 text-lg max-w-md mb-14">
            Thousands of products, lightning-fast delivery, and prices that
            make your wallet happy.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-xl">
            <div className="rounded-xl border border-gray-800 py-6 text-center">
              <p className="text-2xl font-bold text-[#c8f400]">20K+</p>
              <p className="text-gray-400 text-sm mt-1">Products</p>
            </div>
            <div className="rounded-xl border border-gray-800 py-6 text-center">
              <p className="text-2xl font-bold text-[#c8f400]">50K+</p>
              <p className="text-gray-400 text-sm mt-1">Users</p>
            </div>
            <div className="rounded-xl border border-gray-800 py-6 text-center">
              <p className="text-2xl font-bold text-[#c8f400]">4.9★</p>
              <p className="text-gray-400 text-sm mt-1">Rating</p>
            </div>
          </div>
        </div>
      </div>

  );
};

export default WelcomeBack;