import { motion } from "framer-motion";
import { Download, Mail, ArrowDown, MapPin, Phone, Linkedin } from "lucide-react";
import { TechIcon } from "../TechIcon";

const techStack = [
  { name: "AWS", icon: "aws" },
  { name: "Kubernetes", icon: "kubernetes" },
  { name: "Terraform", icon: "terraform" },
  { name: "Docker", icon: "docker" },
  { name: "Jenkins", icon: "jenkins" },
  { name: "GitHub", icon: "github" },
];

export const Hero = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSkills = () => {
    document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background mesh gradient */}
      <div className="absolute inset-0 bg-mesh" />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        animate={{ 
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative z-10 py-20">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image Placeholder */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="mb-8"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent p-1">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-4xl font-bold gradient-text">
                SC
              </div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              <span className="gradient-text">Shanuth Chimbli</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              DevOps Engineer
            </p>
            <p className="text-lg text-muted-foreground/80 mb-6">
              Cloud • Kubernetes • CI/CD Specialist
            </p>
          </motion.div>

          {/* Location & Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-primary" />
              United Kingdom
            </span>
            <span className="flex items-center gap-1">
              <Phone className="w-4 h-4 text-primary" />
              +44 7443126885
            </span>
            <a 
              href="https://linkedin.com/in/shanuthchimbli/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4 text-primary" />
              LinkedIn
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <button onClick={scrollToContact} className="macos-button">
              <Mail className="w-4 h-4" />
              Hire Me
            </button>
            <a 
              href="#" 
              className="macos-button-secondary"
              onClick={(e) => { e.preventDefault(); alert("CV download will be available soon!"); }}
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
            <button onClick={scrollToSkills} className="macos-button-secondary">
              View Skills
            </button>
          </motion.div>

          {/* Tech Stack Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <p className="text-sm text-muted-foreground mb-4">Core Technologies</p>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <TechIcon
                  key={tech.name}
                  name={tech.name}
                  icon={tech.icon}
                  delay={0.6 + index * 0.1}
                />
              ))}
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.button
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 1, duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};
