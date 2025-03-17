
import { type LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isPremium?: boolean;
}

const FeatureCard = ({ icon: Icon, title, description, isPremium = false }: FeatureCardProps) => {
  return (
    <div className={`
      group p-6 rounded-xl transition-all duration-300 
      ${isPremium 
        ? 'premium-card hover:shadow-premium' 
        : 'glass-card hover:shadow-soft'}
      hover:-translate-y-1
    `}>
      <div className={`
        p-3 rounded-lg inline-block mb-4
        ${isPremium 
          ? 'bg-watch-blue/10 text-watch-blue' 
          : 'bg-gray-100 text-gray-700'}
      `}>
        <Icon className="h-6 w-6" />
      </div>
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      
      {isPremium && (
        <div className="inline-block text-xs bg-watch-blue/10 text-watch-blue px-2 py-0.5 rounded-full mb-2">
          Premium
        </div>
      )}
      
      <p className="text-gray-600 text-balance">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
