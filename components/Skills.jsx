"use client";

import { motion } from "framer-motion";
import { skillGroups } from "../data/skills";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="py-32 sm:py-40 lg:py-48">
      <div className="container-shell">
        <Reveal><div className="mb-14 flex flex-col justify-between gap-7 border-b border-line/80 pb-8 sm:flex-row sm:items-end"><div><div className="mb-7 flex items-center gap-3 text-xs uppercase tracking-[.23em] text-cyan"><span className="h-px w-9 bg-cyan" />Tools I am using</div><h2 className="font-display text-4xl leading-none tracking-[-.05em] text-cloud sm:text-6xl">A growing <span className="text-gradient">toolkit.</span></h2></div><p className="max-w-xs text-sm leading-7 text-muted">A practical mix of frontend, backend, testing and smart-contract tools I use to build and verify software.</p></div></Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map(({ label, icon: GroupIcon, skills }, groupIndex) => (
            <Reveal key={label} delay={groupIndex * .07} direction={groupIndex % 2 ? "right" : "left"}>
              <div className="group h-full rounded-[1.6rem] border border-line bg-card/50 p-6 transition-colors hover:border-indigo/45 sm:p-8">
                <div className="mb-8 flex items-center justify-between"><div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-full border border-line bg-ink text-cyan"><GroupIcon size={16} /></span><h3 className="font-display text-xl text-cloud">{label}</h3></div><span className="text-xs tabular-nums text-muted">{String(groupIndex + 1).padStart(2, "0")}</span></div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {skills.map(([name, Icon]) => <motion.div key={name} whileHover={{ y: -4, scale: 1.02 }} className="flex min-h-[92px] flex-col justify-between rounded-xl border border-line/80 bg-ink/60 p-4 transition-shadow hover:shadow-indigo"><Icon className="text-xl text-muted transition-colors group-hover:text-cyan" /><span className="text-xs font-medium text-cloud">{name}</span></motion.div>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
