import { Code, Palette, TrendingUp, Shield, Smartphone, Check } from 'lucide-react';

const iconMap = {
  "Code": Code,
  "Palette": Palette,
  "TrendingUp": TrendingUp,
  "Shield": Shield,
  "Smartphone": Smartphone
};

const ServiceCard = ({ title, description, icon, servicesList }) => {
  const IconComponent = iconMap[icon] || Code;

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col h-full overflow-hidden group hover:-translate-y-1">
      <div className="p-8 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center gap-4 mb-5">
          <div className="p-3.5 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
            <IconComponent size={32} />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight">{title}</h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6 text-base leading-relaxed">
          {description}
        </p>

        {/* Service List */}
        {servicesList && servicesList.length > 0 && (
          <div className="mt-auto pt-6 border-t border-gray-100">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Includes</h4>
            <ul className="space-y-3">
              {servicesList.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                  <Check size={16} className="text-green-500 mt-1 flex-shrink-0" strokeWidth={3} />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;