import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const FutureProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative glassmorphism rounded-2xl overflow-hidden border-2 border-dashed border-muted/30 hover:border-neon-green/30 transition-all duration-500"
    >
      {/* Coming Soon Badge */}
      <div className="absolute top-4 right-4 z-10">
        <span className="px-3 py-1 bg-warning/20 text-warning border border-warning/30 rounded-full text-xs font-inter font-medium">
          Coming Soon
        </span>
      </div>
      {/* Content */}
      <div className="p-6 text-center">
        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-4 bg-muted/10 rounded-2xl flex items-center justify-center group-hover:bg-neon-green/10 transition-colors duration-300">
          <Icon 
            name={project?.icon} 
            size={32} 
            className="text-muted-foreground group-hover:text-neon-green transition-colors duration-300" 
          />
        </div>

        {/* Title */}
        <h3 className="text-xl font-poppins font-bold text-foreground mb-2 group-hover:text-neon-green transition-colors duration-300">
          {project?.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm font-inter mb-4 leading-relaxed">
          {project?.description}
        </p>

        {/* Learning Goals */}
        <div className="space-y-2 mb-4">
          <h4 className="text-sm font-poppins font-semibold text-foreground">Learning Goals:</h4>
          <div className="flex flex-wrap gap-2 justify-center">
            {project?.learningGoals?.map((goal, goalIndex) => (
              <span
                key={goalIndex}
                className="px-2 py-1 bg-purple-accent/10 text-purple-accent text-xs font-inter rounded-md border border-purple-accent/20"
              >
                {goal}
              </span>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground">
          <Icon name="Calendar" size={14} />
          <span>Expected: {project?.timeline}</span>
        </div>

        {/* Progress Indicator */}
        <div className="mt-4">
          <div className="w-full bg-muted/20 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-neon-green to-electric-blue h-2 rounded-full transition-all duration-500"
              style={{ width: `${project?.progress}%` }}
            />
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            {project?.progress}% Planning Complete
          </div>
        </div>
      </div>
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 via-transparent to-purple-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default FutureProjectCard;