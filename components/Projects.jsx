"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiCheckCircle, FiUsers } from "react-icons/fi";
import { projects } from "../data/projects";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="border-y border-line/50 bg-card/20 py-32 sm:py-40 lg:py-48">
      <div className="container-shell">
        <Reveal><div className="mb-14 grid gap-8 border-b border-line/80 pb-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><div className="mb-7 flex items-center gap-3 text-xs uppercase tracking-[.23em] text-cyan"><span className="h-px w-9 bg-cyan" />Selected work</div><h2 className="font-display text-4xl leading-none tracking-[-.05em] text-cloud sm:text-6xl">Things I have <span className="text-gradient">shipped.</span></h2></div><p className="max-w-sm text-sm leading-7 text-muted lg:text-right">Experiments, deployments, and collaborations that show how I am putting the fundamentals into practice.</p></div></Reveal>
        <div className="grid grid-flow-dense gap-5 md:grid-cols-12">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * .06} className={index === projects.length - 1 ? "md:col-span-12" : "md:col-span-6"}>
              <motion.article whileHover={{ y: -6 }} transition={{ duration: .25, ease: "easeOut" }} className="group relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-[1.6rem] border border-line bg-card p-6 transition-colors hover:border-indigo/60 hover:shadow-indigo sm:p-8">
                <div className={`absolute -right-20 -top-20 h-52 w-52 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-80 ${project.accent === "cyan" ? "bg-cyan/10" : "bg-indigo/15"}`} />
                <div className="relative z-10 flex items-start justify-between gap-5"><div><p className="mb-3 text-[10px] uppercase tracking-[.2em] text-cyan">{project.eyebrow}</p><h3 className="font-display text-3xl tracking-[-.04em] text-cloud sm:text-4xl">{project.name}</h3></div><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-muted transition-colors group-hover:border-cyan/50 group-hover:text-cyan"><FiArrowUpRight /></span></div>
                <p className="relative z-10 mt-7 max-w-xl text-sm leading-7 text-muted sm:text-base">{project.description}</p>
                <div className="relative z-10 mt-auto pt-10"><div className="flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="rounded-full border border-line bg-ink/60 px-3 py-1.5 text-[10px] uppercase tracking-[.08em] text-muted">{tech}</span>)}</div><div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-line/80 pt-5">{project.achievement ? <span className="inline-flex items-center gap-2 text-xs font-medium text-amber-200"><FiCheckCircle />{project.achievement}</span> : project.deployed ? <span className="text-xs text-muted">Deployed on <span className="text-cloud">{project.deployed}</span></span> : <span className="text-xs text-muted">{project.status || "Personal project"}</span>}{project.team && <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[.16em] text-indigo-200"><FiUsers />Team project</span>}<a href={project.github} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 text-xs font-semibold text-cloud transition-colors hover:text-cyan">GitHub <FiArrowUpRight /></a></div></div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
