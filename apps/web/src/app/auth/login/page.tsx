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
  Github
} from "lucide-react";
import Link from "next/link";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginValues) => {
    setIsLoading(true);
    // Simulate login
    await new Promise(resolve => setTimeout(resolve, 2000));
    window.location.href = "/dashboard";
  };

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-5xl font-black tracking-tightest">Welcome Back.</h1>
        <p className="text-zinc-400 font-medium mt-2">Enter your credentials to access your estate.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Password</label>
            <Link href="#" className="text-[10px] font-black uppercase tracking-widest text-sky-blue hover:underline">Forgot?</Link>
          </div>
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

        <button 
          disabled={isLoading}
          type="submit" 
          className="btn-sky w-full py-5 text-lg rounded-2xl group mt-4"
        >
          {isLoading ? (
            <Loader2 className="animate-spin" size={24} />
          ) : (
            <>Sign Into Manor <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></>
          )}
        </button>
      </form>

      <div className="space-y-6 pt-4">
        <div className="relative">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-zinc-100"></div></div>
          <div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest text-zinc-300">
            <span className="bg-white px-4">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="btn-secondary py-4 rounded-xl text-xs flex items-center justify-center gap-2">
            <img src="https://www.google.com/favicon.ico" className="w-4 h-4 grayscale" alt="Google" /> Google
          </button>
          <button className="btn-secondary py-4 rounded-xl text-xs flex items-center justify-center gap-2">
            <Github size={16} /> GitHub
          </button>
        </div>
      </div>

      <div className="text-center pt-4">
        <p className="text-zinc-400 text-sm font-medium">
          New to the Manor? <Link href="/auth/role" className="text-black font-black hover:text-sky-blue underline transition-colors">Create Account</Link>
        </p>
      </div>
    </div>
  );
}
