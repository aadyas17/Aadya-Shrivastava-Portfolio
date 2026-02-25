import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

const socials = [
  { icon: Mail, label: "Email", href: "mailto:aadya17shrivastava@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/aadya-shrivastava-205aa8282" },
  { icon: Github, label: "GitHub", href: "https://github.com/aadyas17" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <p className="text-sm font-mono text-primary/70 tracking-widest uppercase mb-2">Contact</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 text-foreground">Get in touch</h2>
        <p className="text-sm italic text-muted-foreground mb-8">Got something in mind?</p>

        {/* Social icons */}
        <div className="flex justify-center gap-4 mb-10">
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass hover:glow-lavender text-muted-foreground hover:text-primary transition-all duration-300"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-border/30 text-center">
        <p className="text-xs text-muted-foreground">
          © 2026 Aadya Shrivastava
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
