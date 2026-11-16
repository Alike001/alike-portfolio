import { FiArrowUpRight, FiAward, FiGitPullRequest } from "react-icons/fi";
import Reveal from "./Reveal";

const awards = [
  { place: "1st place", event: "Zcash Mini Hackathon", project: "Zecceipt", url: "https://github.com/Alike001/zecceipt" },
  { place: "3rd place", event: "EAG Hackathon · HSK track", project: "ReserveRail", url: "https://github.com/Alike001/reserverail-hsk" }
];

export default function Awards() {
  return (
    <section id="recognition" className="py-20 sm:py-28">
      <div className="container-shell">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[.22em] text-cyan">Recognition</p>
          <h2 className="font-display text-4xl tracking-[-.05em] text-cloud sm:text-5xl">A few highlights.</h2>
        </Reveal>
        <div className="mt-9 grid gap-4 md:grid-cols-2">
          {awards.map((award) => (
            <Reveal key={award.place}>
              <a href={award.url} target="_blank" rel="noreferrer" className="focus-ring group block rounded-[1.5rem] border border-line bg-card/60 p-6 transition-colors hover:border-cyan/40">
                <FiAward className="text-cyan" size={19} />
                <p className="mt-5 font-display text-3xl text-cloud">{award.place}</p>
                <p className="mt-2 text-sm font-medium text-cloud">{award.event}</p>
                <p className="mt-2 text-xs text-muted">August 2026 · In-person team award · {award.project} <FiArrowUpRight className="inline" /></p>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal delay={.08}>
          <div className="mt-5 flex flex-wrap items-start gap-4 rounded-2xl border border-line bg-card/30 p-5 sm:items-center">
            <FiGitPullRequest className="mt-1 shrink-0 text-cyan" size={19} />
            <p className="flex-1 text-sm leading-7 text-muted">
              Open source: merged contributions to{" "}
              <a className="text-cloud underline decoration-line underline-offset-4 hover:text-cyan" href="https://github.com/ethereum/ethereum-org-website/pull/19742" target="_blank" rel="noreferrer">Ethereum.org</a>
              {" "}and{" "}
              <a className="text-cloud underline decoration-line underline-offset-4 hover:text-cyan" href="https://github.com/erigontech/erigon/pull/26084" target="_blank" rel="noreferrer">Erigon</a>.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
