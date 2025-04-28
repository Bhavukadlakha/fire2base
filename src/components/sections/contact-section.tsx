"use client"; // Mark as client component for form handling

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';
import Link from "next/link";

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // --- TODO: Implement actual form submission logic here ---
    // Example: Send data to an API endpoint or email service
    // For now, simulate a delay and show a toast message
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form data submitted:", formData);
    // --- End of TODO ---

    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' }); // Reset form
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="w-full">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Get In Touch</h2>
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
             <h3 className="text-xl font-semibold">Contact Information</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:badlakha96@gmail.com" className="hover:text-primary transition-colors">badlakha96@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+918851341067" className="hover:text-primary transition-colors">8851341067</a>
              </div>
               <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-primary" />
                 <Link href="https://www.linkedin.com/in/bhavuk-adlakha-9b2046239/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    LinkedIn Profile
                 </Link>
              </div>
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-primary" />
                 <Link href="https://github.com/Bhavukadlakha" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    GitHub Profile
                 </Link>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Noida, India</span>
              </div>
            </div>
          </div>
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} disabled={isSubmitting} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" required value={formData.email} onChange={handleChange} disabled={isSubmitting} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message here..." required rows={4} value={formData.message} onChange={handleChange} disabled={isSubmitting} />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
