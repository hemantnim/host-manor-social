"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  Loader2, 
  CheckCircle2,
  ShieldCheck,
  Building2,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const signupSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type SignupValues = z.infer<typeof signupSchema>;

function SignupForm() {
  const searchParams = useSearchParams();
  const initialRole = (searchParams.get("role") as "individual" | "organization") || "individual";
  const [role, setRole] = useState<"individual" | "organization">(initialRole);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupValues) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20"
      >
        <div className="w-24 h-24 bg-sky-blue/10 rounded-[2rem] flex items-center justify-center mx-auto mb-10 text-sky-blue shadow-xl shadow-sky-blue/10">
          <CheckCircle2 size={48} className="animate-bounce" />
        </div>
        <h2 className="text-6xl font-black tracking-tightest mb-6">Welcome home.</h2>
        <p className="text-zinc-500 font-medium text-xl mb-12 max-w-md mx-auto leading-relaxed">
          Your estate keys have been generated. Please verify your email to enter the Manor.
        </p>
        <Link href="/auth/login" className="btn-sky px-12 py-5 rounded-2xl text-lg">
          Access My Manor
        </Link>
      </motion.div>
    );
  }

  return (
    <div className="max-w-xl mx-auto w-full py-20">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-sky-blue/10 text-sky-blue px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-sky-blue/20">
          <Sparkles size={12} /> The Digital Estate Registration
        </div>
        <h1 className="text-7xl font-black tracking-tightest mb-4 leading-none">Join the <br /> <span className="text-sky-blue italic">Manor.</span></h1>
        <p className="text-zinc-400 font-medium text-lg">Select your role and establish your presence.</p>
      </div>

      {/* Role Toggle */}
      <div className="flex p-1.5 bg-zinc-50 rounded-2xl border border-zinc-100 mb-16 relative">
        <button 
          onClick={() => setRole("individual")}
          className={`flex-1 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 z-10 ${
            role === "individual" ? "text-white" : "text-zinc-400 hover:text-black"
          }`}
        >
          <User size={14} /> Individual
        </button>
        <button 
          onClick={() => setRole("organization")}
          className={`flex-1 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 z-10 ${
            role === "organization" ? "text-white" : "text-zinc-400 hover:text-black"
          }`}
        >
          <Building2 size={14} /> Organization
        </button>
        <motion.div 
          className="absolute inset-1.5 w-[calc(50%-6px)] bg-black rounded-xl shadow-xl"
          animate={{ x: role === "individual" ? 0 : "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 ml-4">Full Narrative Name</label>
          <div className="relative group">
            <User className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-sky-blue transition-colors" size={20} />
            <input 
              {...register("fullName")}
              type="text" 
              placeholder="Enter your full name"
              className={`input-field pl-16 py-5 rounded-3xl border-2 ${errors.fullName ? "border-red-100" : "border-zinc-50"}`}
            />
          </div>
          {errors.fullName && <p className="text-red-500 text-[10px] font-black uppercase tracking-widest ml-4">{errors.fullName.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 ml-4">Secure Email Registry</label>
          <div className="relative group">
            <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-sky-blue transition-colors" size={20} />
            <input 
              {...register("email")}
              type="email" 
              placeholder="e.g. resident@manor.com"
              className={`input-field pl-16 py-5 rounded-3xl border-2 ${errors.email ? "border-red-100" : "border-zinc-50"}`}
            />
          </div>
          {errors.email && <p className="text-red-500 text-[10px] font-black uppercase tracking-widest ml-4">{errors.email.message}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 ml-4">Passkey</label>
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

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 ml-4">Confirm Passkey</label>
            <div className="relative group">
              <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-sky-blue transition-colors" size={20} />
              <input 
                {...register("confirmPassword")}
                type="password" 
                placeholder="••••••••"
                className={`input-field pl-16 py-5 rounded-3xl border-2 ${errors.confirmPassword ? "border-red-100" : "border-zinc-50"}`}
              />
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-[10px] font-black uppercase tracking-widest ml-4">{errors.confirmPassword.message}</p>}
          </div>
        </div>

        <button 
          disabled={isLoading}
          type="submit" 
          className="btn-sky w-full py-6 text-xl rounded-[2rem] group mt-8 shadow-xl shadow-sky-blue/20"
        >
          {isLoading ? (
            <Loader2 className="animate-spin" size={28} />
          ) : (
            <>Establish Estate <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" /></>
          )}
        </button>
      </form>

      <div className="text-center pt-12">
        <p className="text-zinc-400 text-sm font-medium uppercase tracking-widest text-[10px]">
          Already an established member? <Link href="/auth/login" className="text-black font-black hover:text-sky-blue underline transition-colors">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center p-40">
        <Loader2 className="animate-spin text-sky-blue" size={48} />
      </div>
    }>
      <SignupForm />
    </Suspense>
  );
}
