import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 bg-card flex items-center justify-center"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              About Me
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Software Developer with 4+ years of experience specializing in Angular, React, JavaScript,
              TypeScript, and modern UI frameworks. I have built
              scalable dashboards, JavaScript Gantt Chart and TourJS libraries and
              high-quality UI systems across multiple domains. Additionally, I
              designed and developed a reusable Angular Component Library now
              used across 30+ projects, improving development efficiency,
              consistency, and code maintainability across teams. Known for
              writing clean, modular code, optimizing UI performance, and
              delivering fast, reliable features in high-impact environments.
            </p>
          </div>
          <div className="flex justify-center space-x-4 pt-4">
            <Button asChild variant="outline">
              <a
                href="https://github.com/SunilSolankiji"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button asChild>
              <a
                href="https://www.linkedin.com/in/devsunilsolanki"
                target="_blank"
                rel="noopener noreferrer"
              >
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
