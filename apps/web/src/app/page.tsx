"use client";

import { ArrowRight, GraduationCap, Briefcase, Rocket, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter">Host Manor.</div>
        <div className="flex gap-8 items-center font-bold text-sm uppercase tracking-widest text-zinc-400">
          <Link href="/explore" className="hover:text-black transition-colors text-xs">Explore</Link>
          <Link href="/organizations" className="hover:text-black transition-colors text-xs">Organizations</Link>
          <Link href="/auth/login" className="hover:text-black transition-colors text-xs">Log In</Link>
          <Link href="/auth/role" className="btn-primary py-2 px-6 text-[10px] uppercase tracking-widest">Join the Manor</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-zinc-100 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8">
              <Sparkles size={12} /> The Social Event Network
            </div>
            <h1 className="text-[120px] font-black tracking-tighter leading-[0.8] mb-12">
              Host <br /> Anything.
            </h1>
            <p className="text-2xl font-medium text-zinc-500 max-w-2xl leading-relaxed mb-12">
              From academic olympiads to corporate seminars. Host Manor is the premium ecosystem for schools, colleges, and companies to connect and grow.
            </p>
            <div className="flex gap-4">
              <Link href="/auth/role" className="btn-primary px-10 py-5 text-xl flex items-center gap-3">
                Create an Event <ArrowRight size={24} />
              </Link>
              <Link href="/explore" className="btn-secondary px-10 py-5 text-xl">
                Explore Feed
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-40">
          <motion.div 
            whileHover={{ y: -5 }}
            className="card border-none bg-zinc-50 p-12"
          >
            <GraduationCap size={32} className="mb-6" />
            <h3 className="text-2xl font-bold mb-4 tracking-tight">Education</h3>
            <p className="text-zinc-500 font-medium">Tests, Olympiads, and Quizzes for schools and universities.</p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -5 }}
            className="card border-none bg-zinc-50 p-12"
          >
            <Rocket size={32} className="mb-6" />
            <h3 className="text-2xl font-bold mb-4 tracking-tight">Startups</h3>
            <p className="text-zinc-500 font-medium">Hackathons, pitch days, and product launches at scale.</p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -5 }}
            className="card border-none bg-zinc-50 p-12"
          >
            <Briefcase size={32} className="mb-6" />
            <h3 className="text-2xl font-bold mb-4 tracking-tight">Corporate</h3>
            <p className="text-zinc-500 font-medium">Seminars, webinars, and HR cultural events for companies.</p>
          </motion.div>
        </div>
      </main>

      <footer className="max-w-7xl mx-auto px-6 py-20 border-t border-zinc-100 text-zinc-400 font-medium text-sm">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p>© 2026 Host Manor Digital Estate. Built for the future of hosting.</p>
          <div className="flex gap-12 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-black transition-colors">GitHub</a>
            <a href="#" className="hover:text-black transition-colors">Terms</a>
            <a href="#" className="hover:text-black transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
