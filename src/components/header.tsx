
export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <a href="/" className="font-mono font-bold tracking-widest text-lg text-primary text-glow uppercase">
          TM_
        </a>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium font-mono">
            <a href="https://kyluuuu.github.io/WebsitePortfolio/" target="_blank" className="transition-colors hover:text-primary text-muted-foreground uppercase">
              // Old Website
            </a>
            <a href="#about" className="transition-colors hover:text-primary text-muted-foreground uppercase">
              // About
            </a>
            <a href="#projects" className="transition-colors hover:text-primary text-muted-foreground uppercase">
              // Projects
            </a>
            <a href="#contact" className="transition-colors hover:text-primary text-muted-foreground uppercase">
              // Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};