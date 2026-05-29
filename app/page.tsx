import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { BentoGridSection } from "@/components/bento-grid-section";
import { TemplatesSection } from "@/components/templates-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BentoGridSection />
      <FeaturesSection />
      <TestimonialSection />
      <TemplatesSection />
      <Footer />
    </main>
  );
}
