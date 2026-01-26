import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Trophy, Mic, ExternalLink } from "lucide-react";
import eclipseAward from "@/assets/eclipse-award.png";
import flipProgram from "@/assets/flip-program.png";

const experienceSections = [
  {
    id: "flip",
    icon: Users,
    role: "Peer Mentor / Work-Study Student",
    organization: "First-Year Learning Integration Program (FLIP)",
    problem: "First-year students face challenges navigating the academic and social transition to university life.",
    actions: [
      "Supported large cohorts of first-year students through their transition",
      "Coordinated onboarding and engagement initiatives across programs",
      "Acted as a bridge between students and administration",
      "Improved participation and adoption of campus programs",
    ],
    skills: ["Mentorship", "Program Coordination", "Communication at Scale", "Stakeholder Support", "Structured Execution"],
    image: flipProgram,
    imageAlt: "FLIP Program booth at UTSC",
  },
  {
    id: "mta",
    icon: Target,
    role: "Vice President, Internal Strategy",
    organization: "Management & Technology Association (MTA)",
    problem: "Student organizations often lack operational structure, leading to inconsistent execution and member experience.",
    actions: [
      "Led internal strategy and operational execution",
      "Coordinated planning and cross-functional team operations",
      "Improved structure, communication, and accountability",
      "Supported delivery of events, initiatives, and competitions",
    ],
    skills: ["Leadership", "Strategic Planning", "Team Coordination", "Process Improvement", "Ownership & Accountability"],
  },
  {
    id: "case-competitions",
    icon: Trophy,
    role: "1st Place — Entrepreneurship Track",
    organization: "ECLIPSE Case Competition",
    problem: "Business challenges require rapid analysis, creative solutions, and clear communication under time pressure.",
    actions: [
      "Analyzed complex problems within tight constraints",
      "Designed and justified innovative solutions",
      "Communicated ideas clearly to a panel of judges",
      "Collaborated with team members under pressure",
    ],
    skills: ["Analytical Thinking", "Structured Problem Solving", "Decision-Making Under Pressure", "Presentation & Storytelling"],
    image: eclipseAward,
    imageAlt: "Eclipse Case Competition First Place Award",
  },
  {
    id: "ambassador",
    icon: Mic,
    role: "Student Campus Ambassador & Peer Mentor",
    organization: "University of Toronto Scarborough",
    problem: "Prospective students need authentic, informed guidance to understand the university experience.",
    actions: [
      "Acted as a primary point of contact for prospective students and families",
      "Communicated academic programs and campus experience clearly",
      "Represented UTSC in a professional and credible manner",
    ],
    skills: ["Public Communication", "Professional Presence", "Brand Representation", "Relationship Management"],
    videoLink: "https://youtu.be/YL-m9jwxK2Q?si=S6JwX5aHAS-5jWfc",
  },
];

const languages = [
  { name: "English", level: "Native" },
  { name: "French", level: "Professional" },
  { name: "Mandarin", level: "Conversational" },
  { name: "Ukrainian", level: "Native" },
];

const Studying = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-4xl">
            <p className="text-accent font-medium mb-4 tracking-wide uppercase text-sm">
              Academic Experience
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Studying @ University of Toronto Scarborough
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Academic leadership, execution, and applied learning beyond the classroom
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                BBA (Management & IT)
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Class of 2028
              </Badge>
            </div>
            <p className="text-primary-foreground/70 max-w-2xl leading-relaxed">
              I treat university as a live operating environment — leading, coordinating, and delivering real outcomes. 
              Every role I take on is an opportunity to build leadership skills, execute at a high level, and create 
              meaningful impact for the communities I serve.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Experience Sections */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Leadership & Execution
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              How I operate inside complex organizations — taking ownership, building structure, and delivering results.
            </p>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mt-6" />
          </AnimatedSection>

          <div className="space-y-12 max-w-5xl mx-auto">
            {experienceSections.map((section, index) => (
              <AnimatedSection 
                key={section.id} 
                delay={index * 100}
                animation={index % 2 === 0 ? "slide-left" : "slide-right"}
              >
                <Card className="overflow-hidden border-border hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className={`grid ${section.image ? 'lg:grid-cols-5' : 'grid-cols-1'} gap-0`}>
                      {/* Content */}
                      <div className={`p-8 ${section.image ? 'lg:col-span-3' : ''}`}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-accent/10 rounded-lg">
                            <section.icon className="w-5 h-5 text-accent" />
                          </div>
                          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                            {section.organization}
                          </span>
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                          {section.role}
                        </h3>
                        
                        <div className="mb-6">
                          <p className="text-sm font-medium text-muted-foreground mb-2">The Challenge</p>
                          <p className="text-foreground/80">{section.problem}</p>
                        </div>

                        <div className="mb-6">
                          <p className="text-sm font-medium text-muted-foreground mb-3">What I Did</p>
                          <ul className="space-y-2">
                            {section.actions.map((action, i) => (
                              <li key={i} className="flex items-start gap-2 text-foreground/80">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                                {action}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {section.skills.map((skill) => (
                            <Badge 
                              key={skill} 
                              variant="outline" 
                              className="text-xs border-border text-muted-foreground"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        {section.videoLink && (
                          <a 
                            href={section.videoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-6 text-accent hover:text-accent/80 font-medium transition-colors"
                          >
                            Watch Video <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>

                      {/* Image */}
                      {section.image && (
                        <div className="lg:col-span-2 bg-secondary">
                          <img 
                            src={section.image} 
                            alt={section.imageAlt}
                            className="w-full h-full object-cover min-h-[250px] lg:min-h-full"
                          />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Communication & Languages
              </h2>
              <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-8" />
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Working across student communities with diverse cultural and linguistic backgrounds 
                has strengthened my ability to communicate clearly, adapt messaging, and build trust 
                across different audiences and contexts.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {languages.map((lang, index) => (
                <AnimatedSection key={lang.name} delay={index * 100} animation="scale">
                  <div className="bg-card border border-border rounded-xl px-8 py-6 text-center hover:shadow-md transition-shadow duration-200">
                    <p className="text-xl font-semibold text-foreground mb-1">{lang.name}</p>
                    <p className="text-sm text-muted-foreground">{lang.level}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Studying;
