import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { site, education, recognition, languages, skillGroups } from "@/data/site";
import headshot from "@/assets/headshot.jpg";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-6 max-w-screen-content">
          <AnimatedSection className="grid md:grid-cols-[1fr_auto] gap-10 items-start border-b border-border pb-12 mb-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">About</p>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
                From studying technology to delivering it inside the enterprise.
              </h1>
              <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl">
                <p>
                  I started in technical and software study, moved into Management &amp; Information Technology, and
                  now spend my time where business intent becomes delivered work — requirements, trackers, pilots,
                  models, and the documentation that keeps a team aligned.
                </p>
                <p>
                  At RBC I support project delivery for a data talent program and build tooling that removes repetitive
                  work. At U of T Scarborough I pilot emerging technology with faculty and students, then write the
                  procedure that lets someone else repeat it. With the Management &amp; Technology Association I keep
                  operations and finances transparent enough to trust.
                </p>
                <p>
                  I care most about work that can be pointed at afterwards: a program that ran, a model that held up, a
                  process that outlived me.
                </p>
              </div>
              <div className="mt-7">
                <Button variant="hero" asChild>
                  <a href={site.resume} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <FileText size={16} /> Resume
                  </a>
                </Button>
              </div>
            </div>
            <img
              src={headshot}
              alt="Donat Ivliev, Project Delivery Specialist Intern at RBC"
              className="w-40 h-40 md:w-48 md:h-48 rounded-2xl object-cover border border-border shadow-md"
              loading="lazy"
            />
          </AnimatedSection>

          <AnimatedSection className="grid md:grid-cols-2 gap-10 mb-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">Education</p>
              <h2 className="text-xl font-bold text-foreground leading-snug">{education.degree}</h2>
              <p className="text-sm text-navy-pro font-medium mt-1">{education.school}</p>
              <p className="text-sm text-muted-foreground mt-1">{education.period}</p>
              <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mt-6 mb-2">Coursework</p>
              <p className="text-sm text-foreground/85">{education.coursework.join(" · ")}</p>
              <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mt-5 mb-2">Certifications</p>
              <div className="flex flex-wrap gap-1.5">
                {education.certifications.map((c) => (
                  <span key={c} className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">Recognition</p>
              <ul className="space-y-4">
                {recognition.map((r) => (
                  <li key={r.title} className="border-l-2 border-accent/40 pl-4">
                    <p className="font-semibold text-foreground">{r.title}</p>
                    <p className="text-sm text-muted-foreground">{r.detail}</p>
                  </li>
                ))}
              </ul>

              <p className="text-xs font-semibold uppercase tracking-wider text-accent mt-8 mb-3">Languages</p>
              <ul className="space-y-2">
                {languages.map((l) => (
                  <li key={l.name} className="flex items-center gap-3 text-sm text-foreground/85">
                    <span aria-hidden className="text-base">{l.flag}</span>
                    <span className="font-medium">{l.name}</span>
                    <span className="text-muted-foreground">— {l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-5">Toolkit</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {skillGroups.map((g) => (
                <div key={g.title} className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">{g.title}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {g.items.map((i) => (
                      <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border">
                        {i}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
