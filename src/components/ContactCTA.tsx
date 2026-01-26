import { Button } from "@/components/ui/button";
import { Mail, Linkedin, ArrowRight } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground mb-8">
            Interested in discussing opportunities? I'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:donat.ivliev@mail.utoronto.ca" className="flex items-center gap-2">
                <Mail size={18} />
                Send Email
                <ArrowRight size={16} />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://www.linkedin.com/in/donat-ivliev-17626728a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin size={18} />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
