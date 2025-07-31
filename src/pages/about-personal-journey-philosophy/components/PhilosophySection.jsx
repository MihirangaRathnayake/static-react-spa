import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const PhilosophySection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const philosophies = [
    {
      id: 'user-centered',
      icon: 'Users',
      title: 'User-Centered Design',
      description: 'Every decision starts with understanding the human behind the screen',
      details: 'I believe that great technology should feel invisible. When users can accomplish their goals effortlessly, that\'s when we know we\'ve succeeded.',
      color: 'neon-green'
    },
    {
      id: 'technical-excellence',
      icon: 'Code',
      title: 'Technical Excellence',
      description: 'Clean code is not just functional — it\'s poetry in motion',
      details: 'Writing code that not only works but is maintainable, scalable, and elegant. Every function should tell a story.',
      color: 'electric-blue'
    },
    {
      id: 'continuous-learning',
      icon: 'BookOpen',
      title: 'Continuous Learning',
      description: 'The day we stop learning is the day we stop growing',
      details: 'Technology evolves rapidly, and I embrace this change. Every project teaches me something new about both technology and human behavior.',
      color: 'purple-accent'
    },
    {
      id: 'meaningful-impact',
      icon: 'Heart',
      title: 'Meaningful Impact',
      description: 'Building solutions that matter, not just apps that exist',
      details: 'I focus on creating digital experiences that solve real problems and improve people\'s lives in meaningful ways.',
      color: 'coral-red'
    }
  ];

  return (
    <section ref={containerRef} className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-background to-slate-900">
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
            My Design <span className="text-neon-green">Philosophy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Core beliefs that guide every line of code and every pixel I place
          </p>
        </motion.div>

        {/* Philosophy Cards with Parallax */}
        <div className="grid md:grid-cols-2 gap-8">
          {philosophies?.map((philosophy, index) => (
            <motion.div
              key={philosophy?.id}
              style={{ y: index % 2 === 0 ? y : useTransform(y, value => -value) }}
              className="group"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="glassmorphism p-8 rounded-2xl h-full transition-all duration-300 group-hover:neon-glow cursor-pointer"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:animate-pulse ${
                  philosophy?.color === 'neon-green' ? 'bg-gradient-to-br from-neon-green to-neon-green/70' :
                  philosophy?.color === 'electric-blue' ? 'bg-gradient-to-br from-electric-blue to-electric-blue/70' :
                  philosophy?.color === 'purple-accent' ? 'bg-gradient-to-br from-purple-accent to-purple-accent/70' :
                  philosophy?.color === 'coral-red' ? 'bg-gradient-to-br from-coral-red to-coral-red/70' :
                  'bg-gradient-to-br from-neon-green to-neon-green/70'
                }`}>
                  <Icon 
                    name={philosophy?.icon} 
                    size={28} 
                    className="text-white" 
                  />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-poppins font-bold text-foreground group-hover:text-neon-green transition-colors duration-300">
                    {philosophy?.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-inter font-medium">
                    {philosophy?.description}
                  </p>
                  
                  <div className="pt-4 border-t border-border/20">
                    <p className="text-sm text-muted-foreground/80 font-inter leading-relaxed">
                      {philosophy?.details}
                    </p>
                  </div>
                </div>

                {/* Hover effect indicator */}
                <motion.div
                  className="mt-6 flex items-center space-x-2 text-sm text-muted-foreground group-hover:text-neon-green transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <span>Learn more</span>
                  <Icon name="ArrowRight" size={16} />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Quote */}
        <motion.div
          style={{ opacity }}
          className="mt-20 text-center"
        >
          <div className="glassmorphism p-8 lg:p-12 rounded-2xl max-w-4xl mx-auto border border-neon-green/20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Icon name="Quote" size={48} className="text-neon-green mx-auto opacity-60" />
              
              <blockquote className="text-2xl lg:text-3xl font-poppins font-medium text-foreground leading-relaxed">
                "Great design is not just about making things look good. It's about making things 
                <span className="text-neon-green"> work beautifully</span> and 
                <span className="text-electric-blue"> feel effortless</span>."
              </blockquote>
              
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-neon-green to-electric-blue rounded-full flex items-center justify-center">
                  <span className="text-background font-poppins font-bold">M</span>
                </div>
                <div className="text-left">
                  <p className="font-poppins font-semibold text-foreground">Mihiranga</p>
                  <p className="text-sm text-muted-foreground">Creative Technologist</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
          className="absolute top-20 left-10 w-32 h-32 border border-neon-green/10 rounded-full"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
          className="absolute bottom-20 right-10 w-24 h-24 border border-electric-blue/10"
        />
      </div>
    </section>
  );
};

export default PhilosophySection;