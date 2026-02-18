import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center min-h-[85vh] px-8 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground"
        >
          Designer & Developer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight max-w-4xl"
        >
          Crafting digital
          <br />
          <span className="text-gradient">experiences</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed"
        >
          I design and build interfaces that are thoughtful, functional,
          and built with care. Currently available for freelance.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex gap-4"
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20"
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground animate-bounce" />
        </motion.div>
      </section>

      {/* Featured Section */}
      <section className="px-8 pb-24 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground mb-12"
        >
          Selected Work
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Brand Identity", category: "Branding", year: "2025" },
            { title: "E-commerce Platform", category: "Web Design", year: "2024" },
            { title: "Mobile Banking App", category: "UI/UX", year: "2024" },
            { title: "Editorial Website", category: "Development", year: "2023" },
          ].map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[4/3] bg-card rounded-sm overflow-hidden border border-border hover:border-primary/50 transition-colors cursor-pointer hover-lift"
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
