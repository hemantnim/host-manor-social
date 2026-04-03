"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

interface VerifiedBadgeProps {
  className?: string;
  size?: number;
}

export const VerifiedBadge: React.FC<VerifiedBadgeProps> = ({ className = "", size = 16 }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`inline-flex items-center gap-1 bg-sky-blue/10 text-sky-blue px-2 py-0.5 rounded-full border border-sky-blue/20 select-none group relative ${className}`}
    >
      <ShieldCheck size={size} />
      <span className="text-[8px] font-black uppercase tracking-widest hidden md:inline">Verified</span>
      
      {/* Premium Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-40 p-3 bg-black text-white text-[8px] font-bold uppercase tracking-widest leading-relaxed rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 text-center shadow-2xl">
        This estate has been officially verified by Host Manor Intelligence.
      </div>
    </motion.div>
  );
};
