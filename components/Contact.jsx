"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiBookOpen, FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";
import Reveal from "./Reveal";

const links = [
  ["GitHub", "https://github.com/Alike001", FiGithub],
  ["X", "https://x.com/IamAlikeX", FiTwitter],
  ["LinkedIn", "https://www.linkedin.com/in/ali-hammed-9b5347255/", FiLinkedin],
  ["Medium", "https://medium.com/@hammedoye10", FiBookOpen]
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line/50 py-32 sm:py-40 lg:py-48">
      <div className="absolute left-1/2 top-1/2 h-[28rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo/10 blur-[120px]" />
      <div className="container-shell relative text-center"><Reveal><div className="mx-auto max-w-4xl"><div className="mb-8 flex items-center justify-center gap-3 text-xs uppercase tracking-[.23em] text-cyan"><span className="h-px w-9 bg-cyan" />Open to the next build</div><h2 className="font-display text-5xl leading-[.92] tracking-[-.06em] text-gradient sm:text-7xl lg:text-8xl">Let&apos;s build<br />together.</h2><p className="mx-auto mt-8 max-w-lg text-base leading-8 text-muted">Open to software engineering, technical evaluation, open-source collaboration and Web3 opportunities.</p><a href="mailto:hammedoye10@gmail.com" className="focus-ring group mt-10 inline-flex items-center gap-3 rounded-full bg-cloud px-6 py-4 text-sm font-semibold text-ink transition-transform hover:-translate-y-1">hammedoye10@gmail.com <FiMail className="transition-transform group-hover:translate-x-1" /></a></div></Reveal><Reveal delay={.15}><div className="mx-auto mt-20 flex max-w-xl flex-wrap justify-center gap-3 border-t border-line/80 pt-8">{links.map(([label, href, Icon]) => <motion.a key={label} whileHover={{ y: -4 }} href={href} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-full border border-line bg-card/50 px-4 py-3 text-xs font-medium text-muted transition-colors hover:border-cyan/50 hover:text-cloud"><Icon className="text-cyan" />{label}<FiArrowUpRight /></motion.a>)}</div></Reveal></div>
    </section>
  );
}
