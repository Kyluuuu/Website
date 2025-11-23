import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const About = () => {
  return (
    <section id="about" className="container py-12 md:py-24 animate-fade-in-up" style={{ animationDelay: "0.1s", animationFillMode: "backwards" }}>
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-mono uppercase text-primary text-glow">
          [ About Me ]
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center mt-8 max-w-4xl mx-auto">
        <div className="flex justify-center md:col-span-1">
          <div className="relative p-1 border border-primary/50 box-glow" style={{ clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)' }}>
            <Avatar className="h-40 w-40" style={{ clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)' }}>
            <AvatarImage
                src="/Website/ProfilePictureLN.jpg"
                alt="Thomas Mikic"
                style={{
                  objectFit: "cover",
                  objectPosition: "top center", // or "center center", "bottom center"
                }}
              />
            <AvatarFallback>TM</AvatarFallback>
          </Avatar>

          </div>
        </div>
        <div className="md:col-span-2 space-y-4 text-center md:text-left">
          <p className="text-muted-foreground md:text-lg">
            Hello! I'm Thomas, a dedicated software engineer completing my Honours degree at Macquarie University.
             With a strong foundation in both academic and hands on experience, I've tackled a wide range of projects 
             involving system architecture, machine learning, web development, and low level programming. My work is guided by a 
             passion for building impactful, efficient, and user-focused solutions.
          </p>
          <p className="text-muted-foreground md:text-lg">
            I've honed my skills across languages like Java, Python, and C/C++, and frameworks such as React.
             I'm particularly interested in backend systems, AI, and software infrastructure that drives meaningful progress. 
             I'm actively seeking opportunities where I can apply my skills, continue learning, and contribute to high impact teams.
          </p>
        </div>
      </div>
    </section>
  );
};