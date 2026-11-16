import Reveal from "./Reveal";

const skills = ["JavaScript / TypeScript", "React / Next.js", "Node.js", "Solidity", "Foundry", "PostgreSQL", "Git / GitHub", "Testing"];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-shell grid gap-8 lg:grid-cols-[.4fr_.6fr] lg:gap-20">
        <Reveal>
          <div>
            <p className="mb-4 text-xs uppercase tracking-[.22em] text-cyan">About</p>
            <h2 className="font-display text-4xl tracking-[-.05em] text-cloud sm:text-5xl">A little about me.</h2>
          </div>
        </Reveal>
        <Reveal delay={.06}>
          <div>
            <p className="text-base leading-8 text-muted">
              I am a Physics graduate of Lagos State University (Second Class Upper), trained in software and Solidity development through Web3Bridge. I enjoy turning complex technical problems into straightforward, tested products.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-line bg-card/50 px-3 py-2 text-xs text-cloud">{skill}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
