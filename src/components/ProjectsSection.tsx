import { motion } from "framer-motion";
import { ExternalLink, Github, TrendingUp } from "lucide-react";
import resumeAnalyzerImg from "@/assets/project-resume-analyzer.png";
import attendanceImg from "@/assets/project-attendance.png";
import imageEditorImg from "@/assets/project-image-editor.png";

const projects = [
  {
    title: "AI Resume Analyzer & Job Recommender",
    description: "Manual resume screening is slow and inconsistent. This NLP-based system uses BERT and Transformers to semantically understand resume content, match candidates to job descriptions, and surface skill gaps — helping reduce manual screening time significantly.",
    metric: "Helped reduce screening time",
    tech: ["Python", "Transformers", "HuggingFace", "BERT", "NLP"],
    image: resumeAnalyzerImg,
    links: { live: "https://huggingface.co/spaces/alien1713/Resume_analyzer", github: "https://github.com/aadyas17/Resume-analyzer-and-Job-Recommender" },
  },
  {
    title: "Real-Time Face Recognition Attendance",
    description: "Traditional attendance methods are error-prone and time-consuming. This system uses real-time facial recognition to detect and identify faces from a live camera feed, match them against an enrolled dataset, and log attendance automatically — improving processing efficiency.",
    metric: "Over 90% recognition accuracy",
    tech: ["Python", "OpenCV", "Pandas", "Computer Vision"],
    image: attendanceImg,
    links: { github: "https://github.com/aadyas17/Attendance-Management-System-using-Face-Recognition" },
  },
  {
    title: "Pro Image Editor",
    description: "Most image editors require heavy downloads or paid subscriptions. This fully browser-based suite offers crop, filters, brightness/contrast adjustments, and export — all built from scratch on HTML5 Canvas with REST APIs for extended functionality.",
    metric: "10+ editing tools, zero install",
    tech: ["HTML5", "CSS3", "JavaScript", "Canvas API", "REST APIs"],
    image: imageEditorImg,
    links: { live: "https://image-editor-self-kappa.vercel.app/", github: "https://github.com/aadyas17/Pro-Image-Editor" },
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm font-mono text-primary/70 tracking-widest uppercase mb-2">Projects</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 text-foreground">Things I've built</h2>
        <p className="text-sm italic text-muted-foreground mb-10">Work that speaks for itself.</p>

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl overflow-hidden border border-border/50 hover:glow-lavender transition-all duration-500 group"
            >
              {/* Project screenshot */}
              <div className="w-full h-48 bg-secondary/30 border-b border-border/30 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top" />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-primary text-sm font-medium shrink-0">
                    <TrendingUp size={14} />
                    {project.metric}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs rounded-full bg-secondary/80 text-secondary-foreground border border-border/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-primary hover:text-accent transition-colors">
                      <ExternalLink size={14} /> Live
                    </a>
                  )}
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-primary hover:text-accent transition-colors">
                    <Github size={14} /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
