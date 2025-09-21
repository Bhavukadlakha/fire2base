'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Target, Users, Heart, Shield, Sparkles } from 'lucide-react';

export function PersonalitySection() {
  const [hoveredTrait, setHoveredTrait] = useState<string | null>(null);
  
  const personalityTraits = [
    {
      id: "openness",
      name: "Openness",
      score: 85,
      icon: Brain,
      description: "I possess a highly creative and imaginative mindset, thriving on exploring new ideas and identifying connections that others might overlook. This trait fuels my passion for building innovative solutions and delving into AI/ML technologies.",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      borderColor: "border-blue-200 dark:border-blue-800",
      position: "top-left"
    },
    {
      id: "conscientiousness",
      name: "Conscientiousness", 
      score: 75,
      icon: Target,
      description: "With a strong sense of responsibility, I am well-organized and goal-oriented. I consistently strive for excellence in my projects, ensuring high standards and attention to detail.",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      borderColor: "border-green-200 dark:border-green-800",
      position: "top-right"
    },
    {
      id: "extraversion",
      name: "Extraversion",
      score: 79,
      icon: Users,
      description: "I am energetic and enjoy collaborating with others. My enthusiasm and communication skills make me an effective team player, contributing positively to group dynamics.",
      color: "from-yellow-400 to-yellow-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
      borderColor: "border-yellow-200 dark:border-yellow-800",
      position: "center-left"
    },
    {
      id: "agreeableness",
      name: "Agreeableness",
      score: 73,
      icon: Heart,
      description: "Empathetic and cooperative, I value teamwork and maintain a positive attitude in professional interactions, focusing on resolving conflicts and promoting harmony.",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      borderColor: "border-purple-200 dark:border-purple-800",
      position: "center-right"
    },
    {
      id: "neuroticism",
      name: "Neuroticism",
      score: 75,
      icon: Shield,
      description: "I am sensitive to potential risks and challenges, which makes me vigilant and proactive in problem-solving, ensuring stability in high-pressure situations.",
      color: "from-red-400 to-red-600",
      bgColor: "bg-red-50 dark:bg-red-950/20",
      borderColor: "border-red-200 dark:border-red-800",
      position: "bottom-left"
    }
  ];

  // Helper function to get position classes for symmetric layout
  const getPositionClasses = (position: string) => {
    switch (position) {
      case "top-left":
        return "lg:absolute lg:top-8 lg:left-8";
      case "top-right":
        return "lg:absolute lg:top-8 lg:right-8";
      case "center-left":
        return "lg:absolute lg:top-1/2 lg:left-8 lg:-translate-y-1/2";
      case "center-right":
        return "lg:absolute lg:top-1/2 lg:right-8 lg:-translate-y-1/2";
      case "bottom-left":
        return "lg:absolute lg:bottom-8 lg:left-8";
      default:
        return "";
    }
  };

  return (
    <section id="personality" className="w-full bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              OCEAN PERSONALITY TEST
            </h2>
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            This Big Five assessment reveals the dimensions of my personality and professional profile.
          </p>
        </div>

        {/* Symmetric Grid Layout */}
        <div className="relative">
          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {personalityTraits.map((trait) => {
              const IconComponent = trait.icon;
              const isHovered = hoveredTrait === trait.id;
              
              return (
                <div
                  key={trait.id}
                  className="relative"
                  onMouseEnter={() => setHoveredTrait(trait.id)}
                  onMouseLeave={() => setHoveredTrait(null)}
                >
                  {/* Compact Trait Card */}
                  <Card className={`
                    ${trait.bgColor} ${trait.borderColor} border-2
                    ${isHovered ? 'shadow-2xl ring-2 ring-primary/20' : 'shadow-lg'}
                    transition-all duration-300 cursor-pointer group
                    hover:scale-105
                  `}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className={`
                          p-2 rounded-full bg-gradient-to-r ${trait.color} 
                          shadow-lg group-hover:shadow-xl transition-all duration-300
                        `}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <Badge 
                          variant="secondary" 
                          className={`
                            text-sm font-bold px-2 py-1
                            ${isHovered ? 'bg-primary text-primary-foreground' : ''}
                            transition-all duration-300
                          `}
                        >
                          {trait.score}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg font-bold text-center group-hover:text-primary transition-colors duration-300">
                        {trait.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      {/* Colored Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs font-medium">
                          <span>Score</span>
                          <span>{trait.score}/100</span>
                        </div>
                        <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
                          <div 
                            className={`
                              h-2 rounded-full bg-gradient-to-r ${trait.color}
                              transition-all duration-1000 ease-out
                              ${isHovered ? 'shadow-lg' : ''}
                            `}
                            style={{ width: `${trait.score}%` }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Hover Tooltip */}
          {hoveredTrait && (
            <div className="fixed inset-0 z-50 pointer-events-none bg-background/95 backdrop-blur-sm">
              {(() => {
                const trait = personalityTraits.find(t => t.id === hoveredTrait);
                if (!trait) return null;
                const IconComponent = trait.icon;
                
                return (
                  <div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                    onMouseEnter={() => setHoveredTrait(trait.id)}
                    onMouseLeave={() => setHoveredTrait(null)}
                  >
                    {/* Large Hover Window */}
                    <div className="relative bg-card border border-border rounded-xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden">
                      {/* Header */}
                      <div className={`bg-gradient-to-r ${trait.color} p-8 text-white`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-white/20 rounded-full">
                              <IconComponent className="w-8 h-8" />
                            </div>
                            <div>
                              <h2 className="text-2xl font-bold">{trait.name}</h2>
                              <p className="text-white/90">Personality Trait</p>
                            </div>
                          </div>
                          <Badge className="bg-white/20 text-white text-xl font-bold px-4 py-2">
                            {trait.score}/100
                          </Badge>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-8">
                        <div className="space-y-6">
                          {/* Score Visualization */}
                          <div className="space-y-3">
                            <h3 className="text-lg font-semibold">Score Breakdown</h3>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm font-medium">
                                <span>Current Score</span>
                                <span>{trait.score}%</span>
                              </div>
                              <div className="w-full bg-secondary/50 rounded-full h-4 overflow-hidden">
                                <div 
                                  className={`h-4 rounded-full bg-gradient-to-r ${trait.color} transition-all duration-1000 ease-out`}
                                  style={{ width: `${trait.score}%` }}
                                />
                              </div>
                            </div>
                          </div>
                          
                          {/* Description */}
                          <div className="space-y-3">
                            <h3 className="text-lg font-semibold">Professional Impact</h3>
                            <p className="text-muted-foreground leading-relaxed text-base">
                              {trait.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
