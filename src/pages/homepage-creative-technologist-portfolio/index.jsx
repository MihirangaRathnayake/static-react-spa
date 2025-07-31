import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import SkillsVisualization from './components/SkillsVisualization';
import FeaturedProjects from './components/FeaturedProjects';
import SocialProof from './components/SocialProof';
import QuickContact from './components/QuickContact';

const Homepage = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Mihiranga Rathnayake';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 'Creative Technologist crafting tomorrow\'s interfaces today. Specializing in React, UI/UX Design, and full-stack development.');
    }

    // Smooth scroll behavior for anchor links
    const handleSmoothScroll = (e) => {
      const target = e?.target?.closest('a[href^="#"]');
      if (target) {
        e?.preventDefault();
        const targetId = target?.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
    >
      {/* Header Navigation */}
      <Header />
      {/* Main Content */}
      <main className="relative">
        {/* Hero Section with Particle System */}
        <HeroSection />

        {/* About Section Anchor */}
        <div id="about" className="absolute" style={{ top: '100vh' }} />

        {/* Dynamic Skills Visualization */}
        <SkillsVisualization />

        {/* Featured Projects Carousel */}
        <FeaturedProjects />

        {/* Social Proof & Activity */}
        <SocialProof />

        {/* Quick Contact Form */}
        <QuickContact />

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

export default Homepage;