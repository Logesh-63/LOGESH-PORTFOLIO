import { useEffect, useState, useRef } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

const roles = [
  "Java Developer",
  "Frontend Developer",
  "Problem Solver",
  "2027 CSE Graduate",
];

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  // Typing animation
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 90;
    const pauseAtEnd = 2000;

    if (!isDeleting && charIndex === currentRole.length) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseAtEnd);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    timeoutRef.current = setTimeout(() => {
      setDisplayText(
        currentRole.substring(0, charIndex + (isDeleting ? -1 : 1)),
      );
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeoutRef.current);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="relative w-full max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border text-sm font-medium border-primary/30 bg-primary/10 text-primary">
              Open to Internships & Opportunities
            </div>

            <div>
              <p className="text-muted-foreground text-lg mb-2">
                👋 Hello, World!
              </p>

              <h1 className="text-6xl md:text-7xl font-black">
                Hi, I'm <span className="text-primary">LOGESH.B</span>
              </h1>
            </div>

            <div className="text-xl md:text-2xl font-semibold text-muted-foreground">
              Aspiring <span className="text-primary">{displayText}</span>
            </div>

            <p className="text-muted-foreground text-base leading-relaxed max-w-lg">
              A 3rd-year B.E. CSE student at Panimalar Engineering College,
              Chennai. Passionate about building efficient software solutions
              using Java and modern frontend technologies.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => scrollToSection("#projects")}
                className="px-8 py-4 font-bold rounded-2xl text-sm bg-primary text-white hover:scale-105 transition"
              >
                View Projects
              </button>

              <button
                onClick={() => scrollToSection("#contact")}
                className="px-8 py-4 font-bold rounded-2xl text-sm border border-primary/40 text-primary hover:scale-105 transition"
              >
                Contact Me
              </button>

              {/* ✅ Resume Download Working */}
              <a
                href="/LOGESH_FINAL_ENHANCV_80PLUS.pdf"
                download
                className="px-8 py-4 font-bold rounded-2xl text-sm border border-border hover:scale-105 transition"
              >
                <Download size={14} className="inline mr-2" />
                Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/Logesh-63?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/logeshb06/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>

              <a href="mailto:anbulogeshcse@gmail.com">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[380px] h-[380px] flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-primary/30 animate-spin-slow" />

              <div className="w-72 h-72 rounded-full flex items-center justify-center border-4 border-primary/60 bg-background shadow-xl">
                <div className="text-4xl font-black text-primary">LOGESH</div>
              </div>

              <div className="absolute bottom-0 right-0 bg-card border border-primary/20 rounded-xl px-4 py-3 shadow-xl">
                <div className="text-xs text-muted-foreground">Status</div>
                <div className="text-sm font-bold text-primary">Available</div>
              </div>

              <div className="absolute top-0 left-0 bg-card border border-primary/20 rounded-xl px-4 py-3 shadow-xl">
                <div className="text-xs text-muted-foreground">Year</div>
                <div className="text-sm font-bold">3rd Year CSE</div>
              </div>

              <div className="absolute top-1/2 -left-10 bg-card border border-primary/20 rounded-xl px-3 py-2 shadow-xl">
                <div className="text-xs text-muted-foreground">College</div>
                <div className="text-xs font-bold whitespace-nowrap">
                  Panimalar EC
                </div>
              </div>

              <div className="absolute top-8 -right-8 bg-primary/10 border border-primary/30 rounded-xl px-3 py-2 shadow-xl">
                <div className="text-lg text-center">☕</div>
                <div className="text-xs font-bold text-primary">Java</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
