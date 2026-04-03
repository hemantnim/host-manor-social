"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Filter, 
  ShieldCheck, 
  Users, 
  Globe, 
  MapPin, 
  Plus,
  Check,
  Building2,
  GraduationCap,
  Rocket,
  Briefcase,
  Shield
} from "lucide-react";
import Link from "next/link";
import { VerifiedBadge } from "@/components/ui/badges/VerifiedBadge";

export default function OrganizationsDirectory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeType, setActiveTab] = useState("all");
  const [followedOrgs, setFollowedOrgs] = useState<number[]>([]);
  const [verifiedOnly, setVerifiedOnly] = useState(false);

  const orgTypes = [
    { id: "all", label: "All Estates", icon: null },
    { id: "school", label: "Schools", icon: <GraduationCap size={16} /> },
    { id: "college", label: "Colleges", icon: <Building2 size={16} /> },
    { id: "startup", label: "Startups", icon: <Rocket size={16} /> },
    { id: "company", label: "Companies", icon: <Briefcase size={16} /> },
  ];

  const allOrgs = [
    {
      id: 1,
      name: "Stanford University",
      type: "college",
      location: "California, USA",
      followers: 12400,
      image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=400&auto=format&fit=crop",
      logo: "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&w=100&auto=format&fit=crop",
      verified: true
    },
    {
      id: 2,
      name: "TechSphere Labs",
      type: "startup",
      location: "Berlin, Germany",
      followers: 8200,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400&auto=format&fit=crop",
      logo: "https://logo.clearbit.com/techsphere.io",
      verified: true
    },
    {
      id: 3,
      name: "St. Xavier Academy",
      type: "school",
      location: "Mumbai, India",
      followers: 5100,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=400&auto=format&fit=crop",
      logo: "https://logo.clearbit.com/stxaviers.edu",
      verified: false
    },
    {
      id: 4,
      name: "Nexus Global Corp",
      type: "company",
      location: "London, UK",
      followers: 15600,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&auto=format&fit=crop",
      logo: "https://logo.clearbit.com/nexus.com",
      verified: true
    }
  ];

  const filteredOrgs = allOrgs.filter(org => {
    const matchesSearch = org.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = activeType === "all" || org.type === activeType;
    const matchesVerified = !verifiedOnly || org.verified;
    return matchesSearch && matchesType && matchesVerified;
  });

  const toggleFollow = (id: number) => {
    if (followedOrgs.includes(id)) {
      setFollowedOrgs(followedOrgs.filter(orgId => orgId !== id));
    } else {
      setFollowedOrgs([...followedOrgs, id]);
    }
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Editorial Header */}
      <header className="bg-black text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-sky-blue/10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-sky-blue/20 text-sky-blue px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-sky-blue/30">
                <Globe size={12} /> The Global Directory
              </div>
              <h1 className="text-7xl md:text-8xl font-black tracking-tightest leading-none mb-8">
                Discover <br /> <span className="text-sky-blue italic">Estates.</span>
              </h1>
              <p className="text-xl text-zinc-400 font-medium leading-relaxed">
                Connect with the world's most prestigious institutions. Follow your favorite organizations to stay updated on elite events.
              </p>
            </div>
            
            <div className="w-full md:w-96">
              <div className="relative group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-sky-blue transition-colors" size={20} />
                <input 
                  type="text" 
                  placeholder="Search by name or location..." 
                  className="w-full bg-zinc-900 border border-zinc-800 p-6 pl-16 rounded-2xl focus:outline-none focus:ring-4 focus:ring-sky-blue/10 focus:border-sky-blue transition-all font-bold text-lg placeholder:text-zinc-600"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Filter Bar */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-xl border-b border-zinc-100 z-50 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide w-full md:w-auto">
            {orgTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={`flex items-center gap-2 px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all whitespace-nowrap ${
                  activeType === type.id 
                  ? "bg-sky-blue text-white shadow-xl shadow-sky-blue/20" 
                  : "bg-zinc-50 text-zinc-400 hover:bg-zinc-100"
                }`}
              >
                {type.icon} {type.label}
              </button>
            ))}
          </div>

          <button 
            onClick={() => setVerifiedOnly(!verifiedOnly)}
            className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${
              verifiedOnly ? "bg-black text-white" : "bg-zinc-50 text-zinc-400"
            }`}
          >
            <Shield size={14} className={verifiedOnly ? "text-sky-blue" : ""} /> Verified Only
          </button>
        </div>
      </nav>

      {/* Results Grid */}
      <main className="max-w-7xl mx-auto px-6 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredOrgs.map((org) => (
              <motion.div
                key={org.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8 }}
                className="card group hover:border-sky-blue/30 p-0 overflow-hidden border-zinc-100"
              >
                <div className="h-40 relative">
                  <img src={org.image} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" alt={org.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-8 flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-xl p-1 shadow-xl">
                      <div className="w-full h-full bg-zinc-100 rounded-lg flex items-center justify-center font-black text-xs text-black">
                        {org.name[0]}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-black tracking-tight">{org.name}</h3>
                      {org.verified && <VerifiedBadge />}
                    </div>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-zinc-400">
                    <span className="flex items-center gap-1"><MapPin size={12} /> {org.location}</span>
                    <span className="flex items-center gap-1 text-sky-blue"><Users size={12} /> {org.followers.toLocaleString()} Following</span>
                  </div>

                  <div className="flex gap-3">
                    <Link href={`/org/${org.id}`} className="btn-secondary flex-1 py-3 text-[10px] uppercase tracking-widest font-black rounded-xl">
                      View Profile
                    </Link>
                    <button 
                      onClick={() => toggleFollow(org.id)}
                      className={`flex-1 py-3 text-[10px] uppercase tracking-widest font-black rounded-xl transition-all flex items-center justify-center gap-2 ${
                        followedOrgs.includes(org.id)
                        ? "bg-zinc-100 text-black"
                        : "bg-black text-white hover:bg-sky-blue"
                      }`}
                    >
                      {followedOrgs.includes(org.id) ? (
                        <><Check size={14} /> Following</>
                      ) : (
                        <><Plus size={14} /> Follow</>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredOrgs.length === 0 && (
          <div className="py-40 text-center space-y-6">
            <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center mx-auto text-zinc-200">
              <Search size={40} />
            </div>
            <h2 className="text-3xl font-black tracking-tight">No estates found.</h2>
            <p className="text-zinc-400 font-medium">Try adjusting your search criteria or filters.</p>
          </div>
        )}
      </main>
    </div>
  );
}
