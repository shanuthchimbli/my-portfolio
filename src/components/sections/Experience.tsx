import { motion } from "framer-motion";
import { GlassCard } from "../GlassCard";
import { Building2, Calendar, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    company: "HTC Global Services",
    role: "Engineer L2",
    period: "Dec 2020 – Jul 2024",
    location: "Chennai, India",
    highlights: [
      "Built enterprise CI/CD pipelines (Jenkins, GitLab CI) → 30% faster deployments",
      "Migrated pipelines to GitOps for improved reliability and traceability",
      "Managed EKS microservices using Docker & Helm charts",
      "PCF blue/green deployments achieving zero downtime releases",
      "Terraform infrastructure provisioning (VPC, Security Groups, Route53)",
      "Ansible automation → 40% better compliance across environments",
      "Observability setup: Prometheus, Grafana, Splunk, Dynatrace",
      "DevSecOps gates: Vault, SonarQube, Checkmarx, Snyk integration",
    ],
  },
  {
    company: "GM2",
    role: "Software Engineer",
    period: "Mar 2020 – Nov 2020",
    location: "Hyderabad, India",
    highlights: [
      "Migrated legacy Java 8 applications to Java 11",
      "Implemented Jenkins CI automation for build processes",
      "Dockerized and deployed microservices architecture",
      "Setup initial monitoring and alerting infrastructure",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building enterprise-grade infrastructure and automation solutions
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? "md:pr-8 md:text-right md:mr-auto md:w-1/2" : "md:pl-8 md:ml-auto md:w-1/2"
              }`}
            >
              {/* Timeline dot */}
              <div className={`absolute top-6 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg ${
                index % 2 === 0 ? "left-0 md:left-auto md:-right-2" : "left-0 md:-left-2"
              } -translate-x-1/2 md:translate-x-0`} />

              <GlassCard className="ml-6 md:ml-0">
                <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div className={index % 2 === 0 ? "md:text-right" : ""}>
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                    <p className="text-primary font-medium">{exp.role}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-left" : ""}`}>
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{highlight}</span>
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
