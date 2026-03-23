"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MoveLeft, HelpCircle, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] flex flex-col items-center justify-center p-4 relative overflow-hidden text-zinc-100 font-sans">
      {/* Background blobs for depth and futuristic feel */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Futuristic Scanline Effect - matching Sign-In page */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center gap-6 max-w-2xl px-6"
      >
        <div className="space-y-4">
          {/* Status Badge */}
          <motion.div 
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex items-center justify-center gap-2 text-indigo-400 font-medium tracking-[0.2em] uppercase text-[10px] mb-6 bg-indigo-500/5 px-4 py-1.5 rounded-full border border-indigo-500/20 backdrop-blur-sm self-center mx-auto w-fit"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Reality Anchor Failed</span>
          </motion.div>

          {/* Massive 404 Heading */}
          <h1 className="text-[10rem] md:text-[14rem] font-black leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-zinc-400 to-zinc-800 tracking-tighter select-none drop-shadow-2xl">
            404
          </h1>
          
          <div className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide flex items-center justify-center gap-3">
              <HelpCircle className="w-6 h-6 text-indigo-500" />
              COORDINATES NOT FOUND
            </h2>
            <p className="text-zinc-500 max-w-sm mx-auto leading-relaxed text-sm md:text-base">
              The neural path you attempted to access does not exist in our current learning matrix. 
              Redirecting to secure coordinates recommended.
            </p>
          </div>
        </div>

        {/* Back Button with Glow Effect */}
        <Link href="/" className="group relative mt-4">
           <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/50 to-purple-600/50 rounded-full blur-md opacity-25 group-hover:opacity-100 transition duration-500"></div>
           <button className="relative px-10 py-4 bg-[#0f0f12] rounded-full text-white font-bold flex items-center gap-3 border border-white/5 transition-all hover:bg-black hover:scale-105 active:scale-95 group-hover:border-indigo-500/30">
              <MoveLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              BACK TO REALITY
           </button>
        </Link>
      </motion.div>

      {/* Futuristic Grid Overlays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent" />
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent" />
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
      </div>
    </div>
  );
}
