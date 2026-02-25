import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const certs = [
  { title: "Prompt Design in Vertex AI", issuer: "Google Cloud", link: "https://www.credly.com/badges/261fb9bb-0576-449a-9944-ffdb9a7aebe7/public_url" },
  { title: "Data Analysis with Python", issuer: "IBM SkillsBuild · 2025", link: "https://www.credly.com/badges/82e164ee-ba9a-41fd-8a80-58e462025b23/public_url" },
  { title: "Data Mining", issuer: "NPTEL · 2024", link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs19/Course/NPTEL25CS19S43640487301227410.pdf" },
  { title: "Oracle AI Foundations", issuer: "Oracle", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=CA3F4BD45277B4B68FDBB5D49AF4BCD3D7473FB8941B651DB46B642AEEAC4B5E" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm font-mono text-primary/70 tracking-widest uppercase mb-2">Certifications</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 text-foreground">Always learning</h2>
        <p className="text-sm italic text-muted-foreground mb-10">Continuous learning, one step at a time.</p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {certs.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass rounded-xl p-5 hover:glow-blush transition-all duration-300 group flex flex-col justify-between min-h-[120px]"
            >
              <div>
                <h3 className="font-sans font-medium text-foreground text-sm leading-snug mb-2">{cert.title}</h3>
                <p className="text-muted-foreground text-xs">{cert.issuer}</p>
              </div>
              <div className="flex items-center gap-1 text-primary/60 group-hover:text-primary text-xs mt-3 transition-colors">
                <ExternalLink size={12} />
                <span>View</span>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CertificationsSection;
