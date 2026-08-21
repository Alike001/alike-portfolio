"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiBookOpen } from "react-icons/fi";
import Reveal from "./Reveal";

const articles = [
  ["The Internet of Blockchains", "Understanding multichain systems and why they matter for Web3.", "https://medium.com/@hammedoye10"],
  ["The Evolution of Ethereum", "A journey from Frontier to Serenity and the ideas that moved the network forward.", "https://medium.com/@hammedoye10"],
  ["Understanding EIPs and ERC-7730", "A practical introduction to Ethereum Improvement Proposals and one newer standard.", "https://medium.com/@hammedoye10"]
];

export default function Writing() {
  return (
    <section id="writing" className="py-32 sm:py-40 lg:py-48">
      <div className="container-shell">
        <Reveal><div className="mb-14 flex flex-col justify-between gap-8 border-b border-line/80 pb-8 sm:flex-row sm:items-end"><div><div className="mb-7 flex items-center gap-3 text-xs uppercase tracking-[.23em] text-cyan"><span className="h-px w-9 bg-cyan" />Writing & learning in public</div><h2 className="max-w-xl font-display text-4xl leading-[.98] tracking-[-.05em] text-cloud sm:text-6xl">Notes from the <span className="text-gradient">workbench.</span></h2></div><p className="max-w-xs text-sm leading-7 text-muted">I write to make sense of the systems I am learning and leave a trail for the next builder.</p></div></Reveal>
        <div className="grid gap-5 lg:grid-cols-3">
          {articles.map(([title, description, href], index) => (
            <Reveal key={title} delay={index * .07}>
              <motion.a href={href} target="_blank" rel="noreferrer" whileHover={{ y: -6 }} className="group flex min-h-[280px] flex-col rounded-[1.6rem] border border-line bg-card/55 p-6 transition-colors hover:border-cyan/50 sm:p-7"><div className="flex items-start justify-between"><span className="grid h-10 w-10 place-items-center rounded-full border border-line bg-ink text-cyan"><FiBookOpen size={16} /></span><FiArrowUpRight className="text-muted transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan" /></div><div className="mt-auto"><p className="mb-4 text-[10px] uppercase tracking-[.18em] text-muted">Medium · Hammedoye</p><h3 className="font-display text-2xl leading-tight tracking-[-.03em] text-cloud">{title}</h3><p className="mt-4 text-sm leading-6 text-muted">{description}</p></div></motion.a>
            </Reveal>
          ))}
        </div>
        <Reveal delay={.18}><div className="mt-8 text-center"><a href="https://medium.com/@hammedoye10" target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-3 rounded-full border border-line bg-card px-5 py-3.5 text-sm font-semibold text-cloud transition-all hover:-translate-y-1 hover:border-cyan/60">Read all articles on Medium <FiArrowUpRight className="text-cyan" /></a></div></Reveal>
      </div>
    </section>
  );
}
