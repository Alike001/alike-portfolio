"use client";

import { motion } from "framer-motion";
import { journey } from "../data/journey";
import Reveal from "./Reveal";

export default function Journey() {
  return (
    <section id="journey" className="border-y border-line/50 bg-card/20 py-32 sm:py-40 lg:py-48">
      <div className="container-shell">
        <div className="grid gap-14 lg:grid-cols-[.55fr_1.45fr] lg:gap-24">
          <Reveal direction="left" className="lg:sticky lg:top-32 lg:self-start">
            <div className="max-w-sm"><div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[.23em] text-cyan"><span className="h-px w-9 bg-cyan" />The path so far</div><h2 className="font-display text-4xl leading-[.98] tracking-[-.05em] text-cloud sm:text-6xl">Small steps.<br /><span className="text-gradient">Real momentum.</span></h2><p className="mt-7 max-w-xs text-sm leading-7 text-muted">A timeline of the decisions, programs, and experiments shaping my engineering practice.</p></div>
          </Reveal>
          <div className="relative">
            <div className="absolute bottom-5 left-[7px] top-5 w-px bg-gradient-to-b from-cyan/70 via-indigo/45 to-transparent sm:left-1/2 sm:-translate-x-1/2" />
            <div className="space-y-12 sm:space-y-0">
              {journey.map((item, index) => {
                const right = index % 2 === 1;
                return (
                  <Reveal key={item.date} delay={index * .05} direction={right ? "right" : "left"} className="relative sm:grid sm:min-h-[165px] sm:grid-cols-[minmax(0,1fr)_2rem_minmax(0,1fr)] sm:items-start">
                    <span className="absolute left-0 top-1.5 z-10 h-4 w-4 rounded-full border-4 border-ink bg-cyan shadow-cyan sm:left-1/2 sm:-translate-x-1/2" />
                    <motion.article whileHover={{ y: -4 }} className={`relative w-full pl-9 sm:row-start-1 sm:pl-0 ${right ? "sm:col-start-3 sm:text-left" : "sm:col-start-1 sm:text-right"}`}>
                      <p className="mb-3 text-[11px] uppercase tracking-[.2em] text-cyan">{item.date}</p>
                      <h3 className="font-display text-xl tracking-tight text-cloud">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted">{item.detail}</p>
                    </motion.article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
