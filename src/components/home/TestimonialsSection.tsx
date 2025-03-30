
const TestimonialsSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from watch dealers and collectors who have leveraged our platform for successful investments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3" 
                  alt="User profile" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="ml-4">
                <h4 className="font-semibold">Alex Morgan</h4>
                <p className="text-sm text-gray-500">Watch Dealer, New York</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "WatchArbitrage Pro has completely transformed my business. I've increased my profit margins by 22% in just three months by leveraging the cross-market data."
            </p>
          </div>
          
          <div className="glass-card p-6">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3" 
                  alt="User profile" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="ml-4">
                <h4 className="font-semibold">Sarah Chen</h4>
                <p className="text-sm text-gray-500">Collector & Investor</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "The alerts feature is phenomenal. I was notified of a price drop on a rare Patek Philippe in the Japanese market and made a substantial profit reselling it in the US."
            </p>
          </div>
          
          <div className="glass-card p-6">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3" 
                  alt="User profile" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="ml-4">
                <h4 className="font-semibold">Michael Peters</h4>
                <p className="text-sm text-gray-500">Online Watch Retailer</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "The ROI calculator with its accurate fee estimation has saved me from several potentially unprofitable deals. This platform pays for itself many times over."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
