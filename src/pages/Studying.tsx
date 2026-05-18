import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";
import { Cpu, Users, Briefcase, Trophy, BookOpen, Sparkles } from "lucide-react";
import eclipseAward from "@/assets/eclipse-award.png";
import flipProgram from "@/assets/flip-program.png";
import mtaClub from "@/assets/mta-club.png";

const Studying = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-14 bg-gradient-navy text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-glow opacity-60" />
          <div className="container mx-auto px-6 max-w-screen-content relative">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">Studying, Leadership & Execution</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl leading-tight">
              University as a live operating environment for coordination, leadership, communication, and execution.
            </h1>
            <p className="text-primary-foreground/75 max-w-2xl leading-relaxed mb-8">
              BBA Management & IT @ University of Toronto Scarborough · Emerging Technology Assistant at The BRIDGE.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Emerging Technology Assistant @ The BRIDGE",
                "1st Place — ECLIPSE 2026",
                "20+ initiatives",
                "200+ students",
                "100+ applicants",
                "$5K+ tracking",
                "20+ presentations",
              ].map((t) => (
                <span key={t} className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/15 backdrop-blur-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* BRIDGE Feature */}
        <section className="py-16 md:py-20 bg-navy-deep text-primary-foreground relative overflow-hidden" id="bridge">
          <div className="absolute inset-0 bg-gradient-glow opacity-40" />
          <div className="container mx-auto px-6 max-w-screen-content relative">
            <AnimatedSection>
              <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">Current Role</p>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">The BRIDGE — UTSC Library × Department of Management</h2>
                  <p className="text-base text-primary-foreground/85 leading-relaxed mb-5">
                    A UTSC environment where business, research, innovation, entrepreneurship, advanced training, and work-integrated learning converge.
                    I work as an <strong className="text-accent">Emerging Technology Assistant</strong>, supporting student-facing access to research tools, data platforms, and applied technology experiences.
                  </p>
                  <ul className="space-y-2.5 mb-6">
                    {[
                      "Support emerging technology programming and student-facing learning experiences.",
                      "Help students engage with business research tools, data platforms, and applied technology resources.",
                      "Assist with technology-enabled workshops, demonstrations, and operational support where relevant.",
                      "Contribute to an environment connecting academic theory with practical application.",
                    ].map((b) => (
                      <li key={b} className="flex gap-3 text-sm text-primary-foreground/85 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {["Emerging Technology", "Business Research", "Data Lab", "Innovation", "Entrepreneurship", "AI Tools", "VR / 3D Exposure", "Capital IQ", "Bloomberg Terminal", "Student Support"].map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                    ))}
                  </div>
                </div>
                <div className="bg-primary-foreground/5 rounded-2xl border border-primary-foreground/15 p-6 backdrop-blur-sm">
                  <div className="inline-flex p-3 rounded-xl bg-accent/15 border border-accent/25 mb-4">
                    <Cpu className="w-7 h-7 text-accent" />
                  </div>
                  <p className="text-xs uppercase tracking-wider text-primary-foreground/60 font-semibold mb-1">Position</p>
                  <p className="text-xl font-bold mb-4">Emerging Technology Assistant</p>
                  <div className="space-y-2 text-sm text-primary-foreground/80">
                    <div className="flex items-center gap-2"><Sparkles size={14} className="text-accent" /> Emerging Technology Programming</div>
                    <div className="flex items-center gap-2"><BookOpen size={14} className="text-accent" /> Business Research Support</div>
                    <div className="flex items-center gap-2"><Users size={14} className="text-accent" /> Student-Facing Service</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FLIP */}
        <section className="py-16 md:py-20" id="flip">
          <div className="container mx-auto px-6 max-w-screen-content">
            <AnimatedSection>
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="inline-flex p-2.5 rounded-lg bg-accent/10 text-accent mb-4">
                    <Users className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">FLIP</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">First-Year Learning Integration Program</h2>
                  <p className="text-base text-navy-pro font-medium mb-5">Peer Mentor / Work-Study Student</p>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    FLIP gave me practical experience supporting first-year students, coordinating programming, and helping student-facing initiatives move with structure.
                  </p>
                  <ul className="space-y-2.5 mb-6">
                    {[
                      "Supported large cohorts of first-year students through transition programming.",
                      "Coordinated or contributed to 20+ initiatives across multiple concurrent workstreams.",
                      "Acted as a bridge between students, staff, and administration.",
                      "Supported programming that reached 200+ students.",
                      "Created or supported presentations and student-facing communication materials.",
                    ].map((b) => (
                      <li key={b} className="flex gap-3 text-sm text-foreground/85 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { v: "20+", l: "Initiatives" },
                      { v: "200+", l: "Students" },
                      { v: "20+", l: "Presentations" },
                    ].map((m) => (
                      <div key={m.l} className="bg-secondary rounded-lg p-3 text-center">
                        <p className="text-lg font-bold text-primary">{m.v}</p>
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{m.l}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
                  <img src={flipProgram} alt="FLIP program at UTSC" loading="lazy" className="w-full h-auto" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* MTA */}
        <section className="py-16 md:py-20 bg-secondary/50" id="mta">
          <div className="container mx-auto px-6 max-w-screen-content">
            <AnimatedSection>
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="order-2 lg:order-1 rounded-2xl overflow-hidden border border-border shadow-lg">
                  <img src={mtaClub} alt="Management & Technology Association team" loading="lazy" className="w-full h-auto" />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="inline-flex p-2.5 rounded-lg bg-accent/10 text-accent mb-4">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">MTA · Internal Strategy</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Management & Technology Association</h2>
                  <p className="text-base text-navy-pro font-medium mb-5">Vice President, Internal Strategy</p>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    Internal strategy, recruitment coordination, financial tracking, and operational accountability inside a student-led business and technology organization.
                  </p>
                  <ul className="space-y-2.5 mb-6">
                    {[
                      "Supported internal strategy and operational execution for student-led initiatives.",
                      "Coordinated planning and cross-functional team operations.",
                      "Supported multiple recruitment cycles with 100+ applicants.",
                      "Supported $5K+ budget tracking and reconciliation.",
                      "Helped improve transparency and internal reporting.",
                    ].map((b) => (
                      <li key={b} className="flex gap-3 text-sm text-foreground/85 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { v: "100+", l: "Applicants" },
                      { v: "$5K+", l: "Tracking" },
                      { v: "VP", l: "Internal Strategy" },
                    ].map((m) => (
                      <div key={m.l} className="bg-card border border-border rounded-lg p-3 text-center">
                        <p className="text-lg font-bold text-primary">{m.v}</p>
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{m.l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ECLIPSE */}
        <section className="py-16 md:py-20" id="eclipse">
          <div className="container mx-auto px-6 max-w-screen-content">
            <AnimatedSection>
              <div className="bg-card border-2 border-[hsl(var(--accent-yellow))/0.4] rounded-2xl p-8 md:p-10 grid lg:grid-cols-[1fr_1.3fr] gap-8 items-center shadow-md relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1 bg-award" />
                <div className="rounded-xl overflow-hidden border border-border max-w-sm mx-auto">
                  <img src={eclipseAward} alt="ECLIPSE 2026 First Place award" loading="lazy" className="w-full h-auto" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(var(--accent-yellow))/0.15] border border-[hsl(var(--accent-yellow))/0.3] mb-4">
                    <Trophy className="w-4 h-4 text-[hsl(45_85%_40%)]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[hsl(45_85%_30%)]">1st Place</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">ECLIPSE 2026 — Entrepreneurship Track</h2>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    Analyzed a complex business problem under time constraints, designed and justified an innovative solution, connected market logic with feasibility, and presented the final case to a judging panel.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Analytical Thinking", "Structured Problem Solving", "Decision-Making Under Pressure", "Presentation & Storytelling", "Entrepreneurship", "Consulting-Style Case Work"].map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Ambassador */}
        <section className="py-16 md:py-20 bg-secondary/50">
          <div className="container mx-auto px-6 max-w-screen-content">
            <AnimatedSection>
              <div className="max-w-3xl">
                <div className="inline-flex p-2.5 rounded-lg bg-accent/10 text-accent mb-4">
                  <BookOpen className="w-5 h-5" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">UTSC Ambassador & Peer Mentor</p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Student Campus Ambassador & Peer Mentor</h2>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  Strengthened my ability to communicate professionally with prospective students, families, and university stakeholders — building public communication, relationship management, and brand-representation skills.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["Public Communication", "Professional Presence", "Brand Representation", "Relationship Management", "Student Support"].map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Studying;
