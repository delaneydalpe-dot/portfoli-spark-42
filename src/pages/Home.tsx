import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ParallaxHero from "@/components/ParallaxHero";
import { projects } from "@/data/projects";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Parallax Hero */}
      <ParallaxHero />

      {/* CTA below hero */}
      <section className="flex flex-col items-center justify-center py-20 px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex gap-4"
        >
          <Link
            to="/work"
            className="px-8 py-3 text-sm font-semibold uppercase tracking-wider bg-primary text-primary-foreground rounded-sm hover:opacity-90 transition-opacity"
          >
            View Work
          </Link>
          <Link
            to="/resume"
            className="px-8 py-3 text-sm font-semibold uppercase tracking-wider border border-border text-foreground rounded-sm hover:border-primary hover:text-primary transition-colors"
          >
            Resume
          </Link>
        </motion.div>
      </section>

      {/* Featured Section */}
      <section className="px-6 md:px-8 pb-24 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground mb-12"
        >
          Selected Work
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {projects.slice(0, 4).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-video md:aspect-[4/3] bg-card rounded-sm overflow-hidden border border-border hover:border-primary/50 transition-colors cursor-pointer hover-lift"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs font-medium uppercase tracking-wider text-primary mb-1">
                  {project.category} — {project.year}
                </p>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
