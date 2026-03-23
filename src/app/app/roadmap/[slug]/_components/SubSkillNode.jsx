"use client";

import React from "react";
import { Handle, Position } from "reactflow";
import { motion } from "framer-motion";

const SubSkillNode = ({ data }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-5 py-3 rounded-xl border border-white/10 bg-zinc-900/80 backdrop-blur-sm text-white shadow-xl hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(79,70,229,0.2)] transition-all duration-300 min-w-[150px]"
    >
      <Handle type="target" position={Position.Top} className="w-1.5 h-1.5 bg-indigo-500" />
      <div className="flex flex-col gap-1">
        <div className="text-sm font-bold text-indigo-300">{data.label}</div>
        {data.content && (
          <div className="text-[10px] text-zinc-400 leading-tight">{data.content}</div>
        )}
      </div>
      <Handle type="source" position={Position.Bottom} className="w-1.5 h-1.5 bg-indigo-500" />
    </motion.div>
  );
};

export default SubSkillNode;
