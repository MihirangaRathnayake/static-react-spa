import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const PersonalInterests = () => {
  const [activeInterest, setActiveInterest] = useState(null);

  const interests = [
    {
      id: 'music',
      title: 'Music Production',
      description: 'Creating ambient electronic music that inspires creativity',
      details: 'I find that music and code share similar patterns - both require rhythm, structure, and harmony. My electronic compositions often influence the user experience flows I design.',
      icon: 'Music',
      color: 'electric-blue',
      stats: { label: 'Tracks Created', value: '25+' },
      tools: ['Ableton Live', 'Synthesizers', 'Audio Processing']
    },
    {
      id: 'photography',
      title: 'Digital Photography',
      description: 'Capturing moments through a technical and artistic lens',
      details: 'Photography taught me about composition, lighting, and visual storytelling - skills that directly translate to UI design. Every frame tells a story, just like every interface.',
      icon: 'Camera',
      color: 'purple-accent',
      stats: { label: 'Photos Taken', value: '1000+' },
      tools: ['Adobe Lightroom', 'Photoshop', 'Mobile Photography']
    },
    {
      id: 'gaming',
      title: 'Interactive Gaming',
      description: 'Exploring user experience through immersive digital worlds',
      details: 'Gaming provides insights into user engagement, interaction design, and how people navigate complex digital environments. It\'s UX research disguised as entertainment.',
      icon: 'Gamepad2',
      color: 'neon-green',
      stats: { label: 'Games Analyzed', value: '100+' },
      tools: ['UX Analysis', 'Interaction Patterns', 'User Psychology']
    },
    {
      id: 'reading',
      title: 'Tech & Design Literature',
      description: 'Staying curious about emerging technologies and design trends',
      details: 'I consume books, articles, and research papers about everything from cognitive psychology to emerging web technologies. Knowledge is the fuel for innovation.',
      icon: 'BookOpen',
      color: 'coral-red',
      stats: { label: 'Books/Year', value: '24+' },
      tools: ['Design Books', 'Tech Articles', 'Research Papers']
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
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
            Beyond <span className="text-purple-accent">Coding</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Personal interests that humanize my professional brand and inspire my creative work
          </p>
        </motion.div>

        {/* Interests Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {interests?.map((interest, index) => (
            <motion.div
              key={interest?.id}
              variants={cardVariants}
              className="group"
              onMouseEnter={() => setActiveInterest(interest?.id)}
              onMouseLeave={() => setActiveInterest(null)}
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className={`glassmorphism p-8 rounded-2xl h-full transition-all duration-300 cursor-pointer ${
                  activeInterest === interest?.id ? 'neon-glow' : ''
                }`}
              >
                {/* Interest Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br from-${interest?.color} to-${interest?.color}/70 rounded-xl flex items-center justify-center group-hover:animate-pulse transition-all duration-300`}>
                      <Icon 
                        name={interest?.icon} 
                        size={28} 
                        className="text-background" 
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-poppins font-bold text-foreground group-hover:text-neon-green transition-colors duration-300">
                        {interest?.title}
                      </h3>
                      <div className={`mt-2 flex items-center space-x-2 text-sm font-inter text-${interest?.color}`}>
                        <Icon name="TrendingUp" size={16} />
                        <span>{interest?.stats?.label}: {interest?.stats?.value}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground font-inter mb-6 leading-relaxed">
                  {interest?.description}
                </p>

                {/* Expanded Details */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: activeInterest === interest?.id ? 1 : 0,
                    height: activeInterest === interest?.id ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-border/20 pt-6 space-y-4">
                    <p className="text-sm text-muted-foreground/80 font-inter leading-relaxed">
                      {interest?.details}
                    </p>
                    
                    {/* Tools/Skills */}
                    <div>
                      <h4 className="text-sm font-poppins font-semibold text-foreground mb-3">
                        Tools & Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {interest?.tools?.map((tool) => (
                          <span
                            key={tool}
                            className={`px-3 py-1 bg-${interest?.color}/10 border border-${interest?.color}/20 rounded-full text-xs font-inter font-medium text-${interest?.color}`}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Always visible connection to work */}
                <div className="mt-6 pt-6 border-t border-border/20">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="ArrowRight" size={16} className="text-neon-green" />
                    <span className="font-inter">
                      How this influences my professional work
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Personal Brand Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="glassmorphism p-8 lg:p-12 rounded-2xl text-center border border-electric-blue/20">
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-3">
                <Icon name="Palette" size={32} className="text-electric-blue" />
                <h3 className="text-2xl font-poppins font-bold text-foreground">
                  The Creative Connection
                </h3>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-inter leading-relaxed">
                These interests aren't just hobbies — they're integral to my identity as a creative technologist. 
                Music teaches me about rhythm and flow in interfaces. Photography develops my eye for composition and visual hierarchy. 
                Gaming reveals how users think and behave in digital spaces. Reading keeps me curious and informed.
              </p>
              
              <div className="pt-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-neon-green/10 to-electric-blue/10 border border-neon-green/20 rounded-full"
                >
                  <Icon name="Sparkles" size={20} className="text-neon-green" />
                  <span className="font-inter font-medium text-foreground">
                    Well-rounded creator, not just a coder
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-32 h-32 border border-purple-accent/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-24 h-24 border border-electric-blue/10"
        />
      </div>
    </section>
  );
};

export default PersonalInterests;