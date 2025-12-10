import { motion } from "framer-motion";
import { GlassCard } from "../GlassCard";
import { ExternalLink, Github, Layers, Workflow, Database, Brain } from "lucide-react";

const projects = [
  {
    title: "Examination Paper Management System",
    description: "Full-stack examination management platform with automated CI/CD pipeline, microservice architecture, and ML-powered summarization.",
    tech: ["React", "Node.js", "MongoDB", "Docker", "Flask ML", "GitLab CI/CD"],
    highlights: [
      "Automated CI/CD pipeline with GitLab",
      "Microservice architecture design",
      "ML summarization microservice",
      "Fully containerized deployment",
    ],
    icon: Layers,
  },
  {
    title: "Enterprise CI/CD Platform",
    description: "Designed and implemented scalable CI/CD infrastructure supporting 50+ microservices with GitOps practices.",
    tech: ["Jenkins", "GitLab CI", "Kubernetes", "Helm", "ArgoCD"],
    highlights: [
      "30% reduction in deployment time",
      "GitOps workflow implementation",
      "Multi-environment support",
      "Automated rollback capabilities",
    ],
    icon: Workflow,
  },
  {
    title: "Cloud Infrastructure Automation",
    description: "Infrastructure as Code solution for AWS environments with comprehensive security and compliance controls.",
    tech: ["Terraform", "AWS", "Ansible", "Python", "Vault"],
    highlights: [
      "40% improvement in compliance",
      "VPC, EC2, RDS automation",
      "Secret management integration",
      "Cost optimization strategies",
    ],
    icon: Database,
  },
  {
    title: "Observability Stack Implementation",
    description: "End-to-end monitoring and alerting solution for microservices architecture with custom dashboards.",
    tech: ["Prometheus", "Grafana", "ELK Stack", "Dynatrace"],
    highlights: [
      "Real-time metrics collection",
      "Custom alerting rules",
      "Log aggregation pipeline",
      "Performance dashboards",
    ],
    icon: Brain,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world solutions demonstrating expertise in DevOps and cloud engineering
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full group">
                {/* Window controls */}
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border/50">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  <span className="ml-3 text-xs text-muted-foreground font-mono">
                    {project.title.toLowerCase().replace(/\s+/g, "-")}.project
                  </span>
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
