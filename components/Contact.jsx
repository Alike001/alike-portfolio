import { FiArrowUpRight, FiMail } from "react-icons/fi";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line/70 bg-card/20 py-20 sm:py-28">
      <div className="container-shell">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[.22em] text-cyan">Contact</p>
          <h2 className="font-display text-4xl tracking-[-.05em] text-cloud sm:text-5xl">Let's connect.</h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted">Open to software engineering, technical projects and collaboration.</p>
          <a href="mailto:hammedoye10@gmail.com" className="focus-ring mt-7 inline-flex items-center gap-3 rounded-full bg-cloud px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-1">
            <FiMail /> Email me <FiArrowUpRight />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
