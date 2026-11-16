"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiAward, FiBookOpen, FiGitBranch } from "react-icons/fi";
import Reveal from "./Reveal";

const stats = [
  ["1", "Zcash team finish", FiAward, "st"],
  ["3", "HSK team finish", FiAward, "rd"],
  ["3", "Upstream PRs merged", FiGitBranch, ""],
  ["16", "Solidity training", FiBookOpen, " weeks"]
];

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return undefined;
    const target = Number(value);
    const duration = 900;
    const started = performance.now();
    let frame;
    const update = (now) => {
      const progress = Math.min((now - started) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-32 sm:py-40 lg:py-48">
      <div className="container-shell">
        <div className="grid gap-16 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
          <Reveal direction="left">
            <div className="relative mx-auto max-w-[330px] lg:mx-0">
              <div className="absolute -inset-5 rounded-[2.2rem] border border-cyan/20" />
              <div className="absolute -inset-10 rounded-[2.8rem] border border-indigo/15" />
              <div className="relative aspect-[.86] overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-indigo/35 via-card to-cyan/20 p-3 shadow-aura">
                <div className="relative flex h-full items-end overflow-hidden rounded-[1.45rem] border border-white/10 bg-ink/60 p-6">
                  <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "radial-gradient(circle at 55% 30%, rgba(103,232,249,.28), transparent 26%), linear-gradient(145deg, transparent 42%, rgba(99,102,241,.2) 43%, transparent 44%)" }} />
                  <div className="relative z-10"><div className="font-display text-[8rem] font-medium leading-none tracking-[-.12em] text-gradient">A</div><p className="mt-3 text-xs uppercase tracking-[.22em] text-muted">Physics → Protocols</p></div>
                  <div className="absolute right-6 top-6 h-12 w-12 rounded-full border border-cyan/40 bg-cyan/10" />
                  <div className="absolute right-9 top-9 h-6 w-6 rounded-full border border-cyan/60" />
                </div>
              </div>
              <p className="mt-7 text-center text-xs uppercase tracking-[.2em] text-muted lg:text-left">Nigeria · Building openly</p>
            </div>
          </Reveal>

          <Reveal delay={.08}>
            <div className="max-w-3xl">
              <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[.23em] text-cyan"><span className="h-px w-9 bg-cyan" />A deliberate transition</div>
              <h2 className="max-w-2xl font-display text-4xl leading-[.98] tracking-[-.045em] text-cloud sm:text-6xl">I am learning to make the complicated feel <span className="text-gradient">clear.</span></h2>
              <div className="mt-9 space-y-5 text-[15px] leading-8 text-muted sm:text-base">
                <p>I graduated from Lagos State University with a BSc in Physics (Second Class Upper) in October 2025. After studying blockchain fundamentals and Solidity through Cyfrin, I committed to learning how production software is designed, tested and maintained.</p>
                <p>I completed Web3Bridge Web2 Advanced Cohort XIV and joined its intensive Solidity Cohort XV. Since then I have shipped team and individual projects involving payment verification, smart contracts, security checks and full-stack workflows. In August 2026, my teams placed first at a Zcash mini hackathon and third in the EAG Hackathon HSK track. I have also merged contributions into Ethereum.org and Erigon.</p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-3 border-t border-line/80 pt-5 sm:grid-cols-4 sm:gap-4">
                {stats.map(([value, label, Icon, suffix], index) => (
                  <motion.div key={label} whileHover={{ y: -5, borderColor: "rgba(6, 182, 212, .45)" }} transition={{ duration: .2 }} className="rounded-2xl border border-line bg-card/45 p-4">
                    <Icon className="mb-6 text-cyan" size={17} />
                    <p className="font-display text-2xl tracking-tight text-cloud"><Counter value={value} suffix={suffix} /></p>
                    <p className="mt-1 text-[10px] uppercase leading-4 tracking-[.12em] text-muted">{label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
