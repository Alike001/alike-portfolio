"use client";

import { FiArrowUpRight } from "react-icons/fi";

const nav = [["About", "about"], ["Work", "projects"], ["Recognition", "recognition"], ["Contact", "contact"]];

export default function Footer() {
  return (
    <footer className="border-t border-line/70 bg-card/25 py-8">
      <div className="container-shell flex flex-col gap-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between"><p>Built by Hammed Ali — Alike <span className="text-cyan">© {new Date().getFullYear()}</span></p><nav className="flex flex-wrap items-center gap-5" aria-label="Footer navigation">{nav.map(([label, id]) => <a key={id} href={`#${id}`} className="focus-ring transition-colors hover:text-cloud">{label}</a>)}<a href="mailto:hammedoye10@gmail.com" className="focus-ring inline-flex items-center gap-1 text-cloud">Say hello <FiArrowUpRight className="text-cyan" /></a></nav></div>
    </footer>
  );
}
