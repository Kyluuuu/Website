import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "C/C++", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Spring Boot", "Node.js", "Tailwind CSS"],
  },
  {
    title: "Tools & Databases",
    skills: ["Git", "Docker", "Linux", "PostgreSQL", "Firebase"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="container p-12 md:py-24 bg-background/50 border border-border rounded-lg animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}>
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-mono uppercase text-primary text-glow">
          [ Technical Skills ]
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
          My toolbox for building and deploying software solutions.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3 mt-8">
        {skillCategories.map((category) => (
          <Card key={category.title} className="bg-secondary/50 backdrop-blur-sm border-2 border-border transition-all duration-300 ease-in-out hover:border-primary hover:box-glow">
            <CardHeader>
              <CardTitle className="font-mono text-accent text-center">{category.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap justify-center gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill} variant="outline" className="border-primary/50 text-primary bg-primary/10 font-mono">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};