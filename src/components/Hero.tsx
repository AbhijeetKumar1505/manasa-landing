import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Neurokind</h1>
        <h2 className="text-2xl text-gray-700 mb-8">A Neuro-Holistic Digital Ecosystem for Student Well-being in India</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
          Addressing the profound mental health crisis among Indian students with a comprehensive, AI-powered platform that fosters adaptive neuroplasticity and holistic well-being.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/get-started" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            Get Started
          </Link>
          <Link 
            href="#learn-more" 
            className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-8 border border-blue-600 rounded-lg transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
