import React from "react";

export default function StaticLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white pt-40 pb-40">
      <div className="max-w-4xl mx-auto px-6">
        {children}
      </div>
    </div>
  );
}
