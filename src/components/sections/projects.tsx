import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "JavaScript Gantt",
    description: "A lightweight, interactive Gantt chart component built with vanilla JavaScript, offering a simple way to visualize project timelines.",
    image: "https://placehold.co/600x400.png",
    imageHint: "gantt chart",
    tags: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/SunilSolankiji/javascriptgantt",
  },
  {
    title: "ng19-flatpickr",
    description: "A seamless Angular (v19) wrapper for the powerful Flatpickr library, making date and time selection in Angular applications elegant and easy.",
    image: "https://placehold.co/600x400.png",
    imageHint: "calendar component",
    tags: ["Angular", "TypeScript", "Flatpickr"],
    link: "https://github.com/SunilSolankiji/ng19-flatpickr",
  },
  {
    title: "ToDo App",
    description: "A classic and clean To-Do list application to manage daily tasks, built to explore core concepts of modern frontend frameworks.",
    image: "https://placehold.co/600x400.png",
    imageHint: "todo list",
    tags: ["Angular", "TypeScript", "HTML/CSS"],
    link: "https://github.com/SunilSolankiji/todo",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website (the one you're on right now!) built with Next.js and Tailwind CSS, showcasing my projects and skills.",
    image: "https://placehold.co/600x400.png",
    imageHint: "portfolio website",
    tags: ["Next.js", "React", "Tailwind CSS"],
    link: "https://github.com/SunilSolankiji/sunilportfolio",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              My Projects
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the projects I've worked on. Each one represents a learning journey and a step forward in my development career.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                  data-ai-hint={project.imageHint}
                />
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
