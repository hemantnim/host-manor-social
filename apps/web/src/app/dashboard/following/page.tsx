"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  MapPin, 
  Users, 
  ShieldCheck, 
  Search, 
  ArrowRight,
  MoreVertical,
  Bell,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import Link from "next/link";

export default function FollowingDirectory() {
  const [query, setQuery] = useState("");

  const followedOrgs = [
    {
      id: 1,
      name: "Stanford University",
      type: "College",
      location: "CA, USA",
      followers: 12400,
      image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=400&auto=format&fit=crop",
      verified: true
    },
    {
      id: 2,
      name: "TechSphere Labs",
      type: "Startup",
      location: "Berlin, Germany",
      followers: 8200,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400&auto=format&fit=crop",
      verified: true
    }
  ];

  const filtered = followedOrgs.filter(o => o.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <main className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 bg-sky-blue/10 text-sky-blue px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-sky-blue/20 mb-8">
              <Users size={12} /> Community Registry
            </div>
            <h1 className="text-7xl font-black tracking-tightest leading-none mb-4">Your <br /> <span className="text-sky-blue italic">Estates.</span></h1>
            <p className="text-xl text-zinc-400 font-medium">Organizations you are currently following in the Manor.</p>
          </div>

          <div className="w-full md:w-80 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300" size={18} />
            <input 
              type="text" 
              placeholder="Search followed..." 
              className="input-field pl-12 py-4 bg-zinc-50 border-none rounded-2xl"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Following Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filtered.map((org) => (
              <motion.div 
                key={org.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group card border-zinc-100 hover:border-sky-blue/30 p-8 transition-all"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-20 h-20 bg-zinc-100 rounded-3xl overflow-hidden shadow-lg border-2 border-white grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img src={org.image} className="w-full h-full object-cover" alt={org.name} />
                  </div>
                  <div className="flex gap-2">
                    <button className="p-3 bg-zinc-50 rounded-xl text-zinc-400 hover:text-sky-blue transition-colors">
                      <Bell size={18} />
                    </button>
                    <button className="p-3 bg-zinc-50 rounded-xl text-zinc-400 hover:text-black transition-colors">
                      <MoreVertical size={18} />
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-2xl font-black tracking-tight">{org.name}</h3>
                      {org.verified && <ShieldCheck size={20} className="text-sky-blue" />}
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{org.type} • {org.location}</p>
                  </div>

                  <div className="flex items-center gap-2 text-sky-blue">
                    <CheckCircle2 size={14} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Active Following</span>
                  </div>

                  <div className="pt-6 border-t border-zinc-50 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Users size={14} className="text-zinc-300" />
                      <span className="text-sm font-bold text-zinc-400">{(org.followers / 1000).toFixed(1)}K Members</span>
                    </div>
                    <Link href={`/org/${org.id}`} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] hover:text-sky-blue transition-all">
                      Visit Estate <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="py-40 text-center">
            <p className="text-zinc-400 font-bold uppercase tracking-widest text-xs">No estates found in your registry.</p>
          </div>
        )}

        {/* Recommendations CTA */}
        <div className="mt-32 bg-black rounded-[3rem] p-16 relative overflow-hidden group">
          <div className="absolute inset-0 bg-sky-blue/10" />
          <div className="relative z-10 max-w-xl">
            <h2 className="text-5xl font-black text-white tracking-tightest mb-6 leading-none">Find More <br /> <span className="text-sky-blue italic">Elite</span> Institutions.</h2>
            <p className="text-zinc-400 text-lg font-medium mb-10 leading-relaxed">
              Explore the global directory to discover new estates, institutes, and corporate networks.
            </p>
            <Link href="/organizations" className="btn-sky px-10 py-4 rounded-2xl inline-flex items-center gap-2">
              Explore Directory <ArrowRight size={20} />
            </Link>
          </div>
          <Sparkles size={240} className="absolute -bottom-10 -right-10 text-white/5 group-hover:rotate-12 transition-transform duration-1000" />
        </div>
      </main>
    </div>
  );
}
