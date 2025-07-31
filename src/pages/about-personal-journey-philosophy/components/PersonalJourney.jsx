import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const PersonalJourney = () => {
  const [hoveredTrait, setHoveredTrait] = useState(null);

  const traits = [
    {
      id: 'ambitious',
      text: 'ambitious yet approachable',
      color: 'neon-green',
      description: 'Always striving for excellence while staying grounded and accessible'
    },
    {
      id: 'creative',
      text: 'creative problem solver',
      color: 'electric-blue',
      description: 'Finding innovative solutions to complex technical and design challenges'
    },
    {
      id: 'detail',
      text: 'detail-oriented perfectionist',
      color: 'purple-accent',
      description: 'Obsessing over every pixel and line of code to ensure quality'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 lg:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Professional Headshot with Neon Border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Neon border treatment */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green to-electric-blue rounded-2xl p-1 neon-glow">
                <div className="w-full h-full bg-slate-800 rounded-2xl overflow-hidden">
                  {/* Professional avatar placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 bg-gradient-to-br from-neon-green to-electric-blue rounded-full flex items-center justify-center mx-auto">
                        <span className="text-4xl font-poppins font-bold text-background">M</span>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-poppins font-bold text-foreground">Mihiranga</h3>
                        <p className="text-sm text-muted-foreground">Creative Technologist</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-12 h-12 border-2 border-neon-green/30 rounded-lg"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-8 h-8 border-2 border-electric-blue/30"
              />
            </div>
          </motion.div>

          {/* Animated Text Blocks */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-foreground">
                The Journey Begins
              </h2>
              
              <div className="space-y-4 text-lg font-inter text-muted-foreground leading-relaxed">
                <motion.p variants={itemVariants}>
                  It all started during my engineering studies, when I discovered that code could be more than just functional — it could be <span className="text-neon-green">beautiful</span>.
                </motion.p>
                
                <motion.p variants={itemVariants}>
                  While my peers focused purely on algorithms and backend systems, I found myself drawn to the intersection where <span className="text-electric-blue">technology meets human experience</span>.
                </motion.p>
                
                <motion.p variants={itemVariants}>
                  This curiosity led me down the path of UI/UX design, where I learned that the best interfaces are invisible — they just <span className="text-purple-accent">work intuitively</span>.
                </motion.p>
              </div>
            </motion.div>

            {/* Interactive Personality Traits */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-poppins font-semibold text-foreground">
                Key Personality Traits
              </h3>
              
              <div className="space-y-3">
                {traits?.map((trait) => (
                  <motion.div
                    key={trait?.id}
                    className="relative"
                    onMouseEnter={() => setHoveredTrait(trait?.id)}
                    onMouseLeave={() => setHoveredTrait(null)}
                  >
                    <div className={`glassmorphism p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                      hoveredTrait === trait?.id ? 'neon-glow' : ''
                    }`}>
                      <div className="flex items-center space-x-3">
                        <Icon 
                          name="Sparkles" 
                          size={20} 
                          className={`text-${trait?.color} transition-all duration-300 ${
                            hoveredTrait === trait?.id ? 'animate-pulse' : ''
                          }`}
                        />
                        <span className={`font-inter font-medium transition-colors duration-300 ${
                          hoveredTrait === trait?.id ? `text-${trait?.color}` : 'text-foreground'
                        }`}>
                          {trait?.text}
                        </span>
                      </div>
                      
                      {/* Hover description */}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ 
                          opacity: hoveredTrait === trait?.id ? 1 : 0,
                          height: hoveredTrait === trait?.id ? 'auto' : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-muted-foreground mt-2 pl-8">
                          {trait?.description}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Call to action */}
            <motion.div variants={itemVariants} className="pt-4">
              <div className="glassmorphism p-6 rounded-xl border border-neon-green/20">
                <div className="flex items-start space-x-4">
                  <Icon name="Lightbulb" size={24} className="text-neon-green mt-1" />
                  <div>
                    <h4 className="font-poppins font-semibold text-foreground mb-2">
                      My Core Belief
                    </h4>
                    <p className="text-muted-foreground font-inter">
                      Technology should enhance human potential, not complicate it. Every line of code I write and every interface I design serves this principle.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PersonalJourney;