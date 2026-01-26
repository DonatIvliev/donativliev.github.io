import { GraduationCap, Rocket, TrendingUp, Dumbbell, Target } from "lucide-react";

const operatingItems = [
  {
    icon: GraduationCap,
    label: "Studying",
    value: "UTSC BBA (Management & IT), 2028",
  },
  {
    icon: Rocket,
    label: "Building",
    value: "Smaked (product + operations)",
  },
  {
    icon: TrendingUp,
    label: "Learning",
    value: "Markets & investing frameworks",
  },
  {
    icon: Dumbbell,
    label: "Training",
    value: "Basketball & conditioning",
  },
  {
    icon: Target,
    label: "Target",
    value: "Summer 2026 internships",
  },
];

const OperatingSystem = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Operating System <span className="text-muted-foreground font-normal">(Now)</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {operatingItems.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-border"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-accent/10 rounded-md">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  {item.label}
                </span>
              </div>
              <p className="text-foreground font-medium text-sm leading-relaxed">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperatingSystem;
