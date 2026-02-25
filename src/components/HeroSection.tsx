import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";
import aadyaPhoto from "@/assets/aadya-photo.jpg";

const tagline = "Curious techie exploring AI, data, and meaningful digital experiences.";

const HeroSection = () => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < tagline.length) {
      const timeout = setTimeout(() => {
        setDisplayed(tagline.slice(0, index + 1));
        setIndex(index + 1);
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full grid md:grid-cols-2 gap-8 items-center">
        {/* Left — Text */}
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-mono text-primary/80 tracking-widest uppercase mb-6"
          />

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient">Aadya</span>{" "}
            <span className="text-foreground">Shrivastava</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="h-16 flex items-start mb-8">

            <p className="text-lg md:text-xl text-muted-foreground font-light italic">
              "{displayed}
              <span className="inline-block w-0.5 h-5 bg-primary ml-0.5 animate-pulse" />
              "
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex items-center gap-4">

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity">

              <Download size={16} /> Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right — Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="flex justify-center md:justify-end">

          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full glass glow-lavender flex items-center justify-center overflow-hidden">
            <img src={aadyaPhoto} alt="Aadya Shrivastava" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float">

        <ChevronDown size={24} />
      </motion.a>
    </section>);

};

export default HeroSection;
