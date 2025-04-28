import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Languages, Smile } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="w-full bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
             <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I am Bhavuk Adlakha, a final-year B.Tech Computer Science student at Amity University, Noida (Batch 2021–2025). With strong problem-solving skills, a dynamic thinking approach, and a passion for continuous learning, I love building projects that make an impact.
            </p>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I have developed a fully functional Inventory Management System from scratch, integrating sales tracking, billing, credit management, employee tracking, and AI-powered analytics.
            </p>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm currently deepening my skills in AI/ML, DSA (Data Structures & Algorithms), and full-stack development to solve larger, more complex real-world problems.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Noida, India</span>
              </div>
              <div className="flex items-center gap-2">
               <Languages className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">English, Hindi</span>
              </div>
              <div className="flex items-center gap-2">
                <Smile className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Learning tech, gaming</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
           <Avatar className="w-48 h-48 lg:w-64 lg:h-64 border-4 border-primary shadow-lg">
               <AvatarImage src="/Screenshot 2025-04-27 193958.png" alt="Bhavuk Adlakha" />
               <AvatarFallback>BA</AvatarFallback>
             </Avatar>
          </div>
        </div>
      </div>
    </section>
  );
}
