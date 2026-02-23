import { motion } from "framer-motion";
import { Mail, MapPin, Download, Phone } from "lucide-react";

const experience = [
  { role: "Independent Regional A", company: "Denver, CO", period: "2025 — Present", description: "" },
  { role: "Regional A", company: "Denver, CO", period: "2020 — 2025", description: "" },
  { role: "Cadet Class", company: "Denver, CO", period: "2014 — 2020", description: "" },
];

const skills = [
  "Flag Skills", "Rifle Skills", "Saber Skills", "Dance Skills",
];

const education = [
  { degree: "Jefferson Academy Secondary", school: "Broomfield, CO", year: "2023 — Present" },
  { degree: "Jefferson Academy Elementary", school: "Westminster, CO", year: "2016 — 2022" },
];

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-16">
    <h2 className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-8">
      {title}
    </h2>
    {children}
  </div>
);

const Resume = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Delaney Dalpe
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mb-6 leading-relaxed">
          I am a very good team member. I am able to overcome and overgrow challenges that come my way. I am very good with social interactions and hand-eye coordination. I am very passionate about pursuing colorguard. I have done it for pretty much my whole life, and I would love to continue.
        </p>
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> Lakewood, CO
          </span>
          <a href="mailto:delaneydalpe@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="w-4 h-4" /> delaneydalpe@gmail.com
          </a>
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4" /> (720) 693-2305
          </span>
        </div>
        <button
          onClick={() => {
            const link = document.createElement('a');
            link.href = '/colorguard_resume.pdf';
            link.download = 'Delaney_Dalpe_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wider bg-primary text-primary-foreground rounded-sm hover:opacity-90 transition-opacity"
        >
          <Download className="w-4 h-4" />
          Download Resume
        </button>
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
