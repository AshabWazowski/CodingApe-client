"use client";

import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { MoveRight, Zap, Target, Sparkles } from "lucide-react";
import RoadmapCard from "./_components/RoadmapCard";
import { roadmapData } from "./data";

const RoadmapPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const handleCardClick = (title) => {
    toast({
      title: `${title} Roadmap Selected`,
      description: "Redirecting to your personalized learning path...",
    });
    const titleResetForRouteUrl = title.toLowerCase().replace(/\s/g, "-");
    router.push(`/app/roadmap/${titleResetForRouteUrl}`);
  };

  return (
    <div className="min-h-full w-full bg-background text-foreground p-6 md:p-10">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-16 space-y-4">
        <div className="flex items-center gap-2 text-indigo-400 font-medium tracking-wider uppercase text-sm">
          <Sparkles className="w-4 h-4" />
          <span>Curated Learning Paths</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60">
          Professional Roadmaps
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
          Master the most in-demand technical skills with our structured, 
          industry-aligned learning paths designed for the modern engineer.
        </p>
      </div>

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Featured Section */}
        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <Target className="w-6 h-6 text-indigo-500" />
              Available Tracks
            </h2>
            <div className="h-[1px] flex-1 bg-border/50 ml-6 hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 md:grid -cols-2 lg:grid-cols-3 gap-5">
            {roadmapData.map((item, index) => (
              <RoadmapCard 
                key={index}
                tag={item.title}
                onClick={() => handleCardClick(item.title)}
              />
            ))}
          </div>
        </section>

        {/* Custom Planner Placeholder */}
        <div className="p-px rounded-3xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-blue-500/20 mt-20">
          <div className="bg-card rounded-[23px] p-8 md:p-12 text-center space-y-6 border border-border backdrop-blur-3xl">
             <div className="mx-auto w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                <Zap className="w-8 h-8 fill-indigo-400/20" />
             </div>
             <div className="space-y-2">
               <h3 className="text-2xl md:text-3xl font-bold">{`Can't find what you're looking for?`}</h3>
               <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                 Our AI-powered engine can generate a custom learning path tailored 
                 specifically to your goals and skill level.
               </p>
             </div>
             <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors shadow-xl shadow-primary/5 inline-flex items-center gap-2 group">
               Generate Custom Roadmap
               <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;
