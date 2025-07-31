import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';

const ProjectFilter = ({ categories, activeCategory, onCategoryChange, projectCounts }) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {categories?.map((category, index) => {
        const isActive = activeCategory === category;
        const count = projectCounts?.[category] || 0;
        
        return (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Button
              variant={isActive ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange(category)}
              className={`relative ${
                isActive
                  ? 'bg-neon-green text-background hover:bg-neon-green/90 neon-glow' :'border-muted/30 text-muted-foreground hover:text-foreground hover:border-neon-green/30 hover:bg-neon-green/5'
              } transition-all duration-300`}
            >
              {category}
              {count > 0 && (
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  isActive 
                    ? 'bg-background/20 text-background' :'bg-muted/20 text-muted-foreground'
                }`}>
                  {count}
                </span>
              )}
            </Button>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProjectFilter;