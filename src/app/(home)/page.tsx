
import { HeroSection } from './_sections/hero-section';
import { ProjectsSection } from './_sections/projects-section';
import { TechnologiesSection } from './_sections/technologies-section';

export default function Home() {
  return (
    <main className='relative min-h-screen'>
      <HeroSection />
      <TechnologiesSection />
      <ProjectsSection />
    </main>
  );
}
