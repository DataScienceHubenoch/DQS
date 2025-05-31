import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Last Updated: April 22, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Welcome to Data Quest Solutions. By accessing our website and using our services, you agree to be bound by these Terms of Service. Please read them carefully.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-8">
              By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Description</h2>
            <p className="text-gray-600 mb-4">We provide the following services:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
              <li>Data Science Consulting and Analysis</li>
              <li>Machine Learning and AI Development</li>
              <li>Research Writing and Documentation</li>
              <li>Professional Training and Courses</li>
              <li>Web and Graphic Design Services</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-600 mb-4">As a user of our services, you agree to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your account</li>
              <li>Use our services in compliance with all applicable laws</li>
              <li>Not misuse or attempt to manipulate our services</li>
              <li>Respect intellectual property rights</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
            <p className="text-gray-600 mb-4">Payment terms for our services:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
              <li>All fees are due as specified in the service agreement</li>
              <li>Payment methods accepted: Bank transfer, Mobile money</li>
              <li>Prices are subject to change with prior notice</li>
              <li>Refunds are handled on a case-by-case basis</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-600 mb-8">
              All content, materials, and intellectual property provided through our services remain the property of Data Quest Solutions. Users may not reproduce, distribute, or create derivative works without explicit permission.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-600 mb-8">
              Data Quest Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Termination</h2>
            <p className="text-gray-600 mb-8">
              We reserve the right to terminate or suspend access to our services for violations of these terms or for any other reason at our sole discretion.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to Terms</h2>
            <p className="text-gray-600 mb-8">
              We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
            <p className="text-gray-600 mb-2">For questions about these Terms of Service, please contact us:</p>
            <ul className="list-none pl-6 text-gray-600 mb-8 space-y-2">
              <li>Email: <a href="mailto:dataquestsolutions2@gmail.com" className="text-blue-600 hover:underline">dataquestsolutions2@gmail.com</a></li>
              <li>WhatsApp: +254707612395</li>
              <li>WhatsApp: +254701344230</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms; 