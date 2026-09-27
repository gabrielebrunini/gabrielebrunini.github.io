import { Section } from "@/components/layout/Section";
import { CV_DATA } from "@/data/cv";
import { Globe } from "lucide-react";

export function Languages() {
  return (
    <Section title="Languages" id="languages" className="pb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CV_DATA.languages.map((lang, index) => (
          <div 
            key={index} 
            className="flex flex-col gap-3 bg-white border border-border rounded-2xl p-6 hover:shadow-md hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                <Globe className="w-5 h-5" />
              </div>
              <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-primary rounded-full">
                {lang.proficiency}
              </span>
            </div>
            <div>
              <h4 className="font-semibold text-foreground text-lg">{lang.name}</h4>
              <p className="text-sm text-muted-foreground mt-1">{lang.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
