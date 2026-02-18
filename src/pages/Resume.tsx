import { motion } from "framer-motion";
import { Mail, MapPin, ExternalLink } from "lucide-react";

const experience = [
  { role: "Senior Product Designer", company: "Studio Labs", period: "2023 — Present", description: "Leading design for a suite of B2B SaaS products. Established design system used across 4 product lines." },
  { role: "UI/UX Designer", company: "Digital Agency Co", period: "2021 — 2023", description: "Designed and shipped 20+ client projects spanning e-commerce, fintech, and healthcare." },
  { role: "Junior Designer", company: "Creative Works", period: "2019 — 2021", description: "Contributed to branding, web design, and marketing materials for various clients." },
];

const skills = [
  "UI/UX Design", "Design Systems", "Figma", "Prototyping",
  "React", "TypeScript", "Tailwind CSS", "Framer Motion",
  "Branding", "Typography", "Accessibility", "User Research",
];

const education = [
  { degree: "B.A. in Graphic Design", school: "School of Visual Arts", year: "2019" },
];

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-16">
    <h2 className="text-sm font-medium uppercase tracking-[0.3em] text-primary mb-8">
      {title}
    </h2>
    {children}
  </div>
);

const Resume = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Resume
        </h1>
        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> New York, NY
          </span>
          <span className="flex items-center gap-2">
            <Mail className="w-4 h-4" /> hello@portfolio.com
          </span>
          <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
            <ExternalLink className="w-4 h-4" /> LinkedIn
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Section title="Experience">
          <div className="space-y-0 border-t border-border">
            {experience.map((exp) => (
              <div key={exp.role} className="py-6 border-b border-border">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <p className="text-sm text-primary">{exp.company}</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 md:mt-0">{exp.period}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Skills">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm font-medium bg-secondary text-secondary-foreground rounded-sm border border-border"
              >
                {skill}
              </span>
            ))}
          </div>
        </Section>

        <Section title="Education">
          {education.map((edu) => (
            <div key={edu.degree} className="flex flex-col md:flex-row md:justify-between">
              <div>
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground">{edu.school}</p>
              </div>
              <p className="text-sm text-muted-foreground">{edu.year}</p>
            </div>
          ))}
        </Section>
      </motion.div>
    </div>
  );
};

export default Resume;
