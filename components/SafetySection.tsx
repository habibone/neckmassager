
import React from 'react';

const SafetySection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-[#fef2f2]">
      <div className="max-w-4xl mx-auto bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-red-100">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-24 h-24 flex-shrink-0 bg-red-100 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#111827]">Safety & Smart Design First</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 text-gray-700">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                <span>Auto shut-off after 15 minutes</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                <span>Overheating protection sensors</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                <span>Skin temperature balance tech</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                <span>Advanced pressure sensing</span>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-orange-50 border border-orange-100 rounded-xl">
              <p className="text-sm font-bold text-orange-800 flex items-center justify-center md:justify-start">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
                IMPORTANT: Device must not be used while charging.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
