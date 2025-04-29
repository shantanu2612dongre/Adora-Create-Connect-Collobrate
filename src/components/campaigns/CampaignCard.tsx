import React from 'react';
import { ExternalLink, Clock } from 'lucide-react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card1";
import Button from '../ui/button1';
import Badge from '../ui/badge1';
import { Campaign } from '../types';

interface CampaignCardProps {
  campaign: Campaign;
}

const CampaignCard: React.FC<CampaignCardProps> = ({ campaign }) => {
  return (
    <Card className="h-full hover:shadow-md hover:translate-y-[-2px] transition-all duration-300">
      <CardHeader>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-gray-700">
            <img 
              src={campaign.brandLogo} 
              alt={campaign.brandName}
              className="w-full h-full object-cover" 
            />
          </div>
          <div>
            <p className="font-medium text-gray-900 dark:text-gray-100">{campaign.brandName}</p>
            <Badge variant={campaign.paymentType === 'Paid' ? 'default' : 'outline'}>
              {campaign.paymentType}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {(campaign.isHighPaying || campaign.isUrgent) && (
          <div className="flex gap-2 mb-2">
            {campaign.isHighPaying && (
              <Badge variant="success">High Paying</Badge>
            )}
            {campaign.isUrgent && (
              <Badge variant="warning" className="flex items-center gap-1">
                <Clock size={12} />
                Urgent
              </Badge>
            )}
          </div>
        )}

        <CardTitle className="mb-2">{campaign.title}</CardTitle>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {campaign.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {campaign.nicheTags.map((tag, index) => (
            <Badge key={index} variant="outline">
              #{tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center">
        <Button variant="primary" className="flex items-center">
          Apply Now
        </Button>
        <Button variant="ghost" size="sm" className="text-gray-500">
          <ExternalLink size={16} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CampaignCard;