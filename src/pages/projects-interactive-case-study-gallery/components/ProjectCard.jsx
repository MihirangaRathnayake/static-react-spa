import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative glassmorphism rounded-2xl overflow-hidden hover:neon-glow transition-all duration-500"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-inter font-medium ${
            project?.category === 'Web Application' ?'bg-neon-green/20 text-neon-green border border-neon-green/30'
              : project?.category === 'UI/UX Design' ?'bg-electric-blue/20 text-electric-blue border border-electric-blue/30' :'bg-purple-accent/20 text-purple-accent border border-purple-accent/30'
          }`}>
            {project?.category}
          </span>
        </div>

        {/* Status Badge */}
        {project?.status && (
          <div className="absolute top-4 right-4">
            <span className={`px-2 py-1 rounded-full text-xs font-inter font-medium ${
              project?.status === 'Live' ?'bg-success/20 text-success border border-success/30'
                : project?.status === 'In Progress' ?'bg-warning/20 text-warning border border-warning/30' :'bg-muted/20 text-muted-foreground border border-muted/30'
            }`}>
              {project?.status}
            </span>
          </div>
        )}
      </div>
      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-poppins font-bold text-foreground group-hover:text-neon-green transition-colors duration-300">
            {project?.title}
          </h3>
          {project?.featured && (
            <Icon name="Star" size={20} className="text-warning fill-warning" />
          )}
        </div>

        <p className="text-muted-foreground text-sm font-inter mb-4 line-clamp-2">
          {project?.description}
        </p>

        {/* Technology Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project?.technologies?.slice(0, 4)?.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 bg-muted/20 text-muted-foreground text-xs font-inter rounded-md border border-muted/30"
            >
              {tech}
            </span>
          ))}
          {project?.technologies?.length > 4 && (
            <span className="px-2 py-1 bg-muted/20 text-muted-foreground text-xs font-inter rounded-md border border-muted/30">
              +{project?.technologies?.length - 4}
            </span>
          )}
        </div>

        {/* Project Stats */}
        <div className="flex items-center justify-between mb-4 text-xs text-muted-foreground">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <Icon name="Calendar" size={14} />
              <span>{project?.duration}</span>
            </span>
            {project?.teamSize && (
              <span className="flex items-center space-x-1">
                <Icon name="Users" size={14} />
                <span>{project?.teamSize}</span>
              </span>
            )}
          </div>
          {project?.metrics && (
            <span className="text-neon-green font-medium">
              {project?.metrics}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(project)}
            className="flex-1 border-neon-green/30 text-neon-green hover:bg-neon-green/10 hover:neon-glow"
          >
            View Case Study
          </Button>
          
          {project?.liveUrl && (
            <Button
              variant="ghost"
              size="sm"
              iconName="ExternalLink"
              iconSize={16}
              className="text-electric-blue hover:text-electric-blue hover:bg-electric-blue/10"
              onClick={() => window.open(project?.liveUrl, '_blank')}
            >
              Live
            </Button>
          )}
          
          {project?.githubUrl && (
            <Button
              variant="ghost"
              size="sm"
              iconName="Github"
              iconSize={16}
              className="text-muted-foreground hover:text-foreground hover:bg-muted/10"
              onClick={() => window.open(project?.githubUrl, '_blank')}
            >
              Code
            </Button>
          )}
        </div>
      </div>
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 via-transparent to-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default ProjectCard;