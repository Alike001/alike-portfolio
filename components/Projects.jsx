import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects } from "../data/projects";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="border-y border-line/70 bg-card/20 py-20 sm:py-28">
      <div className="container-shell">
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[.22em] text-cyan">Selected work</p>
              <h2 className="font-display text-4xl tracking-[-.05em] text-cloud sm:text-5xl">Projects worth exploring.</h2>
            </div>
            <a className="focus-ring inline-flex items-center gap-2 text-sm text-muted hover:text-cyan" href="https://github.com/Alike001" target="_blank" rel="noreferrer">More on GitHub <FiArrowUpRight /></a>
          </div>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * .04}>
              <article className="flex h-full flex-col rounded-[1.5rem] border border-line bg-card/65 p-6 transition-colors hover:border-cyan/40 sm:p-7">
                <p className="text-[11px] uppercase tracking-[.16em] text-cyan">{project.category}</p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-2xl text-cloud sm:text-3xl">{project.name}</h3>
                  {project.team && <span className="rounded-full border border-line px-2 py-1 text-[10px] text-muted">Team project</span>}
                </div>
                <p className="mt-4 text-sm leading-7 text-muted">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => <span key={item} className="text-xs text-muted">{item}{item !== project.tech[project.tech.length - 1] ? " ·" : ""}</span>)}
                </div>
                <div className="mt-auto flex flex-wrap gap-6 border-t border-line/80 pt-5 text-sm">
                  <a href={project.live} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 font-medium text-cloud hover:text-cyan">View project <FiArrowUpRight /></a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 text-muted hover:text-cyan"><FiGithub /> Source</a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
