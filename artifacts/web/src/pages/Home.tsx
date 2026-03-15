import { Hero } from "@/components/cv/Hero";
import { Profile } from "@/components/cv/Profile";
import { Experience } from "@/components/cv/Experience";
import { Education } from "@/components/cv/Education";
import { Languages } from "@/components/cv/Languages";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-primary/30 selection:text-primary-foreground">
      {/* Abstract Background Noise / Texture (subtle) */}
      <div className="fixed inset-0 z-[-10] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
      
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <Hero />
        <Profile />
        <Experience />
        <Education />
        <Languages />
        
        {/* Footer */}
        <footer className="py-8 border-t border-border mt-12 text-center text-muted-foreground text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Gabriele Brunini. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Designed & Built with <span className="text-primary">♥</span>
          </p>
        </footer>
      </div>
    </main>
  );
}
