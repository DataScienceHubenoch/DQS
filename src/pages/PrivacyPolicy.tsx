import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-200 via-sky-300 to-blue-200 text-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Privacy Policy</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto">
              Last Updated: April 22, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-gradient-to-b from-sky-100 via-sky-50 to-sky-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-8">
              At Data Quest Solutions, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
              <li>Name and contact information</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Payment information</li>
              <li>Service preferences and requirements</li>
              <li>Communication history</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the collected information for various purposes:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
              <li>To provide and maintain our services</li>
              <li>To process your payments and transactions</li>
              <li>To communicate with you about our services</li>
              <li>To improve our services and user experience</li>
              <li>To send you updates and marketing communications (with your consent)</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4">We may share your information with:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
              <li>Service providers who assist in our operations</li>
              <li>Professional advisors and consultants</li>
              <li>Law enforcement when required by law</li>
              <li>Business partners with your consent</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-8">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
            <p className="text-gray-700 mb-8">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Children's Privacy</h2>
            <p className="text-gray-700 mb-8">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-700 mb-8">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
            <p className="text-gray-700 mb-2">If you have any questions about this Privacy Policy, please contact us:</p>
            <ul className="list-none pl-6 text-gray-700 mb-8 space-y-2">
              <li>Email: <a href="mailto:dataquestsolutions2@gmail.com" className="text-sky-600 hover:text-sky-700 hover:underline">dataquestsolutions2@gmail.com</a></li>
              <li>WhatsApp: +254707612395</li>
              <li>WhatsApp: +254701344230</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy; 