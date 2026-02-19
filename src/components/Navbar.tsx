import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Work", path: "/work" },
  { label: "Resume", path: "/resume" },
];

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-background/80 border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <Link to="/" className="text-xl font-bold tracking-tight text-gradient">
        PORTFOLIO
      </Link>
      <div className="flex gap-8">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="relative text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary"
          >
            <span
              className={
                location.pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground"
              }
            >
              {item.label}
            </span>
            {location.pathname === item.path && (
              <motion.div
                layoutId="nav-indicator"
                className="absolute -bottom-1 left-0 right-0 h-px bg-primary"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
