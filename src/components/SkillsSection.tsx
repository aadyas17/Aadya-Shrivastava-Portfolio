import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Languages",
    skills: [
      { name: "Python", color: "from-[#3776AB] to-[#FFD43B]" },
      { name: "Java", color: "from-[#ED8B00] to-[#5382A1]" },
      { name: "C", color: "from-[#A8B9CC] to-[#659BD3]" },
    ],
  },
  {
    category: "Web",
    skills: [
      { name: "HTML", color: "from-[#E34F26] to-[#F06529]" },
      { name: "CSS", color: "from-[#1572B6] to-[#33A9DC]" },
      { name: "JavaScript", color: "from-[#F7DF1E] to-[#F0DB4F]" },
    ],
  },
  {
    category: "AI/ML",
    skills: [
      { name: "Generative AI", color: "from-[#8B5CF6] to-[#EC4899]" },
      { name: "Scikit-learn", color: "from-[#F89939] to-[#3499CD]" },
      { name: "Transformers", color: "from-[#FFD21E] to-[#FF9D00]" },
      { name: "BERT", color: "from-[#4285F4] to-[#34A853]" },
      { name: "OpenCV", color: "from-[#5C3EE8] to-[#00FF00]" },
    ],
  },
  {
    category: "Data & Tools",
    skills: [
      { name: "Pandas", color: "from-[#150458] to-[#E70488]" },
      { name: "NumPy", color: "from-[#4DABCF] to-[#4B73C9]" },
      { name: "Matplotlib", color: "from-[#11557C] to-[#E24A33]" },
      { name: "Tableau", color: "from-[#E97627] to-[#C72037]" },
      { name: "MySQL", color: "from-[#4479A1] to-[#00758F]" },
      { name: "SQL", color: "from-[#336791] to-[#4169E1]" },
      { name: "Jupyter", color: "from-[#F37626] to-[#E46E2E]" },
      { name: "MS Excel", color: "from-[#217346] to-[#185C37]" },
    ],
  },
  {
    category: "SAP & Enterprise Tools",
    skills: [
      { name: "SAP ABAP", color: "from-[#0FAAFF] to-[#003B7E]" },
      { name: "SAP BTP", color: "from-[#0FAAFF] to-[#1661BE]" },
    ],
  },
];

const SkillsSection = () => {
  let globalIndex = 0;

  return (
    <section id="skills" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm font-mono text-primary/70 tracking-widest uppercase mb-2">Skills</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 text-foreground">What I work with</h2>
        <p className="text-sm italic text-muted-foreground mb-10">Technologies I use to build and keep learning.</p>

        <div className="space-y-8">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-medium text-muted-foreground mb-3 tracking-wide">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => {
                  const i = globalIndex++;
                  return (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03, duration: 0.3 }}
                      whileHover={{ scale: 1.08, y: -3 }}
                      className="relative px-4 py-2 rounded-full text-sm font-medium glass border border-border/30 cursor-default transition-all duration-300 hover:border-border/60 group overflow-hidden"
                    >
                      <span className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-15 transition-opacity duration-300 rounded-full`} />
                      <span className="relative flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color}`} />
                        <span className="text-foreground/90">{skill.name}</span>
                      </span>
                    </motion.span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
