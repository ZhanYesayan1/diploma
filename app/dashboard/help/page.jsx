// pages/help.js
import React from 'react';

const Help = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Help Section</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800">What is this app?</h2>
          <p className="text-gray-600">This is a sample web application built with Next.js. It helps you with [app's purpose].</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800">How do I use the app?</h2>
          <p className="text-gray-600">To use the app, simply [step-by-step instructions].</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-gray-100 p-4 rounded-lg">
              <summary className="text-lg font-medium cursor-pointer">How do I reset my password?</summary>
              <p className="text-gray-600 mt-2">To reset your password, go to the settings page and click on 'Reset Password'. Follow the instructions.</p>
            </details>

            <details className="bg-gray-100 p-4 rounded-lg">
              <summary className="text-lg font-medium cursor-pointer">Can I use the app on mobile?</summary>
              <p className="text-gray-600 mt-2">Yes, this app is mobile-friendly and works seamlessly on both Android and iOS devices.</p>
            </details>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800">Contact Support</h2>
          <p className="text-gray-600">If you need further assistance, feel free to <a href="mailto:support@yourapp.com" className="text-blue-500 hover:underline">contact our support team</a>.</p>
        </section>
      </div>
    </div>
  );
};

export default Help;
