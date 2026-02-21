import { useEffect, useRef, useState } from "react";

const technicalSkills = [
  { name: "Java", level: 65, icon: "☕" },
  { name: "Object-Oriented Programming", level: 70, icon: "🔷" },
  { name: "Inheritance & Polymorphism", level: 65, icon: "🔗" },
  { name: "Encapsulation & Abstraction", level: 65, icon: "📦" },
  { name: "HTML", level: 80, icon: "🌐" },
  { name: "CSS", level: 75, icon: "🎨" },
  { name: "Git", level: 60, icon: "📁" },
];

const improvingSkills = [
  { name: "Backend Development (Java)", icon: "⚙️", desc: "Building APIs & server-side logic" },
  { name: "Data Structures", icon: "📊", desc: "Arrays, LinkedList, Trees fundamentals" },
  { name: "Spring Framework", icon: "🌱", desc: "Learning Spring Boot basics" },
];

const SkillBar = ({ name, level, icon, delay }: { name: string; level: number; icon: string; delay: number }) => {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{icon}</span>
          <span className="text-foreground font-medium text-sm">{name}</span>
        </div>
        <span className="text-primary font-bold text-sm">{level}%</span>
      </div>
      <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-electric-glow transition-all duration-1000 ease-out glow-blue-sm"
          style={{
            width: animated ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
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
    <section id="skills" ref={sectionRef} className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-reveal text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">My Toolkit</span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mt-2">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Skill Bars */}
          <div className="section-reveal bg-card border border-border rounded-2xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full" />
              Technical Proficiency
            </h3>
            <div className="space-y-5">
              {technicalSkills.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} delay={i * 100} />
              ))}
            </div>
          </div>

          {/* Currently Improving + Tech Cards */}
          <div className="section-reveal space-y-6">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded-full" />
                Currently Improving 🚀
              </h3>
              <div className="space-y-4">
                {improvingSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-start gap-4 p-4 rounded-xl bg-secondary hover:bg-muted border border-border hover:border-primary/40 transition-all duration-300 group"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <div>
                      <h4 className="text-foreground font-semibold text-sm group-hover:text-primary transition-colors">{skill.name}</h4>
                      <p className="text-muted-foreground text-xs mt-1">{skill.desc}</p>
                    </div>
                    <div className="ml-auto">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full border border-primary/20">In Progress</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Tech Tags */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-base font-bold text-foreground mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["Java", "OOP", "HTML5", "CSS3", "Git", "GitHub", "VS Code", "IntelliJ"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-lg border border-primary/20 hover:bg-primary/20 hover:glow-blue-sm transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
