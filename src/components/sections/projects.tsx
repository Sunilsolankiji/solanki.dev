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
    description:
      "A lightweight, interactive Gantt chart component built with vanilla JavaScript, offering a simple way to visualize project timelines.",
    image: "/images/jsgantt.png",
    imageHint: "gantt chart",
    tags: ["JavaScript", "HTML", "CSS"],
    codeLink: "https://github.com/SunilSolankiji/javascriptgantt",
    demoLink: "https://sunilsolankiji.github.io/javascriptgantt/",
    docLink: "https://sunilsolankiji.github.io/js-gantt-docs/",
  },
  {
    title: "TourJS",
    description:
      "A guided tour/onboarding library enabling developers to create step-by-step walkthroughs for any web application,	Improved user learning and navigation through interactive UI overlays.",
    image: "/images/jstour.png",
    imageHint: "JS Tour",
    tags: ["JavaScript", "HTML", "CSS"],
    codeLink: "https://github.com/Sunilsolankiji/tourjs",
    demoLink: "https://sunilsolankiji.github.io/javascriptgantt/",
  },
  {
    title: "Angular UI Component Library",
    description: `A scalable Angular UI Component Library.Built reusable components (tables, forms, dialogs, charts, layout modules, dynamic UI elements and more) to standardize the design system. Reduced project development time by enabling teams to plug-and-play pre-built, customizable UI components.`,
    image: "/images/angular-ui-lib.png",
    imageHint: "Angular UI Component Library",
    tags: ["Angular", "TypeScript", "HTML", "CSS"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              My Projects
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the projects I've worked on. Each one represents
              a learning journey and a step forward in my development career.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="flex flex-col hover:shadow-lg transition-shadow duration-300"
            >
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
              <CardFooter className="gap-2 flex-wrap">
                {project?.codeLink && (
                  <Button asChild variant="outline" className="w-full">
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
                {project?.demoLink && (
                  <Button asChild variant="outline" className="w-full">
                    <a
                      href={project?.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
                {project?.docLink && (
                  <Button asChild variant="outline" className="w-full">
                    <a
                      href={project?.docLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Docs
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
