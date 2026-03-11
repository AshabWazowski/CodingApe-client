"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MainPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselItems = [
    {
      title: "Explore Section",
      description: "A One-stop Solution for all your programming needs...",
      imageUrl: "/assets/home.png",
    },
    {
      title: "Code Editor",
      description: "A One-stop Solution for all your programming needs...",
      imageUrl: "/assets/editor.png",
    },
    {
      title: "Problems Set",
      description: "A One-stop Solution for all your programming needs...",
      imageUrl: "/assets/problems.png",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
  };

  return (

    <div className="flex flex-col w-full min-h-[calc(100vh-64px)]">
      <div className="w-full py-4 px-4 md:px-20">
        {/* Edit the shadow to make it more prominent and visible on the upper side too */}
        <div className="relative overflow-hidden flex items-center justify-center w-full rounded-3xl bg-opacity-10 min-h-[calc(100vh-108px)] shadow-border py-8 px-4 bg-background duration-300 md:mt-2 shadow-lg transition-all border border-border">
          {/* Animated Background Glow */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl mix-blend-screen">
            <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] -ml-[150px] -mt-[150px] md:-ml-[300px] md:-mt-[300px] bg-indigo-600/20 blur-[80px] md:blur-[120px] rounded-full animate-move-across-1 mix-blend-screen"></div>
            <div className="absolute top-1/2 left-1/2 w-[250px] h-[250px] md:w-[500px] md:h-[500px] -ml-[125px] -mt-[125px] md:-ml-[250px] md:-mt-[250px] bg-purple-600/20 blur-[60px] md:blur-[100px] rounded-full animate-move-across-2 mix-blend-screen"></div>
            <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] md:w-[400px] md:h-[400px] -ml-[100px] -mt-[100px] md:-ml-[200px] md:-mt-[200px] bg-pink-600/20 blur-[60px] md:blur-[100px] rounded-full animate-move-across-3 mix-blend-screen"></div>
          </div>

          <div className="flex flex-col w-full h-full p-4 md:p-8 items-center justify-center py-8 md:py-12 text-center relative z-10">
            <h1 className="text-3xl md:text-4xl font-extrabold underline mb-2">
              <span className="text-indigo-600">Krit</span>.io
            </h1>
            <p className="text-5xl md:text-7xl font-extrabold leading-tight">Don&apos;t Just Learn to Code.</p>
            <p className="text-xl md:text-2xl font-extrabold mt-4 md:mt-2 text-indigo-400">
              Code Your Career with AI.
            </p>
            <span className="text-sm md:text-base mt-4 text-muted-foreground max-w-2xl mx-auto px-2">
              From AI-generated roadmaps to instant doubt-solving and a built-in editor—get the intelligent guidance you need to land your dream role, faster
            </span>
            <div className="flex flex-row space-x-4 mt-8">
              <Link href="/sign-in">
                <Button variant="outline" size="lg" className="border-indigo-600 text-indigo-600 hover:bg-indigo-600/10">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Features Section */}
        <div className="w-full mt-24 pb-20">
          <div className="flex flex-col w-full h-full items-center justify-center space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-extrabold tracking-tight">
                Top <span className="text-indigo-600">Features</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to master coding, bundled in one integrated platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
              {/* Feature 1 */}
              <div className="flex flex-col p-8 rounded-2xl bg-opacity-5 bg-background border border-border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                <div className="w-12 h-12 rounded-lg bg-indigo-600/20 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Interactive Code Editor</h3>
                <ul className="space-y-2 text-muted-foreground text-sm flex-grow">
                  <li className="flex items-start"><svg className="w-4 h-4 mr-2 mt-0.5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Real-time syntax highlighting</li>
                  <li className="flex items-start"><svg className="w-4 h-4 mr-2 mt-0.5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Multiple language support</li>
                  <li className="flex items-start"><svg className="w-4 h-4 mr-2 mt-0.5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Integrated terminal</li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col p-8 rounded-2xl bg-opacity-5 bg-background border border-border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                <div className="w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Curated Problem Sets</h3>
                <ul className="space-y-2 text-muted-foreground text-sm flex-grow">
                  <li className="flex items-start"><svg className="w-4 h-4 mr-2 mt-0.5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Beginner to advanced difficulty</li>
                  <li className="flex items-start"><svg className="w-4 h-4 mr-2 mt-0.5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Real-world practical scenarios</li>
                  <li className="flex items-start"><svg className="w-4 h-4 mr-2 mt-0.5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Automated test case validation</li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col p-8 rounded-2xl bg-opacity-5 bg-background border border-border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-600/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                <div className="w-12 h-12 rounded-lg bg-pink-600/20 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-400"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                </div>
                <h3 className="text-xl font-bold mb-3">AI Powered Assistance</h3>
                <ul className="space-y-2 text-muted-foreground text-sm flex-grow">
                  <li className="flex items-start"><svg className="w-4 h-4 mr-2 mt-0.5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Smart code suggestions</li>
                  <li className="flex items-start"><svg className="w-4 h-4 mr-2 mt-0.5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Instant error debugging</li>
                  <li className="flex items-start"><svg className="w-4 h-4 mr-2 mt-0.5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Personalized learning paths</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
