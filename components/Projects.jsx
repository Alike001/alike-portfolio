import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects } from "../data/projects";
import Reveal from "./Reveal";

function ProjectCover({ id }) {
  if (id === "zecceipt") {
    return (
      <div aria-hidden="true" className="relative flex h-[285px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#052c48] via-[#0a4d61] to-[#113a61] sm:h-[315px]">
        <div className="absolute -left-14 -top-20 h-72 w-72 rounded-full bg-[#61e5dc]/15 blur-3xl" />
        <div className="absolute -right-12 bottom-0 h-56 w-56 rounded-full bg-[#3877eb]/25 blur-3xl" />
        <div className="absolute left-7 top-6 font-display text-[15px] font-bold tracking-[-.04em] text-white/90">zecceipt<span className="text-[#5ae3cb]">.</span></div>
        <div className="absolute right-7 top-7 rounded-full border border-white/20 px-3 py-1 font-mono text-[10px] text-white/70">ZCASH TESTNET</div>
        <div className="relative mt-10 w-[70%] max-w-[290px] rotate-[-6deg] rounded-2xl border border-white/50 bg-[#f7fafc] p-5 text-[#102f3b] shadow-[0_25px_50px_rgba(0,0,0,.35)] transition-transform duration-500 group-hover:rotate-[-2deg] sm:p-6">
          <div className="flex justify-between gap-2 font-mono text-[10px] font-bold tracking-wider"><span>PAYMENT RECEIPT</span><span>✓</span></div>
          <div className="mt-5 flex items-center justify-between gap-3"><span className="text-lg font-bold tracking-tight">Verified</span><span className="rounded-full bg-[#d5f9ec] px-2.5 py-1 text-[9px] font-semibold text-[#13754d]">ON-CHAIN</span></div>
          <div className="mt-5 space-y-2"><div className="h-1.5 w-[95%] rounded bg-[#dfe7eb]"/><div className="h-1.5 w-[70%] rounded bg-[#dfe7eb]"/><div className="h-1.5 w-[82%] rounded bg-[#dfe7eb]"/></div>
          <div className="mt-5 border-t border-[#dae4eb] pt-3 font-mono text-[9px] text-[#637a89]">TRANSACTION → CHECKS → RECEIPT</div>
        </div>
      </div>
    );
  }
  if (id === "reserverail") {
    return (
      <div aria-hidden="true" className="relative flex h-[285px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#1b164c] via-[#2a205c] to-[#3c2561] sm:h-[315px]">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#9d83ff]/25 blur-3xl"/>
        <div className="absolute -left-24 bottom-[-30px] h-72 w-72 rounded-full bg-[#4c82f8]/20 blur-3xl"/>
        <div className="absolute left-7 top-6 font-display text-[15px] font-bold tracking-tight text-white">reserve<span className="text-[#b9a5ff]">rail</span></div>
        <div className="absolute right-7 top-7 font-mono text-[10px] text-white/65">HSK / TESTNET PILOT</div>
        <div className="relative mt-7 w-[82%] max-w-[345px] rotate-[4deg] rounded-2xl border border-white/[.18] bg-[#191b3a] p-5 shadow-[0_24px_55px_rgba(0,0,0,.35)] transition-transform duration-500 group-hover:rotate-[1deg]">
          <p className="text-[10px] uppercase tracking-[.16em] text-[#bfb4ed]">Reserve operations</p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {["Reserve", "Mint", "Redeem"].map((item, i) => (
              <div key={item} className="rounded-xl border border-[#6a619f]/35 bg-[#292b51] px-2 py-4 text-center">
                <div className={`mx-auto mb-3 h-8 w-8 rounded-lg ${i === 0 ? "bg-[#a68efa]" : i === 1 ? "bg-[#6ab6eb]" : "bg-[#7dd2ba]"}`}/>
                <p className="text-[10px] font-medium text-white/80">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-3 font-mono text-[9px] text-[#b3a6df]"><span className="h-1.5 w-1.5 rounded-full bg-[#77ddc2]"/> Inspectable on-chain state</div>
        </div>
      </div>
    );
  }
  if (id === "saysure") {
    return (
      <div aria-hidden="true" className="relative flex h-[285px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#482a45] via-[#784e65] to-[#ad736b] sm:h-[315px]">
        <div className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-[#f4b6c1]/15 blur-3xl"/>
        <div className="absolute left-7 top-6 font-display text-[15px] font-bold text-white">SaySure.</div>
        <div className="absolute right-7 top-7 font-mono text-[10px] text-white/70">PAYMENT CONSENT</div>
        <div className="relative mt-8 w-[76%] max-w-[315px] rotate-[-3deg] rounded-2xl border border-[#fce2d5] bg-[#fff9f3] p-5 shadow-[0_25px_50px_rgba(0,0,0,.3)] transition-transform duration-500 group-hover:rotate-0">
          <div className="flex items-center justify-between"><span className="text-[11px] font-bold text-[#553849]">Review this request</span><span className="rounded-full bg-[#f5e5ef] px-2 py-1 text-[9px] text-[#85546e]">Before agreeing</span></div>
          <p className="mt-5 max-w-[200px] text-lg font-semibold leading-snug tracking-tight text-[#332536]">Understand what you&apos;re approving.</p>
          <div className="mt-4 h-1.5 w-[80%] rounded bg-[#eddee3]"/><div className="mt-2 h-1.5 w-[55%] rounded bg-[#eddee3]"/>
          <div className="mt-5 flex gap-2"><span className="rounded-lg bg-[#4b3046] px-4 py-2 text-[10px] font-semibold text-white">Review details</span><span className="rounded-lg border border-[#e7d1d9] px-4 py-2 text-[10px] text-[#755a68]">Not now</span></div>
        </div>
      </div>
    );
  }
  return (
    <div aria-hidden="true" className="relative flex h-[285px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#101a43] via-[#1a3060] to-[#0d4e58] sm:h-[315px]">
      <div className="absolute -right-8 -top-20 h-64 w-64 rounded-full bg-[#6b84ff]/25 blur-3xl"/>
      <div className="absolute left-7 top-6 font-display text-[15px] font-bold text-white">oya<span className="text-[#70e1e1]">check</span></div>
      <div className="absolute right-7 top-7 font-mono text-[10px] text-white/70">LINK SAFETY</div>
      <div className="relative mt-9 w-[79%] max-w-[330px] rotate-[3deg] rounded-2xl border border-[#637faa]/35 bg-[#101f3b] p-5 shadow-[0_24px_50px_rgba(0,0,0,.35)] transition-transform duration-500 group-hover:rotate-0">
        <div className="flex items-center gap-2 rounded-lg border border-[#526386] bg-[#1d3153] px-3 py-3">
          <div className="h-2.5 w-2.5 rounded-full bg-[#72d7dd]"/>
          <span className="font-mono text-[10px] text-[#c4d8ed]">example-link.test</span>
          <span className="ml-auto text-[#78e3dc]">↗</span>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <span className="font-display text-xl font-semibold text-white">Know the signs.</span>
          <span className="rounded-full border border-[#f4be82]/35 bg-[#d59f69]/10 px-2 py-1 text-[9px] text-[#f8cf9a]">Review advised</span>
        </div>
        <div className="mt-5 flex items-center gap-2"><span className="h-1.5 w-12 rounded-full bg-[#80d8ce]"/><span className="h-1.5 w-20 rounded-full bg-[#5978a5]"/><span className="h-1.5 w-10 rounded-full bg-[#5978a5]"/></div>
        <p className="mt-3 text-[10px] text-[#a9c2db]">Clear explanations, in English & Pidgin</p>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="border-y border-line/70 bg-[#0d111a]/70 py-24 sm:py-32">
      <div className="container-shell">
        <Reveal>
          <div className="mb-12 flex flex-col justify-between gap-6 border-b border-line pb-8 md:flex-row md:items-end">
            <div>
              <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.2em] text-cyan"><span className="h-px w-8 bg-cyan"/>Selected projects / 2026</p>
              <h2 className="font-display text-4xl leading-[1.08] tracking-[-.055em] text-cloud sm:text-6xl">Ideas turned <span className="text-gradient">into products.</span></h2>
            </div>
            <p className="max-w-xs text-sm leading-7 text-muted">A few things I&apos;ve built, tested, and learned from. Open the live sites or inspect the code.</p>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={(index % 2) * .07}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[#29374c] bg-[#131b29] shadow-[0_16px_50px_rgba(0,0,0,.12)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#4c6582] hover:shadow-[0_24px_60px_rgba(0,0,0,.25)]">
                <ProjectCover id={project.id} />
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[.19em] text-cyan">{project.eyebrow}</p>
                    <span className="font-mono text-[11px] text-slate-500">{project.number} / 04</span>
                  </div>
                  <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-.045em] text-cloud">{project.name}</h3>
                  <p className="mt-2 text-base font-medium text-slate-200">{project.short}</p>
                  <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map(tech => <span key={tech} className="rounded-full border border-[#334258] px-3 py-1.5 text-[11px] text-[#afbed3]">{tech}</span>)}
                  </div>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-line/80 pt-6">
                    <a href={project.live} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-cyan">View project <FiArrowUpRight size={17}/></a>
                    <a href={project.github} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-cloud"><FiGithub size={17}/> Source code</a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-xs text-slate-500">Project artwork is illustrative. The links above open the actual products and repositories.</p>
      </div>
    </section>
  );
}
