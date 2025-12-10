import { motion } from "framer-motion";
import { Heart, Linkedin, Mail, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground flex items-center gap-1"
          >
            Designed by Shanuth Chimbli
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <a
              href="https://linkedin.com/in/shanuthchimbli/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
            <a
              href="mailto:shanuth.chimbli@gmail.com"
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <Mail className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground"
          >
            © {new Date().getFullYear()} All rights reserved
          </motion.p>
        </div>
      </div>
    </footer>
  );
};
