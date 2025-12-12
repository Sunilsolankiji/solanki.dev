import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t flex items-center justify-center">
      <div className="container px-4 md:px-6 text-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            Get In Touch
          </h2>
          <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out!
          </p>
        </div>
        <div className="my-8">
            <Button asChild size="lg">
                <a href="mailto:sunilso9644@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Say Hello
                </a>
            </Button>
        </div>
        <div className="flex justify-center space-x-4 mb-8">
            <a href="https://github.com/SunilSolankiji" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/devsunilsolanki" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-6 w-6" />
            </a>
        </div>
        <div className="text-sm text-muted-foreground">
          © {year} Sunil Solanki. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
