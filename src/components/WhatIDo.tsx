const WhatIDo = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            What I Do
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8 rounded-full" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            I bring <span className="text-foreground font-medium">product thinking</span> and{" "}
            <span className="text-foreground font-medium">Agile execution</span> together to 
            deliver structured outcomes. From discovery to delivery, I focus on solving real 
            problems with measurable impact—translating ideas into actionable roadmaps and 
            coordinating cross-functional teams to ship on time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
