"use client";

import { motion } from "framer-motion";
import { FiArrowDownRight, FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const links = [
  { name: "GitHub", href: "https://github.com/Alike001", icon: FiGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ali-hammed-9b5347255/", icon: FiLinkedin },
  { name: "Email", href: "mailto:hammedoye10@gmail.com", icon: FiMail }
];

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 }
};

export default function Hero() {
  return (
    <section id="top" className="hero-surface relative overflow-hidden border-b border-line/70 pt-36 sm:pt-44 lg:pt-48">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-75" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-28 top-64 h-80 w-80 rounded-full bg-indigo/15 blur-[130px]" aria-hidden="true" />
      <div className="pointer-events-none absolute right-0 top-10 h-[28rem] w-[28rem] rounded-full bg-cyan/10 blur-[140px]" aria-hidden="true" />

      <div className="container-shell relative z-10 grid items-center gap-16 pb-20 lg:min-h-[650px] lg:grid-cols-[1.18fr_.82fr] lg:gap-12 lg:pb-28">
        <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.1 }}>
          <motion.p variants={reveal} transition={{ duration: .6 }} className="mb-7 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[.2em] text-cyan">
            <span className="h-px w-9 bg-cyan" /> Hello there, I&apos;m Alike
          </motion.p>
          <motion.h1 variants={reveal} transition={{ duration: .65 }} className="max-w-3xl font-display text-[clamp(3.55rem,6.4vw,6.7rem)] font-medium leading-[.96] tracking-[-.067em] text-cloud">
            I build things <span className="text-gradient">that work.</span>
          </motion.h1>
          <motion.p variants={reveal} transition={{ duration: .65 }} className="mt-7 max-w-xl text-base leading-8 text-muted sm:text-lg">
            I&apos;m <strong className="font-semibold text-cloud">Hammed Ali Oyeleye</strong>, a software and Web3 developer building practical tools for payments, security and the open web.
          </motion.p>
          <motion.div variants={reveal} transition={{ duration: .65 }} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="focus-ring inline-flex items-center gap-3 rounded-full bg-cloud px-6 py-3.5 text-sm font-semibold text-ink transition-transform duration-200 hover:-translate-y-1">
              See selected work <FiArrowUpRight size={16} />
            </a>
            <a href="#contact" className="focus-ring inline-flex items-center gap-3 rounded-full border border-line bg-card/70 px-6 py-3.5 text-sm font-medium text-cloud transition-colors hover:border-cyan/50">
              Let&apos;s talk <FiArrowUpRight size={15} className="text-cyan" />
            </a>
          </motion.div>
          <motion.div variants={reveal} transition={{ duration: .65 }} className="mt-11 flex flex-wrap items-center gap-5 border-t border-line/80 pt-6">
            <span className="text-xs font-medium uppercase tracking-[.16em] text-muted">Find me on</span>
            {links.map(({ name, href, icon: Icon }) => (
              <a key={name} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel={href.startsWith("mailto:") ? undefined : "noreferrer"} aria-label={name}
                className="focus-ring inline-flex items-center gap-2 text-sm text-cloud transition-colors hover:text-cyan">
                <Icon size={17} /> {name}
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20, rotate: -1 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: .9, delay: .2 }} className="relative mx-auto w-full max-w-[530px] lg:mr-0">
          <div className="hero-display absolute -inset-4 rounded-[2.5rem] blur-3xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/[.14] bg-[#111825]/95 p-4 shadow-[0_28px_95px_rgba(0,0,0,.45)] sm:p-6">
            <div className="flex items-center justify-between border-b border-white/[.09] pb-5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#fa7e8b]/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#f6ce65]/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#5cd6b2]/80" />
              </div>
              <span className="font-mono text-[10px] tracking-[.12em] text-slate-400">ALIKE / BUILD LOG</span>
              <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_12px_rgba(6,182,212,.7)]" />
            </div>

            <div className="relative mt-5 overflow-hidden rounded-[1.3rem] border border-cyan/20 bg-[#071a29] p-5 sm:p-7">
              <div className="absolute -right-16 -top-20 h-60 w-60 rounded-full bg-cyan/15 blur-3xl" aria-hidden="true"/>
              <div className="absolute -left-14 bottom-0 h-36 w-36 rounded-full bg-indigo/25 blur-3xl" aria-hidden="true" />
              <div className="relative">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[.16em] text-cyan-200">01 / Zcash</span>
                  <span className="rounded-full border border-emerald-300/25 bg-emerald-300/10 px-2.5 py-1 text-[10px] text-emerald-200">Testnet verified</span>
                </div>
                <div className="mt-6 font-display text-3xl font-semibold tracking-[-.05em] text-white sm:text-4xl">Proof, not<br/>just promises.</div>
                <div className="relative mt-8 ml-auto w-[85%] rounded-xl border border-slate-400/25 bg-[#f5f7fb] p-4 text-[#172638] shadow-2xl">
                  <div className="flex items-center justify-between"><span className="font-mono text-[10px] font-bold tracking-[.2em]">ZECCEIPT</span><span className="text-[10px] text-[#66788b]">RECEIPT / DEMO</span></div>
                  <div className="mt-4 border-t border-slate-300 pt-3">
                    <div className="flex items-center justify-between"><span className="text-xs font-medium">Payment check</span><span className="rounded bg-[#d8f8e8] px-2 py-1 text-[10px] font-semibold text-[#236d52]">Verified</span></div>
                    <div className="mt-4 h-1.5 w-full rounded bg-slate-200"><div className="h-full w-4/5 rounded bg-[#31b7ae]" /></div>
                    <p className="mt-2 font-mono text-[10px] text-[#6b7b89]">Transaction → checks → receipt</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/10 bg-[#1b2034] p-4">
                <p className="font-mono text-[10px] uppercase tracking-[.15em] text-slate-400">Built with</p>
                <p className="mt-2 text-sm font-semibold text-white">Code + tests</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#1b2034] p-4">
                <p className="font-mono text-[10px] uppercase tracking-[.15em] text-slate-400">Contributions</p>
                <p className="mt-2 text-sm font-semibold text-white">Ethereum.org · Erigon</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-4 hidden rounded-xl border border-[#68739b]/35 bg-[#1a2134]/95 px-4 py-3 shadow-2xl sm:block">
            <span className="text-xs font-medium text-[#dcdefe]">2 in-person team podiums</span>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="focus-ring absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[11px] font-medium uppercase tracking-[.19em] text-muted transition-colors hover:text-cyan lg:inline-flex">
        Explore below <FiArrowDownRight />
      </a>
    </section>
  );
}
