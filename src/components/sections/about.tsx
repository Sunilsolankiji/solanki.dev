import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-card flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              About Me
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm a passionate computer science student with a love for coding, continuous learning, and building beautiful, functional websites from scratch. I'm driven by the challenge of solving problems and the thrill of bringing ideas to life on the web. I am currently honing my skills with the goal of becoming a full-stack developer.
            </p>
          </div>
          <div className="flex justify-center space-x-4 pt-4">
              <Button asChild variant="outline">
                <a href="https://github.com/SunilSolankiji" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button asChild>
                <a href="https://in.linkedin.com/in/sunil-solanki-28b987175" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
