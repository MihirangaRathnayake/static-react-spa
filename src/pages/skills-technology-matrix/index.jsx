import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import SkillsMatrix from './components/SkillsMatrix';
import CertificationBadges from './components/CertificationBadges';
import SkillEvolutionTimeline from './components/SkillEvolutionTimeline';
import CurrentlyLearning from './components/CurrentlyLearning';
import ParticleSystem from './components/ParticleSystem';
import SkillFilters from './components/SkillFilters';

const SkillsTechnologyMatrix = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    // Set page title and meta description
    document.title = 'Skills & Technology Matrix - Mihiranga';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 'Explore Mihiranga\'s comprehensive technology stack and skill evolution through an interactive matrix visualization featuring React, Next.js, UI/UX design, and more.');
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-background text-foreground overflow-x-hidden relative"
    >
      {/* Header Navigation */}
      <Header />
      {/* Particle System Background */}
      <ParticleSystem hoveredSkill={hoveredSkill} />
      {/* Main Content */}
      <main className="relative pt-20">
        {/* Hero Section */}
        <motion.section 
          variants={sectionVariants}
          className="py-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
                <span className="bg-gradient-to-r from-neon-green via-electric-blue to-purple-accent bg-clip-text text-transparent">
                  Skills & Technology
                </span>
                <br />
                <span className="text-foreground">Matrix</span>
              </h1>
              <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
                Explore my technical competencies through an interactive visualization that showcases 
                the interconnected nature of modern web development and design.
              </p>
            </motion.div>

            {/* Learning Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12 p-6 glassmorphism rounded-2xl max-w-4xl mx-auto"
            >
              <h3 className="text-lg font-poppins font-semibold text-neon-green mb-3">
                Continuous Learning Philosophy
              </h3>
              <p className="text-muted-foreground font-inter">
                "Technology evolves rapidly, and staying current isn't just about following trends—it's about 
                understanding the fundamental principles that drive innovation. I believe in deep learning, 
                practical application, and sharing knowledge with the community."
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Skill Filters */}
        <motion.section variants={sectionVariants} className="px-4 sm:px-6 lg:px-8 mb-8">
          <div className="max-w-6xl mx-auto">
            <SkillFilters 
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </div>
        </motion.section>

        {/* Interactive Skills Matrix */}
        <motion.section variants={sectionVariants} className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <SkillsMatrix 
              activeFilter={activeFilter}
              onSkillHover={setHoveredSkill}
            />
          </div>
        </motion.section>

        {/* Currently Learning Section */}
        <motion.section variants={sectionVariants} className="py-16 px-4 sm:px-6 lg:px-8 bg-card/20">
          <div className="max-w-6xl mx-auto">
            <CurrentlyLearning />
          </div>
        </motion.section>

        {/* Certification Badges */}
        <motion.section variants={sectionVariants} className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <CertificationBadges />
          </div>
        </motion.section>

        {/* Skill Evolution Timeline */}
        <motion.section variants={sectionVariants} className="py-16 px-4 sm:px-6 lg:px-8 bg-card/20">
          <div className="max-w-6xl mx-auto">
            <SkillEvolutionTimeline />
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="bg-gradient-to-t from-slate-900 to-background py-12 border-t border-border/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-neon-green to-electric-blue rounded-lg flex items-center justify-center">
                    <span className="text-background font-poppins font-bold text-sm">M</span>
                  </div>
                  <h3 className="text-xl font-poppins font-bold text-foreground">
                    Mihiranga
                  </h3>
                </div>
                
                <p className="text-muted-foreground font-inter max-w-md mx-auto">
                  Crafting tomorrow's interfaces today. Building beautiful, functional digital experiences 
                  that bridge engineering precision with design artistry.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground font-inter"
              >
                <p>
                  © {new Date()?.getFullYear()} Mihiranga. All rights reserved.
                </p>
                <div className="flex items-center space-x-4">
                  <span>Made with ❤️ in Sri Lanka</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                    <span className="text-neon-green">Available for work</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </footer>
      </main>
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-3/4 left-1/2 w-96 h-96 bg-purple-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
    </motion.div>
  );
};

export default SkillsTechnologyMatrix;