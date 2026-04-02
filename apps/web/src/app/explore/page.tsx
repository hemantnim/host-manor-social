"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  Filter, 
  MapPin, 
  Globe, 
  Calendar, 
  Plus, 
  Users,
  GraduationCap,
  Rocket,
  Briefcase,
  Music
} from "lucide-react";
import Link from "next/link";

export default function ExploreFeed() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Events", icon: null },
    { id: "education", label: "Education", icon: <GraduationCap size={16} /> },
    { id: "tech", label: "Tech", icon: <Rocket size={16} /> },
    { id: "corporate", label: "Corporate", icon: <Briefcase size={16} /> },
    { id: "cultural", label: "Cultural", icon: <Music size={16} /> },
  ];

  // Mock data for the MVP Feed
  const events = [
    {
      id: 1,
      title: "National Math Olympiad",
      host: "St. Xavier School",
      category: "education",
      date: "Oct 24, 2026",
      mode: "physical",
      location: "New Delhi",
      participants: 1240,
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Global AI Hackathon",
      host: "TechSphere Startups",
      category: "tech",
      date: "Nov 12, 2026",
      mode: "virtual",
      location: "Metaverse",
      participants: 5800,
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Future of HR Seminar",
      host: "Nexus Corp",
      category: "corporate",
      date: "Dec 05, 2026",
      mode: "virtual",
      location: "Zoom",
      participants: 450,
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const filteredEvents = activeTab === "all" 
    ? events 
    : events.filter(e => e.category === activeTab);

  return (
    <div className="min-h-screen bg-zinc-50 flex">
      {/* Sidebar - Quick Navigation */}
      <aside className="w-80 bg-white border-r border-zinc-100 p-8 hidden xl:flex flex-col fixed h-screen">
        <Link href="/" className="text-2xl font-black tracking-tighter mb-12">HM.</Link>
        
        <div className="space-y-8">
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">Menu</h4>
            <nav className="flex flex-col gap-4">
              <Link href="/explore" className="flex items-center gap-3 font-bold text-black bg-zinc-50 p-3 rounded-xl">
                <Globe size={20} /> Feed
              </Link>
              <Link href="/organizations" className="flex items-center gap-3 font-bold text-zinc-400 hover:text-black p-3 transition-colors">
                <Users size={20} /> Organizations
              </Link>
              <Link href="/calendar" className="flex items-center gap-3 font-bold text-zinc-400 hover:text-black p-3 transition-colors">
                <Calendar size={20} /> My Schedule
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">Trending Hosts</h4>
            <div className="space-y-4">
              {['Stanford', 'Google', 'MIT', 'OpenAI'].map((host) => (
                <div key={host} className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-8 h-8 bg-zinc-100 rounded-lg group-hover:bg-black transition-colors" />
                  <span className="font-bold text-sm text-zinc-600 group-hover:text-black">{host}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <Link href="/host/create" className="btn-primary w-full flex items-center justify-center gap-2 py-4">
            <Plus size={20} /> Host Event
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="xl:ml-80 flex-grow p-4 md:p-12">
        <div className="max-w-6xl mx-auto">
          {/* Header & Search */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
            <div>
              <h1 className="text-4xl font-black tracking-tight mb-2">Discovery Feed.</h1>
              <p className="text-zinc-500 font-medium">Explore upcoming events in the Manor estate.</p>
            </div>
            
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
              <input 
                type="text" 
                placeholder="Search events, hosts..." 
                className="w-full bg-white border border-zinc-100 p-4 pl-12 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all font-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Categories Horizontal Scroll */}
          <div className="flex gap-4 overflow-x-auto pb-8 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm whitespace-nowrap transition-all ${
                  activeTab === cat.id 
                  ? "bg-black text-white shadow-lg shadow-black/10" 
                  : "bg-white text-zinc-400 border border-zinc-100 hover:border-zinc-300"
                }`}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>

          {/* Event Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -8 }}
                className="card bg-white p-0 overflow-hidden border-none"
              >
                <div className="h-48 w-full relative overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest">
                      {event.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 bg-zinc-100 rounded-full" />
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{event.host}</span>
                  </div>
                  <h3 className="text-xl font-black tracking-tight mb-4 leading-tight">{event.title}</h3>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-2 text-zinc-500 text-sm font-medium">
                      <Calendar size={14} /> {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500 text-sm font-medium">
                      {event.mode === 'virtual' ? <Globe size={14} /> : <MapPin size={14} />}
                      {event.location}
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-6 border-t border-zinc-50">
                    <div className="flex items-center gap-1 text-xs font-bold text-zinc-400">
                      <Users size={14} /> {event.participants.toLocaleString()} joined
                    </div>
                    <button className="text-xs font-black uppercase tracking-[0.2em] hover:tracking-[0.3em] transition-all">View Estate</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
