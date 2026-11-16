import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "./Reveal";

const skills = ["JavaScript / TypeScript", "React / Next.js", "Node.js", "Solidity / Foundry", "PostgreSQL", "Testing / CI"];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-shell grid gap-12 lg:grid-cols-[.52fr_1fr] lg:gap-24">
        <Reveal>
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[.2em] text-cyan"><span className="h-px w-8 bg-cyan" />A bit about me</div>
          <h2 className="mt-5 font-display text-4xl tracking-[-.055em] text-cloud sm:text-5xl">Curiosity turned <span className="text-gradient">into code.</span></h2>
        </Reveal>
        <Reveal delay={.09}>
          <div>
            <p className="max-w-3xl text-lg leading-9 text-slate-300">
              I&apos;m a Physics graduate from Lagos State University and a Web3Bridge-trained developer. I like solving real problems, making complex workflows easier to use, and checking that the software actually behaves as intended.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {skills.map(skill => <span key={skill} className="rounded-full border border-[#31425b] bg-[#151d2c] px-4 py-2 text-xs font-medium text-slate-200">{skill}</span>)}
            </div>
            <a className="focus-ring mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan transition-colors hover:text-cloud" href="https://github.com/Alike001" target="_blank" rel="noreferrer">
              See what I&apos;m building <FiArrowUpRight />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
