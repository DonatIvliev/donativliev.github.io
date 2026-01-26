import { Lightbulb, RotateCcw, BarChart3 } from "lucide-react";

const capabilities = [
  {
    icon: Lightbulb,
    title: "Product",
    description:
      "Discovery, requirements, roadmapping, and user-centric problem solving. I translate business needs into actionable product decisions.",
  },
  {
    icon: RotateCcw,
    title: "Agile Delivery",
    description:
      "Scrum ceremonies, backlog management, sprint planning, and stakeholder alignment. Keeping teams focused and shipping consistently.",
  },
  {
    icon: BarChart3,
    title: "Analysis",
    description:
      "Market research, feasibility studies, and process design. Data-informed decisions that support strategic initiatives.",
  },
];

const Capabilities = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Capabilities
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-accent/30"
            >
              <div className="mb-6">
                <div className="inline-flex p-4 bg-primary rounded-xl group-hover:bg-accent transition-colors duration-300">
                  <cap.icon className="w-7 h-7 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {cap.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
