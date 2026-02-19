import { motion } from "framer-motion";
import { projects } from "@/data/projects";

const Work = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-8 max-w-6xl mx-auto">
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
