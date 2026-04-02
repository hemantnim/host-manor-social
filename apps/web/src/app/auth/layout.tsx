import React from "react";
import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      {/* Visual Sidebar */}
      <div className="hidden lg:flex lg:w-1/2 bg-black relative overflow-hidden items-center justify-center p-20">
        <div className="absolute inset-0 bg-sky-blue/10" />
        <div className="absolute top-[-10%] -left-10 w-[500px] h-[500px] bg-sky-blue/20 blur-[120px] rounded-full" />
        
        <div className="relative z-10 max-w-md">
          <Link href="/" className="text-3xl font-black text-white tracking-tighter mb-12 block italic">HM.</Link>
          <h2 className="text-7xl font-black text-white tracking-tightest leading-[0.9] mb-8">
            The Digital <br /> <span className="text-sky-blue">Estate</span> Awaits.
          </h2>
          <p className="text-zinc-400 text-xl font-medium leading-relaxed">
            Establish your presence in the most elite social hosting ecosystem.
          </p>
        </div>

        <div className="absolute bottom-12 left-12 right-12 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
          <span>Verified Security</span>
          <span>Host Manor v1.0</span>
        </div>
      </div>

      {/* Auth Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-20">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
}
