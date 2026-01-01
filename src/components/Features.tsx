import { FaBrain, FaLeaf, FaHeartbeat, FaUsers, FaMobileAlt, FaUserMd } from 'react-icons/fa';

export default function Features() {
  const modules = [
    {
      icon: <FaBrain className="text-4xl text-blue-600 mb-4" />,
      title: "Sva-Anveshan (Self-Discovery)",
      description: "Personalized mental health assessment and self-awareness tools to help students understand their well-being.",
      features: [
        "Comprehensive mental health screening",
        "Personalized insights and recommendations",
        "Progress tracking over time"
      ]
    },
    {
      icon: <FaLeaf className="text-4xl text-green-600 mb-4" />,
      title: "Svasthya (Holistic Health)",
      description: "Integrated approach to physical and mental well-being through nutrition, exercise, and sleep management.",
      features: [
        "Personalized wellness plans",
        "Mind-body connection exercises",
        "Sleep hygiene and routines"
      ]
    },
    {
      icon: <FaHeartbeat className="text-4xl text-red-500 mb-4" />,
      title: "Chetna (Consciousness)",
      description: "Digital therapeutics including evidence-based practices like CBT and mindfulness meditation.",
      features: [
        "Guided meditation sessions",
        "Cognitive Behavioral Therapy tools",
        "Stress management techniques"
      ]
    },
    {
      icon: <FaUsers className="text-4xl text-purple-600 mb-4" />,
      title: "Sahayata (Support Network)",
      description: "Safe community spaces for peer support and professional guidance.",
      features: [
        "Anonymous peer support groups",
        "Expert Q&A forums",
        "Mentorship programs"
      ]
    },
    {
      icon: <FaMobileAlt className="text-4xl text-yellow-500 mb-4" />,
      title: "Digital Wellness",
      description: "Tools to develop healthy digital habits and reduce screen time.",
      features: [
        "Screen time tracking",
        "Digital detox challenges",
        "Mindful technology use"
      ]
    },
    {
      icon: <FaUserMd className="text-4xl text-teal-500 mb-4" />,
      title: "Suraksha (Safety)",
      description: "Crisis intervention and professional support when needed most.",
      features: [
        "24/7 crisis helpline",
        "Emergency contact system",
        "Professional counseling services"
      ]
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">Key Features & Modules</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Neurokind&apos;s comprehensive suite of tools and resources designed to support every aspect of student well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="flex justify-center">
                {module.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-blue-600">{module.title}</h3>
              <p className="text-gray-600 text-center mb-4">{module.description}</p>
              <ul className="space-y-2">
                {module.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
