import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Cpu, Sparkles, Database, BookOpen, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const tags = [
  { icon: Sparkles, label: "Emerging Technology" },
  { icon: BookOpen, label: "Business Research" },
  { icon: Database, label: "Data Platforms" },
  { icon: Cpu, label: "AI / VR / 3D Exposure" },
  { icon: Users, label: "Student Support" },
];

const CurrentRoleBridge = () => {
  return (
    <section className="py-20 md:py-24 bg-secondary/50" aria-labelledby="current-role-heading">
      <div className="container mx-auto px-6 max-w-screen-content">
        <AnimatedSection className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">Current Role</p>
          <h2 id="current-role-heading" className="text-3xl md:text-4xl font-bold text-foreground max-w-2xl">
            Working inside a university environment where business research, data, innovation, and emerging technology meet.
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="fade-up">
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-md grid lg:grid-cols-[1.5fr_1fr]">
            {/* Left content */}
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Active position
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">Emerging Technology Assistant</h3>
              <p className="text-base text-navy-pro font-medium mb-6">The BRIDGE, University of Toronto Scarborough</p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                The BRIDGE is a joint venture between UTSC's Department of Management and the U of T Scarborough Library.
                It's where business, research, and innovation converge — supporting students through business research resources,
                data-oriented learning, collaboration, entrepreneurship, and work-integrated learning.
              </p>

              <ul className="space-y-3 mb-6">
                {[
                  "Supported student-facing access to business research and emerging technology resources within The BRIDGE.",
                  "Assisted with applied technology programming connected to AI tools, VR, 3D tools, data platforms, and business databases.",
                  "Helped connect students with tools and learning experiences that bridge academic theory and practical business technology.",
                  "Contributed to a work-integrated learning environment linking UTSC Management, the Library, and student development.",
                ].map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-foreground/85 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {["Capital IQ", "Bloomberg Terminal Exposure", "Power BI", "Microsoft Copilot", "AI Tools", "VR / 3D Exposure", "Innovation Programming"].map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium border border-border">
                    {t}
                  </span>
                ))}
              </div>

              <Link to="/experience#bridge" className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm hover:gap-2.5 transition-all">
                Read full role details <ArrowRight size={14} />
              </Link>
            </div>

            {/* Right visual */}
            <div className="bg-gradient-navy relative overflow-hidden p-8 md:p-10 flex flex-col justify-between text-primary-foreground min-h-[320px]">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "radial-gradient(circle at 1px 1px, hsl(0 0% 100% / 0.5) 1px, transparent 0)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="relative">
                <div className="inline-flex p-3 rounded-xl bg-accent/15 border border-accent/25 mb-5">
                  <Cpu className="w-7 h-7 text-accent" />
                </div>
                <p className="text-sm text-primary-foreground/70 mb-1">Where work happens</p>
                <p className="text-xl font-bold leading-tight mb-1">The BRIDGE</p>
                <p className="text-sm text-primary-foreground/60">UTSC Library × Department of Management</p>
              </div>

              <div className="relative grid grid-cols-1 gap-2.5 mt-6">
                {tags.map((t) => (
                  <div key={t.label} className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/15 backdrop-blur-sm">
                    <t.icon className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm font-medium">{t.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CurrentRoleBridge;
