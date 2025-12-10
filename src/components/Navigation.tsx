import { motion } from "framer-motion";
import { Home, User, Briefcase, Code2, Mail, FileText, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "About", href: "#about" },
  { icon: Briefcase, label: "Experience", href: "#experience" },
  { icon: Sparkles, label: "Skills", href: "#skills" },
  { icon: Code2, label: "Projects", href: "#projects" },
  { icon: FileText, label: "Cover Letter", href: "#cover-letter" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-2 px-4 py-3 bg-card/80 backdrop-blur-2xl border border-border/50 rounded-2xl shadow-dock">
        {navItems.map((item, index) => (
          <motion.button
            key={item.label}
            onClick={() => scrollToSection(item.href)}
            className={cn(
              "dock-item group relative"
            )}
            whileHover={{ scale: 1.15, y: -4 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.05 }}
          >
            <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-medium bg-card border border-border rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
              {item.label}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
};
