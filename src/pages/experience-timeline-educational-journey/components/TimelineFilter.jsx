import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TimelineFilter = ({ 
  activeFilter, 
  onFilterChange, 
  activeTimeFilter, 
  onTimeFilterChange 
}) => {
  const categoryFilters = [
    { id: 'all', label: 'All', icon: 'Grid3X3', color: 'text-foreground' },
    { id: 'Education', label: 'Education', icon: 'GraduationCap', color: 'text-purple-accent' },
    { id: 'Projects', label: 'Projects', icon: 'Code', color: 'text-electric-blue' },
    { id: 'Certifications', label: 'Certifications', icon: 'Award', color: 'text-neon-green' },
    { id: 'Personal Growth', label: 'Growth', icon: 'TrendingUp', color: 'text-coral-red' }
  ];

  const timeFilters = [
    { id: 'all', label: 'All Time' },
    { id: '2024', label: '2024' },
    { id: '2023', label: '2023' },
    { id: '2022', label: '2022' },
    { id: 'future', label: 'Future Goals' }
  ];

  return (
    <div className="mb-12">
      {/* Category Filters */}
      <div className="mb-6">
        <h3 className="text-sm font-poppins font-semibold text-foreground mb-4">
          Filter by Category
        </h3>
        <div className="flex flex-wrap gap-2">
          {categoryFilters?.map((filter) => (
            <motion.button
              key={filter?.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onFilterChange(filter?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === filter?.id
                  ? 'bg-primary/20 text-primary border border-primary/30 neon-glow' :'bg-muted/10 text-muted-foreground border border-muted/20 hover:bg-muted/20 hover:text-foreground'
              }`}
            >
              <Icon 
                name={filter?.icon} 
                size={16} 
                className={activeFilter === filter?.id ? 'text-primary' : filter?.color}
              />
              <span>{filter?.label}</span>
            </motion.button>
          ))}
        </div>
      </div>
      {/* Time Period Filters */}
      <div>
        <h3 className="text-sm font-poppins font-semibold text-foreground mb-4">
          Filter by Time Period
        </h3>
        <div className="flex flex-wrap gap-2">
          {timeFilters?.map((filter) => (
            <motion.button
              key={filter?.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onTimeFilterChange(filter?.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTimeFilter === filter?.id
                  ? 'bg-electric-blue/20 text-electric-blue border border-electric-blue/30' :'bg-muted/10 text-muted-foreground border border-muted/20 hover:bg-muted/20 hover:text-foreground'
              }`}
            >
              {filter?.label}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineFilter;