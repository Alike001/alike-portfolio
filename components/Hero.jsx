import { FiArrowUpRight, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line/70 pt-40 pb-24 sm:pt-48 sm:pb-32">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="container-shell relative grid items-end gap-12 lg:grid-cols-[1.5fr_.5fr]">
        <div className="max-w-4xl">
          <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[.2em] text-cyan">
            <span className="h-px w-8 bg-cyan" />Software & Web3 developer
          </p>
          <h1 className="font-display text-[clamp(3.3rem,7.5vw,7rem)] font-medium leading-[.97] tracking-editorial text-cloud">
            Hammed Ali <span className="text-gradient">Oyeleye.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-muted sm:text-xl">
            I build practical software across payments, blockchain and security.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="focus-ring inline-flex items-center gap-2 rounded-full bg-cloud px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-1">
              Selected work <FiArrowUpRight />
            </a>
            <a href="#contact" className="focus-ring inline-flex items-center gap-2 rounded-full border border-line bg-card px-6 py-3 text-sm font-semibold text-cloud transition-colors hover:border-cyan/50">
              Contact me
            </a>
          </div>
        </div>
        <div className="flex gap-3 lg:justify-end">
          <a href="https://github.com/Alike001" target="_blank" rel="noreferrer" aria-label="GitHub" className="focus-ring grid h-12 w-12 place-items-center rounded-full border border-line bg-card/80 text-cloud transition-colors hover:border-cyan/50 hover:text-cyan"><FiGithub size={20} /></a>
          <a href="https://www.linkedin.com/in/ali-hammed-9b5347255/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="focus-ring grid h-12 w-12 place-items-center rounded-full border border-line bg-card/80 text-cloud transition-colors hover:border-cyan/50 hover:text-cyan"><FiLinkedin size={20} /></a>
        </div>
      </div>
    </section>
  );
}
