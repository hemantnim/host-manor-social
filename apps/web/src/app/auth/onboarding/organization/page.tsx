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
  Sparkles,
  ShieldCheck,
  Mail,
  Loader2,
  Lock,
  Target
} from "lucide-react";
import Link from "next/link";
import { ManorOTP } from "@/components/ui/ManorOTP";
import { toast } from "sonner";

type OrgType = "school" | "college" | "startup" | "company";

export default function OrganizationOnboarding() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [verificationState, setVerificationState] = useState<"email" | "otp" | "verified">("email");
  const [formData, setFormData] = useState({
    type: "" as OrgType,
    name: "",
    website: "",
    location: "",
    bio: "",
    officialEmail: "",
    isVerified: false,
    specialized: {} as Record<string, string>
  });

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  const orgTypes = [
    { id: "school", label: "School", icon: <GraduationCap />, desc: "Primary & Secondary Education." },
    { id: "college", label: "College", icon: <Building2 />, desc: "Higher Education & Research." },
    { id: "startup", label: "Startup", icon: <Rocket />, desc: "Innovation & Growth Ventures." },
    { id: "company", label: "Company", icon: <Briefcase />, desc: "Corporate & Professional Estates." },
  ];

  const updateSpecialized = (key: string, value: string) => {
    setFormData({
      ...formData,
      specialized: { ...formData.specialized, [key]: value }
    });
  };

  const handleEmailSubmit = async () => {
    const domain = formData.officialEmail.split("@")[1];
    const genericDomains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "icloud.com"];
    
    if (!formData.officialEmail.includes("@") || genericDomains.includes(domain)) {
      toast.error("Invalid Estate Domain", {
        description: "Please use your official institutional email address."
      });
      return;
    }

    setIsLoading(true);
    // Simulate domain integrity check
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setVerificationState("otp");
    toast.info("Passkey Dispatched", {
      description: `A 6-digit code has been sent to ${formData.officialEmail}`
    });
  };

  const handleOTPComplete = async (code: string) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setVerificationState("verified");
    setFormData({ ...formData, isVerified: true });
    toast.success("Identity Verified", {
      description: "Your institutional domain has been established."
    });
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
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className={`h-1 w-10 rounded-full transition-all duration-500 ${step >= i ? "bg-black" : "bg-zinc-100"}`} />
          ))}
        </div>
        <Link href="/auth/role" className="text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-black">Exit</Link>
      </nav>

      <main className="flex-grow flex items-center justify-center p-6 pt-32 pb-20">
        <div className="max-w-2xl w-full">
          <AnimatePresence mode="wait">
            {/* Step 1: Type Selection */}
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <div className="text-center mb-16">
                  <h1 className="text-6xl font-black tracking-tightest mb-4 text-center leading-none">The Nature of <br /> Your <span className="text-sky-blue italic">Estate.</span></h1>
                  <p className="text-zinc-500 font-medium text-lg">Choose your entity type to personalize your onboarding.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {orgTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => { setFormData({ ...formData, type: type.id as OrgType }); nextStep(); }}
                      className="p-8 rounded-3xl border-2 border-zinc-100 text-left transition-all hover:border-sky-blue hover:bg-sky-blue/[0.02] group"
                    >
                      <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-blue group-hover:text-white transition-colors">
                        {React.cloneElement(type.icon as React.ReactElement, { size: 24 })}
                      </div>
                      <h3 className="text-xl font-bold mb-2 tracking-tight group-hover:text-sky-blue transition-colors">{type.label}</h3>
                      <p className="text-zinc-400 text-sm font-medium">{type.desc}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Basic Identity */}
            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                <div>
                  <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-4">Identity</h2>
                  <h3 className="text-7xl font-black tracking-tighter leading-none">Naming the <br /> <span className="text-sky-blue italic">Establishment.</span></h3>
                </div>
                <div className="space-y-8">
                  <input
                    type="text"
                    placeholder="Estate Name (e.g. Stanford)"
                    className="w-full text-5xl font-black tracking-tightest border-none focus:ring-0 placeholder:text-zinc-100 p-0"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-zinc-100">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-2"><Globe size={12} /> Registry Website</label>
                      <input type="url" placeholder="https://estate.edu" className="w-full text-xl font-bold border-b border-zinc-100 py-3 focus:border-sky-blue outline-none transition-all placeholder:text-zinc-200" value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-2"><MapPin size={12} /> Global Location</label>
                      <input type="text" placeholder="New York, USA" className="w-full text-xl font-bold border-b border-zinc-100 py-3 focus:border-sky-blue outline-none transition-all placeholder:text-zinc-200" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between pt-8">
                  <button onClick={prevStep} className="btn-secondary">Back</button>
                  <button onClick={nextStep} className="btn-sky px-12 rounded-2xl">Continue <ArrowRight size={20} /></button>
                </div>
              </motion.div>
            )}

            {/* NEW Step 3: Identity Verification (Mandatory for Company) */}
            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-4">Verification</h2>
                    <h3 className="text-6xl font-black tracking-tighter">Official <br /> <span className="text-sky-blue italic">Credentials.</span></h3>
                  </div>
                  {formData.type !== "company" && (
                    <button onClick={nextStep} className="text-[10px] font-black uppercase tracking-widest text-zinc-300 hover:text-sky-blue transition-colors pt-4">Skip for Now</button>
                  )}
                </div>

                <div className="bg-zinc-50 rounded-[2.5rem] p-10 border border-zinc-100">
                  <AnimatePresence mode="wait">
                    {verificationState === "email" && (
                      <motion.div key="email-input" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-8">
                        <div className="space-y-4">
                          <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-2">Institutional Domain Email</label>
                          <div className="relative group">
                            <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-sky-blue transition-colors" size={24} />
                            <input
                              type="email"
                              placeholder="e.g. registry@stanford.edu"
                              className="w-full bg-white border-2 border-zinc-100 p-6 pl-16 rounded-2xl focus:border-sky-blue outline-none transition-all font-bold text-xl"
                              value={formData.officialEmail}
                              onChange={(e) => setFormData({ ...formData, officialEmail: e.target.value })}
                            />
                          </div>
                          <p className="text-[10px] font-medium text-zinc-400 leading-relaxed ml-2">
                            Our intelligence engine will verify the domain integrity against your establishment name.
                          </p>
                        </div>
                        <button 
                          disabled={isLoading || !formData.officialEmail}
                          onClick={handleEmailSubmit}
                          className="btn-sky w-full py-5 rounded-2xl text-lg flex items-center justify-center gap-3"
                        >
                          {isLoading ? <Loader2 className="animate-spin" size={24} /> : <>Verify Domain <ShieldCheck size={20} /></>}
                        </button>
                      </motion.div>
                    )}

                    {verificationState === "otp" && (
                      <motion.div key="otp-input" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-10 text-center">
                        <div className="space-y-4">
                          <div className="w-16 h-16 bg-sky-blue/10 rounded-2xl flex items-center justify-center mx-auto text-sky-blue">
                            <Lock size={32} />
                          </div>
                          <h4 className="text-2xl font-black tracking-tight">Enter Passkey</h4>
                          <p className="text-zinc-500 font-medium max-w-xs mx-auto">We've dispatched a secure code to <span className="text-black font-bold">{formData.officialEmail}</span></p>
                        </div>
                        
                        <ManorOTP onComplete={handleOTPComplete} isLoading={isLoading} />
                        
                        <button 
                          onClick={() => setVerificationState("email")}
                          className="text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-black transition-colors"
                        >
                          Use Different Email
                        </button>
                      </motion.div>
                    )}

                    {verificationState === "verified" && (
                      <motion.div key="verified-success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                          <CheckCircle2 size={40} />
                        </div>
                        <h4 className="text-3xl font-black tracking-tight mb-2">Authenticated.</h4>
                        <p className="text-zinc-500 font-medium">Proceeding to estate specifications...</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex justify-between pt-8 border-t border-zinc-100">
                  <button onClick={prevStep} className="btn-secondary">Back</button>
                </div>
              </motion.div>
            )}

            {/* Step 4: SPECIALIZED DETAILS */}
            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-4">Specialization</h2>
                    <h3 className="text-6xl font-black tracking-tighter capitalize">{formData.type} <br /> <span className="text-sky-blue italic">Specifications.</span></h3>
                  </div>
                  <button onClick={nextStep} className="text-[10px] font-black uppercase tracking-widest text-zinc-300 hover:text-sky-blue transition-colors pt-4">Skip for Now</button>
                </div>

                <div className="grid grid-cols-1 gap-10">
                  {formData.type === "school" && (
                    <>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Board of Affiliation <span className="text-[8px] opacity-50 ml-1">(Optional)</span></label>
                        <input type="text" placeholder="e.g. CBSE, IB, ICSE" className="input-field py-5 text-xl font-bold" onChange={(e) => updateSpecialized("board", e.target.value)} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Principal's Name</label>
                        <input type="text" placeholder="Full name of head" className="input-field py-5 text-xl font-bold" onChange={(e) => updateSpecialized("principal", e.target.value)} required />
                      </div>
                    </>
                  )}

                  {formData.type === "college" && (
                    <>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Campus Area (Acres) <span className="text-[8px] opacity-50 ml-1">(Optional)</span></label>
                        <input type="number" placeholder="Total acreage" className="input-field py-5 text-xl font-bold" onChange={(e) => updateSpecialized("campus", e.target.value)} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Highest Accreditation</label>
                        <input type="text" placeholder="e.g. NAAC A++, Tier 1" className="input-field py-5 text-xl font-bold" onChange={(e) => updateSpecialized("accreditation", e.target.value)} required />
                      </div>
                    </>
                  )}

                  {formData.type === "startup" && (
                    <>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Funding Stage</label>
                        <select className="input-field py-5 text-xl font-bold appearance-none" onChange={(e) => updateSpecialized("funding", e.target.value)} required>
                          <option value="">Select Stage</option>
                          <option>Bootstrapped</option>
                          <option>Pre-Seed</option>
                          <option>Seed</option>
                          <option>Series A+</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Innovation Sector <span className="text-[8px] opacity-50 ml-1">(Optional)</span></label>
                        <input type="text" placeholder="e.g. Fintech, AI, EdTech" className="input-field py-5 text-xl font-bold" onChange={(e) => updateSpecialized("sector", e.target.value)} />
                      </div>
                    </>
                  )}

                  {formData.type === "company" && (
                    <>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Industry Vertical</label>
                        <input type="text" placeholder="e.g. Technology, Finance" className="input-field py-5 text-xl font-bold" onChange={(e) => updateSpecialized("industry", e.target.value)} required />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Employee Scale <span className="text-[8px] opacity-50 ml-1">(Optional)</span></label>
                        <select className="input-field py-5 text-xl font-bold appearance-none" onChange={(e) => updateSpecialized("scale", e.target.value)}>
                          <option>1-50 (Emerging)</option>
                          <option>50-500 (Mid-Market)</option>
                          <option>500+ (Enterprise)</option>
                        </select>
                      </div>
                    </>
                  )}
                </div>

                <div className="flex justify-between pt-8">
                  <button onClick={prevStep} className="btn-secondary">Back</button>
                  <button onClick={nextStep} className="btn-sky px-12 rounded-2xl">Confirm Details <Target size={20} /></button>
                </div>
              </motion.div>
            )}

            {/* Step 5: Branding */}
            {step === 5 && (
              <motion.div key="step5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-4">Aesthetics</h2>
                    <h3 className="text-6xl font-black tracking-tighter">Narrative & <br /> <span className="text-sky-blue italic">Presence.</span></h3>
                  </div>
                  <button onClick={nextStep} className="text-[10px] font-black uppercase tracking-widest text-zinc-300 hover:text-sky-blue transition-colors pt-4">Skip for Now</button>
                </div>
                <div className="space-y-8">
                  <div className="flex flex-col items-center py-12 bg-zinc-50 rounded-[3rem] border-2 border-dashed border-zinc-100">
                    <Upload size={40} className="text-zinc-300 mb-4" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Upload Estate Crest (Optional)</p>
                  </div>
                  <textarea
                    placeholder="Define the mission of your estate (Optional)..."
                    className="w-full text-2xl font-medium border-none focus:ring-0 placeholder:text-zinc-100 p-0 min-h-[150px] resize-none italic"
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  />
                </div>
                <div className="flex justify-between pt-8">
                  <button onClick={prevStep} className="btn-secondary">Back</button>
                  <button onClick={nextStep} className="btn-sky px-12 rounded-2xl">Complete Estate <Sparkles size={20} /></button>
                </div>
              </motion.div>
            )}

            {/* Step 6: Success */}
            {step === 6 && (
              <motion.div key="step6" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
                <div className="w-24 h-24 bg-sky-blue/10 rounded-[2rem] flex items-center justify-center mx-auto mb-10 text-sky-blue shadow-xl shadow-sky-blue/10">
                  <CheckCircle2 size={48} className="animate-bounce" />
                </div>
                <h2 className="text-6xl font-black tracking-tightest mb-6">Verified.</h2>
                <p className="text-zinc-500 font-medium text-xl mb-12 max-w-md mx-auto">
                  The <span className="text-black font-bold italic">"{formData.name}"</span> estate has been officially recognized.
                </p>
                <div className="flex flex-col gap-4 max-w-sm mx-auto">
                  <Link href="/host/create" className="btn-sky py-5 rounded-2xl font-black uppercase text-xs tracking-widest">Host First Event</Link>
                  <Link href="/dashboard" className="btn-secondary py-5 rounded-2xl font-black uppercase text-xs tracking-widest">Enter Dashboard</Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
