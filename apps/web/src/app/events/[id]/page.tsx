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
  ShieldCheck,
  Sparkles,
  ExternalLink,
  Info
} from "lucide-react";
import Link from "next/link";
import { ManorNewsletter } from "@/components/ui/ManorNewsletter";

export default function EventDetailPage() {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  // Mock data for a Global Discovery event
  const event = {
    title: "Manor Global Discovery: Space Hack 2026",
    host: "NASA (via Global Discovery)",
    category: "Tech",
    subCategory: "Hackathon",
    date: "November 12, 2026",
    time: "09:00 AM UTC",
    mode: "virtual",
    location: "Global Metaverse Estate",
    type: "discovery",
    description: `NASA's Space Hack 2026 is a premier global challenge curated by Host Manor. This high-end technical marathon invites the world's most brilliant minds to solve complex extraterrestrial problems using open-source satellite data.

As a Global Discovery, this event is curated by our intelligence engine to ensure only the most prestigious technical estates are presented to our members. 

Host Manor provides the portal to receive comprehensive details, agenda deep-dives, and secure registration links for this external prestige event.`,
    participants: 5800,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="relative h-[60vh] w-full overflow-hidden bg-zinc-900">
        <img src={event.image} alt={event.title} className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-20">
          <div className="max-w-7xl mx-auto w-full">
            <Link href="/explore" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-12 font-bold text-sm transition-colors group">
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Feed
            </Link>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-sky-blue text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                  <Sparkles size={12} /> Global Discovery
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white tracking-tightest leading-none mb-8 max-w-4xl">
                {event.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-20">
        <div className="lg:col-span-2 space-y-16">
          <section>
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-12">Editorial Overview</h3>
            <div className="prose prose-zinc prose-2xl max-w-none">
              <p className="text-2xl font-medium text-zinc-600 leading-relaxed whitespace-pre-line italic">
                "{event.description}"
              </p>
            </div>
          </section>

          <section className="pt-16 border-t border-zinc-100">
            <div className="bg-sky-blue/5 border border-sky-blue/10 p-12 rounded-[3rem] relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-sky-blue mb-8">Intelligence Note</h3>
                <p className="text-xl font-bold text-zinc-800 leading-relaxed max-w-xl">
                  This estate was identified and curated by the Manor Intelligence engine. We provide secure notification services for registration windows and exclusive updates.
                </p>
              </div>
              <Info size={120} className="absolute -bottom-10 -right-10 text-sky-blue/10 rotate-12" />
            </div>
          </section>
        </div>

        <aside className="space-y-8">
          <div className="card sticky top-12 p-10 space-y-10 border-zinc-100 shadow-xl shadow-sky-blue/5">
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-zinc-600">
                <Calendar className="text-sky-blue" size={24} />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Scheduled Date</p>
                  <p className="font-bold">{event.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-zinc-600">
                <Globe className="text-sky-blue" size={24} />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Access Mode</p>
                  <p className="font-bold leading-tight">{event.location}</p>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-zinc-100">
              <button 
                onClick={() => setIsNewsletterOpen(true)}
                className="btn-sky w-full py-5 text-lg flex items-center justify-center gap-2 rounded-2xl"
              >
                Receive Estate Details
              </button>
              
              <button className="w-full mt-4 flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-black transition-colors py-4">
                <Share2 size={16} /> Share Discovery
              </button>
            </div>
          </div>
        </aside>
      </main>

      <ManorNewsletter 
        isOpen={isNewsletterOpen} 
        onClose={() => setIsNewsletterOpen(false)} 
        eventTitle={event.title}
      />
    </div>
  );
}
