import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TimelineCard = ({ 
  milestone, 
  index, 
  isLeft, 
  onExpand, 
  isExpanded 
}) => {
  const getCategoryColor = (category) => {
    switch (category) {
      case 'Education':
        return 'text-purple-accent border-purple-accent bg-purple-accent/10';
      case 'Projects':
        return 'text-electric-blue border-electric-blue bg-electric-blue/10';
      case 'Certifications':
        return 'text-neon-green border-neon-green bg-neon-green/10';
      case 'Personal Growth':
        return 'text-coral-red border-coral-red bg-coral-red/10';
      default:
        return 'text-muted-foreground border-muted bg-muted/10';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Education':
        return 'GraduationCap';
      case 'Projects':
        return 'Code';
      case 'Certifications':
        return 'Award';
      case 'Personal Growth':
        return 'TrendingUp';
      default:
        return 'Circle';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} mb-12`}
    >
      {/* Timeline Node */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
        <div className={`w-4 h-4 rounded-full border-2 ${getCategoryColor(milestone?.category)} bg-background`}>
          <div className="absolute inset-0.5 rounded-full bg-current opacity-50"></div>
        </div>
      </div>
      {/* Card Content */}
      <div className={`w-5/12 ${isLeft ? 'pr-8' : 'pl-8'}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="glassmorphism rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:neon-glow-blue"
          onClick={() => onExpand(milestone?.id)}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <span className={`px-2 py-1 rounded-lg text-xs font-medium border ${getCategoryColor(milestone?.category)}`}>
                  {milestone?.category}
                </span>
                <span className="text-xs text-muted-foreground">{milestone?.date}</span>
              </div>
              <h3 className="text-lg font-poppins font-semibold text-foreground mb-2">
                {milestone?.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {milestone?.organization}
              </p>
            </div>
            <Icon 
              name={getCategoryIcon(milestone?.category)} 
              size={24} 
              className={getCategoryColor(milestone?.category)?.split(' ')?.[0]}
            />
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
            {milestone?.description}
          </p>

          {/* Progress Bar (if applicable) */}
          {milestone?.progress && (
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-muted-foreground">Progress</span>
                <span className="text-xs font-medium text-neon-green">{milestone?.progress}%</span>
              </div>
              <div className="w-full bg-muted/20 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-neon-green to-electric-blue h-2 rounded-full transition-all duration-500"
                  style={{ width: `${milestone?.progress}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Skills/Technologies */}
          {milestone?.skills && milestone?.skills?.length > 0 && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {milestone?.skills?.slice(0, 3)?.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-2 py-1 bg-muted/20 text-xs rounded-lg text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
                {milestone?.skills?.length > 3 && (
                  <span className="px-2 py-1 bg-muted/20 text-xs rounded-lg text-muted-foreground">
                    +{milestone?.skills?.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Expand Button */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {milestone?.achievements && (
                <div className="flex items-center space-x-1">
                  <Icon name="Trophy" size={14} className="text-neon-green" />
                  <span className="text-xs text-neon-green">{milestone?.achievements?.length} achievements</span>
                </div>
              )}
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Icon 
                name="ChevronDown" 
                size={16} 
                className="text-muted-foreground"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Expanded Content */}
        <motion.div
          initial={false}
          animate={{ 
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          {isExpanded && (
            <div className="glassmorphism rounded-2xl p-6 mt-4">
              {/* Detailed Description */}
              {milestone?.detailedDescription && (
                <div className="mb-6">
                  <h4 className="text-sm font-poppins font-semibold text-foreground mb-3">
                    Details
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {milestone?.detailedDescription}
                  </p>
                </div>
              )}

              {/* All Skills */}
              {milestone?.skills && milestone?.skills?.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-poppins font-semibold text-foreground mb-3">
                    Skills & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {milestone?.skills?.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-muted/20 text-xs rounded-lg text-foreground border border-muted/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Achievements */}
              {milestone?.achievements && milestone?.achievements?.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-poppins font-semibold text-foreground mb-3">
                    Key Achievements
                  </h4>
                  <div className="space-y-2">
                    {milestone?.achievements?.map((achievement, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <Icon name="CheckCircle" size={16} className="text-neon-green mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Challenges & Learnings */}
              {milestone?.challenges && milestone?.challenges?.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-poppins font-semibold text-foreground mb-3">
                    Challenges & Learnings
                  </h4>
                  <div className="space-y-2">
                    {milestone?.challenges?.map((challenge, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <Icon name="Lightbulb" size={16} className="text-electric-blue mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Image/Certificate */}
              {milestone?.image && (
                <div className="mb-4">
                  <Image 
                    src={milestone?.image}
                    alt={milestone?.title}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
              )}

              {/* Links */}
              {milestone?.links && milestone?.links?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {milestone?.links?.map((link, idx) => (
                    <a
                      key={idx}
                      href={link?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 px-3 py-1 bg-neon-green/10 text-neon-green text-xs rounded-lg border border-neon-green/20 hover:bg-neon-green/20 transition-colors duration-300"
                    >
                      <Icon name={link?.icon || "ExternalLink"} size={12} />
                      <span>{link?.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TimelineCard;