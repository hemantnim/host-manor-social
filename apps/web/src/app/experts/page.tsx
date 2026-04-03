"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Filter, 
  Star, 
  Briefcase, 
  ShieldCheck, 
  MapPin, 
  ArrowRight, 
  Plus,
  DollarSign,
  Trophy,
  Activity
} from "lucide-react";
import Link from "next/link";
import { VerifiedBadge } from "@/components/ui/badges/VerifiedBadge";

export default function ExpertsDirectory() {
  const [query, setQuery] = useState("");
  const [activeSpecialty, setActiveSpecialty] = useState("all");

  const specialties = ["all", "Guest Lecture", "Technical Workshop", "Judge", "Keynote Speaker", "Mentorship"];

  const experts = [
    {
      id: 1,
      name: "Dr. Julian Vane",
      company: "Google Intelligence",
      role: "Lead Scientist",
      specialty: "Keynote Speaker",
      rating: 4.9,
      engagements: 45,
      fee: 1200,
      image: "https://i.pravatar.cc/150?u=julian",
      verified: true,
      badge: "Elite"
    },
    {
      id: 2,
      name: "Sarah Chen",
      company: "OpenAI",
      role: "Strategy Lead",
      specialty: "Technical Workshop",
      rating: 4.8,
      engagements: 28,
      fee: 850,
      image: "https://i.pravatar.cc/150?u=sarah",
      verified: true,
      badge: "Premium"
    },
    {
      id: 3,
      name: "Marcus Thorne",
      company: "Tesla",
      role: "Design Director",
      specialty: "Judge",
      rating: 4.7,
      engagements: 12,
      fee: 500,
      image: "https://i.pravatar.cc/150?u=marcus",
      verified: true,
      badge: "Verified"
    }
  ];

  const filtered = experts.filter(e => {
    const matchesSearch = e.name.toLowerCase().includes(query.toLowerCase()) || e.company.toLowerCase().includes(query.toLowerCase());
    const matchesSpecialty = activeSpecialty === "all" || e.specialty === activeSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Editorial Header */}
      <header className="bg-black text-white pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-sky-blue/5" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-sky-blue/20 text-sky-blue px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-sky-blue/30 mb-8">
              <Trophy size={12} /> The Manor Experts
            </div>
            <h1 className="text-7xl md:text-8xl font-black tracking-tightest leading-none mb-8">
              Elite <br /> <span className="text-sky-blue italic">Intellect.</span>
            </h1>
            <p className="text-xl text-zinc-400 font-medium leading-relaxed">
              Discover and book world-class professionals for your institutional events. Every expert is domain-verified and peer-reviewed.
            </p>
          </div>
        </div>
      </header>

      {/* Filter Bar */}
      <nav className="sticky top-20 bg-white/80 backdrop-blur-xl border-b border-zinc-100 z-[90] py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide w-full md:w-auto">
            {specialties.map((s) => (
              <button
                key={s}
                onClick={() => setActiveSpecialty(s)}
                className={`px-6 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest transition-all whitespace-nowrap ${
                  activeSpecialty === s 
                  ? "bg-black text-white shadow-xl shadow-black/10" 
                  : "bg-zinc-50 text-zinc-400 hover:bg-zinc-100"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="w-full md:w-80 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300" size={18} />
            <input 
              type="text" 
              placeholder="Search experts..." 
              className="input-field pl-12 py-3 bg-zinc-50 border-none rounded-xl"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </nav>

      {/* Grid */}
      <main className="max-w-7xl mx-auto px-6 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((expert) => (
              <motion.div
                key={expert.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8 }}
                className="card group hover:border-sky-blue/30 p-0 overflow-hidden"
              >
                <div className="p-10 text-center">
                  <div className="relative w-32 h-32 mx-auto mb-8">
                    <div className="absolute inset-0 bg-sky-blue blur-2xl opacity-0 group-hover:opacity-20 transition-opacity rounded-full" />
                    <img src={expert.image} className="w-full h-full object-cover rounded-[2.5rem] relative z-10 grayscale group-hover:grayscale-0 transition-all duration-700" alt={expert.name} />
                    {expert.verified && (
                      <div className="absolute -bottom-2 -right-2 z-20">
                        <VerifiedBadge />
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 mb-8">
                    <div className="flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-sky-blue">
                      <Briefcase size={12} /> {expert.company}
                    </div>
                    <h3 className="text-3xl font-black tracking-tight group-hover:text-sky-blue transition-colors">{expert.name}</h3>
                    <p className="text-zinc-400 font-medium">{expert.role}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 border-y border-zinc-50 py-6 mb-8">
                    <div>
                      <p className="font-black text-lg tabular-nums flex items-center justify-center gap-1">
                        <Star size={14} className="text-yellow-500 fill-yellow-500" /> {expert.rating}
                      </p>
                      <p className="text-[8px] font-black uppercase tracking-widest text-zinc-300">Rating</p>
                    </div>
                    <div>
                      <p className="font-black text-lg tabular-nums">{expert.engagements}</p>
                      <p className="text-[8px] font-black uppercase tracking-widest text-zinc-300">Sessions</p>
                    </div>
                    <div>
                      <p className="font-black text-lg tabular-nums text-sky-blue">${expert.fee}</p>
                      <p className="text-[8px] font-black uppercase tracking-widest text-zinc-300">Base Fee</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link href={`/experts/${expert.id}`} className="btn-sky flex-1 py-4 text-[10px] uppercase font-black tracking-widest rounded-2xl shadow-lg shadow-sky-blue/10">
                      View Portfolio
                    </Link>
                    <button className="btn-secondary w-14 p-0 rounded-2xl flex items-center justify-center text-zinc-300 hover:text-black hover:border-black transition-all">
                      <Plus size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
