import { Section } from "@/components/layout/Section";
import { CV_DATA } from "@/data/cv";
import { Building2, Calendar } from "lucide-react";

export function Experience() {
  return (
    <Section title="Experience" id="experience">
      <div className="space-y-12">
        {CV_DATA.experience.map((company, index) => (
          <div key={index} className="relative">
            {/* Company Header */}
            <div className="flex items-start md:items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 shrink-0">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground font-display">
                  {company.company}
                </h3>
                <p className="text-muted-foreground flex items-center gap-2 mt-1">
                  <span>{company.location}</span>
                </p>
              </div>
            </div>

            {/* Roles Timeline */}
            <div className="relative border-l-2 border-border/50 ml-6 pl-8 space-y-8 pb-4">
              {company.roles.map((role, roleIndex) => (
                <div key={roleIndex} className="relative group">
                  {/* Timeline dot */}
                  <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary/50 group-hover:border-primary group-hover:bg-primary/20 transition-colors shadow-[0_0_0_4px_var(--background)]" />
                  
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <h4 className="text-lg font-semibold text-foreground">
                      {role.title}
                    </h4>
                    <div className="flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                      <Calendar className="w-4 h-4" />
                      {role.period}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mt-4 text-muted-foreground">
                    {role.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex gap-3 leading-relaxed">
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
