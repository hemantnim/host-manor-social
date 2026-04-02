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
  ShieldCheck
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

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
  const role = searchParams.get("role") || "individual";
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
        className="text-center"
      >
        <div className="w-20 h-20 bg-sky-blue/10 rounded-full flex items-center justify-center mx-auto mb-8 text-sky-blue">
          <CheckCircle2 size={40} />
        </div>
        <h2 className="text-4xl font-black tracking-tight mb-4">Account Created.</h2>
        <p className="text-zinc-500 font-medium mb-12">
          Your digital keys have been generated. Please check your email to verify your estate.
        </p>
        <Link href="/auth/login" className="btn-sky w-full py-4 rounded-2xl">
          Go to Login
        </Link>
      </motion.div>
    );
  }

  return (
    <div className="space-y-10">
      <div>
        <div className="inline-flex items-center gap-2 bg-zinc-50 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest mb-4 border border-zinc-100">
          <ShieldCheck size={12} className="text-sky-blue" /> Joining as {role}
        </div>
        <h1 className="text-5xl font-black tracking-tightest">Create Account.</h1>
        <p className="text-zinc-400 font-medium mt-2">Enter your details to join the Manor.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Full Name</label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300" size={18} />
            <input 
              {...register("fullName")}
              type="text" 
              placeholder="e.g. John Doe"
              className={`input-field pl-12 ${errors.fullName ? "border-red-500" : ""}`}
            />
          </div>
          {errors.fullName && <p className="text-red-500 text-xs font-bold">{errors.fullName.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300" size={18} />
            <input 
              {...register("email")}
              type="email" 
              placeholder="john@manor.com"
              className={`input-field pl-12 ${errors.email ? "border-red-500" : ""}`}
            />
          </div>
          {errors.email && <p className="text-red-500 text-xs font-bold">{errors.email.message}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300" size={18} />
              <input 
                {...register("password")}
                type="password" 
                placeholder="••••••••"
                className={`input-field pl-12 ${errors.password ? "border-red-500" : ""}`}
              />
            </div>
            {errors.password && <p className="text-red-500 text-xs font-bold">{errors.password.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Confirm</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300" size={18} />
              <input 
                {...register("confirmPassword")}
                type="password" 
                placeholder="••••••••"
                className={`input-field pl-12 ${errors.confirmPassword ? "border-red-500" : ""}`}
              />
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-xs font-bold">{errors.confirmPassword.message}</p>}
          </div>
        </div>

        <button 
          disabled={isLoading}
          type="submit" 
          className="btn-sky w-full py-5 text-lg rounded-2xl group mt-4"
        >
          {isLoading ? (
            <Loader2 className="animate-spin" size={24} />
          ) : (
            <>Create Estate <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></>
          )}
        </button>
      </form>

      <div className="text-center pt-4">
        <p className="text-zinc-400 text-sm font-medium">
          Already a member? <Link href="/auth/login" className="text-black font-black hover:text-sky-blue underline transition-colors">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center p-20">
        <Loader2 className="animate-spin text-sky-blue" size={40} />
      </div>
    }>
      <SignupForm />
    </Suspense>
  );
}
