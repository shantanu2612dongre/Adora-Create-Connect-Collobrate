export interface Creator {
    id: string;
    name: string;
    profileImage: string;
    instagramConnected: boolean;
    instagramStats: {
      followers: number;
      posts: number;
      engagementRate: number;
    };
    niche: string;
    audienceDemographics: {
      countries: string[];
      ageGroups: string[];
    };
    stats: {
      appliedCampaigns: number;
      acceptedCampaigns: number;
      completedCampaigns: number;
    };
  }
  
  export interface Campaign {
    id: string;
    brandName: string;
    brandLogo: string;
    title: string;
    description: string;
    nicheTags: string[];
    paymentType: 'Paid' | 'Barter';
    brandType: string;
    isHighPaying?: boolean;
    isUrgent?: boolean;
  }
  
  export type BrandType = 'All' | 'Fashion' | 'Beauty' | 'Tech' | 'Food' | 'Travel' | 'Fitness';
  export type PaymentType = 'All' | 'Paid' | 'Barter';
  export type NicheType = 'All' | 'Fashion' | 'Beauty' | 'Tech' | 'Food' | 'Travel' | 'Fitness' | 'Lifestyle' | 'Gaming';
  
  export interface FilterState {
    search: string;
    brandType: BrandType;
    paymentType: PaymentType;
    nicheMatch: boolean;
  }