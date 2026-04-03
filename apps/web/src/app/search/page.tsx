"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  ArrowRight, 
  MapPin, 
  Users, 
  Calendar, 
  Building2, 
  Rocket, 
  GraduationCap, 
  Briefcase,
  X,
  History,
  TrendingUp,
  Sparkles
} from "lucide-react";
import Link from "next/link";

export default function SearchHub() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const recentSearches = ["Hackathons 2026", "Stanford University", "Webinars"];
  const trendingTags = ["AI Summit", "Startup Pitch", "Cultural Fest", "Olympiad"];

  const results = [
    {
      id: 1,
      type: "organization",
      name: "Stanford University",
      category: "Education",
      location: "CA, USA",
      followers: 12400,
      image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: 2,
      type: "event",
      name: "Global Tech Summit",
      host: "TechSphere Labs",
      date: "Oct 24, 2026",
      participants: 5800,
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=200&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <main className="max-w-4xl mx-auto px-6">
        {/* Search Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 bg-sky-blue/10 text-sky-blue px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-sky-blue/20 w-fit">
            <Sparkles size={12} /> Manor Intelligence Search
          </div>
          <h1 className="text-7xl font-black tracking-tightest leading-none mb-12">
            Find Your <br /> <span className="text-sky-blue">Estate.</span>
          </h1>

          <div className="relative group">
            <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-sky-blue transition-colors" size={28} />
            <input 
              autoFocus
              type="text" 
              placeholder="Search estates, events, or institutions..." 
              className="w-full bg-zinc-50 border-2 border-zinc-50 p-8 pl-20 rounded-[2.5rem] focus:outline-none focus:ring-8 focus:ring-sky-blue/5 focus:border-sky-blue/20 transition-all font-bold text-2xl placeholder:text-zinc-300"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <button 
                onClick={() => setQuery("")}
                className="absolute right-8 top-1/2 -translate-y-1/2 p-2 bg-zinc-200 rounded-full hover:bg-zinc-300 transition-colors"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!query ? (
            <motion.div 
              key="suggestions"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-16"
            >
              {/* Recent Searches */}
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-8 flex items-center gap-2">
                  <History size={14} /> Recent Searches
                </h3>
                <div className="flex flex-wrap gap-4">
                  {recentSearches.map(s => (
                    <button key={s} onClick={() => setQuery(s)} className="bg-zinc-50 px-6 py-3 rounded-2xl text-sm font-bold text-zinc-500 hover:text-black hover:bg-zinc-100 transition-all flex items-center gap-2">
                      {s} <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Trending */}
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-8 flex items-center gap-2">
                  <TrendingUp size={14} /> Global Trending
                </h3>
                <div className="flex flex-wrap gap-4">
                  {trendingTags.map(tag => (
                    <button key={tag} onClick={() => setQuery(tag)} className="border-2 border-zinc-100 px-6 py-3 rounded-2xl text-sm font-bold text-zinc-400 hover:border-sky-blue hover:text-sky-blue transition-all">
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              <div className="flex justify-between items-center border-b border-zinc-100 pb-8">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Search Results</h3>
                <div className="flex gap-4">
                  {['all', 'events', 'estates'].map(f => (
                    <button 
                      key={f} 
                      onClick={() => setActiveFilter(f)}
                      className={`text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg transition-all ${
                        activeFilter === f ? "bg-black text-white" : "text-zinc-400 hover:text-black"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {results.map((item) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 10 }}
                    className="group card flex items-center gap-8 p-6 hover:border-sky-blue/30 cursor-pointer"
                  >
                    <div className="w-24 h-24 bg-zinc-100 rounded-2xl overflow-hidden shrink-0">
                      <img src={item.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={item.name} />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-sky-blue">
                          {item.type === 'organization' ? <Building2 size={10} className="inline mr-1" /> : <Calendar size={10} className="inline mr-1" />}
                          {item.type}
                        </span>
                      </div>
                      <h4 className="text-2xl font-black tracking-tight mb-1">{item.name}</h4>
                      <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest">
                        {item.type === 'organization' ? `${item.category} • ${item.location}` : `Hosted by ${item.host}`}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xl font-black tracking-tighter">
                        {item.type === 'organization' ? ((item.followers ?? 0) / 1000).toFixed(1) + 'K' : ((item.participants ?? 0) / 1000).toFixed(1) + 'K'}
                      </p>
                      <p className="text-[10px] font-black uppercase tracking-widest text-zinc-300">
                        {item.type === 'organization' ? 'Followers' : 'Participants'}
                      </p>
                    </div>
                    <ArrowRight size={24} className="text-zinc-100 group-hover:text-black group-hover:translate-x-2 transition-all shrink-0" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
