import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SkillsVisualization = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const skills = [
    { name: 'React', icon: 'Code', color: '#32FF7E', level: 90 },
    { name: 'Next.js', icon: 'Zap', color: '#00C9FF', level: 85 },
    { name: 'UI/UX Design', icon: 'Palette', color: '#A855F7', level: 88 },
    { name: 'JavaScript', icon: 'FileCode', color: '#FF6B6B', level: 92 },
    { name: 'TypeScript', icon: 'Code2', color: '#32FF7E', level: 80 },
    { name: 'Tailwind CSS', icon: 'Paintbrush', color: '#00C9FF', level: 95 },
    { name: 'Node.js', icon: 'Server', color: '#A855F7', level: 75 },
    { name: 'MongoDB', icon: 'Database', color: '#FF6B6B', level: 70 },
    { name: 'Git', icon: 'GitBranch', color: '#32FF7E', level: 88 },
    { name: 'Figma', icon: 'Layers', color: '#00C9FF', level: 85 },
    { name: 'Framer Motion', icon: 'Move', color: '#A855F7', level: 82 },
    { name: 'REST APIs', icon: 'Globe', color: '#FF6B6B', level: 87 }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e?.clientX, y: e?.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const calculateDistance = (skillIndex, totalSkills) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const distance = Math.sqrt(
      Math.pow(mousePosition?.x - centerX, 2) + Math.pow(mousePosition?.y - centerY, 2)
    );
    return Math.max(0, 200 - distance) / 200;
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-foreground mb-4">
            Technical <span className="text-neon-green">Arsenal</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
            A dynamic collection of technologies and tools I use to bring ideas to life. 
            Move your cursor around to see them respond!
          </p>
        </motion.div>

        {/* Interactive Skills Grid */}
        <div className="relative min-h-[600px] flex items-center justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-4xl">
            {skills?.map((skill, index) => {
              const proximity = calculateDistance(index, skills?.length);
              
              return (
                <motion.div
                  key={skill?.name}
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100 
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1,
                    rotateY: 10,
                    z: 50
                  }}
                  animate={{
                    scale: 1 + proximity * 0.2,
                    rotateZ: proximity * 5,
                  }}
                  style={{
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div 
                    className="glassmorphism p-6 rounded-2xl text-center transition-all duration-300 group-hover:neon-glow"
                    style={{
                      borderColor: `${skill?.color}30`,
                      boxShadow: proximity > 0.3 ? `0 0 20px ${skill?.color}40` : 'none'
                    }}
                  >
                    {/* Skill Icon */}
                    <div 
                      className="w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center transition-all duration-300"
                      style={{ 
                        backgroundColor: `${skill?.color}20`,
                        border: `2px solid ${skill?.color}40`
                      }}
                    >
                      <Icon 
                        name={skill?.icon} 
                        size={24} 
                        style={{ color: skill?.color }}
                      />
                    </div>

                    {/* Skill Name */}
                    <h3 className="text-sm font-poppins font-semibold text-foreground mb-3">
                      {skill?.name}
                    </h3>

                    {/* Proficiency Bar */}
                    <div className="w-full bg-muted/20 rounded-full h-2 mb-2">
                      <motion.div
                        className="h-2 rounded-full transition-all duration-500"
                        style={{ backgroundColor: skill?.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill?.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>

                    {/* Proficiency Percentage */}
                    <span 
                      className="text-xs font-inter font-medium"
                      style={{ color: skill?.color }}
                    >
                      {skill?.level}%
                    </span>

                    {/* Hover Glow Effect */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                      style={{ 
                        background: `radial-gradient(circle, ${skill?.color}40 0%, transparent 70%)`
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Central Magnetic Point Indicator */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-4 h-4 bg-neon-green rounded-full neon-glow" />
          </motion.div>
        </div>

        {/* Learning Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glassmorphism p-6 rounded-2xl max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse" />
              <span className="text-sm font-inter font-medium text-foreground">
                Currently Learning
              </span>
            </div>
            <p className="text-neon-green font-poppins font-semibold">
              Advanced React Patterns & Three.js
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              NIBM - Software Engineering Program
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsVisualization;