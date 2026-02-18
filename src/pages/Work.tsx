import { motion } from "framer-motion";

const projects = [
  { title: "Brand Identity System", category: "Branding", year: "2025", description: "Complete visual identity for a fintech startup" },
  { title: "E-commerce Platform", category: "Web Design", year: "2024", description: "Full-stack shopping experience with custom CMS" },
  { title: "Mobile Banking App", category: "UI/UX Design", year: "2024", description: "iOS and Android app for a digital bank" },
  { title: "Editorial Website", category: "Development", year: "2023", description: "Content-rich magazine built with modern web tech" },
  { title: "SaaS Dashboard", category: "Product Design", year: "2023", description: "Analytics platform for enterprise clients" },
  { title: "Photography Portfolio", category: "Web Design", year: "2022", description: "Minimal portfolio showcasing fine art photography" },
];

const Work = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Work
        </h1>
        <p className="text-lg text-muted-foreground max-w-lg">
          A selection of projects I've worked on across branding, web, and product design.
        </p>
      </motion.div>

      <div className="space-y-0 border-t border-border">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.08 }}
            className="group flex items-center justify-between py-8 border-b border-border cursor-pointer hover:pl-4 transition-all duration-300"
          >
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {project.description}
              </p>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
              <span className="uppercase tracking-wider">{project.category}</span>
              <span>{project.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Work;
