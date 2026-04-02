"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Sparkles, Loader2, CheckCircle2 } from "lucide-react";

interface ManorNewsletterProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle?: string;
}

export const ManorNewsletter: React.FC<ManorNewsletterProps> = ({ isOpen, onClose, eventTitle }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus("success");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 m-auto w-full max-w-lg h-fit bg-white rounded-[2.5rem] z-[110] overflow-hidden shadow-2xl p-12 text-center"
          >
            <button onClick={onClose} className="absolute top-8 right-8 text-zinc-300 hover:text-black transition-colors">
              <X size={24} />
            </button>

            {status !== "success" ? (
              <>
                <div className="w-20 h-20 bg-sky-blue/10 rounded-3xl flex items-center justify-center mx-auto mb-8 text-sky-blue">
                  <Mail size={40} />
                </div>
                <h2 className="text-4xl font-black tracking-tightest mb-4 leading-none">
                  Stay in the <br /> <span className="text-sky-blue italic">Loop.</span>
                </h2>
                <p className="text-zinc-500 font-medium mb-10 leading-relaxed">
                  {eventTitle 
                    ? `Receive exclusive updates, agenda changes, and registration reminders for "${eventTitle}" directly in your estate.`
                    : "Join the Manor newsletter to receive curated global discoveries and institutional updates every week."
                  }
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-sky-blue transition-colors" size={18} />
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      className="input-field pl-12 py-5 rounded-2xl"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <button 
                    disabled={status === "loading"}
                    className="btn-sky w-full py-5 rounded-2xl text-lg flex items-center justify-center gap-2 group"
                  >
                    {status === "loading" ? (
                      <Loader2 className="animate-spin" size={24} />
                    ) : (
                      <>Secure My Spot <Sparkles size={20} className="group-hover:rotate-12 transition-transform" /></>
                    )}
                  </button>
                </form>
                <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
                  Secure Encryption • No Spam • Premium Only
                </p>
              </>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-12"
              >
                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 text-green-500">
                  <CheckCircle2 size={60} className="animate-bounce" />
                </div>
                <h2 className="text-5xl font-black tracking-tight mb-4 text-green-600">Subscribed.</h2>
                <p className="text-zinc-500 font-medium mb-12">
                  You have been successfully added to the Manor intelligence network. Check your inbox for confirmation.
                </p>
                <button onClick={onClose} className="btn-primary w-full py-4 rounded-2xl">
                  Return to Manor
                </button>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
