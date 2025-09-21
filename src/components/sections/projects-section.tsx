import React from 'react';
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
      "AI Sales Prediction (using Linear Regression)",
      "Chatbot for Customer Interaction (in development)",
    ],
    techStack: ["Python (Tkinter GUI)", "SQLite", "Plotly", "yowsup (WhatsApp)"],
    imageUrl: "/Screenshot 2025-04-27 195045.png", // Placeholder Image
    githubLink: "https://github.com/Bhavukadlakha", // Replace with actual link if available
    liveLink: null,
  },
  {
    title: "Face-Recoginiton-Entry-System",
    description: "An AI model that recognisizes faces and checks if it matches the database and then allows entry or exit with kepping a log of the person's name time date of entry and exit.",
    features: ["Real-time Face Recognition: Uses DeepFace (VGG-Face model) for automatic recognition at entry/exit gates.", 
      "Dual Gate System: Separate Gate In (green) and Gate Out (red) panels with real-time camera feeds.",
"Automatic Attendance Tracking: Tracks who is currently inside or outside in real time.",
"MongoDB Integration: Stores all gate logs and attendance data",
"Automatic & Manual Data Sync: Syncs attendant data every 30 seconds and allows manual sync.",
"Modern UI: Tkinter-based interface with a three-column layout, status bar, and menu bar.",
"Photo Comparison Tool: Manual photo comparison window for verification.",
"Comprehensive Error Handling: Handles camera, database, recognition, and system errors gracefully.",
"Logging System: Logs to both file (data/logs/gate_system.log) and console with structured messages.",
    ],
    techStack: ["Python", "scikit-learn", "Streamlit "],
    imageUrl: "/Gemini_Generated_Image_bpegi7bpegi7bpeg.png", // Placeholder Image
    githubLink: "https://github.com/Bhavukadlakha", // Replace with actual link
    liveLink: null,
  },
  {
    title:( <>Automated AI call assistant        (GOOGLE-HACKTHON-QUALIFIER 2025 <span>5<sup>th</sup></span> POSITION)
    </>),
    description: "An Automated call receptionist which can help you find the best suitable slot for your appointment with your requested doctor and according to type of your appointment.",
    features: ["Automated Call Handling: Answers incoming calls and interacts with callers using AI.",
"Speech Recognition: Converts spoken language into text for processing.",
"Natural Language Understanding: Interprets caller intent and context.",
"Text-to-Speech: Responds to callers with natural-sounding synthesized speech.",
"Call Routing: Directs calls to appropriate departments or agents based on caller input.",
"Call Logging: Records call details and transcripts for future reference.",
"Integration with CRM: Connects with customer databases to provide personalized responses.",
"Multi-language Support: Handles calls in multiple languages.",
"Voicemail Transcription: Converts voicemail messages to text.",
"Analytics Dashboard: Provides insights into call volume, duration, and outcomes."],
    techStack: ["HTML", "CSS", "JavaScript (basic)", "Flask/Django (future)", "Plotly.js", "tensorflow", "aws","google speech-to-text translation", "twilio."],
    imageUrl: "/unnamed.png", // Placeholder Image
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
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
