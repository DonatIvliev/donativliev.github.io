import { Button } from "@/components/ui/button";
import { FileText, Mail, ArrowRight, Briefcase, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import headshot from "@/assets/headshot.jpg";
import { site, proofMetrics } from "@/data/site";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="absolute inset-0 bg-gradient-navy" />
      <div className="absolute inset-0 bg-gradient-glow opacity-80" />
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, hsl(0 0% 100% / 0.4) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-6 max-w-screen-content relative">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
          {/* LEFT */}
          <div className="text-primary-foreground">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/15 backdrop-blur-sm text-xs font-medium text-primary-foreground/85 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              {site.availability}
            </div>

            <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-3">
              {site.role}
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5 leading-[1.05]">
              {site.name}
            </h1>

            <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium mb-5 leading-snug">
              {site.tagline}
            </p>

            <p className="text-[15px] md:text-base text-primary-foreground/70 leading-relaxed max-w-2xl mb-7">
              I turn ambiguous problems into structured workflows, product requirements, dashboards, presentations,
              and execution plans across emerging technology, student leadership, product projects, and business research environments.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {["Product", "Consulting", "Business Analysis", "Agile Delivery", "Emerging Technology"].map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-md bg-primary-foreground/10 border border-primary-foreground/15 text-xs font-medium text-primary-foreground/85">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button variant="accent" size="lg" asChild>
                <Link to="/portfolio" className="flex items-center gap-2">
                  View Portfolio <ArrowRight size={16} />
                </Link>
              </Button>
              <Button variant="navyGhost" size="lg" className="border border-primary-foreground/25" asChild>
                <Link to="/experience">View Experience</Link>
              </Button>
              <Button variant="navyGhost" size="lg" className="border border-primary-foreground/25" asChild>
                <a href={site.resume} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <FileText size={16} /> Resume
                </a>
              </Button>
              <Button variant="navyGhost" size="lg" className="border border-primary-foreground/25" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  <Mail size={16} /> Contact
                </Link>
              </Button>
            </div>
          </div>

          {/* RIGHT — visual */}
          <div className="relative max-w-sm lg:max-w-none mx-auto w-full">
            <div className="relative rounded-2xl overflow-hidden border border-primary-foreground/15 shadow-2xl bg-primary-foreground/5 backdrop-blur-sm">
              <img
                src={headshot}
                alt="Donat Ivliev — Emerging Technology Assistant at The BRIDGE, UTSC"
                className="w-full h-auto aspect-[4/5] object-cover"
                loading="eager"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[hsl(215_80%_8%/0.85)] via-[hsl(215_80%_8%/0.4)] to-transparent p-5">
                <div className="flex items-center gap-2 text-primary-foreground text-xs">
                  <MapPin size={12} className="text-accent" />
                  {site.location}
                </div>
              </div>
            </div>

            {/* Floating role chip */}
            <div className="hidden md:flex absolute -left-6 top-8 items-center gap-3 bg-primary-foreground rounded-xl shadow-xl p-3 pr-4 max-w-[230px]">
              <div className="p-2 rounded-lg bg-accent/10 text-accent">
                <Briefcase size={16} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Current Role</p>
                <p className="text-xs font-semibold text-foreground leading-tight">Emerging Technology Assistant<br />The BRIDGE, UTSC</p>
              </div>
            </div>
          </div>
        </div>

        {/* Proof metrics strip */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-primary-foreground/10 rounded-xl overflow-hidden border border-primary-foreground/15">
          {proofMetrics.map((m) => (
            <div key={m.label} className="bg-[hsl(215_80%_11%/0.6)] backdrop-blur-sm p-4 text-center">
              <p className="text-2xl md:text-3xl font-bold text-accent leading-none">{m.value}</p>
              <p className="text-[11px] uppercase tracking-wider text-primary-foreground/70 font-semibold mt-1.5">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
