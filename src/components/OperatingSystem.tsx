import { GraduationCap, Rocket, TrendingUp, Dumbbell, Target } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

const operatingItems = [
  {
    icon: GraduationCap,
    label: "Studying",
    value: "BBA (Management & IT)",
    link: "/studying",
  },
  {
    icon: Rocket,
    label: "Building",
    value: "Smaked (product + operations)",
    link: "/portfolio",
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
    value: "Fintech TPM",
  },
];

const OperatingSystem = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Operating System <span className="text-muted-foreground font-normal">(Now)</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {operatingItems.map((item, index) => {
            const CardContent = (
              <div className={`bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-border h-full ${item.link ? 'cursor-pointer hover:border-accent/50' : ''}`}>
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
            );

            return (
              <AnimatedSection key={index} delay={index * 100} animation="scale">
                {item.link ? (
                  <Link to={item.link}>{CardContent}</Link>
                ) : (
                  CardContent
                )}
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OperatingSystem;
