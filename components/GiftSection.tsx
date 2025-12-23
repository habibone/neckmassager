import React from 'react';

const GiftSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827]">
            A Thoughtful Gift for <br/><span className="text-orange-500">Anyone You Care About</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Show your loved ones you care about their well-being. ReliefPulse comes in a premium, minimalist box ready for any occasion.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            {['Office Workers', 'Parents', 'Frequent Travelers', 'Gym Goers'].map(tag => (
              <div key={tag} className="flex items-center space-x-2 bg-gray-50 p-3 rounded-xl border border-gray-100">
                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
                <span className="font-semibold text-gray-700 text-sm">{tag}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 relative">
           <div className="absolute inset-0 bg-orange-100 rounded-full blur-3xl opacity-30 transform scale-150"></div>
           <div className="rounded-3xl shadow-2xl relative z-10 hover:rotate-2 transition-transform duration-500 w-full overflow-hidden bg-white">
             <img 
                src="http://supplipure.com/wp-content/uploads/2025/12/giftpackneckmassager.jpeg" 
                alt="ReliefPulse Gift Package"
                className="w-full h-full object-cover"
              />
           </div>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;