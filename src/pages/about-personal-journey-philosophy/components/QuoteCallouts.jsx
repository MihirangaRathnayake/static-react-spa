import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const QuoteCallouts = () => {
  const quotes = [
    {
      id: 'growth-mindset',
      quote: "Every bug I fix, every feature I build, every design I iterate on — they're all steps toward becoming the creative technologist I aspire to be.",
      category: 'Growth Mindset',
      color: 'neon-green',
      icon: 'TrendingUp',
      context: 'On continuous learning and improvement'
    },
    {
      id: 'user-love',
      quote: "The best code isn't just functional — it creates interfaces that users love to interact with, making their digital experiences feel magical rather than mechanical.",
      category: 'User-Centered Design',
      color: 'electric-blue',
      icon: 'Heart',
      context: 'On creating meaningful user experiences'
    },
    {
      id: 'creative-process',
      quote: "I don't just write code; I compose digital symphonies where every component plays in harmony to create beautiful, functional experiences.",
      category: 'Creative Process',
      color: 'purple-accent',
      icon: 'Palette',
      context: 'On the artistry of development'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const quoteVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
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
            Words That <span className="text-neon-green">Drive</span> Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Quotes that highlight my growth mindset and passion for creating interfaces that users love
          </p>
        </motion.div>

        {/* Quotes Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {quotes?.map((quoteData, index) => (
            <motion.div
              key={quoteData?.id}
              variants={quoteVariants}
              className={`relative ${index % 2 === 1 ? 'ml-auto max-w-4xl' : 'mr-auto max-w-4xl'}`}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glassmorphism p-8 lg:p-12 rounded-2xl group transition-all duration-300 hover:neon-glow cursor-pointer"
              >
                {/* Quote Icon */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br from-${quoteData?.color} to-${quoteData?.color}/70 rounded-xl flex items-center justify-center group-hover:animate-pulse`}>
                    <Icon 
                      name={quoteData?.icon} 
                      size={28} 
                      className="text-background" 
                    />
                  </div>
                  
                  <div className="text-right">
                    <span className={`inline-block px-4 py-2 bg-${quoteData?.color}/10 border border-${quoteData?.color}/20 rounded-full text-sm font-inter font-medium text-${quoteData?.color}`}>
                      {quoteData?.category}
                    </span>
                  </div>
                </div>

                {/* Quote Text */}
                <div className="space-y-6">
                  <div className="relative">
                    <Icon 
                      name="Quote" 
                      size={40} 
                      className={`text-${quoteData?.color} opacity-30 mb-4`} 
                    />
                    <blockquote className="text-xl lg:text-2xl font-poppins font-medium text-foreground leading-relaxed group-hover:text-neon-green transition-colors duration-300">
                      "{quoteData?.quote}"
                    </blockquote>
                  </div>

                  {/* Context */}
                  <div className="flex items-center space-x-3 pt-6 border-t border-border/20">
                    <Icon name="MessageCircle" size={18} className="text-muted-foreground" />
                    <p className="text-sm text-muted-foreground font-inter italic">
                      {quoteData?.context}
                    </p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`w-8 h-8 bg-${quoteData?.color}/20 rounded-full flex items-center justify-center`}>
                    <Icon name="Sparkles" size={16} className={`text-${quoteData?.color}`} />
                  </div>
                </div>
              </motion.div>

              {/* Floating Quote Mark */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`absolute -z-10 ${
                  index % 2 === 0 
                    ? '-right-8 -top-8' :'-left-8 -top-8'
                } w-32 h-32 text-${quoteData?.color} opacity-5`}
              >
                <Icon name="Quote" size={128} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Inspirational Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glassmorphism p-8 rounded-2xl border border-electric-blue/20 max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <Icon name="Target" size={24} className="text-electric-blue" />
                <h3 className="text-lg font-poppins font-bold text-foreground">
                  My Mission Statement
                </h3>
              </div>
              
              <p className="text-muted-foreground font-inter leading-relaxed">
                To bridge the gap between engineering precision and design artistry, creating digital experiences 
                that don't just function but inspire. Every project is an opportunity to make technology more 
                human and more beautiful.
              </p>
              
              <div className="flex items-center justify-center space-x-2 pt-4">
                <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                <span className="text-sm text-neon-green font-inter font-medium">
                  Continuously evolving
                </span>
                <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-10 w-64 h-64 border border-neon-green/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-10 w-48 h-48 border border-electric-blue/5"
        />
        <motion.div
          animate={{ rotate: 180, scale: [1, 1.1, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-purple-accent/5 rounded-full"
        />
      </div>
    </section>
  );
};

export default QuoteCallouts;