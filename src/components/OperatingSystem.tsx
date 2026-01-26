import { GraduationCap, Rocket, TrendingUp, Dumbbell, Target, ChevronDown } from "lucide-react";
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
    externalLink: "https://link.blossomsocial.com/7uYa/q5zgvona",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto items-stretch">
          {operatingItems.map((item, index) => {
            const CardContent = (
              <div className="relative h-full">
                {item.link && index === 0 && (
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-accent animate-bounce">
                    <ChevronDown className="w-5 h-5" />
                  </div>
                )}
                <div className={`bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-border h-full min-h-[120px] flex flex-col ${item.link || item.externalLink ? 'cursor-pointer hover:border-accent/50' : ''}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-accent/10 rounded-md flex-shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      {item.label}
                    </span>
                  </div>
                  <p className="text-foreground font-medium text-sm leading-relaxed flex-grow">
                    {item.value}
                  </p>
                </div>
              </div>
            );

            return (
              <AnimatedSection key={index} delay={index * 100} animation="scale" className="h-full">
                {item.link ? (
                  <Link to={item.link} className="block h-full">{CardContent}</Link>
                ) : item.externalLink ? (
                  <a href={item.externalLink} target="_blank" rel="noopener noreferrer" className="block h-full">{CardContent}</a>
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
