import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const CurrentlyLearning = () => {
  const learningSkills = [
    {
      name: 'AI/ML Integration',
      description: 'Implementing AI-powered features in web applications',
      progress: 65,
      targetDate: 'March 2025',
      platform: 'Coursera',
      icon: 'Brain',
      color: 'neon-green'
    },
    {
      name: 'Three.js',
      description: 'Creating immersive 3D web experiences and animations',
      progress: 40,
      targetDate: 'April 2025',
      platform: 'Three.js Journey',
      icon: 'Box',
      color: 'electric-blue'
    },
    {
      name: 'Advanced TypeScript',
      description: 'Mastering advanced patterns and type systems',
      progress: 75,
      targetDate: 'February 2025',
      platform: 'freeCodeCamp',
      icon: 'FileText',
      color: 'purple-accent'
    },
    {
      name: 'WebAssembly',
      description: 'High-performance web applications with WASM',
      progress: 25,
      targetDate: 'June 2025',
      platform: 'MDN Web Docs',
      icon: 'Cpu',
      color: 'coral-red'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-poppins font-bold text-foreground mb-4"
        >
          Currently Learning
        </motion.h2>
        <p className="text-muted-foreground font-inter max-w-2xl mx-auto">
          Continuously expanding my skill set with cutting-edge technologies and methodologies 
          to stay at the forefront of web development.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {learningSkills?.map((skill, index) => (
          <motion.div
            key={skill?.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glassmorphism rounded-2xl p-6 group hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className={`w-12 h-12 bg-${skill?.color}/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-${skill?.color}/20 transition-colors duration-300`}>
                <Icon 
                  name={skill?.icon} 
                  size={24} 
                  className={`text-${skill?.color} group-hover:scale-110 transition-transform duration-300`}
                />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-poppins font-semibold text-foreground">
                    {skill?.name}
                  </h3>
                  <span className={`text-sm font-inter font-medium text-${skill?.color}`}>
                    {skill?.progress}%
                  </span>
                </div>
                
                <p className="text-muted-foreground font-inter text-sm mb-4">
                  {skill?.description}
                </p>
                
                <div className="space-y-3">
                  {/* Progress Bar */}
                  <div className="w-full bg-muted/20 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill?.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`h-2 bg-${skill?.color} rounded-full relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                    </motion.div>
                  </div>
                  
                  {/* Details */}
                  <div className="flex items-center justify-between text-xs font-inter">
                    <div className="flex items-center space-x-1">
                      <Icon name="Calendar" size={12} className="text-muted-foreground" />
                      <span className="text-muted-foreground">Target: {skill?.targetDate}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="GraduationCap" size={12} className="text-muted-foreground" />
                      <span className="text-muted-foreground">{skill?.platform}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Learning Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="glassmorphism rounded-2xl p-6"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-poppins font-bold text-neon-green mb-1">4</div>
            <div className="text-sm text-muted-foreground font-inter">Active Courses</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-poppins font-bold text-electric-blue mb-1">15</div>
            <div className="text-sm text-muted-foreground font-inter">Hours/Week</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-poppins font-bold text-purple-accent mb-1">51%</div>
            <div className="text-sm text-muted-foreground font-inter">Avg Progress</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-poppins font-bold text-coral-red mb-1">2025</div>
            <div className="text-sm text-muted-foreground font-inter">Target Year</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CurrentlyLearning;