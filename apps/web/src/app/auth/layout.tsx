import React from "react";
import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] -left-10 w-[600px] h-[600px] bg-sky-blue/5 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-[-10%] -right-10 w-[600px] h-[600px] bg-sky-blue/5 blur-[120px] rounded-full z-0" />
      
      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        <div className="w-full max-w-4xl bg-white rounded-[3rem] shadow-2xl shadow-sky-blue/5 border border-zinc-100/50 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {children}
          </div>
        </div>

        {/* Footer for Auth pages */}
        <div className="mt-12 flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300">
          <span>Verified Protocol</span>
          <span>Host Manor Social v1.0</span>
          <span>Secure Cloud</span>
        </div>
      </div>
    </div>
  );
}
