import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [particles, setParticles] = useState([]);

  const fullText = "Crafting Tomorrow's Interfaces Today";

  // Typewriter effect
  useEffect(() => {
    if (currentIndex < fullText?.length && isTyping) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText?.[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (currentIndex === fullText?.length) {
      setIsTyping(false);
    }
  }, [currentIndex, isTyping, fullText]);

  // Generate particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles?.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          opacity: Math.random() * 0.8 + 0.2,
          color: Math.random() > 0.5 ? '#32FF7E' : '#00C9FF',
          speed: Math.random() * 2 + 1
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-slate-900 to-background">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {particles?.map((particle) => (
          <motion.div
            key={particle?.id}
            className="absolute rounded-full"
            style={{
              left: `${particle?.x}%`,
              top: `${particle?.y}%`,
              width: `${particle?.size}px`,
              height: `${particle?.size}px`,
              backgroundColor: particle?.color,
              opacity: particle?.opacity,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [particle?.opacity, particle?.opacity * 0.3, particle?.opacity],
            }}
            transition={{
              duration: particle?.speed + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      {/* Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border-2 border-neon-green/30 rounded-lg"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-32 right-32 w-24 h-24 border-2 border-electric-blue/30"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Avatar/Profile Picture */}
          <motion.div
            className="mx-auto w-32 h-32 mb-8"
            whileHover={{ scale: 1.1, rotateY: 15 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full h-full bg-gradient-to-br from-neon-green to-electric-blue rounded-full p-1 neon-glow">
              <div className="w-full h-full rounded-full overflow-hidden bg-background flex items-center justify-center">
                <img
                  src="/assets/images/profile.png"
                  alt="Mihiranga - Creative Technologist"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    // Fallback to the "M" if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-neon-green to-electric-blue rounded-full items-center justify-center hidden">
                  <span className="text-4xl font-poppins font-bold text-background">M</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Typewriter Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold text-foreground">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-neon-green"
              >
                |
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 0.8 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-inter"
            >
              Where engineering precision meets design artistry. I'm Mihiranga, a creative technologist
              building beautiful, functional digital experiences that users love to interact with.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              variant="default"
              size="lg"
              iconName="FolderOpen"
              iconPosition="left"
              onClick={() => scrollToSection('projects')}
              className="bg-neon-green text-background hover:neon-glow transition-all duration-300"
            >
              View My Work
            </Button>

            <Button
              variant="outline"
              size="lg"
              iconName="Mail"
              iconPosition="left"
              onClick={() => scrollToSection('contact')}
              className="border-electric-blue text-electric-blue hover:bg-electric-blue/10 hover:text-white hover:neon-glow-blue transition-all duration-300"
            >
              Let's Connect
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center space-y-2 cursor-pointer"
              onClick={() => scrollToSection('about')}
            >
              <span className="text-sm text-muted-foreground font-inter">Scroll to explore</span>
              <Icon name="ChevronDown" size={24} className="text-neon-green" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      {/* Easter Egg - Hidden Click Area */}
      <motion.div
        className="absolute top-4 right-4 w-8 h-8 cursor-pointer opacity-0 hover:opacity-100 transition-opacity duration-300"
        onClick={() => {
          // Trigger confetti or special animation
          const confetti = document.createElement('div');
          confetti.innerHTML = '🎉';
          confetti.className = 'fixed top-4 right-4 text-2xl animate-bounce z-50';
          document.body?.appendChild(confetti);
          setTimeout(() => document.body?.removeChild(confetti), 2000);
        }}
      >
        <div className="w-full h-full bg-purple-accent rounded-full flex items-center justify-center">
          <Icon name="Sparkles" size={16} className="text-white" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;