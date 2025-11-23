import { Github, Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40">
      <div className="container flex flex-col sm:flex-row h-auto sm:h-20 py-6 sm:py-0 items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center sm:text-left font-mono">
          &copy; {currentYear} Thomas Mikic // All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/Kyluuuu" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/thomas-mikic/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};