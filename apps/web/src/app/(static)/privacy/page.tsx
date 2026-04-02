"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Eye, Lock } from "lucide-react";

export default function PrivacyPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-20"
    >
      <header>
        <h1 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-6">Data Sovereignty</h1>
        <h2 className="text-7xl font-black tracking-tightest leading-none">Privacy <br /> <span className="text-sky-blue italic">Protocol.</span></h2>
      </header>

      <div className="grid grid-cols-1 gap-12">
        <div className="flex gap-8 items-start">
          <div className="w-16 h-16 bg-sky-blue/10 rounded-2xl flex items-center justify-center shrink-0">
            <Shield className="text-sky-blue" size={24} />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-black tracking-tight">Security First</h3>
            <p className="text-xl text-zinc-500 font-medium leading-relaxed">
              Your estate data is protected by industry-standard encryption. We prioritize the security of institutional and individual data above all else.
            </p>
          </div>
        </div>

        <div className="flex gap-8 items-start">
          <div className="w-16 h-16 bg-sky-blue/10 rounded-2xl flex items-center justify-center shrink-0">
            <Eye className="text-sky-blue" size={24} />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-black tracking-tight">Transparency</h3>
            <p className="text-xl text-zinc-500 font-medium leading-relaxed">
              We never sell your data to third parties. Host Manor only uses your information to curate your Discovery Feed and manage your event registrations.
            </p>
          </div>
        </div>

        <div className="flex gap-8 items-start">
          <div className="w-16 h-16 bg-sky-blue/10 rounded-2xl flex items-center justify-center shrink-0">
            <Lock className="text-sky-blue" size={24} />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-black tracking-tight">User Control</h3>
            <p className="text-xl text-zinc-500 font-medium leading-relaxed">
              You maintain full sovereignty over your profile and event history. At any point, you may request the permanent deletion of your estate.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
