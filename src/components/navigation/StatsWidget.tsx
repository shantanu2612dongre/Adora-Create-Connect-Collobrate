import React from 'react';
import { BarChart3, CheckSquare, Send } from 'lucide-react';
import { Creator } from '../types';

interface StatsWidgetProps {
  creator: Creator;
}

const StatsWidget: React.FC<StatsWidgetProps> = ({ creator }) => {
  const stats = [
    { 
      name: 'Applied',
      value: creator.stats.appliedCampaigns,
      icon: <Send size={18} className="text-blue-500" />,
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      textColor: 'text-blue-800 dark:tex¯t-blue-300'
    },
    { 
      name: 'Accepted',
      value: creator.stats.acceptedCampaigns,
      icon: <CheckSquare size={18} className="text-green-500" />,
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      textColor: 'text-green-800 dark:text-green-300'
    },
    { 
      name: 'Completed',
      value: creator.stats.completedCampaigns,
      icon: <BarChart3 size={18} className="text-purple-500" />,
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      textColor: 'text-purple-800 dark:text-purple-300'
    }
  ];

  return (
    <div className="bg-white/10 dark:bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg border border-white/10 p-6 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Your Campaign Stats</h3>
      
      <div className="grid grid-cols-3 gap-3">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className={`flex flex-col items-center justify-center p-3 rounded-lg ${stat.bgColor}`}
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-gray-800 mb-2">
              {stat.icon}
            </div>
            <span className={`text-xl font-bold ${stat.textColor}`}>{stat.value}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">{stat.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsWidget;