import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import defaultBg from "@/assets/parallax-bg.png";
import defaultMid from "@/assets/parallax-mid.png";
import defaultFg from "@/assets/parallax-fg.png";

interface ParallaxHeroProps {
  bgImage?: string;
  midImage?: string;
  fgImage?: string;
}

const ParallaxHero = ({
  bgImage = defaultBg,
  midImage = defaultMid,
  fgImage = defaultFg,
}: ParallaxHeroProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const midY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const fgY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={ref} className="relative w-full h-screen overflow-hidden">
      {/* Background layer — slowest */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-[120%]"
      >
        <img
          src={bgImage}
          alt="Background layer"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Midground layer */}
      <motion.div
        style={{ y: midY }}
        className="absolute inset-0 w-full h-[140%]"
      >
        <img
          src={midImage}
          alt="Midground layer"
          className="w-full h-full object-cover mix-blend-screen opacity-70"
        />
      </motion.div>

      {/* Foreground layer — fastest */}
      <motion.div
        style={{ y: fgY }}
        className="absolute inset-0 w-full h-[160%]"
      >
        <img
          src={fgImage}
          alt="Foreground layer"
          className="w-full h-full object-cover mix-blend-screen opacity-60"
        />
      </motion.div>

      {/* Hero text overlay */}
      <motion.div
        style={{ y: textY, opacity }}
        className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6"
      >
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
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight max-w-4xl text-center"
        >
          Crafting digital
          <br />
          <span className="text-gradient">experiences</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed text-center"
        >
          I design and build interfaces that are thoughtful, functional,
          and built with care.
        </motion.p>
      </motion.div>

      {/* Bottom gradient fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </div>
  );
};

export default ParallaxHero;
