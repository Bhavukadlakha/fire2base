import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from 'lucide-react';

export function EducationSection() {
  return (
    <section id="education" className="w-full bg-secondary/50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Education</h2>
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <GraduationCap className="w-6 h-6 text-primary" />
                B.Tech Computer Science and Engineering
              </CardTitle>
              <CardDescription>Amity University, Noida</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                (2021 – 2025)
              </p>
               <p className="text-sm text-muted-foreground">
                Expected Graduation: 2025
              </p>
               {/* Add any relevant coursework or achievements here if desired */}
            </CardContent>
          </Card>
           {/* Add Certifications Section here if needed */}
           {/* <h3 className="text-2xl font-bold tracking-tighter mt-12 mb-6 text-center">Certifications (Planned)</h3>
            <div className="grid gap-4 sm:grid-cols-2">
                <Card>...</Card>
                <Card>...</Card>
            </div> */}
        </div>
      </div>
    </section>
  );
}
