import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SkillFilters = ({ activeFilter, onFilterChange }) => {
  const filters = [
    { key: 'all', name: 'All Skills', icon: 'Grid3X3', color: 'foreground' },
    { key: 'frontend', name: 'Frontend', icon: 'Monitor', color: 'neon-green' },
    { key: 'backend', name: 'Backend', icon: 'Server', color: 'electric-blue' },
    { key: 'design', name: 'Design', icon: 'Palette', color: 'purple-accent' },
    { key: 'frameworks', name: 'Frameworks', icon: 'Package', color: 'coral-red' }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {filters?.map((filter, index) => (
        <motion.button
          key={filter?.key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          onClick={() => onFilterChange?.(filter?.key)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-inter font-medium transition-all duration-300 ${
            activeFilter === filter?.key
              ? `bg-${filter?.color}/10 text-${filter?.color} border border-${filter?.color}/30`
              : 'bg-card/50 text-muted-foreground hover:text-foreground hover:bg-card/80 border border-border/30'
          }`}
        >
          <Icon 
            name={filter?.icon} 
            size={16} 
            className={`transition-colors duration-300 ${
              activeFilter === filter?.key ? `text-${filter?.color}` : ''
            }`}
          />
          <span>{filter?.name}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default SkillFilters;