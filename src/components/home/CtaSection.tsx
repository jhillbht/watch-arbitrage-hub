
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-watch-blue to-blue-600 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Maximize Your Watch Investments?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of watch enthusiasts and professionals who are already leveraging our platform.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/auth?register=true" className="bg-white text-watch-blue font-medium px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Start Your Free Trial
          </a>
          <a href="/dashboard" className="bg-transparent border border-white text-white font-medium px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
            Explore Dashboard
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
