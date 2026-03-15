import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { CV_DATA } from "@/data/cv";

export function Hero() {
  const { name, title, location, phone, email, linkedin, github } = CV_DATA.header;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-20 md:py-32 relative"
    >
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/15 via-background to-background -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
        <div className="space-y-4 flex-1">
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-display font-bold tracking-tight text-foreground">
            {name}
          </motion.h1>
          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl text-primary font-medium flex items-center gap-3">
            <span className="w-8 h-1 bg-primary rounded-full hidden sm:block" />
            {title}
          </motion.h2>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-4 mt-6 text-muted-foreground font-medium">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              <span>{phone}</span>
            </div>
            <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-5 h-5 text-primary" />
              <span>{email}</span>
            </a>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="flex gap-4">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 rounded-2xl bg-card border border-border shadow-lg shadow-black/20 text-foreground hover:bg-primary/10 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 group"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 group-hover:text-primary transition-colors" />
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 rounded-2xl bg-card border border-border shadow-lg shadow-black/20 text-foreground hover:bg-primary/10 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 group"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 group-hover:text-primary transition-colors" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
