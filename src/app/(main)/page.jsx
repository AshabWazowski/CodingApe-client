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
      <div className="w-full py-4 px-20">
        {/* Edit the shadow to make it more prominent and visible on the upper side too */}
        <div className="relative overflow-hidden flex items-center justify-center w-full rounded-3xl bg-opacity-10 h-[calc(100vh-108px)] shadow-border py-8 px-4 bg-background duration-300 mt-2 shadow-lg transition-all border border-border">
          {/* Animated Background Glow */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl mix-blend-screen">
            <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -ml-[300px] -mt-[300px] bg-indigo-600/20 blur-[120px] rounded-full animate-move-across-1 mix-blend-screen"></div>
            <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -ml-[250px] -mt-[250px] bg-purple-600/20 blur-[100px] rounded-full animate-move-across-2 mix-blend-screen"></div>
            <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -ml-[200px] -mt-[200px] bg-pink-600/20 blur-[100px] rounded-full animate-move-across-3 mix-blend-screen"></div>
          </div>

          <div className="flex flex-col w-full h-full p-8 items-center justify-center py-12 text-center relative z-10">
            <h1 className="text-4xl font-extrabold underline mb-2">
              <span className="text-indigo-600">Krit</span>.io
            </h1>
            <p className="text-7xl font-extrabold">Don&apos;t Just Learn to Code.</p>
            <p className="text-2xl font-extrabold mt-2 text-indigo-400">
              Code Your Career with AI.
            </p>
            <span className="text-sm mt-4 text-muted-foreground max-w-2xl mx-auto">
              <span className="font-bold"></span>From AI-generated roadmaps to instant doubt-solving and a built-in editor—get the intelligent guidance you need to land your dream role, faster
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
      {/* Footer */}
      <footer className="w-full border-t border-indigo-500/10 bg-background/50 shadow-[0_-15px_40px_-15px_rgba(99,102,241,0.15)] relative mt-12">
        <div className="w-full max-w-6xl mx-auto py-12 px-6 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <span className="text-2xl font-extrabold tracking-tight">
              <span className="text-indigo-600">Krit</span>.io
            </span>
            <p className="text-sm text-muted-foreground">
              Code Your Career with AI.
            </p>
          </div>

          <div className="flex space-x-6">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="sr-only">TwitterX</span>
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="sr-only">Discord</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M19.387 4.098a15.86 15.86 0 00-3.957-1.222.06.06 0 00-.063.03c-.15.267-.32.613-.443.9-1.4.256-2.822.256-4.223 0-.125-.287-.298-.633-.45-.9a.062.062 0 00-.062-.03 15.823 15.823 0 00-3.958 1.223.058.058 0 00-.026.02C3.155 8.783 2.054 13.385 2.54 17.925a.066.066 0 00.025.044 15.939 15.939 0 004.8 2.478.067.067 0 00.071-.024c.3-.414.577-.852.821-1.312a.065.065 0 00-.036-.091 10.591 10.591 0 01-1.503-.728.066.066 0 01-.006-.11c.1-.077.2-.156.297-.238a.062.062 0 01.065-.008c3.15 1.442 6.551 1.442 9.68 0a.062.062 0 01.066.008c.097.082.197.161.298.238a.065.065 0 01-.007.11 10.669 10.669 0 01-1.503.727.065.065 0 00-.035.091c.245.46.523.898.82 1.313a.068.068 0 00.071.024 15.918 15.918 0 004.81-2.478.066.066 0 00.024-.043c.563-5.2-1.306-9.764-3.665-13.805a.058.058 0 00-.026-.02zM8.344 14.51c-1.064 0-1.936-.97-1.936-2.163 0-1.194.86-2.162 1.936-2.162 1.088 0 1.948.981 1.936 2.162 0 1.192-.86 2.163-1.936 2.163zm7.3 0c-1.063 0-1.935-.97-1.935-2.163 0-1.194.861-2.162 1.935-2.162 1.088 0 1.948.981 1.936 2.162 0 1.192-.848 2.163-1.936 2.163z"></path>
              </svg>
            </Link>
          </div>
        </div>
        <div className="w-full border-border/50 py-6 text-sm text-muted-foreground relative z-10">
          <div className="flex flex-col md:flex-row max-w-6xl mx-auto w-full px-6 justify-between items-center gap-4">
            <span>&copy; {new Date().getFullYear()} Krit.io. All rights reserved.</span>
            <div className="flex space-x-6">
              <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Contact Us</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
