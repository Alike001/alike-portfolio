"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const links = [
  ["About", "about"],
  ["Journey", "journey"],
  ["Skills", "skills"],
  ["Work", "projects"],
  ["Writing", "writing"]
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    let lastScroll = window.scrollY;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setHidden(currentScroll > lastScroll && currentScroll > 100);
      lastScroll = currentScroll;
    };
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-18% 0px -64% 0px", threshold: [0.1, 0.35, 0.65] }
    );
    links.forEach(([, id]) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: hidden ? -110 : 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between rounded-full border border-line/80 bg-ink/75 px-3 py-2.5 shadow-aura backdrop-blur-xl sm:px-4">
        <button onClick={() => goTo("top")} className="focus-ring group flex items-center gap-2 rounded-full px-2 py-1" aria-label="Go to top">
          <span className="relative grid h-8 w-8 place-items-center overflow-hidden rounded-full border border-cyan/50 bg-cyan/10 font-display text-sm font-bold text-cyan">
            A
            <span className="absolute inset-x-1 bottom-1 h-px bg-cyan/60 transition-transform duration-300 group-hover:scale-x-50" />
          </span>
          <span className="font-display text-sm font-semibold tracking-tight text-cloud">Alike<span className="text-cyan">.</span></span>
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {links.map(([label, id]) => (
            <button
              key={id}
              onClick={() => goTo(id)}
              className={`focus-ring relative rounded-full px-3 py-2 text-[11px] font-medium uppercase tracking-[0.16em] transition-colors ${active === id ? "text-cloud" : "text-muted hover:text-cloud"}`}
            >
              {label}
              {active === id && <motion.span layoutId="active-nav" className="absolute inset-x-3 -bottom-0.5 h-px bg-cyan" />}
            </button>
          ))}
        </nav>

        <button onClick={() => goTo("contact")} className="focus-ring hidden items-center gap-2 rounded-full bg-cloud px-4 py-2 text-xs font-semibold text-ink transition-transform hover:-translate-y-0.5 sm:flex">
          Collaborate <FiArrowUpRight aria-hidden="true" />
        </button>

        <button onClick={() => setMenuOpen((value) => !value)} className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-line text-cloud md:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -12, height: 0 }}
            className="mx-auto mt-2 max-w-[1240px] overflow-hidden rounded-[1.5rem] border border-line bg-card/95 p-3 shadow-aura backdrop-blur-xl md:hidden"
            aria-label="Mobile navigation"
          >
            {links.map(([label, id], index) => (
              <motion.button
                key={id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.04 }}
                onClick={() => goTo(id)}
                className={`flex w-full items-center justify-between border-b border-line/70 px-3 py-4 text-left font-display text-xl last:border-0 ${active === id ? "text-cyan" : "text-cloud"}`}
              >
                {label}
                <FiArrowUpRight size={18} />
              </motion.button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
