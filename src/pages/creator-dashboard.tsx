import React, { useState, useEffect } from 'react';
import TopNavbar from '@/components/navigation/CreatorNav';
import ProfileSection from '@/components/navigation/ProfileSection';
import SearchFilters from '@/components/navigation/SearchFilter';
import CampaignFeed from '@/components/campaigns/CampaignFeed';
import StatsWidget from '@/components/navigation/StatsWidget';
import { mockCreator, mockCampaigns } from '@/components/data/mockData';
import { Creator, Campaign, FilterState } from '@/components/types';
import { filterCampaigns } from '@/components/utils/filterCampaigns';

function App() {
  const [creator, setCreator] = useState<Creator>(mockCreator);
  const [campaigns, setCampaigns] = useState<Campaign[]>(mockCampaigns);
  const [filteredCampaigns, setFilteredCampaigns] = useState<Campaign[]>(mockCampaigns);
  const [recommendedCampaigns, setRecommendedCampaigns] = useState<Campaign[]>([]);
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    brandType: 'All',
    paymentType: 'All',
    nicheMatch: false,
  });

  useEffect(() => {
    // Filter campaigns based on current filters
    const filtered = filterCampaigns(campaigns, filters, creator);
    setFilteredCampaigns(filtered);

    // Create recommended campaigns based on creator's niche
    const recommended = campaigns.filter(campaign => 
      campaign.nicheTags.some(tag => tag.toLowerCase() === creator.niche.toLowerCase())
    ).slice(0, 3);
    setRecommendedCampaigns(recommended);
  }, [campaigns, filters, creator]);

  const handleUpdateCreator = (updatedCreator: Creator) => {
    setCreator(updatedCreator);
  };

  return (
    <div 
      className="min-h-screen relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/nebula.png)',
      }}
    >
      {/* Dark overlay with slight transparency */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      
      {/* Content */}
      <div className="relative z-10">
        <TopNavbar 
          username={creator.name}
          profileImage={creator.profileImage}
        />
        
        <main className="container mx-auto px-4 py-6 pt-32">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <div className="lg:col-span-2">
      <ProfileSection 
        creator={creator} 
        onUpdateCreator={handleUpdateCreator} 
      />
    </div>
    
    <div>
      <StatsWidget creator={creator} />
    </div>
  </div>
  
  {recommendedCampaigns.length > 0 && (
    <div className="mt-6">
      <CampaignFeed 
        campaigns={recommendedCampaigns} 
        title="Recommended For You" 
      />
    </div>
  )}
  
  <div className="mt-6">
    <SearchFilters 
      filters={filters}
      setFilters={setFilters}
    />
  </div>
  
  <div className="mt-6">
    <CampaignFeed 
      campaigns={filteredCampaigns}
      title="Available Campaigns" 
    />
  </div>
</main>
      </div>
    </div>
  );
}

export default App;