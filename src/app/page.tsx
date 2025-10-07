import Hero from '@/components/Hero';
import ProblemStatement from '@/components/ProblemStatement';
import Solution from '@/components/Solution';
import Features from '@/components/Features';
import Testimonials from '@/components/sections/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <ProblemStatement />
      <Solution />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}
