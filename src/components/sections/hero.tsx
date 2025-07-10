import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="w-full min-h-[calc(100dvh-56px)] flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
                Sunil Solanki
              </h1>
              <p className="max-w-prose text-muted-foreground md:text-xl">
                Computer Science Student & Aspiring Full-Stack Developer.
                <br />
                Passionate about building modern web applications and learning new technologies.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <a href="#projects">
                  View My Work
                  <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/IMG_3136.jpg"
              alt="Sunil Solanki"
              width={550}
              height={550}
              className="rounded-full object-cover object-top aspect-square shadow-2xl border-4 border-primary brightness-90"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
