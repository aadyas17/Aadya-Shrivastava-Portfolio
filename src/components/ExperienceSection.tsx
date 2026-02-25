import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Intern",
    company: "HRM Solutions Pvt Ltd",
    period: "Feb 2025 – Present",
    description: "SAP ABAP & SAP BTP for HRMS enterprise systems.",
  },
  {
    role: "AI Intern",
    company: "TechSaksham (Microsoft & SAP via Edunet)",
    period: "Dec 2024 – Jan 2025",
    description: "Built a face recognition attendance system using Python and OpenCV.",
  },
  {
    role: "AI Intern",
    company: "SkillDzire (AICTE)",
    period: "Nov 2024 – Dec 2024",
    description: "Worked on ML foundations: regression, classification, and clustering.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm font-mono text-primary/70 tracking-widest uppercase mb-2">Experience</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 text-foreground">Where I've worked</h2>
        <p className="text-sm italic text-muted-foreground mb-10">Learning by building and collaborating.</p>

        <div className="relative">
          {/* Center timeline line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-accent/30 to-transparent" />
          {/* Mobile left line */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent" />

          <div className="space-y-10 md:space-y-12">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className={`relative flex items-start ${
                    /* Mobile: always left-aligned */
                    "pl-12 md:pl-0"
                  }`}
                >
                  {/* Mobile dot */}
                  <div className="md:hidden absolute left-2.5 top-2 w-3 h-3 rounded-full bg-primary border-2 border-background" />

                  {/* Desktop zigzag layout */}
                  <div className={`hidden md:grid md:grid-cols-2 md:gap-8 w-full items-start`}>
                    {isLeft ? (
                      <>
                        <div className="text-right">
                          <div className="glass rounded-xl p-5 md:p-6 hover:glow-lavender transition-all duration-300 inline-block text-left">
                            <div className="flex flex-col gap-1 mb-2">
                              <h3 className="font-sans font-semibold text-foreground flex items-center gap-2">
                                <Briefcase size={15} className="text-primary" />
                                {exp.role} — {exp.company}
                              </h3>
                              <span className="text-xs font-mono text-muted-foreground">{exp.period}</span>
                            </div>
                            <p className="text-muted-foreground text-sm">{exp.description}</p>
                          </div>
                        </div>
                        <div className="relative">
                          <div className="absolute -left-[20px] top-2 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="relative">
                          <div className="absolute -right-[20px] top-2 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                        </div>
                        <div>
                          <div className="glass rounded-xl p-5 md:p-6 hover:glow-lavender transition-all duration-300 inline-block">
                            <div className="flex flex-col gap-1 mb-2">
                              <h3 className="font-sans font-semibold text-foreground flex items-center gap-2">
                                <Briefcase size={15} className="text-primary" />
                                {exp.role} — {exp.company}
                              </h3>
                              <span className="text-xs font-mono text-muted-foreground">{exp.period}</span>
                            </div>
                            <p className="text-muted-foreground text-sm">{exp.description}</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Mobile card */}
                  <div className="md:hidden glass rounded-xl p-5 hover:glow-lavender transition-all duration-300 w-full">
                    <div className="flex flex-col gap-1 mb-2">
                      <h3 className="font-sans font-semibold text-foreground flex items-center gap-2">
                        <Briefcase size={15} className="text-primary" />
                        {exp.role} — {exp.company}
                      </h3>
                      <span className="text-xs font-mono text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{exp.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
