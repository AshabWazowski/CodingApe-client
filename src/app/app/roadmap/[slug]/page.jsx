"use client"
import React, { useMemo, useCallback } from "react";
import ReactFlow, { 
    Background, 
    Controls, 
    MiniMap, 
    useNodesState, 
    useEdgesState,
    MarkerType
} from "reactflow";
import "reactflow/dist/style.css";
import { useRouter } from "next/navigation";
import { roadmapFlowChartData } from "../data";
import ParentCategoryNode from "./_components/ParentCategoryNode";
import SubSkillNode from "./_components/SubSkillNode";

const nodeTypes = {
    parentCategory: ParentCategoryNode,
    subSkill: SubSkillNode,
};

const RoadmapContentPage = ({ params }) => {
    const router = useRouter();
    const { slug } = params;
    
    // Find the roadmap data based on the slug
    const currentRoadmap = useMemo(() => {
        const roadmaps = roadmapFlowChartData[0].roadmaps;
        const found = roadmaps.find(r => 
            r.roadmapId === slug || 
            r.title.toLowerCase().replace(/\s+/g, '-') === slug
        );
        return found || roadmaps[0];
    }, [slug]);

    const [nodes, setNodes, onNodesChange] = useNodesState(currentRoadmap.nodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(
        currentRoadmap.edges.map(edge => ({
            ...edge,
            type: "smoothstep",
            animated: true,
            style: { stroke: "#6366f1", strokeWidth: 2 },
            markerEnd: {
                type: MarkerType.ArrowClosed,
                color: "#6366f1",
            },
        }))
    );

    const onNodeClick = useCallback((event, node) => {
        if (node.type === "subSkill") {
            const version = 1;
            const label = node.data.label.toLowerCase().replace(/\s/g, "-");
            router.push(`/app/roadmap/v${version}/${label}`);
        }
    }, [router]);

    return (
        <div className="h-screen w-full bg-[#0a0a0a] text-white flex flex-col">
            <div className="p-6 border-b border-white/5 bg-zinc-900/50 backdrop-blur-md flex justify-between items-center z-20">
                <h1 className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
                    {currentRoadmap.title}
                </h1>
                <div className="text-xs text-zinc-500 font-mono hidden sm:block">
                    ID: {currentRoadmap.roadmapId} | Path: {slug}
                </div>
            </div>
            
            <div className="flex-1 relative">
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onNodeClick={onNodeClick}
                    nodeTypes={nodeTypes}
                    fitView
                    className="bg-[#0a0a0a]"
                >
                    <Background color="#333" gap={16} />
                    <Controls className="bg-zinc-800 border-white/5 !fill-white" />
                    <MiniMap 
                        nodeColor={(n) => {
                            if (n.type === "parentCategory") return "#eab308";
                            return "#6366f1";
                        }}
                        maskColor="rgba(0, 0, 0, 0.7)"
                        className="bg-zinc-900 border border-white/5 shadow-2xl"
                    />
                </ReactFlow>
            </div>
            
            <div className="absolute top-24 left-10 z-10 pointer-events-none opacity-20 hidden md:block">
                <div className="text-[120px] font-black select-none leading-none outline-text">
                    ROADMAP
                </div>
            </div>

            <style jsx>{`
                .outline-text {
                    color: transparent;
                    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
                }
            `}</style>
        </div>
    );
};

export default RoadmapContentPage;