"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Calendar, 
  MapPin, 
  Globe, 
  Users, 
  Plus, 
  Star,
  Trophy,
  ArrowUpRight,
  Filter,
  Activity,
  Sparkles
} from "lucide-react";
import Link from "next/link";

export default function IndividualDashboard() {
  const [activeTab, setActiveTab] = useState("feed");

  // Mock data for the Individual's Dashboard
  const myRegistrations = [
    {
      id: 1,
      title: "National Math Olympiad",
      host: "St. Xavier School",
      date: "Oct 24, 2026",
      status: "Registered",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "AI Ethics Symposium",
      host: "Stanford University",
      date: "Nov 12, 2026",
      status: "Interested",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=400&auto=format&fit=crop"
    }
  ];

  const suggestedFeed = [
    {
      id: 3,
      title: "Web3 Music Festival",
      host: "SoundWave Startups",
      category: "Cultural",
      participants: 2100,
      image: "https://images.unsplash.com/photo-1514525253361-bee871870472?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "React Conf 2026",
      host: "Vercel Estate",
      category: "Tech",
      participants: 4500,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white flex pt-20">
      {/* Sidebar - Personal Stats */}
      <aside className="w-96 bg-zinc-50 border-r border-zinc-100 p-12 hidden lg:flex flex-col fixed h-screen overflow-y-auto mt-4">
        
        
        <div className="space-y-12">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-sky-blue rounded-[2rem] mb-6 flex items-center justify-center text-white shadow-xl shadow-sky-blue/20">
              <span className="text-3xl font-black">HN</span>
            </div>
            <h2 className="text-2xl font-black tracking-tight mb-1">Hemant Nim</h2>
            <p className="text-[10px] font-black uppercase tracking-widest text-sky-blue">Estate Gold Member</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-[1.5rem] border border-zinc-100 shadow-sm">
              <p className="text-2xl font-black tracking-tighter text-sky-blue">12</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Events</p>
            </div>
            <div className="bg-white p-6 rounded-[1.5rem] border border-zinc-100 shadow-sm">
              <p className="text-2xl font-black tracking-tighter">4</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Wins</p>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-100">
            <Link href="/explore" className="btn-sky w-full flex items-center justify-center gap-2 py-4 rounded-2xl">
              <Plus size={20} /> Discover Estates
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Dashboard Feed */}
      <main className="lg:ml-96 flex-grow p-4 md:p-16">
        <div className="max-w-5xl mx-auto">
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 bg-zinc-100 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                <Activity size={12} className="text-sky-blue" /> Live Activity
              </div>
              <h2 className="text-7xl font-black tracking-tighter leading-none">Your Manor.</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left Column - My Registrations */}
            <div className="lg:col-span-1 space-y-12">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 flex items-center gap-4">
                Active Estates <div className="h-[1px] bg-zinc-100 flex-grow" />
              </h3>
              
              <div className="space-y-6">
                {myRegistrations.map((reg) => (
                  <motion.div 
                    key={reg.id}
                    whileHover={{ scale: 1.02 }}
                    className="group card p-6 border-zinc-100 hover:border-sky-blue transition-all cursor-pointer overflow-hidden relative"
                  >
                    <div className="absolute top-0 right-0 p-4">
                      <ArrowUpRight size={16} className="text-zinc-200 group-hover:text-sky-blue transition-colors" />
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-sky-blue mb-4">{reg.status}</p>
                    <h4 className="text-xl font-black tracking-tight mb-2 leading-tight">{reg.title}</h4>
                    <p className="text-xs font-bold text-zinc-400 mb-6">{reg.host}</p>
                    <div className="flex items-center gap-2 text-xs font-bold text-zinc-500">
                      <Calendar size={14} className="text-sky-blue" /> {reg.date}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column - Suggested Manor Events */}
            <div className="lg:col-span-2 space-y-12">
              <div className="flex justify-between items-center">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Curated for You</h3>
                <Filter size={16} className="text-zinc-300 cursor-pointer hover:text-black transition-colors" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {suggestedFeed.map((event) => (
                  <motion.div
                    key={event.id}
                    whileHover={{ y: -5 }}
                    className="card border-none bg-zinc-50 p-0 overflow-hidden group cursor-pointer hover:shadow-sky-blue/10"
                  >
                    <div className="h-40 overflow-hidden relative">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                      />
                    </div>
                    <div className="p-8">
                      <span className="tag-sky mb-4 inline-block">{event.category}</span>
                      <h4 className="text-2xl font-black tracking-tight mb-2 group-hover:text-sky-blue transition-colors">{event.title}</h4>
                      <p className="text-sm font-bold text-zinc-400 mb-8">{event.host}</p>
                      
                      <div className="flex justify-between items-center pt-6 border-t border-zinc-200/50">
                        <div className="flex items-center gap-1 text-[10px] font-black uppercase text-zinc-300 group-hover:text-black transition-colors">
                          <Users size={12} /> {event.participants.toLocaleString()}
                        </div>
                        <Plus size={18} className="text-zinc-200 group-hover:text-sky-blue group-hover:rotate-90 transition-all duration-500" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-black text-white rounded-[2.5rem] p-12 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-sky-blue/10 group-hover:bg-sky-blue/20 transition-colors" />
                <div className="relative z-10">
                  <h4 className="text-4xl font-black tracking-tighter mb-4">Host Your <br /> Own Estate?</h4>
                  <p className="text-zinc-400 font-medium max-w-xs leading-relaxed">Establish your own presence in the Manor today.</p>
                </div>
                <Link href="/auth/role" className="btn-sky px-8 py-4 relative z-10 font-black uppercase text-xs tracking-widest transition-all">
                  Switch to Host
                </Link>
                <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                  <Sparkles size={240} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
