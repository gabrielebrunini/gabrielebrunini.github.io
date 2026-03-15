import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { CV_DATA } from "@/data/cv";

export function Profile() {
  return (
    <Section title="Profile" id="profile">
      <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-6 md:p-8 shadow-xl shadow-black/10">
        <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-light mb-8">
          {CV_DATA.profile}
        </p>
        
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Core Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {CV_DATA.skills.map((skill) => (
              <Badge key={skill} variant="default">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
