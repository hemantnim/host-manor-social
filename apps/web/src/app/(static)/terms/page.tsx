"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TermsPage() {
  const sections = [
    {
      title: "1. Estate Membership",
      content: "By creating an account on Host Manor, you agree to maintain the prestige and integrity of our social network. Individual and Organizational accounts must provide verified and accurate information."
    },
    {
      title: "2. Hosting Protocols",
      content: "Organizers are solely responsible for the content and management of their events. Host Manor reserves the right to remove any estate that violates our community guidelines or aesthetic standards."
    },
    {
      title: "3. Intellectual Property",
      content: "All branding, design elements, and the 'Manor Intelligence' engine are the exclusive property of Host Manor Digital Estate. Unauthorized reproduction is strictly prohibited."
    },
    {
      title: "4. Global Discovery",
      content: "Events curated through our intelligence engine are provided for discovery purposes. Host Manor is not responsible for the execution of these external global events."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-20"
    >
      <header>
        <h1 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-6">Legal Framework</h1>
        <h2 className="text-7xl font-black tracking-tightest leading-none">Terms of <br /> <span className="text-sky-blue italic">Estate.</span></h2>
        <p className="mt-8 text-zinc-500 font-bold uppercase tracking-widest text-[10px]">Last Established: April 2026</p>
      </header>

      <div className="space-y-16">
        {sections.map((section, i) => (
          <div key={i} className="space-y-6 max-w-2xl">
            <h3 className="text-2xl font-black tracking-tight">{section.title}</h3>
            <p className="text-xl text-zinc-500 font-medium leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
