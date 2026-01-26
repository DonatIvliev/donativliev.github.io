import { Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold">Donat Ivliev</p>
            <p className="text-primary-foreground/70 text-sm mt-1">
              Toronto, ON, Canada
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:donat.ivliev@mail.utoronto.ca"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
            >
              <Mail size={18} />
              <span className="hidden sm:inline">donat.ivliev@mail.utoronto.ca</span>
            </a>
            <a
              href="https://www.linkedin.com/in/donat-ivliev-17626728a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
            >
              <Linkedin size={18} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Donat Ivliev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
