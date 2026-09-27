import { Section } from "@/components/layout/Section";
import { CV_DATA } from "@/data/cv";
import { ArrowUpRight, FolderGit2 } from "lucide-react";

export function Projects() {
  return (
    <Section title="Projects" id="projects">
      <div className="space-y-4">
        {CV_DATA.projects.map((project) => (
          <article
            key={project.title}
            className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
          >
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 shrink-0">
                <FolderGit2 className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground font-display">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-primary shrink-0">{project.period}</p>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-3">{project.description}</p>
                {"link" in project && project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-primary hover:underline"
                  >
                    {project.linkLabel}
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
