import React, { useState } from 'react';
import { CheckCircle, Instagram, Edit2, Save } from 'lucide-react';
import Button from '../ui/button1';
import { Creator, NicheType } from '../types';
import { formatNumber } from '../utils/formatters';

interface ProfileSectionProps {
  creator: Creator;
  onUpdateCreator: (creator: Creator) => void;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ creator, onUpdateCreator }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedCreator, setEditedCreator] = useState<Creator>(creator);

  const nicheOptions: NicheType[] = [
    'Fashion', 'Beauty', 'Tech', 'Food', 'Travel', 'Fitness', 'Lifestyle', 'Gaming'
  ];

  const handleSaveProfile = () => {
    onUpdateCreator(editedCreator);
    setIsEditing(false);
  };

  const handleChange = (field: string, value: any) => {
    setEditedCreator(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleDemographicChange = (field: string, value: any) => {
    setEditedCreator(prev => ({
      ...prev,
      audienceDemographics: {
        ...prev.audienceDemographics,
        [field]: value,
      }
    }));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-all duration-300">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div className="relative">
          <img 
            src={creator.profileImage} 
            alt={creator.name} 
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-purple-200 dark:border-purple-900"
          />
          {creator.instagramConnected && (
            <div className="absolute -bottom-1 -right-1 bg-purple-600 rounded-full p-1">
              <Instagram size={16} className="text-white" />
            </div>
          )}
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">{creator.name}</h2>
            {creator.instagramConnected && (
              <div className="flex items-center text-green-600 dark:text-green-400">
                <CheckCircle size={16} className="mr-1" />
                <span className="text-sm font-medium">Connected</span>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-6 mt-3">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500 dark:text-gray-400">Followers</span>
              <span className="font-medium text-gray-900 dark:text-gray-100">{formatNumber(creator.instagramStats.followers)}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500 dark:text-gray-400">Posts</span>
              <span className="font-medium text-gray-900 dark:text-gray-100">{creator.instagramStats.posts}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500 dark:text-gray-400">Engagement</span>
              {isEditing ? (
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  max="100"
                  value={editedCreator.instagramStats.engagementRate}
                  onChange={(e) => setEditedCreator(prev => ({
                    ...prev,
                    instagramStats: {
                      ...prev.instagramStats,
                      engagementRate: parseFloat(e.target.value)
                    }
                  }))}
                  className="w-16 px-2 py-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              ) : (
                <span className="font-medium text-gray-900 dark:text-gray-100">{creator.instagramStats.engagementRate}%</span>
              )}
            </div>
          </div>
        </div>

        <div>
          {isEditing ? (
            <Button onClick={handleSaveProfile} variant="primary" size="sm">
              <Save size={16} className="mr-1" /> Save
            </Button>
          ) : (
            <Button onClick={() => setIsEditing(true)} variant="outline" size="sm">
              <Edit2 size={16} className="mr-1" /> Edit Profile
            </Button>
          )}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Your Niche</h3>
          {isEditing ? (
            <select
              value={editedCreator.niche}
              onChange={(e) => handleChange('niche', e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              {nicheOptions.map(niche => (
                <option key={niche} value={niche}>{niche}</option>
              ))}
            </select>
          ) : (
            <div className="px-3 py-2 bg-purple-50 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-md font-medium">
              {creator.niche}
            </div>
          )}
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Audience Demographics</h3>
          {isEditing ? (
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Countries (comma separated)"
                value={editedCreator.audienceDemographics.countries.join(', ')}
                onChange={(e) => handleDemographicChange('countries', e.target.value.split(', '))}
                className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
              <input
                type="text"
                placeholder="Age Groups (comma separated)"
                value={editedCreator.audienceDemographics.ageGroups.join(', ')}
                onChange={(e) => handleDemographicChange('ageGroups', e.target.value.split(', '))}
                className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
            </div>
          ) : (
            <div className="px-3 py-2 bg-gray-50 dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap gap-1">
                {creator.audienceDemographics.countries.map((country, idx) => (
                  <span key={idx} className="text-sm px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                    {country}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                {creator.audienceDemographics.ageGroups.map((age, idx) => (
                  <span key={idx} className="text-sm px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                    {age}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;