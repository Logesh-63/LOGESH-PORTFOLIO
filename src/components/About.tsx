import { useEffect, useRef } from "react";
import { Lightbulb, BookOpen, Code, Rocket } from "lucide-react";

const highlights = [
  { icon: Lightbulb, title: "Problem Solver", desc: "Strong analytical thinking with passion for solving complex challenges." },
  { icon: BookOpen, title: "Continuous Learner", desc: "Always upskilling with new technologies and programming concepts." },
  { icon: Code, title: "Backend Growth", desc: "Actively improving backend development skills using Java & Spring." },
  { icon: Rocket, title: "Project Builder", desc: "Building real-world applications and meaningful solutions." },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    const children = sectionRef.current?.querySelectorAll(".section-reveal");
    children?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-reveal text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Who I Am</span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mt-2">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className="section-reveal">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Aspiring Java & Frontend Developer
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I am <span className="text-primary font-semibold">LOGESH.B</span>, currently pursuing 
              B.E. in Computer Science Engineering (2023–2027) at{" "}
              <span className="text-foreground font-medium">Panimalar Engineering College, Chennai</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I am an enthusiastic learner focused on Java development and frontend technologies. 
              With a strong foundation in Object-Oriented Programming principles, I aim to become 
              a professional Java Software Developer.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I'm passionate about building efficient software solutions and continuously improving 
              my backend development skills while creating clean and functional user interfaces.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Degree", value: "B.E. CSE" },
                { label: "Year", value: "3rd Year" },
                { label: "College", value: "Panimalar EC" },
                { label: "Grad Year", value: "2027" },
                { label: "Location", value: "Chennai" },
                { label: "Status", value: "Available" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    <span className="text-foreground font-medium">{item.label}: </span>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 section-reveal">
            {highlights.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`p-5 rounded-xl bg-card border border-border hover:border-primary/50 hover:glow-blue-sm transition-all duration-300 group delay-${i * 100 + 100}`}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition">
                  <Icon size={20} className="text-primary" />
                </div>
                <h4 className="text-foreground font-semibold mb-1.5">{title}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
