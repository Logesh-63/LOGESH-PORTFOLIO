import { useEffect, useRef, useState } from "react";
import { Mail, Phone, Linkedin, Github, Send, Download } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "anbulogeshcse@gmail.com",
    href: "mailto:anbulogeshcse@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9345001815",
    href: "tel:+919345001815",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/logeshb06",
    href: "https://www.linkedin.com/in/logeshb06/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Logesh-63",
    href: "https://github.com/Logesh-63",
  },
];

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    const children = sectionRef.current?.querySelectorAll(".section-reveal");
    children?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-reveal text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mt-2">
            Contact <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Have an opportunity or project? I'd love to hear from you. Let's build something great together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="section-reveal space-y-6">
            <h3 className="text-xl font-bold text-foreground">Reach Out Directly</h3>

            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 hover:glow-blue-sm transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition">
                  <Icon size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                  <div className="text-foreground font-medium group-hover:text-primary transition-colors">{value}</div>
                </div>
              </a>
            ))}

            <div className="pt-4">
              <a
                href="#"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:glow-blue transition-all duration-300"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="section-reveal">
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <h3 className="text-xl font-bold text-foreground mb-6">Send a Message</h3>

              {sent && (
                <div className="mb-5 p-4 bg-primary/10 border border-primary/30 rounded-xl text-primary text-sm font-medium">
                  ✅ Message sent! I'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Your message..."
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:glow-blue transition-all duration-300"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
