import { FaBrain, FaHeart, FaUsers, FaMobileAlt } from 'react-icons/fa';

export default function Solution() {
  const features = [
    {
      icon: <FaBrain className="text-4xl text-blue-600 mb-4" />,
      title: "Neuro-Holistic Approach",
      description: "Integrating neuroscience with holistic practices to foster adaptive neuroplasticity and lasting mental well-being."
    },
    {
      icon: <FaHeart className="text-4xl text-blue-600 mb-4" />,
      title: "Bio-Psycho-Social-Digital Model",
      description: "A comprehensive framework addressing all aspects of student well-being in the digital age."
    },
    {
      icon: <FaUsers className="text-4xl text-blue-600 mb-4" />,
      title: "Community Support",
      description: "Safe, moderated spaces for peer support and professional guidance when needed."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-blue-600 mb-4" />,
      title: "Digital Wellness",
      description: "Designed to promote healthy digital habits and reduce screen time while providing support."
    }
  ];

  return (
    <section id="solution" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">The Neurokind Solution</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive digital ecosystem designed specifically for the mental health needs of Indian students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-blue-600">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm">
          <h3 className="text-2xl font-semibold mb-6 text-blue-600">Our Multi-Tiered Support System</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Tier 1: Universal Support</h4>
              <p className="text-gray-600">Self-help resources, wellness tools, and preventive mental health education for all students.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Tier 2: Targeted Support</h4>
              <p className="text-gray-600">Peer support groups and guided interventions for students showing early signs of distress.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Tier 3: Intensive Support</h4>
              <p className="text-gray-600">Professional counseling and crisis intervention for students in acute distress.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
