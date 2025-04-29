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
    <Card className="group relative h-full bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl">
      
      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <CardHeader>
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-white/10 dark:bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg border border-white/10 p-6 transition-all duration-300 transform group-hover:scale-105">
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
      <Button
  variant="primary"
  className="relative flex items-center justify-center overflow-hidden rounded-full p-[2px] bg-gradient-to-r from-red-500 via-black to-[#042326] hover:scale-105 transition-transform duration-300"
>
  <div className="flex items-center justify-center w-full h-full rounded-full bg-white/5 dark:bg-white/5 backdrop-blur-md">
    <span className="bg-gradient-to-r from-red-500 via-gray-500 to-[#09263a] bg-clip-text text-transparent font-orbitron tracking-widest">
      Apply Now
    </span>
  </div>
</Button>
        <Button variant="ghost" size="sm" className="text-gray-500">
          <ExternalLink size={16} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CampaignCard;