import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, FileText, MapPin, Briefcase, CalendarCheck, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { site } from "@/data/site";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "—"}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nReply to: ${form.email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-32 pb-12 bg-gradient-navy text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-glow opacity-60" />
          <div className="container mx-auto px-6 max-w-screen-content relative">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">Contact</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl leading-tight">
              Open to Fall 2026 & Winter 2027 internship conversations.
            </h1>
            <p className="text-primary-foreground/75 max-w-2xl leading-relaxed">
              Product, consulting, business analysis, Agile delivery, emerging technology, and technology strategy. Especially interested in roles that combine structured problem-solving, business context, and technology-enabled execution.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6 max-w-screen-content">
            <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10">
              {/* Contact cards */}
              <div className="space-y-3">
                <AnimatedSection animation="fade-up">
                  <a href={`mailto:${site.email}`} className="group flex items-center gap-4 p-5 bg-card rounded-xl border border-border hover:border-accent/40 hover:shadow-md transition-all">
                    <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Email</p>
                      <p className="text-sm font-semibold text-foreground truncate">{site.email}</p>
                    </div>
                    <ArrowRight size={16} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                  </a>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={60}>
                  <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-5 bg-card rounded-xl border border-border hover:border-accent/40 hover:shadow-md transition-all">
                    <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">LinkedIn</p>
                      <p className="text-sm font-semibold text-foreground">Connect with me</p>
                    </div>
                    <ArrowRight size={16} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                  </a>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={120}>
                  <a href={site.github} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-5 bg-card rounded-xl border border-border hover:border-accent/40 hover:shadow-md transition-all">
                    <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <Github className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">GitHub</p>
                      <p className="text-sm font-semibold text-foreground">View my code</p>
                    </div>
                    <ArrowRight size={16} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                  </a>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={180}>
                  <a href={site.resume} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-5 bg-card rounded-xl border border-border hover:border-accent/40 hover:shadow-md transition-all">
                    <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Resume</p>
                      <p className="text-sm font-semibold text-foreground">Download PDF</p>
                    </div>
                    <ArrowRight size={16} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                  </a>
                </AnimatedSection>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="bg-secondary/50 rounded-xl p-4 border border-border">
                    <MapPin className="w-4 h-4 text-accent mb-2" />
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Location</p>
                    <p className="text-sm font-semibold text-foreground">Toronto, ON</p>
                  </div>
                  <div className="bg-secondary/50 rounded-xl p-4 border border-border">
                    <Briefcase className="w-4 h-4 text-accent mb-2" />
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Current Role</p>
                    <p className="text-sm font-semibold text-foreground leading-tight">Emerging Tech Assistant · The BRIDGE</p>
                  </div>
                  <div className="bg-secondary/50 rounded-xl p-4 border border-border">
                    <CalendarCheck className="w-4 h-4 text-accent mb-2" />
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Availability</p>
                    <p className="text-sm font-semibold text-foreground leading-tight">Fall 2026 · Winter 2027</p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <AnimatedSection animation="fade-up" delay={100}>
                <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
                  <h2 className="text-xl font-bold text-foreground mb-1">Send a message</h2>
                  <p className="text-sm text-muted-foreground mb-6">This opens your email client with the message pre-filled.</p>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1.5" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1.5" />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1.5" />
                    </div>
                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      <Mail size={16} /> Send via Email
                    </Button>
                  </div>
                </form>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
