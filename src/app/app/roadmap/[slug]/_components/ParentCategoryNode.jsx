"use client";

import React from "react";
import { Handle, Position } from "reactflow";

const ParentCategoryNode = ({ data }) => {
  return (
    <div className="px-6 py-3 rounded-lg border-2 border-yellow-500 bg-yellow-400 text-black font-bold shadow-[0_0_15px_rgba(234,179,8,0.3)]">
      <Handle type="target" position={Position.Top} className="w-2 h-2 bg-yellow-700" />
      <div className="text-center text-sm uppercase tracking-wider">{data.label}</div>
      <Handle type="source" position={Position.Bottom} className="w-2 h-2 bg-yellow-700" />
    </div>
  );
};

export default ParentCategoryNode;
