import React from 'react';
import { Search, Filter } from 'lucide-react';
import { BrandType, FilterState, PaymentType } from '../types';

interface SearchFiltersProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ filters, setFilters }) => {
  const brandTypes: BrandType[] = ['All', 'Fashion', 'Beauty', 'Tech', 'Food', 'Travel', 'Fitness'];
  const paymentTypes: PaymentType[] = ['All', 'Paid', 'Barter'];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ ...prev, search: e.target.value }));
  };

  const handleBrandTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({ ...prev, brandType: e.target.value as BrandType }));
  };

  const handlePaymentTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({ ...prev, paymentType: e.target.value as PaymentType }));
  };

  const handleNicheMatchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ ...prev, nicheMatch: e.target.checked }));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 transition-all duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              value={filters.search}
              onChange={handleSearchChange}
              placeholder="Search campaigns..."
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <select
            value={filters.brandType}
            onChange={handleBrandTypeChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            {brandTypes.map(type => (
              <option key={type} value={type}>
                {type === 'All' ? 'All Brand Types' : type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <select
            value={filters.paymentType}
            onChange={handlePaymentTypeChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            {paymentTypes.map(type => (
              <option key={type} value={type}>
                {type === 'All' ? 'All Payment Types' : type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-3 flex items-center">
        <div className="flex items-center">
          <input
            id="nicheMatch"
            type="checkbox"
            checked={filters.nicheMatch}
            onChange={handleNicheMatchChange}
            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
          />
          <label htmlFor="nicheMatch" className="ml-2 text-sm text-gray-600 dark:text-gray-300 flex items-center">
            <Filter size={14} className="mr-1" />
            Match my niche only
          </label>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;