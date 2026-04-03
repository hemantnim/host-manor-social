"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  Briefcase, 
  Star, 
  ShieldCheck, 
  Calendar, 
  DollarSign, 
  Globe, 
  Users, 
  Clock, 
  Trophy,
  CheckCircle2,
  X,
  Send,
  Loader2,
  Target
} from "lucide-react";
import Link from "next/link";
import { VerifiedBadge } from "@/components/ui/badges/VerifiedBadge";
import { toast } from "sonner";

export default function ExpertProfilePage() {
  const [isBookingOpen, setIsNewsletterOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingLoading, setBookingLoading] = useState(false);

  const expert = {
    name: "Dr. Julian Vane",
    company: "Google Intelligence",
    role: "Lead Scientist",
    rating: 4.9,
    sessions: 45,
    fee: 1200,
    location: "Zurich, Switzerland",
    verified: true,
    image: "https://i.pravatar.cc/300?u=julian",
    bio: `Dr. Julian Vane is a world-renowned authority on Artificial General Intelligence and its ethical implementation within global institutions. With over 15 years of research leadership at Google and MIT, he brings a unique blend of technical depth and institutional strategy.

He has keynoted at 40+ international summits and has been a lead judge for prestigious academic olympiads across Europe and North America.`,
    specialties: ["Keynote Speaking", "AGI Research", "Ethical AI Policy", "Institutional Strategy"],
    reviews: [
      { id: 1, from: "Stanford University", text: "Julian's lecture on AI Ethics was the highlight of our spring summit. Precision and prestige personified.", rating: 5 },
      { id: 2, from: "TechSphere Labs", text: "Exceptional judging for our Hackathon. His feedback elevated the entire competition.", rating: 5 }
    ]
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBookingLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setBookingLoading(false);
    setIsSuccess(true);
    toast.success("Invitation Dispatched", { description: "The expert has been notified of your interest." });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Editorial Header */}
      <header className="relative h-[50vh] bg-black overflow-hidden">
        <div className="absolute inset-0 bg-sky-blue/10" />
        <img src={expert.image} className="w-full h-full object-cover opacity-40 grayscale" alt={expert.name} />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-20">
          <div className="max-w-7xl mx-auto w-full">
            <Link href="/experts" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-12 font-bold text-[10px] uppercase tracking-widest transition-colors group">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Directory
            </Link>
            
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2 bg-sky-blue text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                  <Trophy size={12} /> Elite Expert
                </div>
                <VerifiedBadge />
              </div>
              <h1 className="text-7xl md:text-9xl font-black text-black tracking-tightest leading-none">
                {expert.name.split(" ")[0]} <br /> <span className="text-sky-blue italic">{expert.name.split(" ")[1]} {expert.name.split(" ")[2]}</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-20">
        {/* Left: Bio & Reviews */}
        <div className="lg:col-span-2 space-y-20">
          <section>
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-12">The Authority</h3>
            <p className="text-3xl font-medium text-zinc-600 leading-relaxed italic whitespace-pre-line">
              "{expert.bio}"
            </p>
          </section>

          <section>
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-12">Specialized Domains</h3>
            <div className="flex flex-wrap gap-4">
              {expert.specialties.map(s => (
                <span key={s} className="px-8 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl font-black text-xs uppercase tracking-widest">
                  {s}
                </span>
              ))}
            </div>
          </section>

          <section className="pt-20 border-t border-zinc-100">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-12">Peer Testimony</h3>
            <div className="grid grid-cols-1 gap-8">
              {expert.reviews.map(r => (
                <div key={r.id} className="bg-zinc-50 p-10 rounded-[2.5rem] border border-zinc-100">
                  <div className="flex gap-1 mb-6">
                    {[1,2,3,4,5].map(i => <Star key={i} size={12} className="text-sky-blue fill-sky-blue" />)}
                  </div>
                  <p className="text-xl font-medium text-zinc-600 leading-relaxed mb-8">"{r.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-black rounded-lg" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-black">{r.from}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right: Stats & Booking */}
        <aside className="space-y-8">
          <div className="card sticky top-32 p-10 space-y-10 border-zinc-100 shadow-2xl shadow-sky-blue/5">
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Institutional Fee</span>
                <span className="text-4xl font-black tabular-nums">${expert.fee}</span>
              </div>
              <div className="h-[1px] bg-zinc-50" />
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-2xl font-black tracking-tight">{expert.rating}</p>
                  <p className="text-[8px] font-black uppercase tracking-widest text-zinc-400">Avg Rating</p>
                </div>
                <div>
                  <p className="text-2xl font-black tracking-tight">{expert.sessions}</p>
                  <p className="text-[8px] font-black uppercase tracking-widest text-zinc-400">Past Sessions</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-10 border-t border-zinc-100">
              <button 
                onClick={() => setIsNewsletterOpen(true)}
                className="btn-sky w-full py-5 text-lg rounded-2xl shadow-xl shadow-sky-blue/20 flex items-center justify-center gap-2 group"
              >
                Request Invitation <Calendar size={20} className="group-hover:rotate-12 transition-transform" />
              </button>
              <p className="text-[8px] font-black uppercase tracking-[0.2em] text-zinc-300 text-center">
                Verified Enterprise Booking Only
              </p>
            </div>
          </div>
        </aside>
      </main>

      {/* Booking Modal */}
      <AnimatePresence>
        {isBookingOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsNewsletterOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-md z-[150]" />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="fixed inset-0 m-auto w-full max-w-2xl h-fit bg-white rounded-[3rem] z-[160] overflow-hidden shadow-2xl p-12">
              <button onClick={() => setIsNewsletterOpen(false)} className="absolute top-8 right-8 text-zinc-300 hover:text-black"><X size={24} /></button>
              
              {!isSuccess ? (
                <form onSubmit={handleBookingSubmit} className="space-y-10">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-sky-blue/10 text-sky-blue px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                      <Target size={12} /> Institutional Direct
                    </div>
                    <h2 className="text-5xl font-black tracking-tightest leading-none">Invite to <br /> <span className="text-sky-blue italic">Your Estate.</span></h2>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Event Narrative (Purpose)</label>
                      <input type="text" required placeholder="e.g. Guest Lecture on Quantum Computing" className="input-field py-4 font-bold" />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Preferred Date</label>
                        <input type="date" required className="input-field py-4 font-bold" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Offered Fee ($)</label>
                        <input type="number" defaultValue={expert.fee} className="input-field py-4 font-bold" />
                      </div>
                    </div>
                  </div>

                  <button disabled={bookingLoading} className="btn-sky w-full py-5 rounded-2xl text-xl flex items-center justify-center gap-3">
                    {bookingLoading ? <Loader2 className="animate-spin" size={24} /> : <>Dispatch Directive <Send size={20} /></>}
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <CheckCircle2 size={80} className="text-green-500 mx-auto mb-8 animate-bounce" />
                  <h2 className="text-5xl font-black tracking-tight mb-4">Dispatched.</h2>
                  <p className="text-zinc-500 font-medium text-lg mb-12">The expert has been formally invited to your institutional estate. You will be notified of their decision.</p>
                  <button onClick={() => setIsNewsletterOpen(false)} className="btn-primary w-full py-4 rounded-2xl">Return to Profile</button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
