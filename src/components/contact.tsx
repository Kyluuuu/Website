import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 animate-fade-in-up"
      style={{ animationDelay: "0.6s", animationFillMode: "backwards" }}
    >
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-mono uppercase text-primary text-glow">
          [ Let's Build Something Great ]
        </h2>
        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed mt-4">
          Have a project in mind, or just want to connect? I'd love to hear from you.
        </p>
        <div className="mt-8">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:box-glow text-lg font-mono"
          >
            <a href="mailto:thomas.mikic123@gmail.com">
              <Mail className="mr-2 h-5 w-5" /> thomas.mikic123@gmail.com
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
