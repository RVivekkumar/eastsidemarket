import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="section-spacing bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Ready to Start Personal Journey?
          </h2>
          
          <div className="text-center mb-8">
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              If you are looking for a reliable and efficient personal shopper, look no further than Eastside Market. 
              With our wide range of services and experienced team, we can help you achieve your goals. 
              Contact us today to get started!
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Sign Up Now
            </h3>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 card-shadow">
              Sign Up Now
            </button>
            <p className="text-gray-600 mt-4 text-sm">
              Join thousands of satisfied customers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;