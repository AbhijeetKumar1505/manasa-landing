'use client';

import { useState } from 'react';
import { FaCheckCircle, FaUserGraduate, FaSchool, FaUserMd } from 'react-icons/fa';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Card, { CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { submitWaitlistEntry } from './actions';

type UserType = 'student' | 'institution' | 'counselor' | null;

export default function GetStarted() {
  const [selectedType, setSelectedType] = useState<UserType>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    grade: '',
    interest: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const userTypes = [
    {
      type: 'student' as UserType,
      icon: <FaUserGraduate className="text-5xl text-blue-600" />,
      title: 'Student',
      description: 'Access mental health resources, tools, and support designed for you',
      benefits: ['Personalized wellness plans', 'Anonymous peer support', '24/7 crisis help']
    },
    {
      type: 'institution' as UserType,
      icon: <FaSchool className="text-5xl text-green-600" />,
      title: 'School/College',
      description: 'Implement Neurokind across your institution to support student well-being',
      benefits: ['Institution-wide dashboard', 'Student analytics', 'Professional training']
    },
    {
      type: 'counselor' as UserType,
      icon: <FaUserMd className="text-5xl text-purple-600" />,
      title: 'Counselor',
      description: 'Join our network of mental health professionals helping students',
      benefits: ['Flexible scheduling', 'Secure platform', 'Competitive compensation']
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (selectedType === 'student' && !formData.grade) {
      newErrors.grade = 'Grade/Year is required';
    }

    if (selectedType === 'institution' && !formData.institution.trim()) {
      newErrors.institution = 'Institution name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm() || !selectedType) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const result = await submitWaitlistEntry({
        userType: selectedType,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        institution: formData.institution || undefined,
        grade: formData.grade || undefined,
        interest: formData.interest || undefined,
      });

      if (result.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError(result.error || 'Failed to submit registration');
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('An unexpected error occurred. Please try again later.');
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSelectedType(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      institution: '',
      grade: '',
      interest: ''
    });
    setErrors({});
    setIsSubmitted(false);
    setSubmitError(null);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-6">
        <Card className="max-w-2xl w-full text-center">
          <div className="flex justify-center mb-6">
            <FaCheckCircle className="text-6xl text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Neurokind!</h1>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for registering. We&apos;ve sent a confirmation email to <strong>{formData.email}</strong>.
          </p>
          <p className="text-gray-600 mb-8">
            Our team will review your application and get back to you within 24-48 hours with next steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" variant="primary">
              Go to Home
            </Button>
            <Button onClick={resetForm} variant="outline">
              Register Another User
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
            Get Started with Neurokind
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Join thousands of students, institutions, and counselors on the journey to better mental health
          </p>
        </div>
      </section>

      {/* User Type Selection */}
      {!selectedType ? (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-center text-blue-600 mb-12">
              Choose Your Account Type
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {userTypes.map((user) => (
                <div
                  key={user.type}
                  className="cursor-pointer hover:border-blue-500 border-2 border-transparent transition"
                  onClick={() => setSelectedType(user.type)}
                >
                  <Card hover>
                  <div className="flex justify-center mb-4">
                    {user.icon}
                  </div>
                  <CardTitle className="text-center mb-3">{user.title}</CardTitle>
                  <CardContent>
                    <p className="text-center mb-4">{user.description}</p>
                    <div className="space-y-2">
                      {user.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start text-sm">
                          <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <Badge variant="info" className="text-base px-4 py-2">
                    {selectedType.charAt(0).toUpperCase() + selectedType.slice(1)} Registration
                  </Badge>
                </div>
                <button
                  onClick={() => setSelectedType(null)}
                  className="text-blue-600 hover:underline"
                >
                  Change Type
                </button>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">Registration Form</CardTitle>
                </CardHeader>
                <CardContent>
                  {submitError && (
                    <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                      {submitError}
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                      label="Full Name *"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
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
                        label="Phone *"
                        name="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        error={errors.phone}
                      />
                    </div>

                    {selectedType === 'student' && (
                      <>
                        <Input
                          label="School/College"
                          name="institution"
                          type="text"
                          placeholder="Your institution name"
                          value={formData.institution}
                          onChange={handleChange}
                        />

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Grade/Year *
                          </label>
                          <select
                            name="grade"
                            value={formData.grade}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                              errors.grade ? 'border-red-500' : ''
                            }`}
                          >
                            <option value="">Select your grade/year</option>
                            <option value="6-8">6th-8th Grade</option>
                            <option value="9-10">9th-10th Grade</option>
                            <option value="11-12">11th-12th Grade</option>
                            <option value="college-1">1st Year College</option>
                            <option value="college-2">2nd Year College</option>
                            <option value="college-3">3rd Year College</option>
                            <option value="college-4">4th Year College</option>
                            <option value="postgrad">Postgraduate</option>
                          </select>
                          {errors.grade && (
                            <p className="mt-1 text-sm text-red-600">{errors.grade}</p>
                          )}
                        </div>
                      </>
                    )}

                    {selectedType === 'institution' && (
                      <>
                        <Input
                          label="Institution Name *"
                          name="institution"
                          type="text"
                          placeholder="Your school/college name"
                          value={formData.institution}
                          onChange={handleChange}
                          error={errors.institution}
                        />

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Institution Type
                          </label>
                          <select
                            name="interest"
                            value={formData.interest}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                          >
                            <option value="">Select type</option>
                            <option value="school">School</option>
                            <option value="college">College</option>
                            <option value="university">University</option>
                            <option value="coaching">Coaching Institute</option>
                          </select>
                        </div>
                      </>
                    )}

                    {selectedType === 'counselor' && (
                      <>
                        <Input
                          label="Professional License Number"
                          name="institution"
                          type="text"
                          placeholder="Your license number"
                          value={formData.institution}
                          onChange={handleChange}
                        />

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Specialization
                          </label>
                          <select
                            name="interest"
                            value={formData.interest}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                          >
                            <option value="">Select specialization</option>
                            <option value="clinical">Clinical Psychology</option>
                            <option value="counseling">Counseling Psychology</option>
                            <option value="psychiatry">Psychiatry</option>
                            <option value="social-work">Social Work</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </>
                    )}

                    <div className="pt-4">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting...' : 'Complete Registration'}
                      </Button>
                    </div>

                    <p className="text-sm text-gray-600 text-center">
                      By registering, you agree to our Terms of Service and Privacy Policy
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
