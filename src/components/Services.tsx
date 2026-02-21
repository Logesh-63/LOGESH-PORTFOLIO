import { useEffect, useRef } from "react";
import { Monitor, Layout, Layers, GitBranch, Smartphone, Palette } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Responsive Website Design",
    desc: "Building websites that look great on all screen sizes — mobile, tablet, and desktop.",
    features: ["Mobile-first approach", "Cross-browser compatible", "Clean structure"],
  },
  {
    icon: Layout,
    title: "Portfolio Website Creation",
    desc: "Crafting professional portfolio sites for students and freshers to showcase their skills.",
    features: ["Personal branding", "Project showcase", "Clean UI"],
  },
  {
    icon: Layers,
    title: "Landing Page Development",
    desc: "Designing effective landing pages with clear structure and call-to-actions.",
    features: ["High conversion layout", "Fast loading", "SEO-friendly HTML"],
  },
  {
    icon: Palette,
    title: "UI Implementation with HTML & CSS",
    desc: "Transforming designs into clean, well-structured HTML/CSS code.",
    features: ["Pixel-perfect design", "Semantic HTML5", "Modern CSS"],
  },
  {
    icon: Smartphone,
    title: "Responsive Layouts",
    desc: "Creating flexible grid and flexbox layouts for all screen sizes.",
    features: ["CSS Flexbox & Grid", "Adaptive typography", "Fluid containers"],
  },
  {
    icon: GitBranch,
    title: "Version Control with Git",
    desc: "Managing project code with Git for collaboration and code history tracking.",
    features: ["Git workflow", "GitHub repository", "Clean commit history"],
  },
];

const Services = () => {
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
    <section id="services" ref={sectionRef} className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-reveal text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">What I Offer</span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mt-2">
            What I Can <span className="text-gradient">Do</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm">
            Services I can provide as a frontend developer with Java knowledge.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, features }, i) => (
            <div
              key={title}
              className={`section-reveal group p-6 bg-card border border-border rounded-2xl hover:border-primary/50 hover:glow-blue-sm transition-all duration-300 hover:-translate-y-1 delay-${i * 100}`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:glow-blue-sm transition-all duration-300">
                <Icon size={22} className="text-primary" />
              </div>
              <h3 className="text-foreground font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{desc}</p>
              <ul className="space-y-1.5">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
