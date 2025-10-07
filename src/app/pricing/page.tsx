import { FaCheck, FaTimes } from 'react-icons/fa';
import Card, { CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export default function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '₹0',
      period: '/month',
      badge: null,
      description: 'Perfect for students to get started with mental health support',
      features: [
        { name: 'Basic mental health assessment', included: true },
        { name: 'Access to educational resources', included: true },
        { name: 'Community forum access', included: true },
        { name: 'Weekly wellness tips', included: true },
        { name: 'Basic meditation guides', included: true },
        { name: 'Personalized AI recommendations', included: false },
        { name: 'One-on-one counseling', included: false },
        { name: 'Priority support', included: false },
      ],
      cta: 'Get Started Free',
      popular: false
    },
    {
      name: 'Student Plus',
      price: '₹299',
      period: '/month',
      badge: 'Most Popular',
      description: 'Comprehensive support for students seeking holistic well-being',
      features: [
        { name: 'Everything in Free', included: true },
        { name: 'Personalized AI recommendations', included: true },
        { name: 'Advanced self-assessment tools', included: true },
        { name: 'Unlimited meditation & mindfulness', included: true },
        { name: 'Progress tracking & analytics', included: true },
        { name: 'Monthly group therapy sessions', included: true },
        { name: 'One-on-one counseling (2 sessions/month)', included: true },
        { name: 'Priority support', included: false },
      ],
      cta: 'Start 7-Day Free Trial',
      popular: true
    },
    {
      name: 'Premium',
      price: '₹599',
      period: '/month',
      badge: null,
      description: 'Complete mental health care with unlimited professional support',
      features: [
        { name: 'Everything in Student Plus', included: true },
        { name: 'Unlimited one-on-one counseling', included: true },
        { name: 'Access to psychiatrist consultations', included: true },
        { name: 'Family counseling sessions', included: true },
        { name: 'Crisis intervention 24/7', included: true },
        { name: 'Personalized wellness plan', included: true },
        { name: 'Priority support', included: true },
        { name: 'Exclusive workshops & webinars', included: true },
      ],
      cta: 'Start 7-Day Free Trial',
      popular: false
    }
  ];

  const institutionPlans = [
    {
      name: 'School Basic',
      price: 'Custom',
      students: 'Up to 500 students',
      features: [
        'Institution-wide dashboard',
        'Student wellness analytics',
        'Monthly reports',
        'Basic training for staff',
        'Email support'
      ]
    },
    {
      name: 'School Pro',
      price: 'Custom',
      students: '500-2000 students',
      features: [
        'Everything in Basic',
        'Advanced analytics & insights',
        'Dedicated account manager',
        'Comprehensive staff training',
        'Parent engagement tools',
        'Priority support'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      students: '2000+ students',
      features: [
        'Everything in Pro',
        'Custom integrations',
        'API access',
        'White-label options',
        'Dedicated support team',
        'Custom features & development'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that best fits your needs. All plans come with a 7-day free trial.
          </p>
        </div>
      </section>

      {/* Student Plans */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">For Students</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? 'border-2 border-blue-500 shadow-xl' : ''}`}
                hover={!plan.popular}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge variant="info" className="text-sm px-4 py-1">
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-sm text-gray-600">{plan.description}</p>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        {feature.included ? (
                          <FaCheck className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                        ) : (
                          <FaTimes className="text-gray-300 mr-3 mt-1 flex-shrink-0" />
                        )}
                        <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    href="/get-started"
                    variant={plan.popular ? 'primary' : 'outline'}
                    size="lg"
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Institution Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">
            For Schools & Colleges
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Custom solutions designed to support entire institutions
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {institutionPlans.map((plan, index) => (
              <Card key={index} hover>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-blue-600">{plan.price}</span>
                  </div>
                  <p className="text-sm text-gray-600">{plan.students}</p>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FaCheck className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button href="/contact" variant="outline" size="lg" className="w-full">
                    Contact Sales
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">
            Pricing FAQs
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <h3 className="font-bold text-lg mb-2">Can I switch plans anytime?</h3>
              <p className="text-gray-600">
                Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </Card>
            <Card>
              <h3 className="font-bold text-lg mb-2">Is there a free trial?</h3>
              <p className="text-gray-600">
                All paid plans come with a 7-day free trial. No credit card required to start your trial.
              </p>
            </Card>
            <Card>
              <h3 className="font-bold text-lg mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit/debit cards, UPI, net banking, and digital wallets.
              </p>
            </Card>
            <Card>
              <h3 className="font-bold text-lg mb-2">Is my data secure?</h3>
              <p className="text-gray-600">
                Absolutely. We use bank-level encryption and comply with all data protection regulations. Your privacy is our top priority.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
