"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiAward, FiGitPullRequest, FiUsers } from "react-icons/fi";
import Reveal from "./Reveal";

const awards = [
  {
    place: "1st",
    title: "Zcash Mini Hackathon",
    category: "In-person · Team",
    date: "August 2026",
    project: "Zecceipt",
    detail: "Built a verifiable payment receipt workflow for transparent Zcash Testnet transactions.",
    url: "https://github.com/Alike001/zecceipt"
  },
  {
    place: "3rd",
    title: "EAG Hackathon · HSK Track",
    category: "In-person · Team",
    date: "August 2026",
    project: "ReserveRail",
    detail: "Built a reserve-backed stablecoin issuance and redemption pilot on HSK Chain.",
    url: "https://github.com/Alike001/reserverail-hsk"
  }
];

const contributions = [
  {
    project: "Ethereum.org",
    title: "Clarify app descriptions",
    url: "https://github.com/ethereum/ethereum-org-website/pull/19742"
  },
  {
    project: "Erigon",
    title: "Improve CLI exit diagnostics",
    url: "https://github.com/erigontech/erigon/pull/26084"
  },
  {
    project: "Erigon",
    title: "Improve Windows CI crash-recovery testing",
    url: "https://github.com/erigontech/erigon/pull/26083"
  }
];

export default function Awards() {
  return (
    <section id="recognition" className="border-b border-line/50 py-32 sm:py-40">
      <div className="container-shell">
        <Reveal>
          <div className="mb-14 flex flex-col justify-between gap-6 border-b border-line/80 pb-8 md:flex-row md:items-end">
            <div>
              <div className="mb-7 flex items-center gap-3 text-xs uppercase tracking-[.23em] text-cyan">
                <span className="h-px w-9 bg-cyan" />Recognition & contribution
              </div>
              <h2 className="font-display text-4xl leading-[.98] tracking-[-.05em] text-cloud sm:text-6xl">
                Work that reached <span className="text-gradient">beyond my laptop.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-muted">
              Two in-person team hackathon placements in August 2026, alongside merged contributions to projects maintained by others.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {awards.map((award, index) => (
            <Reveal key={award.title} delay={index * .08}>
              <motion.article whileHover={{ y: -4 }} className="flex h-full flex-col rounded-[1.6rem] border border-line bg-card/55 p-6 transition-colors hover:border-cyan/40 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[.16em] text-cyan">
                    <FiAward />{award.category}
                  </span>
                  <span className="text-xs text-muted">{award.date}</span>
                </div>
                <div className="mt-8 flex flex-wrap items-end gap-4">
                  <span className="font-display text-6xl font-medium leading-none tracking-[-.08em] text-gradient">{award.place}</span>
                  <div>
                    <h3 className="font-display text-2xl text-cloud">{award.title}</h3>
                    <p className="mt-1 inline-flex items-center gap-2 text-xs text-muted"><FiUsers />Team project · {award.project}</p>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-7 text-muted">{award.detail}</p>
                <a className="focus-ring mt-7 inline-flex items-center gap-2 self-start text-xs font-semibold text-cloud transition-colors hover:text-cyan" href={award.url} target="_blank" rel="noreferrer">
                  Explore {award.project} <FiArrowUpRight />
                </a>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={.12}>
          <div className="mt-8 rounded-[1.6rem] border border-line bg-card/35 p-6 sm:p-8">
            <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
              <h3 className="flex items-center gap-3 font-display text-2xl text-cloud"><FiGitPullRequest className="text-cyan" />Merged open-source contributions</h3>
              <a href="https://github.com/Alike001" target="_blank" rel="noreferrer" className="focus-ring text-xs font-medium text-muted hover:text-cloud">
                GitHub profile <FiArrowUpRight className="inline" />
              </a>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {contributions.map((item) => (
                <a key={item.url} href={item.url} target="_blank" rel="noreferrer" className="focus-ring group flex flex-col gap-2 rounded-xl border border-line bg-ink/55 p-4 transition-colors hover:border-cyan/50">
                  <span className="text-[10px] uppercase tracking-[.16em] text-cyan">{item.project}</span>
                  <span className="flex items-start justify-between gap-2 text-sm leading-6 text-cloud">
                    {item.title}<FiArrowUpRight className="mt-1 shrink-0 text-muted group-hover:text-cyan" />
                  </span>
                  <span className="text-xs text-muted">Merged pull request</span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
