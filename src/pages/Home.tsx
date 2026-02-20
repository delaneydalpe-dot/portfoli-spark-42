import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ParallaxHero from "@/components/ParallaxHero";
import { projects } from "@/data/projects";

const Home = () => {
  return (
    <div className="min-h-screen">
      <ParallaxHero />

      {/* Selected Work */}
      <section className="px-6 md:px-8 py-24 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground mb-12"
        >
          Selected Work
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to="/work"
                className="group relative aspect-video md:aspect-[4/3] bg-card rounded-sm overflow-hidden border border-border hover:border-primary/50 transition-colors cursor-pointer hover-lift block"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-primary mb-1">
                    {project.category} — {project.year}
                  </p>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-primary hover:opacity-80 transition-opacity"
          >
            View All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
