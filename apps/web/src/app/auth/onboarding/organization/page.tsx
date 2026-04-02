"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  GraduationCap, 
  Rocket, 
  Briefcase, 
  ArrowRight, 
  ArrowLeft,
  Upload,
  Globe,
  MapPin,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import Link from "next/link";

type OrgType = "school" | "college" | "startup" | "company";

export default function OrganizationOnboarding() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    type: "" as OrgType,
    name: "",
    website: "",
    location: "",
    bio: "",
    logo: null as File | null,
  });

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  const orgTypes = [
    { id: "school", label: "School", icon: <GraduationCap />, desc: "Tests, Olympiads, and Quizzes." },
    { id: "college", label: "College", icon: <Building2 />, desc: "Hackathons, Fests, and Seminars." },
    { id: "startup", label: "Startup", icon: <Rocket />, desc: "Pitch Days and Tech Launches." },
    { id: "company", label: "Company", icon: <Briefcase />, desc: "HR Events and Corporate Webinars." },
  ];

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
        <Link href="/auth/role" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-black">Cancel</Link>
      </nav>

      <main className="flex-grow flex items-center justify-center p-6 pb-20">
        <div className="max-w-2xl w-full">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="text-center mb-12">
                  <h1 className="text-5xl font-black tracking-tighter mb-4">Establish Your Estate.</h1>
                  <p className="text-zinc-500 font-medium text-lg">Select your organization type to customize your experience.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {orgTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => {
                        setFormData({ ...formData, type: type.id as OrgType });
                        nextStep();
                      }}
                      className={`p-8 rounded-3xl border-2 text-left transition-all hover:border-black group flex flex-col items-start ${
                        formData.type === type.id ? "border-black bg-zinc-50" : "border-zinc-100"
                      }`}
                    >
                      <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
                        {React.cloneElement(type.icon as React.ReactElement, { size: 24 })}
                      </div>
                      <h3 className="text-xl font-bold mb-2 tracking-tight">{type.label}</h3>
                      <p className="text-zinc-400 text-sm font-medium leading-relaxed">{type.desc}</p>
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
                  <h1 className="text-5xl font-black tracking-tight mb-4 uppercase text-sm font-bold tracking-[0.3em] text-zinc-400">Foundation</h1>
                  <h2 className="text-6xl font-black tracking-tightest leading-[0.9] mb-4">Identity & <br /> Presence.</h2>
                </div>

                <div className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Organization Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Stanford University"
                      className="w-full text-4xl font-bold tracking-tight border-none focus:ring-0 placeholder:text-zinc-100 p-0"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-2">
                        <Globe size={12} /> Website
                      </label>
                      <input
                        type="url"
                        placeholder="https://estate.edu"
                        className="w-full text-xl font-bold border-b border-zinc-100 py-3 focus:border-black outline-none transition-all placeholder:text-zinc-200"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-2">
                        <MapPin size={12} /> Global Location
                      </label>
                      <input
                        type="text"
                        placeholder="New York, USA"
                        className="w-full text-xl font-bold border-b border-zinc-100 py-3 focus:border-black outline-none transition-all placeholder:text-zinc-200"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-8">
                  <button onClick={prevStep} className="btn-secondary">Back</button>
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
                  <h1 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-4">Aesthetics</h1>
                  <h2 className="text-6xl font-black tracking-tightest leading-[0.9] mb-4">Branding the <br /> Estate.</h2>
                </div>

                <div className="space-y-12">
                  <div className="flex flex-col items-center">
                    <div className="w-40 h-40 bg-zinc-100 rounded-3xl border-2 border-dashed border-zinc-200 flex flex-col items-center justify-center group hover:border-black transition-all cursor-pointer relative overflow-hidden">
                      <Upload size={32} className="text-zinc-300 group-hover:text-black mb-4 transition-colors" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-black transition-colors">Upload Logo</span>
                    </div>
                    <p className="mt-4 text-xs font-medium text-zinc-400 italic">Square format recommended (512x512)</p>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Mission Statement (Bio)</label>
                    <textarea
                      placeholder="Tell the world about your institution..."
                      className="w-full text-2xl font-medium border-none focus:ring-0 placeholder:text-zinc-100 p-0 min-h-[150px] resize-none"
                      value={formData.bio}
                      onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center pt-8">
                  <button onClick={prevStep} className="btn-secondary">Back</button>
                  <button onClick={nextStep} className="btn-primary flex items-center gap-2 px-12">
                    Complete Estate <Sparkles size={20} />
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
                <h2 className="text-6xl font-black tracking-tighter mb-4">Verified.</h2>
                <p className="text-xl text-zinc-500 font-medium mb-12 max-w-md mx-auto leading-relaxed">
                  The <span className="text-black font-bold italic">"{formData.name}"</span> estate has been established in the Host Manor directory.
                </p>
                <div className="flex flex-col gap-4 max-w-sm mx-auto">
                  <Link href="/host/create" className="btn-primary py-5">Host Your First Event</Link>
                  <Link href="/explore" className="btn-secondary py-5">View Discovery Feed</Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
