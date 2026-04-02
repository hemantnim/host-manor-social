"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-20"
    >
      <header>
        <h1 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-6">Connect with Us</h1>
        <h2 className="text-7xl font-black tracking-tightest leading-none">Support <br /> <span className="text-sky-blue italic">Portal.</span></h2>
        <p className="text-xl text-zinc-500 font-medium mt-8 leading-relaxed max-w-2xl">
          Need assistance with your institutional estate? Our support team is here to provide white-glove service.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
        <div className="space-y-8">
          <div className="card p-10 border-zinc-100 shadow-sm hover:border-sky-blue/30 transition-all">
            <Mail className="text-sky-blue mb-6" size={32} />
            <h3 className="text-xl font-black mb-2">Email Registry</h3>
            <p className="text-zinc-500 font-medium">concierge@hostmanor.com</p>
          </div>
          
          <div className="card p-10 border-zinc-100 shadow-sm hover:border-sky-blue/30 transition-all">
            <MessageSquare className="text-sky-blue mb-6" size={32} />
            <h3 className="text-xl font-black mb-2">Institutional Support</h3>
            <p className="text-zinc-500 font-medium">Available for verified estates 24/7.</p>
          </div>
        </div>

        <div className="bg-zinc-50 p-12 rounded-[3.5rem] border border-zinc-100">
          <h3 className="text-2xl font-black mb-8">Send a Directive</h3>
          <form className="space-y-6">
            <input type="text" placeholder="Your Name" className="input-field py-4" />
            <input type="email" placeholder="Your Email" className="input-field py-4" />
            <textarea placeholder="How can we assist your estate?" className="input-field py-4 min-h-[150px] resize-none" />
            <button className="btn-sky w-full py-5 rounded-2xl flex items-center justify-center gap-2 group">
              Submit Directive <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
