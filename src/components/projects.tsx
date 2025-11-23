import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, LayoutTemplate, Activity, Layers, Users, Cpu, BrainCircuit } from "lucide-react";




const projects = [
  {
    title: "Honours Thesis: AI Compression for Edge Devices",
    description: "Comparative Study that finds that standard INT4 post training quantisation is the most effective and practical way to compress large AI models for edge devices, outperforming novel alternatives in accuracy, efficiency, and deployment.​",
    tags: ["Python", "PyTorch", "HuggingFace"],
    link: "https://github.com/Kyluuuu/AI-LLM-Compression",
    icon: <Cpu className="h-6 w-6 text-primary" />
  },
  {
    title: "Minecraft Remastered",
    description: "Developed a Minecraft clone in Java using jMonkeyEngine and OpenGL, featuring custom 3D rendering and an optimised pipeline with vertex, index, and UV coordinate matrices. Enhanced GPU performance by 300% through greedy meshing, and advanced culling techniques. Built a scalable, multithreaded world generation system for smooth gameplay.",
    tags: ["Java", "OpenGL", "jMonkeyEngine", "Maven", "Multithreading"],
    link: "https://github.com/Kyluuuu/MC-Clone",
    icon: <Users className="h-6 w-6 text-primary" />
  },
  {
    title: "Microscope Embedded System",
    description: "Engineered an embedded control system in Rust and C for automated adjustment of scientific microscopes, integrating ESP32, servo motors, and custom 3D printed actuators. Deployed on Linux for real time data streaming and motor coordination with full error recovery. Delivered technical documentation, APIs, and assembly schematics for reproducibility and cross team use.",
    tags: ["Rust", "C", "Linux", "ESP32", "3D Printing"],
    link: "https://github.com/AJW737/C-Code-ESP-ENG",
    icon: <BrainCircuit className="h-6 w-6 text-primary" />
  },
  { 
    title: "AI Stock Trader",
    description: "Developed an autonomous stock trading agent in Python using PPO and LSTM networks, trained on multi year market datasets. Backtested trading strategies that consistently outperformed baseline, and used SHAP for policy interpretability. Released open source documentation of the model architecture, hyperparameters, and data pipeline.",
    tags: ["Python", "Reinforcement Learning", "PPO", "LSTM", "Trading Gym"],
    link: "https://github.com/Kyluuuu/AI-Stock-Trading-Bot",
    icon: <Activity className="h-6 w-6 text-primary" />
  },
  {
    title: "Metro System Controller",
    description: "Built a real time metro control system in Java, C, and Python to coordinate blade runners and stations with a multidisciplinary team. Implemented multithreading for handling 1,000+ UDP requests per second and designed interface specs for hardware and software integration. Ensured reliability through extensive testing and flawless simulation.",
    tags: ["Java", "C", "Python", "JSON", "Multithreading", "UDP"],
    link: "https://github.com/Vchandrapati/ENG3000MCP",
    icon: <LayoutTemplate className="h-6 w-6 text-primary" />
  },
  {
    title: "Mega TickTackeToe",
    description: "Developed a web based interactive Ultimate Tick Tack Toe game in Godot with GDScript, featuring real time multiplayer using AWS cloud for low latency networking and game state synchronisation.",
    tags: ["GDScript", "Godot", "AWS", "Multiplayer", "Game Development"],
    link: "https://github.com/Kyluuuu/UltimateTickTackToe",
    icon: <Layers className="h-6 w-6 text-primary" />
  }
];

export const Projects = () => {
  return (
    <section 
      id="projects" 
      className="container py-12 md:py-24"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-mono uppercase text-primary text-glow">
          [ Featured Projects ]
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
          A selection of projects that showcase my passion for building software.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 mt-8">
        {projects.map((project) => (
          <Card 
            key={project.title} 
            className="group relative flex flex-col overflow-hidden bg-secondary/50 border-2 border-border hover:border-primary transition-colors duration-200"
          >
            <CardHeader className="z-10">
              <CardTitle className="flex items-center justify-between font-mono text-accent">
                <span className="flex items-center gap-3">
                  {project.icon}
                  {project.title}
                </span>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`View ${project.title} project`}
                >
                  <ArrowUpRight className="h-7 w-7" />
                </a>
              </CardTitle>
              <CardDescription className="pt-2 text-muted-foreground">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="z-10 flex-grow flex flex-col justify-end">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="outline" 
                    className="border-accent/50 text-accent bg-accent/10"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
