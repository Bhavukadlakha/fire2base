import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { DsaJourneySection } from '@/components/sections/dsa-journey-section';
import { EducationSection } from '@/components/sections/education-section';
import { PersonalitySection } from '@/components/sections/personality-section';
import { ContactSection } from '@/components/sections/contact-section';
import { AiChatbot } from '@/components/ai-chatbot';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ScrollAnimator } from '@/components/scroll-animator';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <ScrollAnimator>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <DsaJourneySection />
          <EducationSection />
          <PersonalitySection />
          <ContactSection />
        </ScrollAnimator>
      </main>
      <AiChatbot />
      <Footer />
    </>
  );
}
