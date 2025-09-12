import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, BrainCircuit, ListOrdered } from 'lucide-react';
import Link from "next/link";
import { Button } from "@/components/ui/button";

const dsaSkills = [
  "Arrays", "Strings", "Linked Lists", "Stacks", "Queues"
];

export function DsaJourneySection() {
  return (
    <section id="dsa" className="w-full">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">DSA Journey</h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Passionate about strengthening core programming skills through Data Structures and Algorithms. I believe a strong foundation in DSA is crucial for building efficient and scalable software.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                Solved 80+ problems on LeetCode.
              </li>
              <li className="flex items-center gap-2">
                <BrainCircuit className="w-5 h-5 text-primary" />
                 Actively following resources to deepen understanding.
              </li>
               <li className="flex items-center gap-2">
                <ListOrdered className="w-5 h-5 text-primary" />
                Building a strong foundation for Competitive Programming and Interviews.
              </li>
            </ul>
            <Button asChild className="px-0">
                <Link href="https://leetcode.com/u/Bhavukadlakha/" target="_blank" rel="noopener noreferrer">
                    View my LeetCode Profile &rarr;
                </Link>
            </Button>
          </div>
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Areas of Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                {dsaSkills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {skill}
                  </li>
                ))}
                <li className="flex items-center gap-2 col-span-2 mt-2 italic text-muted-foreground">
                   ...and constantly learning more!
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
