import { useEffect, useRef } from "react";
import { Github, ExternalLink, Star } from "lucide-react";
import projectPreviewImg from "@/assets/project-preview.jpg";

const projects = [
  {
    title: "Free Online Learning & Resource Platform",
    description:
      "A web platform designed to provide free educational resources for students, including government exam preparation materials, sports-related guidance, and various course resources.",
    highlights: [
      "Responsive frontend developed using HTML & CSS",
      "Clean and structured UI layout",
      "Designed for accessibility and ease of use",
      "Backend integration currently in progress using Java",
    ],
    tags: ["HTML", "CSS", "Java", "Responsive Design"],
    github: "https://github.com/Logesh-63",
    demo: "#",
    image: projectPreviewImg,
    featured: true,
    status: "In Progress",
  },

  {
    title: "Expense Tracker - Java Application",
    description:
      "A console-based Expense Tracker built using Core Java and Object-Oriented Programming principles.",
    highlights: [
      "Menu-driven console interface",
      "Add and categorize expenses",
      "View total spending and filter by category",
      "Modular OOP-based architecture",
    ],
    tags: ["Java", "OOP", "ArrayList", "LocalDate"],
    github: "https://github.com/Logesh-63/Expense-tracker-java",
    demo: "#",
    image: projectPreviewImg, // using same preview image
    featured: false,
    status: "Completed",
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible"),
        ),
      { threshold: 0.1 },
    );
    const children = sectionRef.current?.querySelectorAll(".section-reveal");
    children?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-reveal text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mt-2">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Real-world projects I've built to apply my skills and solve
            meaningful problems.
          </p>
        </div>

        {projects.map((project) => (
          <div key={project.title} className="section-reveal">
            {project.featured && (
              <div className="flex items-center gap-2 mb-4">
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <span className="text-yellow-400 text-sm font-semibold">
                  Featured Project
                </span>
              </div>
            )}

            <div className="bg-background border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:glow-blue-sm transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative overflow-hidden h-64 md:h-auto">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/30" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-primary/80 text-primary-foreground text-xs font-semibold backdrop-blur-sm">
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-lg border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-xl hover:glow-blue transition-all duration-300"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-sm font-semibold rounded-xl hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="section-reveal mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-secondary border border-border rounded-xl text-muted-foreground text-sm">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            More projects coming soon — actively building!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
