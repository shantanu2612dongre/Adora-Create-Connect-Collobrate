import React from 'react';
import CampaignCard from './CampaignCard';
import { Campaign } from '../types';

interface CampaignFeedProps {
  campaigns: Campaign[];
  title?: string;
}

const CampaignFeed: React.FC<CampaignFeedProps> = ({ campaigns, title }) => {
  return (
    <div className="space-y-4">
      {title && (
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-4">{title}</h2>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {campaigns.length > 0 ? (
          campaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))
        ) : (
          <div className="col-span-full text-center py-8 text-gray-500 dark:text-gray-400">
            No campaigns found matching your criteria
          </div>
        )}
      </div>
    </div>
  );
};

export default CampaignFeed;