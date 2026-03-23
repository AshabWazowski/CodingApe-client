import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Sparkles } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background blobs for futuristic feel */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />
      
      <div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-md">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-indigo-400 font-medium tracking-widest uppercase text-xs mb-2 animate-pulse">
            <Sparkles className="w-4 h-4" />
            <span>Secure Access</span>
          </div>
          <h1 className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-500 tracking-tighter">
            SIGN IN
          </h1>
          <p className="text-zinc-500 text-sm">Welcome back to the future of learning.</p>
        </div>

        <div className="w-full bg-zinc-900/50 backdrop-blur-xl rounded-2xl border border-white/5 p-1 shadow-2xl shadow-indigo-500/10 transition-all duration-500 hover:border-indigo-500/30">
          <SignIn 
            path="/sign-in" 
            appearance={{ 
              baseTheme: dark,
              elements: {
                card: "bg-transparent shadow-none border-none",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                footer: "bg-transparent",
                socialButtonsBlockButton: "bg-zinc-800 border-white/5 hover:bg-zinc-700 transition-all",
                formButtonPrimary: "bg-indigo-600 hover:bg-indigo-500 transition-all text-sm font-bold",
                formFieldInput: "bg-zinc-800 border-white/5 focus:border-indigo-500/50 transition-all",
                dividerLine: "bg-zinc-800",
                dividerText: "text-zinc-500",
                footerActionLink: "text-indigo-400 hover:text-indigo-300 transition-all"
              }
            }} 
          />
        </div>
      </div>

      {/* Futuristic Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
    </div>
  );
}
