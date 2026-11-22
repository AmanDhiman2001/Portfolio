import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiArrowRightUpLine,
  RiSmartphoneLine,
  RiStore2Line,
  RiEBike2Line,
  RiShieldCheckLine,
  RiGlobalLine,
  RiSecurePaymentLine,
} from "react-icons/ri";

import { karto, karto3d } from "../assets";
import { personalInfo } from "../constants";
import SyntaxCVSectionLayout from "./SyntaxCVSectionLayout";

const ROLES = [
  {
    id: "client",
    title: "Client & Passenger App",
    icon: RiSmartphoneLine,
    stat: "< 30 sec",
    statLabel: "Booking Flow",
    desc: "Seamless ride booking, scheduled bus ticketing, and carpooling requests. Features multi-currency checkout with Flutterwave, Pesapal, Ihela, and CashTel, with live trip status updates.",
  },
  {
    id: "agency",
    title: "Agency Operations Portal",
    icon: RiStore2Line,
    stat: "100%",
    statLabel: "Tenant Isolation",
    desc: "Enables independent transportation agencies to onboard and manage their fleets, routes, trip scheduling, driver allocations, and localized commission accounting independently.",
  },
  {
    id: "driver",
    title: "Driver Partner Portal",
    icon: RiEBike2Line,
    stat: "Automated",
    statLabel: "Driver Payouts",
    desc: "Trip acceptance, turn-by-turn route operations, automated earnings calculation, instant driver payouts, and booking lifecycle management built for scale.",
  },
  {
    id: "superadmin",
    title: "Super-Admin Control Tower",
    icon: RiShieldCheckLine,
    stat: "Enterprise",
    statLabel: "Global Control",
    desc: "Complete multi-tenant governance, agency onboarding verification, multi-currency exchange rates, in-app dispute resolution, and live customer support chat module.",
  },
];

const KartoSpotlight = () => {
  const [activeRole, setActiveRole] = useState(ROLES[0]);
  const [activeImage, setActiveImage] = useState("3d"); // "3d" | "schematic"

  return (
    <SyntaxCVSectionLayout
      id="karto-spotlight"
      number="04."
      title="flagship project"
    >
      <div className="space-y-10">
        {/* Top Metadata & Headline */}
        <div>
          <div className="flex flex-wrap items-center gap-2 text-sm font-mono text-[#949494]">
            <span className="text-white font-medium">Multi-Tenant Transport &amp; Mobility SaaS</span>
            <span>•</span>
            <span>ASP.NET Core • Web API • EF Core</span>
            <span>•</span>
            <span className="px-2 py-0.5 rounded-full bg-[#00ffae]/10 text-[#00ffae] border border-[#00ffae]/30 text-xs">
              Multi-Tenant Architecture
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Tokendo – Multi-Tenant Transport &amp; Mobility SaaS Platform
          </h3>

          <p className="mt-4 text-base sm:text-lg text-[#d4d4d4] leading-relaxed max-w-3xl">
            Architected a multi-tenant SaaS platform for ride booking, bus ticketing, and carpooling, with role-based portals for{" "}
            <span className="text-white font-semibold">
              Super-Admin, Agency, Driver, and Client
            </span>, built on ASP.NET Core MVC and Web API with Entity Framework Core, JWT Bearer security, and multi-gateway payment processing.
          </p>

          {/* Action CTAs with Syntax CV rotating arrow */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group px-6 py-3 rounded-lg bg-[#00ffae] text-black font-semibold text-sm font-mono flex items-center gap-2 hover:bg-[#00ffae]/90 shadow-[0_0_20px_rgba(0,255,174,0.3)] transition"
            >
              <span>Request System Demo</span>
              <RiArrowRightUpLine
                size={17}
                className="group-hover:rotate-45 transition-transform duration-300"
              />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-3 rounded-lg border border-white/[0.15] border-b-2 hover:border-[#00ffae] hover:text-[#00ffae] text-white text-sm font-mono font-medium transition-all duration-300 flex items-center gap-2"
            >
              <RiGlobalLine size={18} className="text-[#00ffae]" />
              <span>Connect on LinkedIn</span>
              <RiArrowRightUpLine
                size={17}
                className="group-hover:rotate-45 transition-transform duration-300"
              />
            </a>
          </div>
        </div>

        {/* 4 Role Cards in Syntax CV Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ROLES.map((role) => {
            const Icon = role.icon;
            const isSelected = activeRole.id === role.id;

            return (
              <div
                key={role.id}
                onClick={() => setActiveRole(role)}
                className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "border-[#00ffae] border-b-2 border-b-[#00ffae] bg-white/[0.04] shadow-[0_0_25px_rgba(0,255,174,0.15)]"
                    : "border-white/[0.12] border-b-2 border-b-white/[0.2] bg-white/[0.02] hover:border-white/40"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#00ffae]">
                      <Icon size={20} />
                    </div>
                    <h4 className="text-lg font-bold text-white">
                      {role.title}
                    </h4>
                  </div>
                  <div className="text-right">
                    <div className="text-base font-bold text-[#00ffae] font-mono">
                      {role.stat}
                    </div>
                    <div className="text-[11px] text-[#949494] font-mono">
                      {role.statLabel}
                    </div>
                  </div>
                </div>

                <p className="mt-3.5 text-sm text-[#949494] leading-relaxed">
                  {role.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Visual Showcase Card with Image Switcher */}
        <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.12] bg-[#111111]">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00ffae] animate-ping" />
              <span className="text-white font-mono font-bold text-sm">
                Tokendo Architecture &amp; Mobility Hub
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveImage("3d")}
                className={`px-3 py-1 rounded text-xs font-mono transition ${
                  activeImage === "3d"
                    ? "bg-[#00ffae] text-black font-bold"
                    : "text-[#949494] hover:text-white"
                }`}
              >
                Multi-Tenant Flow
              </button>
              <button
                onClick={() => setActiveImage("schematic")}
                className={`px-3 py-1 rounded text-xs font-mono transition ${
                  activeImage === "schematic"
                    ? "bg-[#00ffae] text-black font-bold"
                    : "text-[#949494] hover:text-white"
                }`}
              >
                Payment Gateways
              </button>
            </div>
          </div>

          <div className="mt-6 relative h-[280px] sm:h-[380px] rounded-xl overflow-hidden bg-black/60 flex items-center justify-center">
            <img
              src={activeImage === "3d" ? karto3d : karto}
              alt="Tokendo Transport Ecosystem"
              className="w-full h-full object-cover object-center filter contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/90">
              <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur border border-white/10">
                Current Role: {activeRole.title}
              </span>
              <span className="px-2.5 py-1 rounded bg-[#00ffae]/20 text-[#00ffae] border border-[#00ffae]/40">
                Flutterwave • Pesapal • Ihela • CashTel
              </span>
            </div>
          </div>
        </div>
      </div>
    </SyntaxCVSectionLayout>
  );
};

export default KartoSpotlight;
