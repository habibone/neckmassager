
import React from 'react';
import { REVIEWS } from '../constants';

const SocialProof: React.FC = () => {
  return (
    <section id="reviews" className="py-24 px-6 bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="flex justify-center space-x-1 mb-4">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="w-6 h-6 text-orange-500 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827]">Loved by Busy Professionals</h2>
          <p className="text-gray-500">Over 15,000 happy necks globally.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">"{review.comment}"</p>
              </div>
              <div className="flex items-center space-x-4">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full border-2 border-orange-100" />
                <div>
                  <h4 className="font-bold text-[#111827]">{review.name}</h4>
                  <p className="text-xs text-gray-400">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
