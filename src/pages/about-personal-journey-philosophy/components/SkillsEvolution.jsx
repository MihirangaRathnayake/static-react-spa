import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SkillsEvolution = () => {
  const [activePhase, setActivePhase] = useState(0);

  const evolutionPhases = [
    {
      id: 'foundation',
      title: 'Foundation Phase',
      period: '2020 - 2021',
      level: 'Beginner',
      description: 'Discovering the basics of programming and web development',
      skills: ['HTML/CSS', 'JavaScript Basics', 'Basic Programming Concepts', 'Git Version Control'],
      achievement: 'Built my first responsive website',
      color: 'coral-red',
      icon: 'BookOpen'
    },
    {
      id: 'exploration',
      title: 'Exploration Phase',
      period: '2021 - 2022',
      level: 'Intermediate',
      description: 'Diving deeper into frameworks and discovering UI/UX design',
      skills: ['React Fundamentals', 'CSS Frameworks', 'Basic UI/UX Principles', 'Node.js Basics'],
      achievement: 'Created my first React application with interactive components',
      color: 'purple-accent',
      icon: 'Compass'
    },
    {
      id: 'specialization',
      title: 'Specialization Phase',
      period: '2022 - 2023',
      level: 'Advanced',
      description: 'Focusing on advanced React patterns and design thinking',
      skills: ['Advanced React Patterns', 'State Management', 'Design Systems', 'API Integration'],
      achievement: 'Developed a full-stack application with complex state management',
      color: 'electric-blue',
      icon: 'Target'
    },
    {
      id: 'mastery',
      title: 'Mastery Phase',
      period: '2023 - Present',
      level: 'Expert',
      description: 'Combining technical excellence with design artistry',
      skills: ['React Ecosystem Mastery', 'Advanced Design Thinking', 'Performance Optimization', 'Mentoring Others'],
      achievement: 'Building production-ready applications with exceptional UX',
      color: 'neon-green',
      icon: 'Crown'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 lg:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-foreground mb-6">
            Skills <span className="text-electric-blue">Evolution</span> Timeline
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            My progression from basic programming to advanced React development and design thinking
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neon-green via-electric-blue to-purple-accent opacity-30" />

          {/* Timeline Items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {evolutionPhases?.map((phase, index) => (
              <motion.div
                key={phase?.id}
                variants={itemVariants}
                className="relative"
                onMouseEnter={() => setActivePhase(index)}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-4 h-4 bg-${phase?.color} rounded-full border-4 border-background transition-all duration-300 ${
                  activePhase === index ? 'scale-150 neon-glow' : ''
                }`} />

                {/* Content Card */}
                <div className="ml-20">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`glassmorphism p-6 lg:p-8 rounded-2xl transition-all duration-300 cursor-pointer ${
                      activePhase === index ? 'neon-glow' : ''
                    }`}
                  >
                    <div className="grid lg:grid-cols-3 gap-6">
                      {/* Phase Info */}
                      <div className="lg:col-span-1 space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-12 h-12 bg-gradient-to-br from-${phase?.color} to-${phase?.color}/70 rounded-lg flex items-center justify-center`}>
                            <Icon name={phase?.icon} size={24} className="text-background" />
                          </div>
                          <div>
                            <h3 className="text-lg font-poppins font-bold text-foreground">
                              {phase?.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {phase?.period}
                            </p>
                          </div>
                        </div>
                        
                        <div className={`inline-block px-3 py-1 bg-${phase?.color}/10 border border-${phase?.color}/20 rounded-full`}>
                          <span className={`text-sm font-inter font-medium text-${phase?.color}`}>
                            {phase?.level}
                          </span>
                        </div>
                        
                        <p className="text-muted-foreground font-inter text-sm">
                          {phase?.description}
                        </p>
                      </div>

                      {/* Skills Grid */}
                      <div className="lg:col-span-1 space-y-4">
                        <h4 className="font-poppins font-semibold text-foreground text-sm uppercase tracking-wide">
                          Key Skills Acquired
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {phase?.skills?.map((skill, skillIndex) => (
                            <motion.div
                              key={skill}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: skillIndex * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-muted/5 transition-colors duration-200"
                            >
                              <Icon name="CheckCircle" size={16} className={`text-${phase?.color}`} />
                              <span className="text-sm font-inter text-muted-foreground">
                                {skill}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Achievement */}
                      <div className="lg:col-span-1 space-y-4">
                        <h4 className="font-poppins font-semibold text-foreground text-sm uppercase tracking-wide">
                          Major Achievement
                        </h4>
                        <div className={`p-4 bg-${phase?.color}/5 border border-${phase?.color}/20 rounded-lg`}>
                          <div className="flex items-start space-x-3">
                            <Icon name="Trophy" size={20} className={`text-${phase?.color} mt-1`} />
                            <p className="text-sm font-inter text-muted-foreground">
                              {phase?.achievement}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="glassmorphism p-8 rounded-2xl border border-neon-green/20">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center space-x-3">
                <Icon name="Rocket" size={32} className="text-neon-green" />
                <h3 className="text-2xl font-poppins font-bold text-foreground">
                  What's Next?
                </h3>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
                Currently diving deeper into advanced animation libraries, exploring AI integration in UX, 
                and mentoring other developers on their journey to becoming creative technologists.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 pt-4">
                {['Three.js', 'AI/ML Integration', 'Advanced Animations', 'Mentoring', 'Open Source']?.map((focus) => (
                  <span
                    key={focus}
                    className="px-4 py-2 bg-neon-green/10 border border-neon-green/20 rounded-full text-sm font-inter font-medium text-neon-green"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsEvolution;