"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Building2, ArrowRight, GraduationCap, Briefcase, Rocket } from "lucide-react";
import Link from "next/link";

export default function RoleSelection() {
  const [selected, setSelected] = useState<"individual" | "organization" | null>(null);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black tracking-tighter mb-4">Choose Your Path.</h1>
          <p className="text-zinc-500 font-medium text-lg">
            Are you here to participate or to host the future?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Individual Path */}
          <motion.div
            whileHover={{ y: -5 }}
            onClick={() => setSelected("individual")}
            className={`card cursor-pointer border-2 transition-all p-10 flex flex-col items-center text-center ${
              selected === "individual" ? "border-black bg-zinc-50" : "border-zinc-100"
            }`}
          >
            <div className="w-20 h-20 bg-zinc-100 rounded-2xl flex items-center justify-center mb-8">
              <User size={40} className={selected === "individual" ? "text-black" : "text-zinc-400"} />
            </div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Individual</h2>
            <p className="text-zinc-500 font-medium mb-8 leading-relaxed">
              Discover events, participate in challenges, and build your digital legacy.
            </p>
            <div className="mt-auto flex gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400">
              <span>Participate</span> • <span>Follow</span> • <span>Achieve</span>
            </div>
          </motion.div>

          {/* Organization Path */}
          <motion.div
            whileHover={{ y: -5 }}
            onClick={() => setSelected("organization")}
            className={`card cursor-pointer border-2 transition-all p-10 flex flex-col items-center text-center ${
              selected === "organization" ? "border-black bg-zinc-50" : "border-zinc-100"
            }`}
          >
            <div className="w-20 h-20 bg-zinc-100 rounded-2xl flex items-center justify-center mb-8">
              <Building2 size={40} className={selected === "organization" ? "text-black" : "text-zinc-400"} />
            </div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Organization</h2>
            <p className="text-zinc-500 font-medium mb-8 leading-relaxed">
              Host events, manage participants, and grow your community at scale.
            </p>
            <div className="mt-auto flex gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400">
              <GraduationCap size={14} /> <Briefcase size={14} /> <Rocket size={14} />
            </div>
          </motion.div>
        </div>

        <div className="mt-16 flex flex-col items-center">
          <Link 
            href={selected ? `/auth/signup?role=${selected}` : "#"}
            className={`btn-primary flex items-center gap-2 px-12 py-4 text-lg ${
              !selected && "opacity-20 cursor-not-allowed"
            }`}
          >
            Continue <ArrowRight size={20} />
          </Link>
          <p className="mt-8 text-zinc-400 text-sm font-medium">
            Already have an account? <Link href="/auth/login" className="text-black font-bold hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
