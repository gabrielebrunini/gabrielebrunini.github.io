import { Section } from "@/components/layout/Section";
import { CV_DATA } from "@/data/cv";
import { Globe } from "lucide-react";

export function Languages() {
  return (
    <Section title="Languages" id="languages" className="pb-24">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {CV_DATA.languages.map((lang, index) => (
          <div 
            key={index} 
            className="flex items-center gap-4 bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-5 hover:bg-card hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">{lang.name}</h4>
              <p className="text-sm text-muted-foreground">{lang.proficiency}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
