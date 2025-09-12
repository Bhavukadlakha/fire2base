import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Target, Users, Heart, Shield } from 'lucide-react';

export function PersonalitySection() {
  const personalityTraits = [
    {
      name: "Openness",
      score: 85,
      icon: Brain,
      description: "I possess a highly creative and imaginative mindset, thriving on exploring new ideas and identifying connections that others might overlook. This trait fuels my passion for building innovative solutions and delving into AI/ML technologies.",
      color: "bg-blue-500"
    },
    {
      name: "Conscientiousness", 
      score: 75,
      icon: Target,
      description: "With a strong sense of responsibility, I am well-organized and goal-oriented. I consistently strive for excellence in my projects, ensuring high standards and attention to detail.",
      color: "bg-green-500"
    },
    {
      name: "Extraversion",
      score: 79,
      icon: Users,
      description: "I am energetic and enjoy collaborating with others. My enthusiasm and communication skills make me an effective team player, contributing positively to group dynamics.",
      color: "bg-yellow-500"
    },
    {
      name: "Agreeableness",
      score: 73,
      icon: Heart,
      description: "Empathetic and cooperative, I value teamwork and maintain a positive attitude in professional interactions, focusing on resolving conflicts and promoting harmony.",
      color: "bg-purple-500"
    },
    {
      name: "Neuroticism",
      score: 75,
      icon: Shield,
      description: "I am sensitive to potential risks and challenges, which makes me vigilant and proactive in problem-solving, ensuring stability in high-pressure situations.",
      color: "bg-red-500"
    }
  ];

  return (
    <section id="personality" className="w-full bg-background">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Personality & Professional Profile
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Visual Chart */}
          <div className="order-2 lg:order-1">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-center text-xl font-bold">Your Personality Trait Scores</CardTitle>
                <CardDescription className="text-center">
                  This Big Five assessment measures your scores on five major dimensions of personality: Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism (sometimes abbreviated OCEAN).
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {personalityTraits.map((trait, index) => (
                    <div key={trait.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">{trait.name}</span>
                        <span className="font-bold text-sm">{trait.score}</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-3">
                        <div 
                          className={`${trait.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${trait.score}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-4">
              {personalityTraits.map((trait, index) => {
                const IconComponent = trait.icon;
                return (
                  <Card key={trait.name} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-3 text-lg">
                          <IconComponent className="w-5 h-5 text-primary" />
                          {trait.name}
                        </CardTitle>
                        <Badge variant="secondary" className="text-sm font-semibold">
                          {trait.score}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {trait.description}
                      </p>
                      {/* Progress bar */}
                      <div className="mt-3">
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className={`${trait.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${trait.score}%` }}
                          ></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
