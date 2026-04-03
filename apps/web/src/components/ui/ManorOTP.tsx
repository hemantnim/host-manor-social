"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface ManorOTPProps {
  onComplete: (code: string) => void;
  isLoading?: boolean;
}

export const ManorOTP: React.FC<ManorOTPProps> = ({ onComplete, isLoading }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }

    if (newOtp.every((val) => val !== "")) {
      onComplete(newOtp.join(""));
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex gap-3 justify-center">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => { inputs.current[index] = el; }}
          type="text"
          maxLength={1}
          value={digit}
          disabled={isLoading}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className="w-14 h-20 text-center text-3xl font-black bg-zinc-50 border-2 border-zinc-100 rounded-2xl focus:border-sky-blue focus:ring-4 focus:ring-sky-blue/5 outline-none transition-all disabled:opacity-50"
        />
      ))}
    </div>
  );
};
