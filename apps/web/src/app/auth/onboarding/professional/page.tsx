"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
  Briefcase, 
  Building2, 
  Mail, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Loader2,
  DollarSign,
  Trophy,
  Star
} from "lucide-react";
import Link from "next/link";
import { ManorOTP } from "@/components/ui/ManorOTP";
import { toast } from "sonner";

export default function ProfessionalOnboarding() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [verificationState, setVerificationState] = useState<"email" | "otp" | "verified">("email");
  const [formData, setFormData] = useState({
    fullName: "",
    bio: "",
    yearsExperience: "",
    companyName: "",
    officialEmail: "",
    baseFee: "",
    specialties: [] as string[],
  });

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  const specialtiesOptions = [
    "Guest Lecture", "Technical Workshop", "Judge", "Keynote Speaker", "Mentorship", "HR Consulting"
  ];

  const toggleSpecialty = (s: string) => {
    setFormData(prev => ({
      ...prev,
      specialties: prev.specialties.includes(s) 
        ? prev.specialties.filter(item => item !== s)
        : [...prev.specialties, s]
    }));
  };

  const handleEmailSubmit = async () => {
    if (!formData.companyName) {
      toast.error("Company Name Required", { description: "Please enter your current establishment." });
      return;
    }
    const domain = formData.officialEmail.split("@")[1];
    if (!formData.officialEmail.includes("@") || ["gmail.com", "yahoo.com"].includes(domain)) {
      toast.error("Institutional Email Required", { description: "Please use your professional work domain." });
      return;
    }

    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setVerificationState("otp");
    toast.info("Passkey Dispatched", { description: `Verification code sent to ${formData.officialEmail}` });
  };

  const handleOTPComplete = async (code: string) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setVerificationState("verified");
    toast.success("Professional Identity Secured");
    setTimeout(nextStep, 1000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <nav className="max-w-7xl mx-auto px-6 py-8 w-full flex justify-between items-center fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl z-[110]">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-6 h-6 bg-black rounded flex items-center justify-center group-hover:rotate-12 transition-transform border border-white/10">
            <div className="w-3 h-3 bg-sky-blue rounded-sm rotate-45" />
          </div>
          <div className="text-xl font-black tracking-tighter">HM.</div>
        </Link>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className={`h-1 w-10 rounded-full transition-all duration-500 ${step >= i ? "bg-sky-blue" : "bg-zinc-100"}`} />
          ))}
        </div>
        <Link href="/auth/role" className="text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-black">Exit</Link>
      </nav>

      <main className="flex-grow flex items-center justify-center p-6 pt-32 pb-20">
        <div className="max-w-2xl w-full">
          <AnimatePresence mode="wait">
            
            {/* Step 1: Expert Narrative */}
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-12">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 bg-sky-blue/10 text-sky-blue px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-sky-blue/20 mb-8">
                    <Star size={12} /> Expert Registration
                  </div>
                  <h1 className="text-6xl font-black tracking-tightest leading-none mb-4">The Expert <br /> <span className="text-sky-blue italic">Narrative.</span></h1>
                  <p className="text-zinc-500 font-medium text-lg">Define your professional legacy within the Manor.</p>
                </div>
                <div className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">Full Professional Name</label>
                    <input type="text" placeholder="e.g. Dr. Julian Vane" className="input-field py-5 text-2xl font-bold" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">Years of Authority (Experience)</label>
                    <input type="number" placeholder="e.g. 12" className="input-field py-5 text-2xl font-bold" value={formData.yearsExperience} onChange={(e) => setFormData({...formData, yearsExperience: e.target.value})} />
                  </div>
                </div>
                <div className="flex justify-end pt-8">
                  <button onClick={nextStep} className="btn-sky px-12 rounded-2xl">Continue <ArrowRight size={20} /></button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Professional Identity (Company & Verification) */}
            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                <div>
                  <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-4">Verification</h2>
                  <h3 className="text-6xl font-black tracking-tighter">Workplace <br /> <span className="text-sky-blue italic">Registry.</span></h3>
                </div>

                <div className="bg-zinc-50 rounded-[2.5rem] p-10 border border-zinc-100 space-y-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-2"><Building2 size={12} /> Establishment Name</label>
                    <input type="text" placeholder="Current Company (e.g. Google)" className="w-full bg-white border-2 border-zinc-100 p-6 rounded-2xl focus:border-sky-blue outline-none transition-all font-bold text-xl" value={formData.companyName} onChange={(e) => setFormData({...formData, companyName: e.target.value})} />
                  </div>

                  <AnimatePresence mode="wait">
                    {verificationState === "email" && (
                      <motion.div key="email" className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-2"><Mail size={12} /> Official Work Email</label>
                          <input type="email" placeholder="julian@google.com" className="w-full bg-white border-2 border-zinc-100 p-6 rounded-2xl focus:border-sky-blue outline-none transition-all font-bold text-xl" value={formData.officialEmail} onChange={(e) => setFormData({...formData, officialEmail: e.target.value})} />
                        </div>
                        <button onClick={handleEmailSubmit} disabled={isLoading} className="btn-sky w-full py-5 rounded-2xl flex items-center justify-center gap-3">
                          {isLoading ? <Loader2 className="animate-spin" size={24} /> : <>Secure Identity <ShieldCheck size={20} /></>}
                        </button>
                      </motion.div>
                    )}

                    {verificationState === "otp" && (
                      <motion.div key="otp" className="space-y-10 text-center">
                        <p className="text-zinc-500 font-medium italic">Sent code to {formData.officialEmail}</p>
                        <ManorOTP onComplete={handleOTPComplete} isLoading={isLoading} />
                      </motion.div>
                    )}

                    {verificationState === "verified" && (
                      <motion.div key="verified" className="text-center py-10">
                        <CheckCircle2 size={60} className="text-green-500 mx-auto animate-bounce" />
                        <h4 className="text-3xl font-black mt-4">Verified Expert.</h4>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex justify-between pt-8">
                  <button onClick={prevStep} className="btn-secondary">Back</button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Specialties & Fees */}
            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                <div>
                  <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-4">Economics</h2>
                  <h3 className="text-6xl font-black tracking-tighter">Value & <br /> <span className="text-sky-blue italic">Expertise.</span></h3>
                </div>

                <div className="space-y-10">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Primary Specialities</label>
                    <div className="flex flex-wrap gap-3">
                      {specialtiesOptions.map(s => (
                        <button key={s} onClick={() => toggleSpecialty(s)} className={`px-6 py-3 rounded-xl border-2 font-bold text-sm transition-all ${formData.specialties.includes(s) ? "bg-black text-white border-black" : "bg-white text-zinc-400 border-zinc-100 hover:border-sky-blue hover:text-sky-blue"}`}>
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 pt-8 border-t border-zinc-50">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-2"><DollarSign size={12} /> Standard Estate Fee (Per Session)</label>
                    <div className="relative">
                      <span className="absolute left-6 top-1/2 -translate-y-1/2 text-3xl font-black text-zinc-200">$</span>
                      <input type="number" placeholder="500" className="w-full bg-zinc-50 border-none p-8 pl-12 rounded-[2rem] text-4xl font-black tracking-tighter focus:ring-4 focus:ring-sky-blue/5" value={formData.baseFee} onChange={(e) => setFormData({...formData, baseFee: e.target.value})} />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pt-8">
                  <button onClick={prevStep} className="btn-secondary">Back</button>
                  <button onClick={nextStep} className="btn-sky px-12 rounded-2xl">Establish Profile <Sparkles size={20} /></button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Final Narrative */}
            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                <div>
                  <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-4">Narrative</h2>
                  <h3 className="text-6xl font-black tracking-tighter">The Vision <br /> <span className="text-sky-blue italic">Statement.</span></h3>
                </div>
                <textarea
                  placeholder="Share your philosophy, past engagements, and what value you bring to institutional events..."
                  className="w-full text-2xl font-medium border-none focus:ring-0 placeholder:text-zinc-100 p-0 min-h-[250px] resize-none italic leading-relaxed"
                  value={formData.bio}
                  onChange={(e) => setFormData({...formData, bio: e.target.value})}
                />
                <div className="flex justify-between pt-8">
                  <button onClick={prevStep} className="btn-secondary">Back</button>
                  <button onClick={nextStep} className="btn-sky px-12 rounded-2xl shadow-xl shadow-sky-blue/20">Finalize Estate <Trophy size={20} /></button>
                </div>
              </motion.div>
            )}

            {/* Step 5: Success */}
            {step === 5 && (
              <motion.div key="step5" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
                <div className="w-24 h-24 bg-sky-blue/10 rounded-[2rem] flex items-center justify-center mx-auto mb-10 text-sky-blue">
                  <ShieldCheck size={48} className="animate-bounce" />
                </div>
                <h2 className="text-6xl font-black tracking-tightest mb-6">Established.</h2>
                <p className="text-zinc-500 font-medium text-xl mb-12 max-w-md mx-auto leading-relaxed">
                  Your expert profile is now verified and searchable by the Manor's elite institutions.
                </p>
                <div className="flex flex-col gap-4 max-w-sm mx-auto">
                  <Link href="/dashboard" className="btn-sky py-5 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl shadow-sky-blue/20">Manage Invitations</Link>
                  <Link href="/explore" className="btn-secondary py-5 rounded-2xl font-black uppercase text-xs tracking-widest">Explore Discovery</Link>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
