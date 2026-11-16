import { FiArrowUpRight, FiAward, FiGitPullRequest } from "react-icons/fi";
import Reveal from "./Reveal";

const achievements = [
  { rank: "01", place: "1st place", event: "Zcash Mini Hackathon", detail: "August 2026 · In person · Team Zecceipt", link: "https://github.com/Alike001/zecceipt" },
  { rank: "02", place: "3rd place", event: "EAG Hackathon / HSK", detail: "August 2026 · In person · Team ReserveRail", link: "https://github.com/Alike001/reserverail-hsk" }
];

export default function Awards() {
  return (
    <section id="recognition" className="py-24 sm:py-32">
      <div className="container-shell">
        <Reveal>
          <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.2em] text-cyan"><span className="h-px w-8 bg-cyan"/>Recognition & open source</p>
              <h2 className="font-display text-4xl tracking-[-.055em] text-cloud sm:text-5xl">A little proof <span className="text-gradient">of the work.</span></h2>
            </div>
            <p className="max-w-xs text-sm leading-7 text-muted">Collaborative wins and contributions to projects beyond my own GitHub.</p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_1fr_.9fr]">
          {achievements.map((item, i) => (
            <Reveal key={item.rank} delay={i * .06}>
              <a href={item.link} target="_blank" rel="noreferrer" className="focus-ring group flex h-full flex-col rounded-[1.5rem] border border-[#314058] bg-[#171e2e] p-6 transition-all hover:-translate-y-1 hover:border-indigo/60">
                <div className="flex items-center justify-between"><FiAward size={20} className="text-cyan"/><span className="font-mono text-[11px] text-muted">{item.rank}</span></div>
                <p className="mt-9 font-display text-3xl font-semibold tracking-[-.06em] text-cloud">{item.place}</p>
                <p className="mt-3 text-sm font-semibold text-cloud">{item.event}</p>
                <p className="mt-2 text-xs leading-6 text-muted">{item.detail}</p>
                <span className="mt-auto inline-flex items-center gap-1 pt-5 text-xs font-semibold text-cyan">Explore project <FiArrowUpRight /></span>
              </a>
            </Reveal>
          ))}
          <Reveal delay={.12}>
            <div className="flex h-full flex-col rounded-[1.5rem] border border-[#314058] bg-[#171e2e] p-6">
              <FiGitPullRequest size={20} className="text-cyan"/>
              <p className="mt-9 font-display text-2xl font-semibold tracking-[-.04em] text-cloud">Merged upstream PRs</p>
              <p className="mt-3 text-sm leading-7 text-muted">Contributions to Ethereum.org and Erigon.</p>
              <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-5">
                <a className="focus-ring inline-flex items-center gap-1 text-xs font-semibold text-cyan hover:text-cloud" href="https://github.com/ethereum/ethereum-org-website/pull/19742" target="_blank" rel="noreferrer">Ethereum.org <FiArrowUpRight/></a>
                <a className="focus-ring inline-flex items-center gap-1 text-xs font-semibold text-cyan hover:text-cloud" href="https://github.com/erigontech/erigon/pull/26084" target="_blank" rel="noreferrer">Erigon <FiArrowUpRight/></a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
