import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import defaultBg from "@/assets/Layer 1.png";
import defaultMid from "@/assets/Layer 2.png";
import defaultFront from "@/assets/Layer 3.png";

interface ParallaxHeroProps {
  bgImage?: string;
  midImage?: string;
  frontImage?: string;
}

const ParallaxHero = ({
  bgImage = defaultBg,
  midImage = defaultMid,
  frontImage = defaultFront,
}: ParallaxHeroProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const midY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const frontY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={ref} className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background layer — slowest */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-[120%]"
      >
        <img
          src={bgImage}
          alt="Background layer"
          className="w-full h-full object-contain object-bottom"
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
          className="w-full h-full object-contain object-bottom"
        />
      </motion.div>

      {/* Foreground layer */}
      <motion.div
        style={{ y: frontY }}
        className="absolute inset-0 w-full h-[150%]"
      >
        <img
          src={frontImage}
          alt="Foreground layer"
          className="w-full h-full object-contain object-bottom"
        />
      </motion.div>

      {/* Hero text overlay — foreground */}
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
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight max-w-5xl text-center"
        >
          Delaney Dalpe
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-5 max-w-lg text-sm sm:text-base text-muted-foreground leading-relaxed text-center"
        >
          Learn about me and the work I have done!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8"
        >
          <Link
            to="/work"
            className="px-8 py-3 text-sm font-semibold uppercase tracking-wider bg-primary text-primary-foreground rounded-sm hover:opacity-90 transition-opacity"
          >
            View My Work
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </div>
  );
};

export default ParallaxHero;
