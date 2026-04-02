"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Shield, Globe, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-20"
    >
      <header className="space-y-8">
        <div className="inline-flex items-center gap-2 bg-sky-blue/10 text-sky-blue px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-sky-blue/20">
          <Sparkles size={12} /> The Manor Narrative
        </div>
        <h1 className="text-8xl font-black tracking-tightest leading-[0.85]">
          Establishing the <br /> <span className="text-sky-blue italic">Future</span> of Social Hosting.
        </h1>
        <p className="text-3xl font-medium text-zinc-500 leading-relaxed max-w-3xl italic">
          "Host Manor was born from a simple observation: the world's most prestigious institutions lacked a digital estate that matched their physical grandeur."
        </p>
      </header>

      <section className="prose prose-zinc prose-2xl max-w-none text-zinc-600 font-medium leading-relaxed space-y-12">
        <p>
          We believe that every event—be it a school olympiad, a college hackathon, or a corporate seminar—is an opportunity to build a legacy. Host Manor provides the architectural foundation for these digital legacies to thrive.
        </p>
        <p>
          Our platform is more than just a scheduling tool; it is a high-end social network where institutions and individuals connect through shared intellectual and cultural pursuits. By combining elite aesthetics with powerful intelligence engines, we ensure that the right estates find the right participants.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-20">
        <div className="bg-zinc-50 p-12 rounded-[3rem] border border-zinc-100">
          <Globe className="text-sky-blue mb-8" size={40} />
          <h3 className="text-2xl font-black mb-4">Global Discovery</h3>
          <p className="text-zinc-500 font-medium leading-relaxed">
            Our intelligence engine continuously scans the globe to bring the world's most prestigious events directly to your Manor feed.
          </p>
        </div>
        <div className="bg-zinc-50 p-12 rounded-[3rem] border border-zinc-100">
          <Shield className="text-sky-blue mb-8" size={40} />
          <h3 className="text-2xl font-black mb-4">Verified Estates</h3>
          <p className="text-zinc-500 font-medium leading-relaxed">
            We maintain a strictly curated environment, ensuring that every organization on Host Manor meets our standards of excellence.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
