import { motion } from "framer-motion";
import { GlassCard } from "../GlassCard";
import { Award, Rocket, Shield, Zap } from "lucide-react";

const highlights = [
  {
    icon: Rocket,
    title: "30% Faster Deployments",
    description: "Optimized CI/CD pipelines for enterprise-scale delivery",
  },
  {
    icon: Shield,
    title: "Zero Downtime",
    description: "Blue/green deployments ensuring continuous availability",
  },
  {
    icon: Zap,
    title: "40% Better Compliance",
    description: "Automated infrastructure with Ansible & Terraform",
  },
  {
    icon: Award,
    title: "4.5+ Years Experience",
    description: "Enterprise DevOps solutions across UK & global markets",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about building scalable, secure, and automated infrastructure
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard className="h-full">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">Profile</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                DevOps Engineer with <strong className="text-foreground">4.5 years</strong> of experience delivering 
                automated CI/CD pipelines, scalable cloud architectures, secure DevSecOps environments, 
                and enterprise-grade deployments.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I specialise in <strong className="text-foreground">AWS, Kubernetes, Terraform, Jenkins, 
                observability stacks</strong>, and release automation. Proven success in reducing deployment 
                time, improving infrastructure consistency, and enabling zero-downtime releases.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20">
                  Graduate Visa
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-accent/10 text-accent border border-accent/20">
                  Full UK Driving License
                </span>
              </div>
            </GlassCard>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <GlassCard className="h-full text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
