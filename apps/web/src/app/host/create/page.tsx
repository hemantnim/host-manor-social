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
  CheckCircle2
} from "lucide-react";
import Link from "next/link";

type Step = 1 | 2 | 3 | 4;

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
    location: ""
  });

  const categories = [
    { id: "education", label: "Education", icon: <GraduationCap />, sub: ["Test", "Olympiad", "Quiz", "Lecture"] },
    { id: "tech", label: "Tech & Startups", icon: <Rocket />, sub: ["Hackathon", "Pitch Day", "Demo Day"] },
    { id: "corporate", label: "Corporate", icon: <Briefcase />, sub: ["Seminar", "Webinar", "HR Event", "Workshop"] },
    { id: "cultural", label: "Cultural", icon: <Music />, sub: ["Music", "Festival", "Diwali", "Social"] },
  ];

  const nextStep = () => setStep((s) => (s < 4 ? (s + 1) as Step : s));
  const prevStep = () => setStep((s) => (s > 1 ? (s - 1) as Step : s));

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <nav className="max-w-7xl mx-auto px-6 py-8 w-full flex justify-between items-center">
        <Link href="/" className="text-xl font-black tracking-tighter italic">HM.</Link>
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div 
              key={i} 
              className={`h-1 w-12 rounded-full transition-all duration-500 ${
                step >= i ? "bg-black" : "bg-zinc-100"
              }`} 
            />
          ))}
        </div>
        <Link href="/" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-colors">Exit</Link>
      </nav>

      <main className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-2xl w-full">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h2 className="text-5xl font-black tracking-tight mb-4 text-center">What are we hosting?</h2>
                <p className="text-zinc-500 font-medium text-lg text-center mb-12">Select the estate category for your event.</p>
                
                <div className="grid grid-cols-2 gap-4">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setFormData({ ...formData, category: cat.id });
                        nextStep();
                      }}
                      className={`p-8 rounded-2xl border-2 text-left transition-all hover:border-black group ${
                        formData.category === cat.id ? "border-black bg-zinc-50" : "border-zinc-100"
                      }`}
                    >
                      <div className="mb-4 text-zinc-400 group-hover:text-black transition-colors">
                        {React.cloneElement(cat.icon as React.ReactElement, { size: 32 })}
                      </div>
                      <span className="text-xl font-bold">{cat.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-12"
              >
                <div>
                  <h2 className="text-5xl font-black tracking-tight mb-4">The Identity.</h2>
                  <p className="text-zinc-500 font-medium text-lg">Define the title and core essence of the event.</p>
                </div>

                <div className="space-y-8">
                  <input
                    type="text"
                    placeholder="Event Title (e.g. Winter Olympiad 2026)"
                    className="w-full text-4xl font-bold tracking-tight border-none focus:ring-0 placeholder:text-zinc-100 p-0"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                  
                  <textarea
                    placeholder="Describe the experience..."
                    className="w-full text-xl font-medium border-none focus:ring-0 placeholder:text-zinc-100 p-0 min-h-[150px] resize-none"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>

                <div className="flex justify-between items-center pt-8">
                  <button onClick={prevStep} className="btn-secondary flex items-center gap-2">
                    <ArrowLeft size={20} /> Back
                  </button>
                  <button onClick={nextStep} className="btn-primary flex items-center gap-2 px-12">
                    Continue <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-12"
              >
                <div>
                  <h2 className="text-5xl font-black tracking-tight mb-4">Logistics.</h2>
                  <p className="text-zinc-500 font-medium text-lg">When and where will this take place?</p>
                </div>

                <div className="space-y-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Date</label>
                      <div className="flex items-center gap-3 bg-zinc-50 p-4 rounded-xl">
                        <Calendar size={20} className="text-zinc-400" />
                        <input 
                          type="date" 
                          className="bg-transparent border-none focus:ring-0 font-bold"
                          onChange={(e) => setFormData({...formData, date: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Start Time</label>
                      <input 
                        type="time" 
                        className="w-full bg-zinc-50 p-4 rounded-xl border-none focus:ring-0 font-bold"
                        onChange={(e) => setFormData({...formData, time: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Location Mode</label>
                    <div className="flex gap-4">
                      <button 
                        onClick={() => setFormData({...formData, mode: 'virtual'})}
                        className={`flex-1 p-4 rounded-xl border-2 flex items-center justify-center gap-2 font-bold transition-all ${
                          formData.mode === 'virtual' ? "border-black bg-zinc-50" : "border-zinc-100 text-zinc-400"
                        }`}
                      >
                        <Globe size={20} /> Virtual
                      </button>
                      <button 
                        onClick={() => setFormData({...formData, mode: 'physical'})}
                        className={`flex-1 p-4 rounded-xl border-2 flex items-center justify-center gap-2 font-bold transition-all ${
                          formData.mode === 'physical' ? "border-black bg-zinc-50" : "border-zinc-100 text-zinc-400"
                        }`}
                      >
                        <MapPin size={20} /> Physical
                      </button>
                    </div>
                  </div>

                  <input
                    type="text"
                    placeholder={formData.mode === 'virtual' ? "Meeting Link (Zoom, Meet, etc.)" : "Venue Address"}
                    className="w-full bg-zinc-50 p-6 rounded-xl border-none focus:ring-0 font-bold placeholder:text-zinc-200"
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                  />
                </div>

                <div className="flex justify-between items-center pt-8">
                  <button onClick={prevStep} className="btn-secondary">Back</button>
                  <button onClick={nextStep} className="btn-primary flex items-center gap-2 px-12">
                    Host Event <Sparkles size={20} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-24 h-24 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 size={48} className="text-black animate-bounce" />
                </div>
                <h2 className="text-6xl font-black tracking-tighter mb-4">Hosted.</h2>
                <p className="text-xl text-zinc-500 font-medium mb-12 max-w-md mx-auto">
                  Your event has been established in the Host Manor estate. The social feed has been updated.
                </p>
                <div className="flex gap-4 justify-center">
                  <Link href="/explore" className="btn-primary">View in Feed</Link>
                  <button onClick={() => setStep(1)} className="btn-secondary">Host Another</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
