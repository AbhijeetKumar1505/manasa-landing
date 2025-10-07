import { FaLightbulb, FaBullseye, FaHandsHelping, FaGraduationCap } from 'react-icons/fa';
import Card, { CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

export default function About() {
  const team = [
    {
      name: "Dr. Priya Sharma",
      role: "Chief Mental Health Officer",
      description: "Clinical psychologist with 15+ years of experience in adolescent mental health."
    },
    {
      name: "Rajesh Kumar",
      role: "Technical Lead",
      description: "AI/ML expert specializing in healthcare applications and digital therapeutics."
    },
    {
      name: "Ananya Reddy",
      role: "Product Manager",
      description: "Former educator passionate about student well-being and educational technology."
    },
    {
      name: "Dr. Vikram Singh",
      role: "Research Director",
      description: "Neuroscientist researching neuroplasticity and cognitive behavioral interventions."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
            About MANASA
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Building India's first comprehensive digital ecosystem for student mental health and well-being
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Our Story</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                MANASA was born from a profound understanding of the mental health crisis affecting Indian students.
                In a nation where academic pressure and social expectations often overshadow well-being, we recognized
                the urgent need for accessible, culturally-relevant mental health support.
              </p>
              <p>
                Our journey began with extensive research into the unique challenges faced by Indian students—from
                the intense competition for limited opportunities to the stigma surrounding mental health conversations.
                We found that while awareness is growing, the gap between recognition and action remains vast.
              </p>
              <p>
                By combining cutting-edge technology with evidence-based mental health practices and culturally-rooted
                approaches, MANASA aims to democratize access to mental health support for every student in India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-blue-50 border border-blue-100">
              <div className="flex items-center mb-4">
                <FaBullseye className="text-4xl text-blue-600 mr-4" />
                <h2 className="text-2xl font-bold text-blue-600">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To create a India where every student has access to comprehensive mental health support,
                fostering resilience, emotional intelligence, and holistic well-being as fundamental pillars
                of education and personal growth.
              </p>
            </Card>

            <Card className="bg-green-50 border border-green-100">
              <div className="flex items-center mb-4">
                <FaLightbulb className="text-4xl text-green-600 mr-4" />
                <h2 className="text-2xl font-bold text-green-600">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To provide a culturally-sensitive, AI-powered digital platform that makes mental health
                support accessible, affordable, and stigma-free for students across India, while fostering
                adaptive neuroplasticity and sustainable well-being practices.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandsHelping className="text-3xl text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Accessibility</h3>
              <p className="text-gray-600 text-sm">Making mental health support available to all students regardless of location or economic background</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLightbulb className="text-3xl text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Evidence-Based</h3>
              <p className="text-gray-600 text-sm">Grounding our approach in scientific research and proven therapeutic methodologies</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGraduationCap className="text-3xl text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Cultural Sensitivity</h3>
              <p className="text-gray-600 text-sm">Respecting and incorporating Indian values, traditions, and family dynamics in our solutions</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBullseye className="text-3xl text-yellow-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Privacy & Safety</h3>
              <p className="text-gray-600 text-sm">Ensuring confidentiality and creating a safe space for students to seek help without judgment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">Meet Our Team</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A diverse team of mental health professionals, technologists, and educators committed to transforming student well-being
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} hover>
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4"></div>
                  <CardTitle className="text-center text-lg">{member.name}</CardTitle>
                  <p className="text-blue-600 text-center text-sm font-semibold">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-center">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <p className="text-gray-600">Students Supported</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <p className="text-gray-600">Schools & Colleges</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">85%</div>
              <p className="text-gray-600">Improvement Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">24/7</div>
              <p className="text-gray-600">Support Available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
