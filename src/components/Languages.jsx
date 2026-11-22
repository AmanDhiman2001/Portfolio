import React from "react";
import { motion } from "framer-motion";
import SyntaxCVSectionLayout from "./SyntaxCVSectionLayout";

const languages = [
  { language: "English", level: "Professional Working Proficiency", tag: "Professional" },
  { language: "Hindi", level: "Full Professional / Native", tag: "Professional" },
  { language: "Punjabi", level: "Professional Working Proficiency", tag: "Professional" },
];

const developerTools = [
  { name: "ASP.NET Core & .NET 8", category: "Core Backend & APIs" },
  { name: "Ocelot API Gateway", category: "Microservices Routing" },
  { name: "Azure Containers & Cloud", category: "Containerization & Cloud" },
  { name: "SQL Server & PostgreSQL", category: "Relational DBs & Stored Procedures" },
  { name: "Microsoft Bot Framework & LUIS", category: "Conversational AI & NLU" },
  { name: "Twilio Telephony Automation", category: "Outbound Calling & Onboarding" },
  { name: "Git, Bitbucket & Postman", category: "Version Control & API Testing" },
  { name: "Angular & jQuery", category: "Frontend Web Interfaces" },
];

const Languages = () => {
  return (
    <SyntaxCVSectionLayout id="languages" number="07." title="languages & tools">
      <div className="space-y-10">
        {/* Spoken Languages in Syntax CV 4x63v card style */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-widest text-[#00ffae] mb-4">
            Spoken Languages
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {languages.map((item, idx) => (
              <motion.div
                key={item.language}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 rounded-xl border border-white/[0.12] border-b-2 border-b-white/[0.2] bg-white/[0.02] hover:border-[#00ffae] hover:border-b-[#00ffae] transition-all duration-300 flex flex-col justify-between gap-3"
              >
                <div>
                  <h5 className="text-lg font-bold text-white">
                    {item.language}
                  </h5>
                  <p className="text-xs text-[#949494] font-mono mt-1 leading-relaxed">
                    {item.level}
                  </p>
                </div>
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-full bg-[#00ffae]/10 text-[#00ffae] border border-[#00ffae]/30 text-[11px] font-mono font-semibold">
                    {item.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Developer Environment & Tooling */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-widest text-[#00ffae] mb-4">
            Developer Tooling &amp; Environment
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {developerTools.map((tool, idx) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-4 rounded-xl border border-white/[0.12] border-b-2 border-b-white/[0.2] bg-white/[0.02] hover:border-[#00ffae] hover:border-b-[#00ffae] transition-all duration-300 flex items-center justify-between group"
              >
                <span className="text-base font-semibold text-white group-hover:text-[#00ffae] transition-colors">
                  {tool.name}
                </span>
                <span className="text-xs font-mono text-[#949494]">
                  {tool.category}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SyntaxCVSectionLayout>
  );
};

export default Languages;
