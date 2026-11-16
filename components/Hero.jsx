"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiArrowDownRight, FiArrowUpRight, FiBookOpen, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const roles = ["Software Developer", "Web3 Engineer", "Open-source Contributor", "Builder from Nigeria"];
const socials = [
  ["GitHub", "https://github.com/Alike001", FiGithub],
  ["X", "https://x.com/IamAlikeX", FiTwitter],
  ["LinkedIn", "https://www.linkedin.com/in/ali-hammed-9b5347255/", FiLinkedin],
  ["Medium", "https://medium.com/@hammedoye10", FiBookOpen]
];

function NodeField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animationFrame;
    let nodes = [];

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * ratio;
      canvas.height = canvas.clientHeight * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = Math.min(42, Math.max(18, Math.floor(canvas.clientWidth / 28)));
      nodes = Array.from({ length: count }, (_, index) => ({
        x: (index * 83 + 28) % canvas.clientWidth,
        y: (index * 137 + 42) % canvas.clientHeight,
        vx: (index % 2 ? -1 : 1) * (0.04 + (index % 4) * 0.012),
        vy: (index % 3 ? 1 : -1) * (0.035 + (index % 5) * 0.01),
        r: index % 7 === 0 ? 2.4 : 1.4
      }));
    };

    const draw = () => {
      context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      nodes.forEach((node, index) => {
        if (!reducedMotion) {
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < -12 || node.x > width + 12) node.vx *= -1;
          if (node.y < -12 || node.y > height + 12) node.vy *= -1;
        }
        for (let nextIndex = index + 1; nextIndex < nodes.length; nextIndex += 1) {
          const next = nodes[nextIndex];
          const distance = Math.hypot(node.x - next.x, node.y - next.y);
          if (distance < 132) {
            context.beginPath();
            context.moveTo(node.x, node.y);
            context.lineTo(next.x, next.y);
            context.strokeStyle = `rgba(99, 102, 241, ${0.13 * (1 - distance / 132)})`;
            context.lineWidth = 1;
            context.stroke();
          }
        }
        context.beginPath();
        context.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        context.fillStyle = index % 7 === 0 ? "rgba(103, 232, 249, .82)" : "rgba(165, 180, 252, .52)";
        context.fill();
      });
      if (!reducedMotion) animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full opacity-80" aria-hidden="true" />;
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => setRoleIndex((index) => (index + 1) % roles.length), 2500);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="top" className="relative flex min-h-[760px] items-center overflow-hidden border-b border-line/60 pt-28 sm:min-h-[820px] lg:min-h-[900px] lg:pt-32">
      <div className="hero-grid absolute inset-0 opacity-80" />
      <div className="absolute -right-40 top-20 h-[34rem] w-[34rem] rounded-full bg-indigo/10 blur-[120px]" />
      <div className="absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-cyan/[0.08] blur-[130px]" />
      <NodeField />
      <div className="relative z-10 container-shell grid w-full items-end gap-12 pb-24 lg:grid-cols-[1.15fr_.85fr] lg:gap-16 lg:pb-32">
        <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-cyan">
            <span className="h-px w-10 bg-cyan" />
            <AnimatePresence mode="wait">
              <motion.span key={roles[roleIndex]} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .3 }}>{roles[roleIndex]}</motion.span>
            </AnimatePresence>
          </motion.div>
          <motion.h1 variants={{ hidden: { opacity: 0, y: 26 }, visible: { opacity: 1, y: 0 } }} className="w-full max-w-6xl font-display text-[clamp(3.25rem,7vw,7.4rem)] font-medium leading-[.91] tracking-editorial text-cloud">
            Hammed Ali <span className="text-gradient">Oyeleye</span>
          </motion.h1>
          <motion.div variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} className="mt-8 flex items-end justify-between gap-6 border-t border-line/80 pt-5 sm:mt-10">
            <p className="max-w-md text-base leading-7 text-muted sm:text-lg sm:leading-8">Physics graduate building dependable software, payment workflows and verifiable systems.</p>
            <div className="hidden text-right sm:block"><p className="font-display text-2xl font-medium text-cloud">Alike</p><p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted">Building in public</p></div>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="focus-ring group inline-flex items-center gap-3 rounded-full bg-cloud px-5 py-3.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-1">View my work <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
            <a href="#contact" className="focus-ring group inline-flex items-center gap-3 rounded-full border border-line bg-card/50 px-5 py-3.5 text-sm font-semibold text-cloud transition-all hover:-translate-y-1 hover:border-cyan/60 hover:bg-card">Get in touch <FiArrowDownRight className="text-cyan transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" /></a>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .65, duration: .8 }} className="relative lg:pb-2">
          <div className="absolute -left-5 top-8 hidden h-px w-16 bg-gradient-to-r from-transparent to-cyan/70 lg:block" />
          <div className="rounded-[2rem] border border-line/80 bg-card/65 p-5 shadow-aura backdrop-blur-md sm:p-7">
            <div className="mb-8 flex items-center justify-between border-b border-line/80 pb-4 text-[10px] uppercase tracking-[0.2em] text-muted"><span>Selected focus</span><span className="flex items-center gap-2 text-cyan"><i className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" /> Nigeria</span></div>
            <p className="font-display text-2xl leading-tight tracking-tight text-cloud sm:text-3xl">I build, test and ship practical tools across payments, blockchain and digital safety.</p>
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
              <div className="bg-ink/70 p-4"><p className="text-[10px] uppercase tracking-[0.18em] text-muted">Program</p><p className="mt-3 font-display text-lg text-cloud">Web3Bridge XV</p></div>
              <div className="bg-ink/70 p-4"><p className="text-[10px] uppercase tracking-[0.18em] text-muted">Focus</p><p className="mt-3 font-display text-lg text-cloud">Full stack + Web3</p></div>
            </div>
          </div>
          <div className="mt-5 flex items-center justify-between">
            <div className="flex gap-2">
              {socials.map(([label, url, Icon]) => <a key={label} href={url} target="_blank" rel="noreferrer" aria-label={label} className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-line bg-card/60 text-muted transition-all hover:border-cyan/70 hover:text-cyan"><Icon size={16} /></a>)}
            </div>
            <a href="#about" className="focus-ring hidden items-center gap-2 text-xs uppercase tracking-[0.17em] text-muted transition-colors hover:text-cloud sm:flex">Scroll to explore <FiArrowDownRight className="text-cyan" /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
