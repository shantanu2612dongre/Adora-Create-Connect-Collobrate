import { Campaign, Creator, FilterState } from '../types';

export const filterCampaigns = (
  campaigns: Campaign[],
  filters: FilterState,
  creator: Creator
): Campaign[] => {
  return campaigns.filter(campaign => {
    // Filter by search term
    if (filters.search && !campaignMatchesSearch(campaign, filters.search)) {
      return false;
    }

    // Filter by brand type
    if (filters.brandType !== 'All' && campaign.brandType !== filters.brandType) {
      return false;
    }

    // Filter by payment type
    if (filters.paymentType !== 'All' && campaign.paymentType !== filters.paymentType) {
      return false;
    }

    // Filter by niche match
    if (filters.nicheMatch && !campaignMatchesNiche(campaign, creator.niche)) {
      return false;
    }

    return true;
  });
};

const campaignMatchesSearch = (campaign: Campaign, searchTerm: string): boolean => {
  const term = searchTerm.toLowerCase();
  return (
    campaign.title.toLowerCase().includes(term) ||
    campaign.description.toLowerCase().includes(term) ||
    campaign.brandName.toLowerCase().includes(term) ||
    campaign.nicheTags.some(tag => tag.toLowerCase().includes(term))
  );
};

const campaignMatchesNiche = (campaign: Campaign, creatorNiche: string): boolean => {
  return campaign.nicheTags.some(tag => tag.toLowerCase() === creatorNiche.toLowerCase());
};