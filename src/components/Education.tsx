import { useEffect, useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    degree: "B.E. Computer Science Engineering",
    institution: "Panimalar Engineering College",
    location: "Chennai, Tamil Nadu",
    duration: "2023 – 2027",
    status: "Ongoing",
    details: ["Specializing in Java Development", "Frontend Technologies", "Data Structures & Algorithms"],
  },
];

const Education = () => {
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
    <section id="education" ref={sectionRef} className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-reveal text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">My Journey</span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mt-2">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
        </div>

        <div className="max-w-3xl mx-auto">
          {educationData.map((edu, i) => (
            <div key={i} className="section-reveal relative flex gap-6">
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center glow-blue-sm flex-shrink-0">
                  <GraduationCap size={24} className="text-primary" />
                </div>
                <div className="flex-1 w-0.5 bg-gradient-to-b from-primary/50 to-transparent mt-2" />
              </div>

              {/* Content */}
              <div className="pb-12 flex-1">
                <div className="bg-background border border-border rounded-2xl p-6 hover:border-primary/50 hover:glow-blue-sm transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                      <p className="text-primary font-semibold mt-1">{edu.institution}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/30">
                      {edu.status}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-muted-foreground text-sm mb-4">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-primary" />
                      {edu.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-primary" />
                      {edu.duration}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {edu.details.map((d, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
