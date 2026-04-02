"use client";

import { ArrowRight, GraduationCap, Briefcase, Rocket, Sparkles, Globe, Shield } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-sky-blue/10 text-sky-blue px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-sky-blue/20">
              <Sparkles size={12} /> The Social Event Network
            </div>
            <h1 className="text-[100px] font-black tracking-tightest leading-[0.8] mb-12">
              The <span className="text-sky-blue italic">Future</span> <br /> of Hosting.
            </h1>
            <p className="text-2xl font-medium text-zinc-500 max-w-xl leading-relaxed mb-12">
              From academic olympiads to corporate seminars. Host Manor is the premium ecosystem for schools, colleges, and companies to connect and grow.
            </p>
            <div className="flex gap-4">
              <Link href="/auth/role" className="btn-primary px-10 py-5 text-lg rounded-2xl group">
                Establish Estate <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/explore" className="btn-secondary px-10 py-5 text-lg rounded-2xl">
                Explore Feed
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-sky-blue/20 blur-[120px] rounded-full" />
            <div className="relative bg-white border border-zinc-100 p-12 rounded-[3rem] shadow-2xl shadow-sky-blue/10">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sky-blue rounded-2xl flex items-center justify-center text-white">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-xl">Verified Estates</h4>
                    <p className="text-zinc-400 font-medium">Trusted by 500+ Institutions</p>
                  </div>
                </div>
                <div className="h-[1px] bg-zinc-50" />
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-4xl font-black tracking-tighter text-sky-blue">12K+</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Monthly Events</p>
                  </div>
                  <div>
                    <p className="text-4xl font-black tracking-tighter">850K</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Active Participants</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-40">
          {[
            { icon: <GraduationCap />, title: "Education", desc: "Tests, Olympiads, and Quizzes for schools." },
            { icon: <Rocket />, title: "Startups", desc: "Hackathons, pitch days, and product launches." },
            { icon: <Briefcase />, title: "Corporate", desc: "Seminars, webinars, and HR cultural events." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="card group hover:border-sky-blue transition-all"
            >
              <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-sky-blue group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
              <p className="text-zinc-500 font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="max-w-7xl mx-auto px-6 py-20 border-t border-zinc-100 text-zinc-400 font-medium text-sm">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p>© 2026 Host Manor Digital Estate. All rights reserved.</p>
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-widest">
            <a href="#" className="hover:text-sky-blue transition-colors">GitHub</a>
            <a href="#" className="hover:text-sky-blue transition-colors">Twitter</a>
            <a href="#" className="hover:text-sky-blue transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
