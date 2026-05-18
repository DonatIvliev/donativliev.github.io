import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { operatingSteps } from "@/data/site";

const OperatingSystem = () => {
  return (
    <section className="py-20 md:py-28 bg-navy-deep text-primary-foreground relative overflow-hidden" aria-labelledby="os-heading">
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      <div className="container mx-auto px-6 max-w-screen-content relative">
        <AnimatedSection className="max-w-2xl mb-14">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">My Operating System</p>
          <h2 id="os-heading" className="text-3xl md:text-4xl font-bold mb-4">The way I approach ambiguous work.</h2>
          <p className="text-primary-foreground/70 leading-relaxed">
            Across product projects, student leadership, emerging technology support, and business analysis work, I use the same rhythm:
            clarify the problem, structure the work, build the artifact, coordinate execution, and improve the next cycle.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* connecting line */}
          <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {operatingSteps.map((s, i) => (
              <AnimatedSection key={s.step} delay={i * 100} animation="fade-up">
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 grid place-items-center mb-4 backdrop-blur-sm">
                    <span className="text-accent font-bold text-sm">{s.step}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{s.label}</h3>
                  <p className="text-sm text-primary-foreground/65 leading-relaxed">{s.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection delay={500} className="mt-16 max-w-2xl">
          <blockquote className="border-l-2 border-accent pl-5 text-lg md:text-xl font-medium text-primary-foreground/90 italic leading-relaxed">
            "I don't just participate in projects. I try to build the operating rhythm that helps them move."
          </blockquote>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default OperatingSystem;
