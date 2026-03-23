"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const RoadmapCard = ({ tag, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, translateY: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "relative w-full overflow-hidden rounded-xl border border-white/5 bg-zinc-900/40 p-5 cursor-pointer group transition-all duration-500",
        "hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(79,70,229,0.12)]",
        "backdrop-blur-md"
      )}
    >
      {/* Animated Gradient Border Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-[-1px] bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent blur-sm animate-pulse" />
      </div>
      
      {/* Background Glows */}
      <div className="absolute -right-16 -top-16 w-48 h-48 bg-indigo-600/5 blur-[80px] rounded-full group-hover:bg-indigo-600/10 transition-colors duration-500" />
      <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-purple-600/5 blur-[80px] rounded-full group-hover:bg-purple-600/10 transition-colors duration-500" />

      <div className="relative z-10 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/10 group-hover:scale-110 transition-transform duration-300 shrink-0">
             <Zap className="w-4 h-4 fill-indigo-400/20" />
          </div>
          <Badge variant="secondary" className="bg-transparent text-zinc-300 group-hover:text-indigo-200 border-none px-0 text-sm font-semibold truncate transition-colors duration-300">
            {tag}
          </Badge>
        </div>

        <div className="h-1.5 w-1.5 rounded-full bg-indigo-500/40 group-hover:bg-indigo-400 group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
      </div>

      {/* Futuristic Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] group-hover:opacity-[0.05] transition-opacity bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
    </motion.div>
  );
};

export default RoadmapCard;
