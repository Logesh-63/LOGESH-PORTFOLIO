import { Github, Linkedin, Mail, Heart, Code2 } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Code2 size={16} className="text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-gradient">LOGESH.B</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Aspiring Java Developer & Frontend Web Developer. 2027 CSE Graduate from Panimalar Engineering College.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const el = document.querySelector(`#${link.toLowerCase()}`);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              {[
                { icon: Github, href: "https://github.com/Logesh-63", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/logeshb06/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:anbulogeshcse@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:glow-blue-sm transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-muted-foreground text-xs">Open to internships & entry-level opportunities</p>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm flex items-center gap-1.5">
            © 2026 LOGESH.B | Built with{" "}
            <Heart size={13} className="text-destructive fill-destructive" />
            {" "}Passion
          </p>
          <button
            onClick={scrollToTop}
            className="px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors border border-border rounded-lg hover:border-primary/50"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
