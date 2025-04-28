import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download, ArrowRight, Send } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="hero" className="w-full py-24 md:py-32 lg:py-40 xl:py-48 bg-gradient-to-b from-background to-accent/10 relative overflow-hidden">
      {/* Animated Shapes Background */}
       <div className="absolute inset-0 -z-10 opacity-10 dark:opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full filter blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary rounded-full filter blur-3xl animate-pulse delay-1000"></div>
         <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent rounded-full filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground/80">
                Bhavuk Adlakha
              </h1>
              <p className="text-xl text-muted-foreground md:text-2xl">
                Problem Solver | Developer | AI Enthusiast
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                I’m a Computer Science Engineer passionate about building smart, efficient software systems and exploring AI and Machine Learning.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#projects">
                  View My Work <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">
                  Contact Me <Send className="ml-2" />
                </Link>
              </Button>
              {/* Add link to your actual resume file */}
              <Button asChild variant="secondary" size="lg" disabled>
                 <Link href="#">
                  Download Resume <Download className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
          {/* Optional: Add an image or illustration here */}
          {/* <Image
            alt="Hero"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            height="550"
            src="/placeholder.svg" // Replace with your image
            width="550"
          /> */}
        </div>
      </div>
    </section>
  );
}
