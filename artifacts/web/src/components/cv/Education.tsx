import { Section } from "@/components/layout/Section";
import { CV_DATA } from "@/data/cv";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <Section title="Education" id="education">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CV_DATA.education.map((edu, index) => (
          <div 
            key={index} 
            className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-300">
              <GraduationCap className="w-16 h-16 text-primary" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-foreground font-display pr-12">
                {edu.institution}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {edu.location}
              </p>
              
              <div className="space-y-2">
                <p className="font-medium text-primary">
                  {edu.degree}
                </p>
                <p className="text-sm text-muted-foreground/80 font-mono">
                  {edu.period}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
