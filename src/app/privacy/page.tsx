export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Last updated: January 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 md:p-12">
            <div className="prose prose-lg max-w-none">

              <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to Neurokind. We are committed to protecting your privacy and ensuring the security of your personal information.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
              </p>

              <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.1 Personal Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Name, email address, phone number</li>
                <li>Date of birth, educational institution</li>
                <li>Mental health assessments and survey responses</li>
                <li>Counseling session notes and communications</li>
                <li>Payment information (processed securely through third-party providers)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.2 Automatically Collected Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you use our platform, we automatically collect:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Device information (type, operating system, browser)</li>
                <li>Usage data (features used, time spent, interactions)</li>
                <li>IP address and location information</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use your information to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Provide and improve our mental health services</li>
                <li>Personalize your experience and recommendations</li>
                <li>Connect you with appropriate mental health professionals</li>
                <li>Process payments and manage subscriptions</li>
                <li>Send important updates, notifications, and support messages</li>
                <li>Analyze usage patterns to improve our platform</li>
                <li>Ensure platform security and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">4. Information Sharing and Disclosure</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.1 With Your Consent</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We share your information only with your explicit consent, such as when you choose to share information
                with your counselor or participate in peer support groups.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.2 Service Providers</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We work with trusted third-party service providers who assist us in operating our platform, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Cloud hosting services</li>
                <li>Payment processors</li>
                <li>Analytics providers</li>
                <li>Communication services</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                These providers are bound by confidentiality agreements and may only use your information as necessary
                to provide services to us.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.3 Legal Requirements</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may disclose your information if required by law or if we believe in good faith that such disclosure is necessary to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Comply with legal obligations</li>
                <li>Protect our rights, property, or safety</li>
                <li>Prevent or investigate possible wrongdoing</li>
                <li>Protect the personal safety of users or the public (including emergencies)</li>
              </ul>

              <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">5. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement robust security measures to protect your information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>256-bit SSL encryption for all data transmission</li>
                <li>Encrypted data storage</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Strict access controls and authentication</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                However, no method of transmission over the Internet is 100% secure. While we strive to protect your information,
                we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">6. Your Rights and Choices</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your information (subject to legal requirements)</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Restrict Processing:</strong> Request limitation of how we use your data</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                To exercise these rights, please contact us at privacy@manasa.health
              </p>

              <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">7. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We retain your personal information for as long as necessary to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Provide our services to you</li>
                <li>Comply with legal, regulatory, or professional obligations</li>
                <li>Resolve disputes and enforce our agreements</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you delete your account, we will delete or anonymize your personal information within 90 days,
                except where we are required to retain it by law.
              </p>

              <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">8. Children&apos;s Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Neurokind is designed for students aged 12 and above. For users under 18, we recommend parental involvement,
                though we maintain confidentiality as appropriate. We do not knowingly collect information from children
                under 12 without parental consent.
              </p>

              <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">9. International Data Transfers</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your information is primarily stored on servers located in India. If we transfer data internationally,
                we ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
              </p>

              <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Posting the new Privacy Policy on this page</li>
                <li>Updating the &quot;Last Updated&quot; date</li>
                <li>Sending you an email notification (for significant changes)</li>
              </ul>

              <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">11. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
                please contact us:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@manasa.health</p>
                <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91 1800-XXX-XXXX</p>
                <p className="text-gray-700"><strong>Address:</strong> Neurokind Health Tech Pvt. Ltd., Bangalore, Karnataka, India</p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-8">
                <p className="text-gray-800 font-semibold mb-2">Data Protection Officer</p>
                <p className="text-gray-700">
                  For privacy-related concerns, you can reach our Data Protection Officer at dpo@manasa.health
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
