"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, Users, LogIn, LayoutDashboard, Plus } from "lucide-react";

export const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Don't show header on auth pages if we want a clean auth experience
  if (pathname.startsWith("/auth")) return null;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled 
        ? "py-4 bg-white/80 backdrop-blur-xl border-b border-zinc-100 shadow-sm" 
        : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12">
            <div className="w-4 h-4 bg-sky-blue rounded-sm rotate-45" />
          </div>
          <div className="text-2xl font-black tracking-tighter">Host Manor.</div>
        </Link>

        <nav className="hidden md:flex gap-10 items-center">
          <Link 
            href="/explore" 
            className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors flex items-center gap-2 ${
              pathname === "/explore" ? "text-sky-blue" : "text-zinc-400 hover:text-black"
            }`}
          >
            <Globe size={14} /> Explore
          </Link>
          <Link 
            href="/organizations" 
            className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors flex items-center gap-2 ${
              pathname === "/organizations" ? "text-sky-blue" : "text-zinc-400 hover:text-black"
            }`}
          >
            <Users size={14} /> Estates
          </Link>
          <Link 
            href="/dashboard" 
            className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors flex items-center gap-2 ${
              pathname === "/dashboard" ? "text-sky-blue" : "text-zinc-400 hover:text-black"
            }`}
          >
            <LayoutDashboard size={14} /> My Manor
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/auth/login" className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-black px-4 py-2 transition-colors">
            Log In
          </Link>
          <Link href="/host/create" className="btn-sky py-2.5 px-6 text-[10px] rounded-full shadow-lg shadow-sky-blue/20 flex items-center gap-2">
            <Plus size={14} /> Establish Estate
          </Link>
        </div>
      </div>
    </header>
  );
};
