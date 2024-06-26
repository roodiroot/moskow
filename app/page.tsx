import BenefitsSection from '@/components/sections/benefits-section/benefits-section';
import ContactsSection from '@/components/sections/contacts-section/contacts-section';
import CTASection from '@/components/sections/cta-section/cta-section';
import HeroSection from '@/components/sections/hero-section/hero-section';
import OverviewSection from '@/components/sections/overview-section/overview-section';
import PortfolioSection from '@/components/sections/portfolio-section/portfolio-section';
import StepsSection from '@/components/sections/steps-section/steps-section';
import TiskerSection from '@/components/sections/tisker/tisker-section';
import { getAllProjects } from '@/data/all-projects';

export default async function Home() {
  const projects = await getAllProjects(4);
  return (
    <main className="pt-9">
      <HeroSection />
      <BenefitsSection className="py-8" />
      <StepsSection className="py-8 px-0 *:rounded-none" />
      <CTASection className="py-8" />
      <PortfolioSection projectList={projects} className="py-8" />
      <OverviewSection className="py-8 px-0 *:rounded-none" />
      <TiskerSection />
      <ContactsSection className="pt-8" />
    </main>
  );
}
