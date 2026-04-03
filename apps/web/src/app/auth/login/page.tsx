"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Mail, 
  Lock, 
  ArrowRight, 
  Loader2, 
  ShieldCheck,
  Globe,
  LogIn,
  GraduationCap,
  Building2
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [authMode, setAuthMode] = useState<"academic" | "corporate">("academic");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginValues) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    window.location.href = "/dashboard";
  };

  return (
    <div className="max-w-xl mx-auto w-full py-24 px-6 md:px-12">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-zinc-50 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest mb-4 border border-zinc-100">
          <LogIn size={12} className="text-sky-blue" /> Manor Access
        </div>
        <h1 className="text-7xl font-black tracking-tightest mb-4 leading-none">Welcome <br /> <span className="text-sky-blue italic">Home.</span></h1>
        <p className="text-zinc-400 font-medium text-lg">Access your digital estate and connections.</p>
      </div>

      {/* Auth Mode Toggle */}
      <div className="flex p-1 bg-zinc-50 rounded-2xl border border-zinc-100 mb-12 relative">
        <button 
          onClick={() => setAuthMode("academic")}
          className={`flex-1 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all z-10 flex items-center justify-center gap-2 ${
            authMode === "academic" ? "text-white" : "text-zinc-400"
          }`}
        >
          <GraduationCap size={14} /> Student / Institute
        </button>
        <button 
          onClick={() => setAuthMode("corporate")}
          className={`flex-1 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all z-10 flex items-center justify-center gap-2 ${
            authMode === "corporate" ? "text-white" : "text-zinc-400"
          }`}
        >
          <Building2 size={14} /> Corporate Estate
        </button>
        <motion.div 
          className="absolute inset-1 w-[calc(50%-4px)] bg-black rounded-xl shadow-lg"
          animate={{ x: authMode === "academic" ? 0 : "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 ml-4">Registry Email</label>
          <div className="relative group">
            <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-sky-blue transition-colors" size={20} />
            <input 
              {...register("email")}
              type="email" 
              placeholder={authMode === "corporate" ? "official@company.com" : "resident@manor.com"}
              className={`input-field pl-16 py-5 rounded-3xl border-2 ${errors.email ? "border-red-100" : "border-zinc-50"}`}
            />
          </div>
          {errors.email && <p className="text-red-500 text-[10px] font-black uppercase tracking-widest ml-4">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center px-4">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Passkey</label>
            <Link href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-blue hover:underline">Forgot Passkey?</Link>
          </div>
          <div className="relative group">
            <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-sky-blue transition-colors" size={20} />
            <input 
              {...register("password")}
              type="password" 
              placeholder="••••••••"
              className={`input-field pl-16 py-5 rounded-3xl border-2 ${errors.password ? "border-red-100" : "border-zinc-50"}`}
            />
          </div>
          {errors.password && <p className="text-red-500 text-[10px] font-black uppercase tracking-widest ml-4">{errors.password.message}</p>}
        </div>

        <button 
          disabled={isLoading}
          type="submit" 
          className="btn-sky w-full py-6 text-xl rounded-[2rem] group mt-8 shadow-xl shadow-sky-blue/20"
        >
          {isLoading ? (
            <Loader2 className="animate-spin" size={28} />
          ) : (
            <>{authMode === "corporate" ? "Access Corporate Estate" : "Access Manor"} <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" /></>
          )}
        </button>
      </form>

      <AnimatePresence mode="wait">
        {authMode === "academic" && (
          <motion.div 
            key="social-auth"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="space-y-10 pt-16"
          >
            <div className="relative flex justify-center">
              <div className="absolute inset-0 flex items-center px-12"><div className="w-full border-t border-zinc-100"></div></div>
              <span className="relative bg-white px-6 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300">Fast Academic Access</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="btn-secondary py-4 rounded-2xl text-[10px] uppercase font-black tracking-widest flex items-center justify-center gap-2 hover:bg-zinc-50">
                <img src="https://www.google.com/favicon.ico" className="w-4 h-4 grayscale opacity-50" alt="Google" /> Google
              </button>
              <button className="btn-secondary py-4 rounded-2xl text-[10px] uppercase font-black tracking-widest flex items-center justify-center gap-2 hover:bg-zinc-50">
                <Globe size={16} className="text-zinc-300" /> LinkedIn
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center pt-16">
        <p className="text-zinc-400 text-sm font-medium uppercase tracking-widest text-[10px]">
          {authMode === "corporate" ? "Establish your corporate registry?" : "Not yet established?"} <Link href="/auth/role" className="text-black font-black hover:text-sky-blue underline transition-colors">Join the Manor</Link>
        </p>
      </div>
    </div>
  );
}
