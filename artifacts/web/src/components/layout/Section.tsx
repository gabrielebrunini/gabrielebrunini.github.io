import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`py-12 md:py-16 ${className}`}
    >
      {title && (
        <h2 className="text-3xl font-display font-bold text-foreground mb-8 flex items-center gap-4">
          {title}
          <span className="h-px bg-border flex-1 ml-4 hidden sm:block"></span>
        </h2>
      )}
      {children}
    </motion.section>
  );
}
