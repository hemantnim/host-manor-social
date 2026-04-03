"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  GraduationCap, 
  Rocket, 
  Briefcase, 
  Music,
  MapPin,
  Globe,
  Calendar,
  CheckCircle2,
  Plus,
  Trophy,
  Award
} from "lucide-react";
import Link from "next/link";

type Step = 1 | 2 | 3 | 4 | 5;

export default function CreateEventWizard() {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    category: "",
    subCategory: "",
    title: "",
    description: "",
    date: "",
    time: "",
    mode: "virtual",
    location: "",
    rewards: [] as string[],
    rewardDetail: ""
  });

  const categories = [
    { id: "education", label: "Education", icon: <GraduationCap />, sub: ["Test", "Olympiad", "Quiz", "Lecture"] },
    { id: "tech", label: "Tech & Startups", icon: <Rocket />, sub: ["Hackathon", "Pitch Day", "Demo Day"] },
    { id: "corporate", label: "Corporate", icon: <Briefcase />, sub: ["Seminar", "Webinar", "HR Event", "Workshop"] },
    { id: "cultural", label: "Cultural", icon: <Music />, sub: ["Music", "Festival", "Diwali", "Social"] },
  ];

  const rewardTypes = [
    { id: "money", label: "Prize Money", icon: <Trophy className="text-yellow-500" />, desc: "Financial rewards." },
    { id: "cert", label: "Certification", icon: <Award className="text-sky-blue" />, desc: "Official credentials." },
    { id: "intern", label: "Internship", icon: <Briefcase className="text-black" />, desc: "Career opportunities." },
    { id: "other", label: "Other Prize", icon: <Plus className="text-zinc-400" />, desc: "Custom physical prizes." },
  ];

  const toggleReward = (id: string) => {
    setFormData(prev => ({
      ...prev,
      rewards: prev.rewards.includes(id) 
        ? prev.rewards.filter(r => r !== id) 
        : [...prev.rewards, id]
    }));
  };

  const nextStep = () => setStep((s) => (s < 5 ? (s + 1) as Step : s));
  const prevStep = () => setStep((s) => (s > 1 ? (s - 1) as Step : s));

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <nav className="max-w-7xl mx-auto px-6 py-8 w-full flex justify-between items-center fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl z-[110]">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-6 h-6 bg-black rounded flex items-center justify-center group-hover:rotate-12 transition-transform">
            <div className="w-3 h-3 bg-sky-blue rounded-sm rotate-45" />
          </div>
          <div className="text-xl font-black tracking-tighter">HM.</div>
        </Link>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className={`h-1 w-10 rounded-full transition-all duration-500 ${step >= i ? "bg-black" : "bg-zinc-100"}`} />
          ))}
        </div>
        <Link href="/" className="text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-black">Exit</Link>
      </nav>

      <main className="flex-grow flex items-center justify-center p-6 pt-32 pb-20">
        <div className="max-w-2xl w-full">
          <AnimatePresence mode="wait">
            {/* Step 1: Category */}
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <h2 className="text-5xl font-black tracking-tight mb-4 text-center">Establish an Event.</h2>
                <p className="text-zinc-500 font-medium text-lg text-center mb-12">Select the category for your institutional estate.</p>
                <div className="grid grid-cols-2 gap-4">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => { setFormData({ ...formData, category: cat.id }); nextStep(); }}
                      className={`p-8 rounded-3xl border-2 text-left transition-all hover:border-sky-blue group ${formData.category === cat.id ? "border-black bg-zinc-50" : "border-zinc-100"}`}
                    >
                      <div className="mb-4 text-zinc-400 group-hover:text-sky-blue transition-colors">
                        {React.cloneElement(cat.icon as React.ReactElement, { size: 32 })}
                      </div>
                      <span className="text-xl font-bold">{cat.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Identity */}
            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                <div>
                  <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-4">Identity</h2>
                  <h3 className="text-7xl font-black tracking-tighter">The Vision.</h3>
                </div>
                <div className="space-y-8">
                  <input type="text" placeholder="Event Title" className="w-full text-5xl font-black tracking-tight border-none focus:ring-0 placeholder:text-zinc-100 p-0" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                  <textarea placeholder="Describe the experience..." className="w-full text-2xl font-medium border-none focus:ring-0 placeholder:text-zinc-100 p-0 min-h-[150px] resize-none italic" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                </div>
                <div className="flex justify-between pt-8">
                  <button onClick={prevStep} className="btn-secondary">Back</button>
                  <button onClick={nextStep} className="btn-sky px-12 rounded-2xl">Continue <ArrowRight size={20} /></button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Logistics */}
            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                <div>
                  <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-4">Logistics</h2>
                  <h3 className="text-7xl font-black tracking-tighter">Schedule.</h3>
                </div>
                <div className="space-y-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Date</label>
                      <input type="date" className="w-full bg-zinc-50 p-5 rounded-2xl border-none focus:ring-2 focus:ring-sky-blue/20 font-bold" onChange={(e) => setFormData({...formData, date: e.target.value})} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Start Time</label>
                      <input type="time" className="w-full bg-zinc-50 p-5 rounded-2xl border-none focus:ring-2 focus:ring-sky-blue/20 font-bold" onChange={(e) => setFormData({...formData, time: e.target.value})} />
                    </div>
                  </div>
                  <div className="space-y-4 pt-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Location Mode</label>
                    <div className="flex gap-4">
                      {['virtual', 'physical'].map(m => (
                        <button key={m} onClick={() => setFormData({...formData, mode: m as any})} className={`flex-1 p-5 rounded-2xl border-2 font-bold capitalize transition-all ${formData.mode === m ? "border-sky-blue bg-sky-blue/[0.02]" : "border-zinc-100 text-zinc-400"}`}>
                          {m === 'virtual' ? <Globe className="inline mr-2" size={18} /> : <MapPin className="inline mr-2" size={18} />} {m}
                        </button>
                      ))}
                    </div>
                  </div>
                  <input type="text" placeholder={formData.mode === 'virtual' ? "Meeting Link" : "Venue Address"} className="w-full bg-zinc-50 p-6 rounded-2xl border-none focus:ring-2 focus:ring-sky-blue/20 font-bold placeholder:text-zinc-200" onChange={(e) => setFormData({...formData, location: e.target.value})} />
                </div>
                <div className="flex justify-between pt-8">
                  <button onClick={prevStep} className="btn-secondary">Back</button>
                  <button onClick={nextStep} className="btn-sky px-12 rounded-2xl">Define Rewards <ArrowRight size={20} /></button>
                </div>
              </motion.div>
            )}

            {/* Step 4: REWARDS */}
            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                <div>
                  <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-4">Incentives</h2>
                  <h3 className="text-7xl font-black tracking-tighter">Rewards.</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {rewardTypes.map((reward) => (
                    <button
                      key={reward.id}
                      onClick={() => toggleReward(reward.id)}
                      className={`p-8 rounded-[2rem] border-2 text-left transition-all group ${formData.rewards.includes(reward.id) ? "border-black bg-zinc-50 shadow-xl" : "border-zinc-100"}`}
                    >
                      <div className="mb-6">{React.cloneElement(reward.icon as React.ReactElement, { size: 32 })}</div>
                      <h4 className="text-xl font-bold mb-1 tracking-tight">{reward.label}</h4>
                      <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{reward.desc}</p>
                    </button>
                  ))}
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">Prize Particulars</label>
                  <textarea placeholder="Specify amounts, levels, or internship durations..." className="w-full bg-zinc-50 p-8 rounded-[2rem] border-none focus:ring-2 focus:ring-sky-blue/20 font-medium min-h-[120px] resize-none italic" value={formData.rewardDetail} onChange={(e) => setFormData({...formData, rewardDetail: e.target.value})} />
                </div>
                <div className="flex justify-between pt-8">
                  <button onClick={prevStep} className="btn-secondary">Back</button>
                  <button onClick={nextStep} className="btn-sky px-12 rounded-2xl">Finalize Estate <Sparkles size={20} /></button>
                </div>
              </motion.div>
            )}

            {/* Step 5: Success */}
            {step === 5 && (
              <motion.div key="step5" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
                <div className="w-24 h-24 bg-sky-blue/10 rounded-[2rem] flex items-center justify-center mx-auto mb-10 text-sky-blue">
                  <CheckCircle2 size={48} className="animate-bounce" />
                </div>
                <h2 className="text-6xl font-black tracking-tightest mb-6">Hosted.</h2>
                <p className="text-zinc-500 font-medium text-xl mb-12 max-w-md mx-auto">Your event and its incentives have been established in the Manor feed.</p>
                <div className="flex gap-4 justify-center">
                  <Link href="/explore" className="btn-sky px-10 py-4 rounded-2xl">View in Feed</Link>
                  <button onClick={() => setStep(1)} className="btn-secondary px-10 py-4 rounded-2xl">Host Another</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
