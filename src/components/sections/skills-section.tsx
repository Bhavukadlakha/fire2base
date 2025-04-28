import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cpu, Brain, MessageCircle, Users } from 'lucide-react';

const skills = {
  technical: [
    { name: 'Python', icon: <Code /> },
    { name: 'JavaScript (basic)', icon: <Code /> },
    { name: 'SQLite', icon: <Cpu /> },
    { name: 'Plotly', icon: <Cpu /> },
    { name: 'pandas', icon: <Cpu /> },
    { name: 'VS Code', icon: <Brain /> },
    { name: 'Git & GitHub', icon: <Brain /> },
    { name: 'Figma (basic)', icon: <Brain /> },
    { name: 'AI/ML Basics', icon: <Cpu /> },
    { name: 'HTML/CSS (learning)', icon: <Code /> },
  ],
  core: [
    { name: 'Software Development', icon: <Code /> },
    { name: 'Database Management', icon: <Cpu /> },
    { name: 'Problem Solving', icon: <Brain /> },
    { name: 'AI Chatbot Building', icon: <MessageCircle /> },
  ],
  soft: [
    { name: 'Dynamic Thinker', icon: <Brain /> },
    { name: 'Quick Learner', icon: <Brain /> },
    { name: 'Good Communicator', icon: <MessageCircle /> },
    { name: 'Open to Feedback', icon: <Users /> },
  ]
};

interface SkillItemProps {
  name: string;
  icon: React.ReactNode;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, icon }) => (
  <Badge variant="secondary" className="flex items-center gap-2 py-1 px-3 text-sm hover:scale-105 transition">
    <span className="text-primary">{icon}</span>
    {name}
  </Badge>
);

export function SkillsSection() {
  return (
    <section id="skills" className="w-full">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">My Skills</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl"><Code className="text-primary"/>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skills.technical.map((skill) => <SkillItem key={skill.name} {...skill} />)}
            </CardContent>
          </Card>
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl"><Brain className="text-primary"/>Core Skills</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skills.core.map((skill) => <SkillItem key={skill.name} {...skill} />)}
            </CardContent>
          </Card>
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl"><Users className="text-primary"/>Soft Skills</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skills.soft.map((skill) => <SkillItem key={skill.name} {...skill} />)}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
