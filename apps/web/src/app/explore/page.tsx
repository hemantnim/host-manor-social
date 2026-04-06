"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  Globe, 
  Calendar, 
  Plus, 
  Users,
  GraduationCap,
  Rocket,
  Briefcase,
  Music,
  MapPin,
  Sparkles,
  Mail
} from "lucide-react";
import Link from "next/link";
import { ManorNewsletter } from "@/components/ui/ManorNewsletter";

export default function ExploreFeed() {
  const [activeTab, setActiveTab] = useState("all");
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  const categories = [
    { id: "all", label: "All Events", icon: null },
    { id: "education", label: "Education", icon: <GraduationCap size={16} /> },
    { id: "tech", label: "Tech", icon: <Rocket size={16} /> },
    { id: "corporate", label: "Corporate", icon: <Briefcase size={16} /> },
    { id: "cultural", label: "Cultural", icon: <Music size={16} /> },
  ];

  const [events, setEvents] = useState([
    {
      id: 1,
      title: "National Math Olympiad",
      host: "St. Xavier School",
      category: "education",
      date: "Oct 24, 2026",
      mode: "physical",
      location: "New Delhi",
      participants: 1240,
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
      type: "internal"
    },
    {
      id: 2,
      title: "Manor Global Discovery: Space Hack 2026",
      host: "NASA (via Global Discovery)",
      category: "tech",
      date: "Nov 12, 2026",
      mode: "virtual",
      location: "Global",
      participants: 5800,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
      type: "discovery"
    }
  ]);

  React.useEffect(() => {
    // Automatically sync and fetch global events from the last 24 hours
    const syncGlobalEvents = async () => {
      try {
        const res = await fetch('/api/cron/sync-events');
        if (res.ok) {
          const data = await res.json();
          if (data.events) {
            const syncedEvents = data.events.map((e: { title: string, host: string, category: string, date: string, mode: string, location: string, participants: number, image: string, type: string }, index: number) => ({
              id: events.length + index + 1,
              ...e
            }));
            setEvents(prev => {
              // Prevent duplicates (simple check by title)
              const existingTitles = prev.map(p => p.title);
              const newEvents = syncedEvents.filter((e: { title: string }) => !existingTitles.includes(e.title));
              return [...prev, ...newEvents];
            });
          }
        }
      } catch (error) {
        console.error("Failed to sync global events", error);
      }
    };
    
    syncGlobalEvents();
  }, []);

  const filteredEvents = activeTab === "all" ? events : events.filter(e => e.category === activeTab);

  return (
    <div className="min-h-screen bg-zinc-50 flex pt-20">
      {/* Sidebar - Quick Navigation */}
      <aside className="w-80 bg-white border-r border-zinc-100 p-8 hidden xl:flex flex-col fixed h-screen mt-4">

        <nav className="space-y-2">
          <Link href="/explore" className="flex items-center gap-3 font-bold text-sky-blue bg-sky-blue/5 p-3 rounded-xl uppercase text-[10px] tracking-widest">
            <Globe size={18} /> Global Feed
          </Link>
          <Link href="/organizations" className="flex items-center gap-3 font-bold text-zinc-400 hover:text-black p-3 transition-colors uppercase text-[10px] tracking-widest">
            <Users size={18} /> Directory
          </Link>
        </nav>
        <div className="mt-auto space-y-4">
          <div className="bg-zinc-900 rounded-2xl p-6 text-white relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-[10px] font-black uppercase tracking-widest text-sky-blue mb-2 flex items-center gap-2">
                <Sparkles size={10} /> Intelligence
              </p>
              <h4 className="font-bold text-sm mb-4">Get curated global estates weekly.</h4>
              <button 
                onClick={() => setIsNewsletterOpen(true)}
                className="btn-sky w-full py-3 text-[10px] uppercase tracking-widest font-black rounded-xl"
              >
                <Mail size={14} /> Subscribe
              </button>
            </div>
            <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:scale-110 transition-transform duration-1000">
              <Sparkles size={100} />
            </div>
          </div>
          <Link href="/host/create" className="btn-primary w-full flex items-center justify-center gap-2 py-4">
            <Plus size={20} /> Host Event
          </Link>
        </div>
      </aside>

      <main className="xl:ml-80 flex-grow p-4 md:p-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h1 className="text-4xl font-black tracking-tight mb-2 uppercase text-[10px] font-bold tracking-[0.3em] text-zinc-400">Discovery</h1>
              <h2 className="text-5xl font-black tracking-tighter">Manor Feed.</h2>
            </div>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-8 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all ${
                  activeTab === cat.id 
                  ? "bg-sky-blue text-white shadow-xl shadow-sky-blue/20" 
                  : "bg-white text-zinc-400 border border-zinc-100 hover:border-zinc-300"
                }`}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                whileHover={{ y: -8 }}
                className="card bg-white p-0 overflow-hidden border-none"
              >
                <div className="h-48 relative overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  {event.type === 'discovery' && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-sky-blue text-white px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center gap-1 shadow-xl">
                        <Sparkles size={10} /> Manor Discovery
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-8">
                  <span className="text-[10px] font-bold text-sky-blue uppercase tracking-widest mb-2 block">{event.host}</span>
                  <h3 className="text-xl font-black tracking-tight mb-6 leading-tight h-14 overflow-hidden">{event.title}</h3>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-widest">
                      <Calendar size={14} className="text-sky-blue" /> {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-widest">
                      <MapPin size={14} className="text-sky-blue" /> {event.location}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-zinc-50">
                    <Link 
                      href={`/events/${event.id}`}
                      className="btn-secondary w-full py-3 text-[10px] uppercase tracking-widest font-black"
                    >
                      {event.type === 'discovery' ? 'Receive Details' : 'View Estate'}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <ManorNewsletter 
        isOpen={isNewsletterOpen} 
        onClose={() => setIsNewsletterOpen(false)} 
      />
    </div>
  );
}
