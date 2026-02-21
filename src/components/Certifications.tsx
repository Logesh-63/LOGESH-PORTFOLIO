import { useEffect, useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Python Internship Certification",
    issuer: "InternPe",
    date: "2024",
    type: "Internship",
    desc: "Successfully completed a Python Internship at InternPe by completing real-world development tasks and practical programming exercises.",
    color: "from-blue-500/20 to-blue-600/5",
    link: "https://www.linkedin.com/posts/logeshb06_python-internship-internpe-activity-7365322927858221056-CDMr",
  },
  {
    title: "Java Virtual Internship Certification",
    issuer: "CodeAlpha",
    date: "2024",
    type: "Internship",
    desc: "Completed a structured Java Virtual Internship at CodeAlpha with hands-on development tasks and practical implementation experience.",
    color: "from-cyan-500/20 to-cyan-600/5",
    link: "https://www.linkedin.com/posts/logeshb06_python-internship-internpe-activity-7365322927858221056-CDMr",
  },
  {
    title: "AI Mastery Certification",
    issuer: "AIMastery & NxtWave",
    date: "2025",
    type: "Certification",
    desc: "Successfully completed the AI Mastery program by AIMastery and NxtWave, focused on foundational AI concepts, OpenAI technologies, and practical AI applications.",
    color: "from-purple-500/20 to-purple-600/5",
    link: "https://www.linkedin.com/posts/logeshb06_aimastery-nxtwave-openai-activity-7382051643778813952-SJ37",
  },
];

const Certifications = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting && entry.target.classList.add("visible"),
        ),
      { threshold: 0.1 },
    );

    const children = sectionRef.current?.querySelectorAll(".section-reveal");

    children?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="certifications" ref={sectionRef} className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-reveal text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Credentials
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mt-2">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`section-reveal group relative overflow-hidden bg-gradient-to-br ${cert.color} border border-primary/20 rounded-2xl p-8 hover:border-primary/50 hover:glow-blue-sm transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:glow-blue-sm transition-all">
                    <Award size={26} className="text-primary" />
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">
                    {cert.type}
                  </span>
                </div>

                <h3 className="text-foreground font-bold text-lg mb-1">
                  {cert.title}
                </h3>

                <p className="text-primary text-sm font-medium mb-1">
                  {cert.issuer}
                </p>

                <p className="text-muted-foreground text-xs mb-4">
                  {cert.date}
                </p>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cert.desc}
                </p>

                <div className="mt-4 pt-4 border-t border-border">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-primary text-xs font-semibold group-hover:gap-3 transition-all duration-300"
                  >
                    <ExternalLink size={14} />
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
