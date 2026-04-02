"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Calendar, 
  MapPin, 
  Globe, 
  Users, 
  Share2, 
  ArrowLeft,
  CheckCircle2,
  Clock,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";

export default function EventDetailPage() {
  const [isRegistered, setIsRegistered] = useState(false);

  // Mock data for the MVP Detail Page
  const event = {
    title: "National Math Olympiad 2026",
    host: "St. Xavier School",
    category: "Education",
    subCategory: "Test",
    date: "October 24, 2026",
    time: "10:00 AM IST",
    mode: "physical",
    location: "Auditorium, St. Xavier Main Campus, New Delhi",
    description: `The National Math Olympiad is the premier academic challenge for young minds. This year, we are hosting over 2,000 participants in a rigorous test of logic, arithmetic, and problem-solving. 

The event will feature:
• 3 Rounds of competitive testing.
• Guest lecture by renowned mathematicians.
• Certification for all participants.
• Grand prizes for the top 10 estates.

Join us in celebrating the beauty of mathematics in the heart of the Manor estate.`,
    participants: 1240,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Editorial Header */}
      <header className="relative h-[60vh] w-full overflow-hidden bg-zinc-900">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-20">
          <div className="max-w-7xl mx-auto w-full">
            <Link href="/explore" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-12 font-bold text-sm transition-colors group">
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Feed
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-white text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                  {event.category}
                </span>
                <span className="text-white/60 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  <ShieldCheck size={14} /> Verified Host
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white tracking-tightest leading-none mb-8">
                {event.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Content Grid */}
      <main className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-20">
        <div className="lg:col-span-2 space-y-16">
          <section>
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-12">The Narrative</h3>
            <div className="prose prose-zinc prose-2xl max-w-none">
              <p className="text-2xl font-medium text-zinc-600 leading-relaxed whitespace-pre-line">
                {event.description}
              </p>
            </div>
          </section>

          <section className="pt-16 border-t border-zinc-100">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-12">The Host</h3>
            <div className="flex items-center gap-6 p-8 bg-zinc-50 rounded-3xl">
              <div className="w-20 h-20 bg-zinc-200 rounded-2xl" />
              <div>
                <h4 className="text-2xl font-black tracking-tight">{event.host}</h4>
                <p className="text-zinc-500 font-medium">Educational Institution • New Delhi, India</p>
                <button className="mt-4 text-xs font-black uppercase tracking-widest text-black hover:underline">View Estate Profile</button>
              </div>
            </div>
          </section>
        </div>

        {/* Action Sidebar */}
        <aside className="space-y-8">
          <div className="card sticky top-12 p-10 space-y-10 border-zinc-100 shadow-xl shadow-zinc-100/50">
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-zinc-600">
                <Calendar className="text-black" size={24} />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Date</p>
                  <p className="font-bold">{event.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-zinc-600">
                <Clock className="text-black" size={24} />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Time</p>
                  <p className="font-bold">{event.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-zinc-600">
                {event.mode === 'virtual' ? <Globe className="text-black" size={24} /> : <MapPin className="text-black" size={24} />}
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Location</p>
                  <p className="font-bold leading-tight">{event.location}</p>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-zinc-100">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <Users size={18} className="text-zinc-400" />
                  <span className="font-bold text-sm">{event.participants.toLocaleString()}</span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Participants</span>
              </div>

              {!isRegistered ? (
                <button 
                  onClick={() => setIsRegistered(true)}
                  className="btn-primary w-full py-5 text-lg flex items-center justify-center gap-2"
                >
                  Register Now
                </button>
              ) : (
                <div className="bg-zinc-50 p-6 rounded-2xl flex flex-col items-center text-center">
                  <CheckCircle2 className="text-black mb-4" size={32} />
                  <p className="font-bold text-lg mb-1">Estate Reserved</p>
                  <p className="text-zinc-400 text-xs font-medium uppercase tracking-widest">See you there!</p>
                </div>
              )}
              
              <button className="w-full mt-4 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-colors py-4">
                <Share2 size={16} /> Share Estate
              </button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
