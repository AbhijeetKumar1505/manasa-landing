import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Student Mental Health?</h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
          Join Neurokind today and be part of the movement to support student well-being across India.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/get-started" 
            className="bg-white hover:bg-gray-100 text-blue-700 font-semibold py-4 px-10 rounded-lg transition duration-300 text-lg"
          >
            Get Started for Free
          </Link>
          <Link 
            href="/contact" 
            className="bg-transparent hover:bg-blue-700 text-white font-semibold py-4 px-10 border-2 border-white rounded-lg transition duration-300 text-lg"
          >
            Contact Our Team
          </Link>
        </div>
        <p className="mt-6 text-blue-100">
          For educational institutions, mental health professionals, and partners
        </p>
      </div>
    </section>
  );
}
