import { AnimatedSection } from "@/hooks/useScrollAnimation";

const WhatIDo = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            What I Do
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8 rounded-full" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            From <span className="text-foreground font-medium">discovery to delivery</span>, I focus on solving real problems with measurable impact, by translating ideas into actionable roadmaps and coordinating <span className="text-foreground font-medium">cross-functional teams</span> to ship on time.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WhatIDo;
