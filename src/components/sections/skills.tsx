import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AngularIcon, TypeScriptIcon, NextjsIcon, TailwindIcon, FirebaseIcon, ReactIcon } from "@/components/icons";
import { Code, Database, GitMerge, Combine, LayoutTemplate } from "lucide-react";

const skills = [
  { name: "HTML5", icon: <Code className="h-10 w-10 text-primary" /> },
  { name: "CSS3", icon: <LayoutTemplate className="h-10 w-10 text-primary" /> },
  { name: "JavaScript", icon: <Combine className="h-10 w-10 text-primary" /> },
  { name: "TypeScript", icon: <TypeScriptIcon className="h-10 w-10" /> },
  { name: "Angular", icon: <AngularIcon className="h-10 w-10" /> },
  { name: "React", icon: <ReactIcon className="h-10 w-10" /> },
  { name: "Next.js", icon: <NextjsIcon className="h-10 w-10" /> },
  { name: "Tailwind CSS", icon: <TailwindIcon className="h-10 w-10" /> },
  { name: "Firebase", icon: <FirebaseIcon className="h-10 w-10" /> },
  { name: "Git", icon: <GitMerge className="h-10 w-10 text-primary" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Skills & Technologies
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm proficient in a range of modern web technologies, with a strong focus on the front-end and a keen interest in expanding my skills to become a full-stack developer.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {skills.map((skill) => (
            <Card key={skill.name} className="flex flex-col items-center justify-center p-4 text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="flex flex-col items-center justify-center gap-4 p-0">
                {skill.icon}
                <p className="font-semibold">{skill.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
