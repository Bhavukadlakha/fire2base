import React from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download, ArrowRight, Send } from 'lucide-react';
import Image from 'next/image';

export const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="w-full py-24 md:py-32 lg:py-40 xl:py-48 relative overflow-hidden group"
    >
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/WhatsApp Image 2025-02-11 at 1.29.39 AM (12).jpeg"
          alt="Background"
          fill
          className="object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-700"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background/50"></div>
      </div>

      {/* Enhanced Laser Border Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 border-[1px] border-blue-500/30 animate-pulse-slow"></div>
        <div className="absolute inset-[1px] border-[1px] border-blue-400/20 animate-pulse-slow delay-150"></div>
        <div className="absolute inset-[2px] border-[1px] border-blue-300/10 animate-pulse-slow delay-300"></div>
        
        {/* Enhanced Corner Laser Effects */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-blue-500/60 animate-glow"></div>
        <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-blue-500/60 animate-glow delay-150"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-blue-500/60 animate-glow delay-300"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-blue-500/60 animate-glow delay-450"></div>
      </div>

      {/* Content Container with Enhanced Z-index */}
      <div className="container px-4 md:px-6 relative z-20">
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
              <Button asChild className="text-lg">
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
        </div>
      </div>

      {/* Enhanced Glow Effects */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full filter blur-3xl animate-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-400/10 rounded-full filter blur-3xl animate-glow delay-150"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-600/10 rounded-full filter blur-2xl animate-glow delay-300"></div>
      </div>
    </section>
  );
};
