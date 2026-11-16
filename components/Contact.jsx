import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line/80 py-24 sm:py-32">
      <div className="container-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-[#506392]/40 bg-gradient-to-br from-[#1c2242] via-[#20224d] to-[#143d51] px-7 py-14 sm:px-12 sm:py-16 lg:px-16">
            <div className="pointer-events-none absolute -right-16 -top-24 h-96 w-96 rounded-full bg-[#5da5ff]/15 blur-[90px]" aria-hidden="true"/>
            <div className="pointer-events-none absolute -bottom-24 left-12 h-80 w-80 rounded-full bg-[#30d6d0]/10 blur-[90px]" aria-hidden="true"/>
            <div className="relative">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[.2em] text-[#8de6ed]">Have something in mind?</p>
              <h2 className="max-w-3xl font-display text-[clamp(2.9rem,6.5vw,5.5rem)] font-medium leading-[1.03] tracking-[-.06em] text-white">
                Good work starts with <span className="text-[#8de6ed]">a conversation.</span>
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-8 text-[#bfcee1] sm:text-base">Open to engineering roles, collaboration, and interesting problems worth solving.</p>
              <a href="mailto:hammedoye10@gmail.com" className="focus-ring mt-9 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#111e2a] transition-transform hover:-translate-y-1">
                <FiMail size={17}/> Get in touch <FiArrowUpRight size={17}/>
              </a>
              <div className="mt-12 flex flex-wrap gap-6 border-t border-white/15 pt-6">
                <a className="focus-ring inline-flex items-center gap-2 text-sm text-[#d3ddef] hover:text-white" href="https://github.com/Alike001" target="_blank" rel="noreferrer"><FiGithub/> GitHub <FiArrowUpRight size={13}/></a>
                <a className="focus-ring inline-flex items-center gap-2 text-sm text-[#d3ddef] hover:text-white" href="https://www.linkedin.com/in/ali-hammed-9b5347255/" target="_blank" rel="noreferrer"><FiLinkedin/> LinkedIn <FiArrowUpRight size={13}/></a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
