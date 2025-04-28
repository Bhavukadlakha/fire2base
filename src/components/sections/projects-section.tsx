import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Inventory Management System",
    description: "A complete desktop application for managing retail store inventory, billing, customer credits, employee tracking, and sales predictions.",
    features: [
      "Product Management (Add, Update, Delete)",
      "Billing System (auto-calculates discounts, stores bills)",
      "Credit Payment Management (send WhatsApp reminders)",
      "Sales Tracking by Employees (Daily, Weekly, Monthly)",
      "Restock Dashboard (critical stock alerts)",
      "AI Sales Prediction (future feature)",
      "Chatbot for Customer Interaction (in development)",
    ],
    techStack: ["Python (Tkinter GUI)", "SQLite", "Plotly", "yowsup (WhatsApp)"],
    imageUrl: "/Screenshot 2025-04-27 195045.png", // Placeholder Image
    githubLink: "https://github.com/Bhavukadlakha", // Replace with actual link if available
    liveLink: null,
  },
  {
    title: "Heart Disease Prediction ML Project",
    description: "An AI model that predicts the likelihood of heart disease based on user answers to basic health-related questions.",
    features: [],
    techStack: ["Python", "scikit-learn", "Streamlit (upcoming UI)"],
    imageUrl: "https://picsum.photos/seed/heart/600/400", // Placeholder Image
    githubLink: "https://github.com/Bhavukadlakha", // Replace with actual link
    liveLink: null,
  },
  {
    title: "Sales Dashboard Website (Upcoming)",
    description: "A web-based dashboard connected to the inventory system database to visualize sales trends, stock status, and employee performances.",
    features: [],
    techStack: ["HTML", "CSS", "JavaScript (basic)", "Flask/Django (future)", "Plotly.js"],
    imageUrl: "/Screenshot 2025-04-27 195059.png", // Placeholder Image
    githubLink: "https://github.com/Bhavukadlakha", // Replace with actual link
    liveLink: null,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full bg-secondary/50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">My Projects</h2>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="relative h-48">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </CardHeader>
              <CardContent className="flex-grow p-6 space-y-4">
                 <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                {project.features.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-1">Features:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {project.features.map((feature, index) => <li key={index}>{feature}</li>)}
                    </ul>
                  </div>
                )}
                 <div className="flex flex-wrap gap-2 pt-2">
                   {project.techStack.map((tech) => <Badge key={tech} variant="outline">{tech}</Badge>)}
                 </div>
              </CardContent>
               <CardFooter className="flex justify-end gap-2 p-4 border-t">
                 {project.githubLink && (
                   <Button variant="outline" size="sm" asChild>
                      <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                       <Github className="mr-2 h-4 w-4" /> GitHub
                     </Link>
                   </Button>
                 )}
                 {project.liveLink && (
                   <Button size="sm" asChild>
                     <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                       <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                     </Link>
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

import { Button } from "@/components/ui/button";
