"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, Users, LogIn, LayoutDashboard, Plus, Search } from "lucide-react";

export const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ensure header is always visible for navigation
  const isAuthPage = pathname.startsWith("/auth");

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        (scrolled || isAuthPage)
        ? "py-4 bg-white border-b border-zinc-100 shadow-sm" 
        : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12 border border-white/10">
            <div className="w-4 h-4 bg-sky-blue rounded-sm rotate-45" />
          </div>
          <div className="text-2xl font-black tracking-tighter text-black">
            Host Manor.
          </div>
        </Link>

        <nav className="hidden md:flex gap-10 items-center">
          {[
            { label: "Search", href: "/search", icon: <Search size={14} /> },
            { label: "Explore", href: "/explore", icon: <Globe size={14} /> },
            { label: "Estates", href: "/organizations", icon: <Users size={14} /> },
            { label: "My Manor", href: "/dashboard", icon: <LayoutDashboard size={14} /> },
          ].map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors flex items-center gap-2 ${
                pathname === item.href 
                ? "text-sky-blue" 
                : "text-zinc-400 hover:text-black"
              }`}
            >
              {item.icon} {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link 
            href="/auth/login" 
            className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 transition-colors text-zinc-400 hover:text-black"
          >
            Log In
          </Link>
          <Link href="/host/create" className="btn-sky py-2.5 px-6 text-[10px] rounded-full shadow-lg shadow-sky-blue/20 flex items-center gap-2 whitespace-nowrap">
            <Plus size={14} /> Establish Estate
          </Link>
        </div>
      </div>
    </header>
  );
};
