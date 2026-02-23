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
          A selection of projects across dashboard design, e-commerce, branding, and product.
        </p>
      </motion.div>

      <div className="space-y-16">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="border border-border rounded-sm p-6 md:p-10 bg-card hover:border-primary/30 transition-colors"
          >
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                {project.title}
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
              {project.whoAndWhy}
            </p>

            <div>
              <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
                Tools Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-sm border border-border"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Work;
