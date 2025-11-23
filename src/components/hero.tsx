import { Button } from "@/components/ui/button";
import { Github, Linkedin, MoveRight } from "lucide-react";
import ScrambleText from "@/components/scramble-text";

export const Hero = () => {
  return (
    <section id="home" className="w-full py-24 md:py-32 lg:py-40">
      <div className="container text-center animate-fade-in-up" style={{ animationFillMode: "backwards" }}>
        <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-primary text-glow font-mono uppercase">
          <ScrambleText text="Thomas Mikic" />
        </h1>
        <p className="mt-4 text-lg font-medium text-accent text-glow-accent sm:text-xl md:text-2xl">
          <ScrambleText text="Software Engineer" revealDelay={500} />
        </p>
        <p className="mx-auto mt-6 max-w-[700px] text-muted-foreground md:text-xl">
          I build elegant, efficient, and user centric solutions that solve real world problems.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" variant="outline" className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:box-glow">
            <a href="#contact">
              Let's Collaborate <MoveRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="lg" asChild className="text-muted-foreground hover:bg-primary/10 hover:text-primary">
            <a href="/Website/Thomas_Mikic_Resume2.pdf" download="Thomas_Mikic_Resume.pdf" rel="noopener noreferrer">Download CV</a>
          </Button>
        </div>
        <div className="mt-10 flex justify-center gap-8">
          <a href="https://github.com/Kyluuuu" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
            <Github className="h-7 w-7" />
          </a>
          <a href="https://www.linkedin.com/in/thomas-mikic/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
            <Linkedin className="h-7 w-7" />
          </a>
        </div>
      </div>
    </section>
  );
};