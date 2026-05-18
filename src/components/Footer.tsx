import { Link } from "react-router-dom";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import { site, navLinks } from "@/data/site";

const Footer = () => {
  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="container mx-auto px-6 max-w-screen-content py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <span className="grid place-items-center w-9 h-9 rounded-lg bg-accent text-accent-foreground font-bold text-sm">
                DI
              </span>
              <span className="text-base font-semibold">Donat Ivliev</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Management & IT @ UTSC<br />
              Emerging Technology Assistant @ The BRIDGE<br />
              {site.location}
            </p>
            <p className="text-accent text-xs font-medium mt-3 uppercase tracking-wider">
              {site.availability}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/50 mb-4">
              Navigate
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/50 mb-4">
              Connect
            </p>
            <ul className="space-y-2.5">
              <li><a href={`mailto:${site.email}`} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-2"><Mail size={14} /> Email</a></li>
              <li><a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-2"><Linkedin size={14} /> LinkedIn</a></li>
              <li><a href={site.github} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-2"><Github size={14} /> GitHub</a></li>
              <li><a href={site.resume} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-2"><FileText size={14} /> Resume</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Donat Ivliev. All rights reserved.</p>
          <p>Built with React, Tailwind CSS, and disciplined execution.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
