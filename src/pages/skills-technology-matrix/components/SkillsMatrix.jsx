import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SkillsMatrix = ({ activeFilter, onSkillHover }) => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillCategories = {
    frontend: {
      name: 'Frontend',
      color: 'neon-green',
      skills: [
        { name: 'React', icon: 'Code', proficiency: 90, experience: '3+ years', recent: 'Portfolio Website', learning: '2021' },
        { name: 'Next.js', icon: 'Zap', proficiency: 85, experience: '2+ years', recent: 'E-commerce Platform', learning: '2022' },
        { name: 'TypeScript', icon: 'FileText', proficiency: 80, experience: '2+ years', recent: 'Admin Dashboard', learning: '2022' },
        { name: 'Tailwind CSS', icon: 'Palette', proficiency: 95, experience: '3+ years', recent: 'All Recent Projects', learning: '2021' },
        { name: 'Framer Motion', icon: 'Move', proficiency: 75, experience: '1+ year', recent: 'Interactive Portfolio', learning: '2023' },
        { name: 'HTML5/CSS3', icon: 'Layout', proficiency: 95, experience: '4+ years', recent: 'Semantic Web Components', learning: '2020' }
      ]
    },
    backend: {
      name: 'Backend',
      color: 'electric-blue',
      skills: [
        { name: 'Node.js', icon: 'Server', proficiency: 80, experience: '2+ years', recent: 'API Development', learning: '2022' },
        { name: 'Express.js', icon: 'Globe', proficiency: 75, experience: '2+ years', recent: 'REST API Services', learning: '2022' },
        { name: 'MongoDB', icon: 'Database', proficiency: 70, experience: '1+ year', recent: 'User Management System', learning: '2023' },
        { name: 'PostgreSQL', icon: 'Table', proficiency: 65, experience: '1+ year', recent: 'Analytics Platform', learning: '2023' },
        { name: 'GraphQL', icon: 'GitBranch', proficiency: 60, experience: '6+ months', recent: 'Content Management', learning: '2024' }
      ]
    },
    design: {
      name: 'Design Tools',
      color: 'purple-accent', 
      skills: [
        { name: 'Figma', icon: 'Figma', proficiency: 90, experience: '3+ years', recent: 'UI/UX Design System', learning: '2021' },
        { name: 'Adobe XD', icon: 'Square', proficiency: 75, experience: '2+ years', recent: 'Mobile App Prototype', learning: '2021' },
        { name: 'Sketch', icon: 'Edit3', proficiency: 70, experience: '1+ year', recent: 'Web Interface Design', learning: '2022' },
        { name: 'Photoshop', icon: 'Image', proficiency: 80, experience: '4+ years', recent: 'Brand Asset Creation', learning: '2020' }
      ]
    },
    frameworks: {
      name: 'Frameworks & Libraries',
      color: 'coral-red',
      skills: [
        { name: 'Vite', icon: 'Zap', proficiency: 85, experience: '1+ year', recent: 'Build Optimization', learning: '2023' },
        { name: 'Redux Toolkit', icon: 'RefreshCw', proficiency: 75, experience: '1+ year', recent: 'State Management', learning: '2023' },
        { name: 'React Router', icon: 'Navigation', proficiency: 90, experience: '3+ years', recent: 'SPA Navigation', learning: '2021' },
        { name: 'Axios', icon: 'Send', proficiency: 85, experience: '2+ years', recent: 'API Integration', learning: '2022' },
        { name: 'D3.js', icon: 'BarChart3', proficiency: 60, experience: '6+ months', recent: 'Data Visualization', learning: '2024' }
      ]
    }
  };

  const filteredCategories = activeFilter === 'all' 
    ? skillCategories 
    : { [activeFilter]: skillCategories?.[activeFilter] };

  const getProficiencyColor = (proficiency) => {
    if (proficiency >= 85) return 'text-neon-green';
    if (proficiency >= 70) return 'text-electric-blue';
    if (proficiency >= 55) return 'text-purple-accent';
    return 'text-coral-red';
  };

  const handleSkillClick = (skill, category) => {
    setSelectedSkill({ ...skill, category });
  };

  const handleSkillHover = (skill, category) => {
    onSkillHover?.(skill ? { ...skill, category } : null);
  };

  return (
    <div className="space-y-12">
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-poppins font-bold text-foreground mb-4"
        >
          Interactive Technology Matrix
        </motion.h2>
        <p className="text-muted-foreground font-inter max-w-2xl mx-auto">
          Hover over skills to see detailed information and connections. Click for expanded details.
        </p>
      </div>
      {/* Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {Object.entries(filteredCategories)?.map(([key, category]) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="glassmorphism rounded-2xl p-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className={`w-3 h-3 bg-${category?.color} rounded-full animate-pulse`} />
              <h3 className="text-xl font-poppins font-semibold text-foreground">
                {category?.name}
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category?.skills?.map((skill, index) => (
                <motion.div
                  key={skill?.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onHoverStart={() => handleSkillHover(skill, category?.name)}
                  onHoverEnd={() => handleSkillHover(null)}
                  onClick={() => handleSkillClick(skill, category?.name)}
                  className="group relative cursor-pointer"
                >
                  <div className="bg-card border border-border/50 rounded-xl p-4 transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/5 group-hover:scale-105">
                    <div className="flex flex-col items-center space-y-3">
                      <div className={`w-12 h-12 bg-${category?.color}/10 rounded-lg flex items-center justify-center group-hover:bg-${category?.color}/20 transition-colors duration-300`}>
                        <Icon 
                          name={skill?.icon} 
                          size={24} 
                          className={`text-${category?.color} group-hover:scale-110 transition-transform duration-300`}
                        />
                      </div>
                      
                      <div className="text-center">
                        <h4 className="font-inter font-medium text-foreground text-sm mb-1">
                          {skill?.name}
                        </h4>
                        <div className="w-full bg-muted/20 rounded-full h-1.5 mb-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill?.proficiency}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className={`h-1.5 bg-${category?.color} rounded-full`}
                          />
                        </div>
                        <span className={`text-xs font-inter font-medium ${getProficiencyColor(skill?.proficiency)}`}>
                          {skill?.proficiency}%
                        </span>
                      </div>
                    </div>

                    {/* Hover Details */}
                    <div className="absolute inset-0 bg-card/95 backdrop-blur-sm rounded-xl p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center space-y-2">
                      <div className="text-center">
                        <h4 className="font-poppins font-semibold text-foreground mb-2">
                          {skill?.name}
                        </h4>
                        <div className="space-y-1 text-xs text-muted-foreground font-inter">
                          <p>
                            <span className="text-neon-green">Experience:</span> {skill?.experience}
                          </p>
                          <p>
                            <span className="text-electric-blue">Recent:</span> {skill?.recent}
                          </p>
                          <p>
                            <span className="text-purple-accent">Started:</span> {skill?.learning}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      {/* Skill Detail Modal */}
      {selectedSkill && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedSkill(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="glassmorphism rounded-2xl p-6 max-w-md w-full"
            onClick={(e) => e?.stopPropagation()}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name={selectedSkill?.icon} size={32} className="text-primary" />
              </div>
              
              <h3 className="text-2xl font-poppins font-bold text-foreground mb-2">
                {selectedSkill?.name}
              </h3>
              
              <p className="text-muted-foreground font-inter mb-4">
                {selectedSkill?.category}
              </p>

              <div className="space-y-3 text-left">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground font-inter">Proficiency</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-muted/20 rounded-full h-2">
                      <div 
                        className="h-2 bg-primary rounded-full" 
                        style={{ width: `${selectedSkill?.proficiency}%` }}
                      />
                    </div>
                    <span className="text-primary font-inter font-medium text-sm">
                      {selectedSkill?.proficiency}%
                    </span>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-inter">Experience</span>
                  <span className="text-foreground font-inter">{selectedSkill?.experience}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-inter">Recent Project</span>
                  <span className="text-foreground font-inter">{selectedSkill?.recent}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-inter">Started Learning</span>
                  <span className="text-foreground font-inter">{selectedSkill?.learning}</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedSkill(null)}
                className="mt-6 w-full bg-primary/10 hover:bg-primary/20 text-primary py-2 px-4 rounded-lg font-inter font-medium transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default SkillsMatrix;