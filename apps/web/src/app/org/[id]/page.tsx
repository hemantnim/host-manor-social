"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Globe, 
  MapPin, 
  Users, 
  Calendar, 
  ShieldCheck, 
  Share2, 
  Plus,
  Grid,
  Info,
  Clock
} from "lucide-react";
import Link from "next/link";

export default function OrganizationProfile() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [activeTab, setActiveTab] = useState("events");

  // Mock data for the MVP Profile
  const org = {
    name: "Stanford University",
    type: "College",
    verified: true,
    location: "Stanford, CA, USA",
    website: "https://stanford.edu",
    followers: 12400,
    totalEvents: 85,
    bio: "The Leland Stanford Junior University is a private research university in Stanford, California. Our mission is to provide an elite ecosystem for academic excellence and innovation through world-class events.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&w=200&auto=format&fit=crop"
  };

  const upcomingEvents = [
    {
      id: 1,
      title: "Global Tech Summit 2026",
      date: "Oct 24, 2026",
      mode: "physical",
      location: "Main Auditorium",
      participants: 500,
    },
    {
      id: 2,
      title: "AI Ethics Symposium",
      date: "Nov 12, 2026",
      mode: "virtual",
      location: "Zoom",
      participants: 1200,
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Editorial Header */}
      <header className="relative h-[45vh] w-full overflow-hidden bg-zinc-900">
        <img 
          src={org.image} 
          alt={org.name} 
          className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </header>

      <main className="max-w-7xl mx-auto px-6 -mt-32 relative z-10 pb-20">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar - Profile Info */}
          <aside className="lg:w-1/3 space-y-12">
            <div className="card p-10 border-zinc-100 shadow-2xl shadow-zinc-100/50">
              <div className="w-24 h-24 bg-white border border-zinc-100 rounded-3xl p-1 mb-8 -mt-20 shadow-xl">
                <img src={org.logo} alt={org.name} className="w-full h-full object-cover rounded-2xl grayscale" />
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h1 className="text-3xl font-black tracking-tight">{org.name}</h1>
                    {org.verified && <ShieldCheck className="text-black" size={24} />}
                  </div>
                  <p className="text-zinc-400 font-bold text-xs uppercase tracking-widest">{org.type} • {org.location}</p>
                </div>

                <div className="flex gap-12 py-6 border-y border-zinc-50">
                  <div>
                    <p className="text-2xl font-black tracking-tighter">{(org.followers / 1000).toFixed(1)}K</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Followers</p>
                  </div>
                  <div>
                    <p className="text-2xl font-black tracking-tighter">{org.totalEvents}</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Events Hosted</p>
                  </div>
                </div>

                <p className="text-zinc-500 font-medium leading-relaxed">
                  {org.bio}
                </p>

                <div className="space-y-4 pt-4">
                  <a href={org.website} target="_blank" className="flex items-center gap-3 text-sm font-bold hover:text-zinc-500 transition-colors">
                    <Globe size={18} /> Official Estate
                  </a>
                  <div className="flex items-center gap-3 text-sm font-bold text-zinc-400">
                    <MapPin size={18} /> {org.location}
                  </div>
                </div>

                <div className="pt-8 flex flex-col gap-4">
                  <button 
                    onClick={() => setIsFollowing(!isFollowing)}
                    className={`btn-primary w-full py-4 text-sm font-black uppercase tracking-widest ${isFollowing ? "bg-zinc-100 !text-black hover:bg-zinc-200" : ""}`}
                  >
                    {isFollowing ? "Following Estate" : "Follow Organization"}
                  </button>
                  <button className="btn-secondary w-full py-4 text-sm font-black uppercase tracking-widest flex items-center justify-center gap-2">
                    <Share2 size={16} /> Share Profile
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Feed Content */}
          <div className="lg:w-2/3 pt-12">
            {/* Tabs */}
            <div className="flex gap-12 border-b border-zinc-100 mb-12">
              <button 
                onClick={() => setActiveTab("events")}
                className={`pb-4 text-[10px] font-black uppercase tracking-[0.3em] transition-all relative ${
                  activeTab === "events" ? "text-black" : "text-zinc-300"
                }`}
              >
                Upcoming Events
                {activeTab === "events" && <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-1 bg-black" />}
              </button>
              <button 
                onClick={() => setActiveTab("past")}
                className={`pb-4 text-[10px] font-black uppercase tracking-[0.3em] transition-all relative ${
                  activeTab === "past" ? "text-black" : "text-zinc-300"
                }`}
              >
                Past Estates
                {activeTab === "past" && <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-1 bg-black" />}
              </button>
              <button 
                onClick={() => setActiveTab("about")}
                className={`pb-4 text-[10px] font-black uppercase tracking-[0.3em] transition-all relative ${
                  activeTab === "about" ? "text-black" : "text-zinc-300"
                }`}
              >
                The Institution
                {activeTab === "about" && <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-1 bg-black" />}
              </button>
            </div>

            {/* Content Area */}
            <div className="grid grid-cols-1 gap-8">
              {activeTab === "events" && upcomingEvents.map((event) => (
                <motion.div 
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ x: 10 }}
                  className="group flex items-center justify-between p-8 bg-zinc-50 rounded-[2rem] border border-transparent hover:border-zinc-200 hover:bg-white transition-all cursor-pointer"
                >
                  <div className="flex gap-10 items-center">
                    <div className="text-center min-w-[60px]">
                      <p className="text-3xl font-black tracking-tight leading-none uppercase">{event.date.split(" ")[1].replace(",", "")}</p>
                      <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{event.date.split(" ")[0]}</p>
                    </div>
                    <div className="h-12 w-[1px] bg-zinc-200" />
                    <div>
                      <h3 className="text-2xl font-black tracking-tight mb-2 group-hover:tracking-tighter transition-all">{event.title}</h3>
                      <div className="flex gap-6 items-center text-xs font-bold text-zinc-400 uppercase tracking-widest">
                        <span className="flex items-center gap-2"><Clock size={14} /> 10:00 AM</span>
                        <span className="flex items-center gap-2">{event.mode === 'virtual' ? <Globe size={14} /> : <MapPin size={14} />} {event.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-300 group-hover:text-black transition-colors">{event.participants} Joined</span>
                    <Plus size={20} className="text-zinc-200 group-hover:text-black group-hover:rotate-90 transition-all duration-500" />
                  </div>
                </motion.div>
              ))}

              {activeTab === "about" && (
                <div className="prose prose-zinc prose-xl max-w-none p-12 bg-zinc-50 rounded-[2rem]">
                  <h2 className="text-4xl font-black tracking-tight mb-8">The Institutional Legacy.</h2>
                  <p className="text-zinc-500 font-medium leading-relaxed">
                    Stanford University, officially Leland Stanford Junior University, is a private research university in Stanford, California. The university is among the world's top academic institutions, occupying 8,180 acres (3,310 ha), one of the largest campuses in the United States.
                  </p>
                  <div className="grid grid-cols-2 gap-12 mt-16 pt-12 border-t border-zinc-200">
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-4">Founded</h4>
                      <p className="text-2xl font-black">1885</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-4">Focus</h4>
                      <p className="text-2xl font-black">Innovation & Arts</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
