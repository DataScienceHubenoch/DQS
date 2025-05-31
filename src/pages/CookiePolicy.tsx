import Footer from '@/components/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Effective Date: April 22, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              At DataQuest Solutions, we are committed to protecting your privacy and ensuring a transparent user experience. 
              This Cookie Policy outlines how we use cookies and similar technologies on our website, why we use them, and the 
              choices you have regarding their use.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
            <p className="text-gray-600 mb-8">
              Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit a website. 
              They serve various functions, including remembering user preferences, enhancing performance, and delivering 
              tailored content.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Why We Use Cookies</h2>
            <p className="text-gray-600 mb-4">We use cookies to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
              <li>Ensure Functionality: Enable essential features such as secure log-ins, shopping cart functionality, and page navigation.</li>
              <li>Improve Performance: Understand how visitors interact with our site so we can improve usability and content.</li>
              <li>Enhance User Experience: Remember user preferences such as language, location, and display settings.</li>
              <li>Analyze Traffic: Monitor website traffic and usage patterns using tools like Google Analytics.</li>
              <li>Deliver Relevant Advertising: Show tailored ads and measure the effectiveness of marketing campaigns.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type of Cookie</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Essential Cookies</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Necessary for website functionality and security.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Performance Cookies</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Help us analyze how visitors interact with our website.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Functionality Cookies</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Remember user settings and preferences to provide a personalized experience.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Advertising Cookies</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Used to deliver relevant advertisements and track engagement.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Third-Party Cookies</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Set by external platforms (e.g., social media, analytics) for enhanced services.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Your Cookie Choices</h2>
            <p className="text-gray-600 mb-4">You have control over the use of cookies. Most browsers allow you to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Accept or reject all cookies</li>
              <li>Delete existing cookies</li>
              <li>Set preferences for certain websites</li>
            </ul>
            <p className="text-gray-600 mb-8">
              You can modify your browser settings at any time. Please note that disabling cookies may impact some features 
              and functionalities of the website.
            </p>
            <p className="text-gray-600 mb-8">
              For detailed instructions, refer to your browser's help section or visit{' '}
              <a href="https://www.allaboutcookies.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                www.allaboutcookies.org
              </a>.
              If available, you may also manage your preferences through our Cookie Settings panel on the website footer.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Updates to This Policy</h2>
            <p className="text-gray-600 mb-8">
              We may revise this Cookie Policy periodically to reflect changes in technology, legislation, or our operations. 
              Any updates will be posted on this page with a revised effective date.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Information</h2>
            <p className="text-gray-600 mb-2">If you have any questions, concerns, or requests regarding our use of cookies, please contact us:</p>
            <ul className="list-none pl-6 text-gray-600 mb-8 space-y-2">
              <li>Email: <a href="mailto:dataquestsolutions2@gmail.com" className="text-blue-600 hover:underline">dataquestsolutions2@gmail.com</a></li>
              <li>Address: Kakamega, Kenya</li>
              <li>Contact: +254707612395</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy; 