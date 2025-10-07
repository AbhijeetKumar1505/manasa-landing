'use client';

import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import Input from '@/components/ui/Input';
import TextArea from '@/components/ui/TextArea';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl text-blue-600" />,
      title: 'Email',
      content: 'support@manasa.health',
      link: 'mailto:support@manasa.health'
    },
    {
      icon: <FaPhone className="text-2xl text-green-600" />,
      title: 'Phone',
      content: '+91 1800-XXX-XXXX',
      link: 'tel:+911800XXXXXXX'
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-red-600" />,
      title: 'Address',
      content: 'Bangalore, Karnataka, India',
      link: null
    },
    {
      icon: <FaClock className="text-2xl text-purple-600" />,
      title: 'Working Hours',
      content: '24/7 Support Available',
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Have questions or need support? We're here to help. Reach out to us and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center" hover>
                <div className="flex justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-blue-600">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-600 hover:text-blue-600 transition"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.content}</p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <Card>
              <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">Send Us a Message</h2>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Thank you for contacting us! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Name *"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Email *"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                  />

                  <Input
                    label="Phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <Input
                  label="Subject *"
                  name="subject"
                  type="text"
                  placeholder="How can we help you?"
                  value={formData.subject}
                  onChange={handleChange}
                  error={errors.subject}
                />

                <TextArea
                  label="Message *"
                  name="message"
                  placeholder="Tell us more about your inquiry..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                />

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Crisis Support Section */}
      <section className="py-16 bg-red-50 border-t-4 border-red-500">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-red-600 mb-4">In Crisis?</h2>
            <p className="text-lg text-gray-700 mb-6">
              If you or someone you know is in immediate danger or experiencing a mental health crisis,
              please contact emergency services or a crisis helpline immediately.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-4 text-blue-600">24/7 Crisis Helplines</h3>
              <div className="space-y-3 text-left max-w-md mx-auto">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-black">AASRA:</span>
                  <a href="tel:+919820466726" className="text-blue-600 hover:underline">+91 98204 66726</a>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-black">Vandrevala Foundation:</span>
                  <a href="tel:+919999666555" className="text-blue-600 hover:underline">+91 99996 66555</a>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-black">iCall:</span>
                  <a href="tel:+919152987821" className="text-blue-600 hover:underline">+91 91529 87821</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
