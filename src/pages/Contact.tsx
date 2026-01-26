import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, GraduationCap } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, 
            or just having a conversation about product and tech.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            {/* Contact Cards */}
            <div className="space-y-4 mb-12">
              {/* Email */}
              <a
                href="mailto:donat.ivliev@mail.utoronto.ca"
                className="group flex items-center gap-4 p-6 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-md transition-all"
              >
                <div className="p-3 bg-primary rounded-lg group-hover:bg-accent transition-colors">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="text-foreground font-medium">
                    donat.ivliev@mail.utoronto.ca
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/donat-ivliev-17626728a/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-md transition-all"
              >
                <div className="p-3 bg-primary rounded-lg group-hover:bg-accent transition-colors">
                  <Linkedin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                  <p className="text-foreground font-medium">
                    linkedin.com/in/donat-ivliev
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border">
                <div className="p-3 bg-secondary rounded-lg">
                  <MapPin className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="text-foreground font-medium">
                    Toronto, ON, Canada
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border">
                <div className="p-3 bg-secondary rounded-lg">
                  <GraduationCap className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Education</p>
                  <p className="text-foreground font-medium">
                    BBA (Management & IT), University of Toronto Scarborough
                  </p>
                  <p className="text-muted-foreground text-sm">Class of 2028</p>
                </div>
              </div>
          </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
