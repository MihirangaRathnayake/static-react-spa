import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SkillEvolutionTimeline = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(null);

  const timelineData = [
    {
      year: '2020',
      title: 'Foundation Building',
      description: 'Started with web fundamentals',
      skills: ['HTML5', 'CSS3', 'Basic JavaScript', 'Responsive Design'],
      milestone: 'First Static Website',
      color: 'coral-red',
      icon: 'Play'
    },
    {
      year: '2021',
      title: 'Framework Introduction',
      description: 'Discovered modern development tools',
      skills: ['React Basics', 'Tailwind CSS', 'Git/GitHub', 'NPM/Yarn'],
      milestone: 'First React Component',
      color: 'neon-green',
      icon: 'Zap'
    },
    {
      year: '2022',
      title: 'Full-Stack Development',
      description: 'Expanded to backend technologies',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'Next.js'],
      milestone: 'Full-Stack Application',
      color: 'electric-blue',
      icon: 'Server'
    },
    {
      year: '2023',
      title: 'UI/UX Focus',
      description: 'Enhanced design and user experience skills',
      skills: ['Figma', 'Design Systems', 'Framer Motion', 'Advanced CSS'],
      milestone: 'Design System Creation',
      color: 'purple-accent',
      icon: 'Palette'
    },
    {
      year: '2024',
      title: 'Advanced Patterns',
      description: 'Mastering complex development patterns',
      skills: ['Advanced React Patterns', 'Performance Optimization', 'Testing', 'CI/CD'],
      milestone: 'Production-Ready Apps',
      color: 'neon-green',
      icon: 'Trophy'
    },
    {
      year: '2025',
      title: 'Future Technologies',
      description: 'Exploring cutting-edge technologies',
      skills: ['AI/ML Integration', 'Three.js', 'WebAssembly', 'Advanced TypeScript'],
      milestone: 'AI-Powered Applications',
      color: 'electric-blue',
      icon: 'Rocket'
    }
  ];

  const currentYear = new Date()?.getFullYear();

  return (
    <div className="space-y-12">
      <div className="text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-poppins font-bold text-foreground mb-4"
        >
          Skill Evolution Timeline
        </motion.h2>
        <p className="text-muted-foreground font-inter max-w-2xl mx-auto">
          My journey from basic HTML/CSS to advanced React development and UI/UX design principles. 
          Each milestone represents a significant leap in technical capability.
        </p>
      </div>
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-coral-red via-neon-green via-electric-blue to-purple-accent opacity-30" />

        {/* Timeline Items */}
        <div className="space-y-16">
          {timelineData?.map((item, index) => (
            <motion.div
              key={item?.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`w-16 h-16 bg-${item?.color}/20 border-4 border-${item?.color} rounded-full flex items-center justify-center cursor-pointer group`}
                  onClick={() => setSelectedPeriod(selectedPeriod === item?.year ? null : item?.year)}
                >
                  <Icon 
                    name={item?.icon} 
                    size={24} 
                    className={`text-${item?.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                </motion.div>
              </div>

              {/* Content Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glassmorphism rounded-2xl p-6 cursor-pointer"
                  onClick={() => setSelectedPeriod(selectedPeriod === item?.year ? null : item?.year)}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`text-2xl font-poppins font-bold text-${item?.color}`}>
                        {item?.year}
                      </div>
                      {parseInt(item?.year) > currentYear && (
                        <span className="text-xs bg-electric-blue/20 text-electric-blue px-2 py-1 rounded-full font-inter">
                          Future
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="text-xl font-poppins font-semibold text-foreground mb-2">
                        {item?.title}
                      </h3>
                      <p className="text-muted-foreground font-inter text-sm">
                        {item?.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Icon name="Target" size={16} className={`text-${item?.color}`} />
                        <span className="text-sm font-inter font-medium text-foreground">
                          {item?.milestone}
                        </span>
                      </div>
                    </div>

                    {/* Skills Preview */}
                    <div className="flex flex-wrap gap-2">
                      {item?.skills?.slice(0, 3)?.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs bg-muted/20 text-muted-foreground px-2 py-1 rounded-full font-inter"
                        >
                          {skill}
                        </span>
                      ))}
                      {item?.skills?.length > 3 && (
                        <span className="text-xs text-muted-foreground font-inter">
                          +{item?.skills?.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Empty space for opposite side */}
              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
      {/* Expanded Period Details */}
      {selectedPeriod && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="glassmorphism rounded-2xl p-6 mt-8"
        >
          {(() => {
            const period = timelineData?.find(item => item?.year === selectedPeriod);
            return (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-poppins font-bold text-foreground">
                    {period?.year} - {period?.title}
                  </h3>
                  <button
                    onClick={() => setSelectedPeriod(null)}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    <Icon name="X" size={20} />
                  </button>
                </div>

                <p className="text-muted-foreground font-inter">
                  {period?.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-poppins font-semibold text-foreground">
                    Key Skills Acquired
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {period?.skills?.map((skill) => (
                      <div
                        key={skill}
                        className={`bg-${period?.color}/10 border border-${period?.color}/20 rounded-lg p-3 text-center`}
                      >
                        <span className="text-sm font-inter font-medium text-foreground">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border/20">
                  <div className="flex items-center space-x-2">
                    <Icon name="Trophy" size={16} className={`text-${period?.color}`} />
                    <span className="font-inter font-medium text-foreground">
                      Major Milestone: {period?.milestone}
                    </span>
                  </div>
                </div>
              </div>
            );
          })()}
        </motion.div>
      )}
      {/* Timeline Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="glassmorphism rounded-2xl p-6"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-poppins font-bold text-neon-green mb-1">5+</div>
            <div className="text-sm text-muted-foreground font-inter">Years Learning</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-poppins font-bold text-electric-blue mb-1">20+</div>
            <div className="text-sm text-muted-foreground font-inter">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-poppins font-bold text-purple-accent mb-1">6</div>
            <div className="text-sm text-muted-foreground font-inter">Major Milestones</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-poppins font-bold text-coral-red mb-1">∞</div>
            <div className="text-sm text-muted-foreground font-inter">Growth Mindset</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillEvolutionTimeline;