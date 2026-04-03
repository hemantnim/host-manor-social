"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Building2, ArrowRight, GraduationCap, Briefcase, Rocket, ShieldCheck, Trophy, Star } from "lucide-react";
import Link from "next/link";

export default function RoleSelection() {
  const [selected, setSelected] = useState<"individual" | "organization" | "professional" | null>(null);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-blue/10 text-sky-blue px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-sky-blue/20">
            <ShieldCheck size={12} /> Secure Authentication
          </div>
          <h1 className="text-6xl font-black tracking-tightest mb-4">Choose Your Path.</h1>
          <p className="text-zinc-500 font-medium text-lg text-center max-w-xl mx-auto">
            Whether you are here to participate, host an institutional estate, or offer professional authority.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -5 }}
            onClick={() => setSelected("individual")}
            className={`card cursor-pointer border-2 transition-all p-10 flex flex-col items-center text-center ${
              selected === "individual" ? "border-sky-blue bg-sky-blue/[0.02]" : "border-zinc-100"
            }`}
          >
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transition-colors ${
              selected === "individual" ? "bg-sky-blue text-white" : "bg-zinc-100 text-zinc-400"
            }`}>
              <User size={40} />
            </div>
            <h2 className="text-2xl font-bold mb-4 tracking-tight">Individual</h2>
            <p className="text-zinc-500 font-medium mb-8 leading-relaxed text-sm">
              Discover events, participate in challenges, and build your digital legacy.
            </p>
            <div className="mt-auto flex gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-300">
              <span>Participate</span> • <span>Achieve</span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            onClick={() => setSelected("organization")}
            className={`card cursor-pointer border-2 transition-all p-10 flex flex-col items-center text-center ${
              selected === "organization" ? "border-sky-blue bg-sky-blue/[0.02]" : "border-zinc-100"
            }`}
          >
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transition-colors ${
              selected === "organization" ? "bg-sky-blue text-white" : "bg-zinc-100 text-zinc-400"
            }`}>
              <Building2 size={40} />
            </div>
            <h2 className="text-2xl font-bold mb-4 tracking-tight">Organization</h2>
            <p className="text-zinc-500 font-medium mb-8 leading-relaxed text-sm">
              Host events, manage participants, and grow your community at scale.
            </p>
            <div className="mt-auto flex gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-300">
              <GraduationCap size={14} /> <Briefcase size={14} /> <Rocket size={14} />
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            onClick={() => setSelected("professional")}
            className={`card cursor-pointer border-2 transition-all p-10 flex flex-col items-center text-center ${
              selected === "professional" ? "border-sky-blue bg-sky-blue/[0.02]" : "border-zinc-100"
            }`}
          >
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transition-colors ${
              selected === "professional" ? "bg-sky-blue text-white" : "bg-zinc-100 text-zinc-400"
            }`}>
              <Trophy size={40} />
            </div>
            <h2 className="text-2xl font-bold mb-4 tracking-tight">Professional</h2>
            <p className="text-zinc-500 font-medium mb-8 leading-relaxed text-sm">
              Offer your expertise as a guest speaker, judge, or mentor to elite estates.
            </p>
            <div className="mt-auto flex gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-300">
              <Star size={14} /> <span>Verified Authority</span>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 flex flex-col items-center">
          <Link 
            href={
              selected === "organization" ? "/auth/onboarding/organization" : 
              selected === "professional" ? "/auth/onboarding/professional" :
              selected === "individual" ? "/auth/signup?role=individual" : "#"
            }
            className={`btn-sky flex items-center gap-2 px-12 py-4 text-lg rounded-2xl ${
              !selected && "opacity-20 cursor-not-allowed"
            }`}
          >
            Establish Presence <ArrowRight size={20} />
          </Link>
          <p className="mt-8 text-zinc-400 text-sm font-medium uppercase tracking-widest text-[10px]">
            Already have an account? <Link href="/auth/login" className="text-black font-black hover:text-sky-blue underline transition-colors">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
