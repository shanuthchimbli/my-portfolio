import { motion } from "framer-motion";
import { GlassCard } from "../GlassCard";
import { Cloud, Container, GitBranch, Activity, Shield, Wrench, GraduationCap, Award } from "lucide-react";
import { TechIcon } from "../TechIcon";

const skillCategories = [
  {
    title: "Cloud & IaC",
    icon: Cloud,
    skills: ["AWS", "Terraform", "CloudFormation"],
    techIcons: ["aws", "terraform"],
  },
  {
    title: "Containers & Orchestration",
    icon: Container,
    skills: ["Kubernetes", "Docker", "Helm", "PCF"],
    techIcons: ["kubernetes", "docker"],
  },
  {
    title: "CI/CD & Automation",
    icon: GitBranch,
    skills: ["Jenkins", "GitHub Actions", "GitLab CI", "Groovy", "Shell"],
    techIcons: ["jenkins", "github", "gitlab", "bash"],
  },
  {
    title: "Monitoring & Observability",
    icon: Activity,
    skills: ["Prometheus", "Grafana", "Splunk", "ELK", "Dynatrace"],
    techIcons: ["prometheus", "grafana"],
  },
  {
    title: "Security / DevSecOps",
    icon: Shield,
    skills: ["Vault", "SonarQube", "Checkmarx", "Snyk"],
    techIcons: [],
  },
  {
    title: "Tools & Languages",
    icon: Wrench,
    skills: ["PostgreSQL", "RabbitMQ", "Git", "JUnit", "Python", "Linux"],
    techIcons: ["postgresql", "python", "linux"],
  },
];

const certifications = [
  {
    name: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    icon: "aws",
  },
  {
    name: "ChatGPT AI Prompt Engineer",
    issuer: "OpenAI",
    icon: "python",
  },
];

const education = [
  {
    degree: "MSc Cloud Computing",
    institution: "University of Leicester",
    icon: GraduationCap,
  },
  {
    degree: "B.E Computer Science",
    institution: "JNTU",
    icon: GraduationCap,
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for modern DevOps and cloud engineering
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground border border-border/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {category.techIcons.length > 0 && (
                  <div className="flex gap-2 mt-4 pt-4 border-t border-border/50">
                    {category.techIcons.map((icon) => (
                      <TechIcon key={icon} name="" icon={icon} className="!p-2" />
                    ))}
                  </div>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Education */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Certifications</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.name} className="flex items-center gap-4 p-3 rounded-xl bg-secondary/50">
                    <TechIcon name="" icon={cert.icon} className="!p-2" />
                    <div>
                      <p className="font-medium text-sm">{cert.name}</p>
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.degree} className="flex items-center gap-4 p-3 rounded-xl bg-secondary/50">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <edu.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{edu.degree}</p>
                      <p className="text-xs text-muted-foreground">{edu.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
