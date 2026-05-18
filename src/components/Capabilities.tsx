import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { skillGroups } from "@/data/site";

const Capabilities = () => {
  return (
    <section className="py-20 md:py-24 bg-background" aria-labelledby="skills-heading">
      <div className="container mx-auto px-6 max-w-screen-content">
        <AnimatedSection className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">Tools I Use to Structure Work</p>
          <h2 id="skills-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            A practical toolkit across product delivery, data, research, and communication.
          </h2>
          <p className="text-muted-foreground">
            Selected tools, methods, and platforms applied across student-led, academic, and product work.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((g, i) => (
            <AnimatedSection key={g.title} delay={i * 80} animation="fade-up">
              <div className="bg-card border border-border rounded-2xl p-6 h-full">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">{g.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((item) => (
                    <span key={item} className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
