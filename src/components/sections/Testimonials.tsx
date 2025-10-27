import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import Card from '@/components/ui/Card';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Engineering Student',
      location: 'Mumbai',
      rating: 5,
      text: 'MANASA has been a lifesaver during my preparation for competitive exams. The stress management tools and counseling sessions helped me maintain my mental health without compromising my studies.',
      image: null
    },
    {
      name: 'Rahul Kumar',
      role: 'Class 12 Student',
      location: 'Delhi',
      rating: 5,
      text: 'I was hesitant to talk about my anxiety at first, but the anonymous peer support and professional counseling made it so much easier. I feel more confident and focused now.',
      image: null
    },
    {
      name: 'Ananya Reddy',
      role: 'Medical Student',
      location: 'Bangalore',
      rating: 5,
      text: 'The meditation exercises and CBT tools have significantly improved my sleep and reduced my exam anxiety. MANASA understands the unique pressures Indian students face.',
      image: null
    },
    {
      name: 'Dr. Vikram Singh',
      role: 'School Counselor',
      location: 'Pune',
      rating: 5,
      text: 'As a school counselor, I\'ve seen firsthand how MANASA has transformed our students\' well-being. The platform provides exactly what our education system has been missing.',
      image: null
    },
    {
      name: 'Meera Patel',
      role: 'College Student',
      location: 'Ahmedabad',
      rating: 5,
      text: 'The 24/7 crisis support was there when I needed it most. I\'m grateful for a platform that truly cares about student mental health and makes it accessible to everyone.',
      image: null
    },
    {
      name: 'Arjun Verma',
      role: 'Engineering Graduate',
      location: 'Hyderabad',
      rating: 5,
      text: 'MANASA helped me through my toughest semester. The personalized wellness plan and progress tracking kept me motivated and helped me build healthy habits that I still follow.',
      image: null
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">What Students Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from students who have transformed their mental health journey with MANASA
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative" hover>
              <FaQuoteLeft className="text-3xl text-blue-200 mb-4" />

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-lg" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                &quot;{testimonial.text}&quot;
              </p>

              {/* User Info */}
              <div className="flex items-center mt-auto">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role} • {testimonial.location}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
            <p className="text-gray-600">Student Satisfaction</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">10,000+</div>
            <p className="text-gray-600">Active Users</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-600 mb-2">50,000+</div>
            <p className="text-gray-600">Sessions Completed</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-600 mb-2">4.8/5</div>
            <p className="text-gray-600">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
