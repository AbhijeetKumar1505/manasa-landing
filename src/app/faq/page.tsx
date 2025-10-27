'use client';

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Card from '@/components/ui/Card';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const faqs: FAQItem[] = [
    {
      category: 'General',
      question: 'What is MANASA?',
      answer: 'MANASA is a comprehensive neuro-holistic digital ecosystem designed to support the mental health and well-being of Indian students. We combine AI-powered technology with evidence-based therapeutic practices and culturally-sensitive approaches to provide accessible mental health support.'
    },
    {
      category: 'General',
      question: 'Who can use MANASA?',
      answer: 'MANASA is designed for students from grades 6-12 and college/university students. We also offer solutions for educational institutions and provide a platform for licensed mental health professionals to connect with students.'
    },
    {
      category: 'General',
      question: 'Is MANASA available across India?',
      answer: 'Yes, MANASA is available throughout India. Our platform is accessible via web and mobile apps, making mental health support available regardless of your location.'
    },
    {
      category: 'Privacy & Security',
      question: 'Is my information confidential?',
      answer: 'Absolutely. We take privacy very seriously. All your personal information and conversations are encrypted and kept strictly confidential. We comply with all data protection regulations and never share your information without your explicit consent.'
    },
    {
      category: 'Privacy & Security',
      question: 'Will my parents/school know I\'m using MANASA?',
      answer: 'Your privacy is our priority. Unless you\'re in immediate danger or choose to share information, your usage and conversations remain private. For students under 18, we encourage family involvement but maintain confidentiality within legal boundaries.'
    },
    {
      category: 'Privacy & Security',
      question: 'How secure is my data?',
      answer: 'We use bank-level encryption (256-bit SSL) to protect your data. Our servers are hosted in secure facilities with regular security audits. We follow industry best practices and comply with international data protection standards.'
    },
    {
      category: 'Features & Services',
      question: 'What services does MANASA offer?',
      answer: 'MANASA offers mental health assessments, AI-powered personalized recommendations, meditation and mindfulness exercises, peer support communities, one-on-one counseling with licensed professionals, crisis intervention, educational resources, and progress tracking tools.'
    },
    {
      category: 'Features & Services',
      question: 'Do I need to pay for counseling sessions?',
      answer: 'We offer different plans. The free plan includes basic resources and community support. Paid plans include professional counseling sessions. Student Plus includes 2 sessions per month, while Premium offers unlimited sessions.'
    },
    {
      category: 'Features & Services',
      question: 'Are the counselors qualified?',
      answer: 'Yes, all counselors on our platform are licensed mental health professionals with verified credentials. They include clinical psychologists, counseling psychologists, psychiatrists, and trained social workers with experience in adolescent and student mental health.'
    },
    {
      category: 'Features & Services',
      question: 'Can I choose my counselor?',
      answer: 'Yes! You can browse counselor profiles, see their specializations and experience, and choose the one you feel most comfortable with. You can also switch counselors if needed.'
    },
    {
      category: 'Technical',
      question: 'What devices can I use MANASA on?',
      answer: 'MANASA is accessible on desktop computers, laptops, tablets, and smartphones. We have a web platform and mobile apps for both iOS and Android devices.'
    },
    {
      category: 'Technical',
      question: 'Do I need internet to use MANASA?',
      answer: 'Most features require internet connectivity. However, some resources like downloaded meditation guides and educational content can be accessed offline.'
    },
    {
      category: 'Technical',
      question: 'What if I face technical issues?',
      answer: 'Our support team is available 24/7 to help with any technical issues. You can reach us via email, chat, or phone. Premium users get priority support.'
    },
    {
      category: 'Pricing & Billing',
      question: 'Is there a free version?',
      answer: 'Yes! We offer a free plan that includes basic mental health resources, community support, and educational content. You can upgrade anytime to access premium features and counseling sessions.'
    },
    {
      category: 'Pricing & Billing',
      question: 'How much does MANASA cost?',
      answer: 'We offer a Free plan (₹0), Student Plus (₹299/month), and Premium (₹599/month). All paid plans come with a 7-day free trial. We also offer annual plans with discounted rates.'
    },
    {
      category: 'Pricing & Billing',
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. There are no cancellation fees. You\'ll continue to have access to paid features until the end of your billing period.'
    },
    {
      category: 'Crisis Support',
      question: 'What if I\'m in crisis?',
      answer: 'If you\'re experiencing a mental health crisis or having thoughts of self-harm, please reach out immediately. Premium users have access to 24/7 crisis intervention. We also provide emergency helpline numbers for immediate assistance.'
    },
    {
      category: 'Crisis Support',
      question: 'Is 24/7 support available?',
      answer: 'Yes, we provide 24/7 crisis support through our helpline. Premium plan members also have access to emergency counseling sessions at any time.'
    },
    {
      category: 'For Institutions',
      question: 'Can schools and colleges use MANASA?',
      answer: 'Yes! We offer institutional plans that provide mental health support across entire schools or colleges. This includes student and staff dashboards, analytics, training programs, and more.'
    },
    {
      category: 'For Institutions',
      question: 'How does institutional pricing work?',
      answer: 'Institutional pricing is customized based on the number of students, features needed, and level of support required. Contact our sales team for a personalized quote.'
    }
  ];

  const categories = ['All', ...Array.from(new Set(faqs.map(faq => faq.category)))];

  const filteredFAQs = selectedCategory === 'All'
    ? faqs
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about MANASA and our services
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFAQs.map((faq, index) => (
              <Card key={index} className="cursor-pointer" hover>
                <div
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-start"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {faq.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    {openIndex === index && (
                      <p className="mt-4 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {openIndex === index ? (
                      <FaChevronUp className="text-blue-600 text-xl" />
                    ) : (
                      <FaChevronDown className="text-gray-400 text-xl" />
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Can&apos;t find the answer you&apos;re looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              Contact Support
            </a>
            <a
              href="mailto:support@manasa.health"
              className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-8 border border-blue-600 rounded-lg transition duration-300"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
