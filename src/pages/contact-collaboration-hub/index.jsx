import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import ContactForm from './components/ContactForm';
import SocialLinks from './components/SocialLinks';
import CollaborationTypes from './components/CollaborationTypes';
import ContactInfo from './components/ContactInfo';
import CalendarWidget from './components/CalendarWidget';

const ContactCollaborationHub = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingParticles = Array.from({ length: 6 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-neon-green/30 rounded-full"
      animate={{
        x: [0, 100, 0],
        y: [0, -100, 0],
        opacity: [0.3, 0.8, 0.3],
      }}
      transition={{
        duration: 8 + i * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 1.5,
      }}
      style={{
        left: `${20 + i * 15}%`,
        top: `${30 + i * 10}%`,
      }}
    />
  ));

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact & Collaboration Hub - Mihiranga Portfolio</title>
        <meta name="description" content="Get in touch with Mihiranga for job opportunities, project collaborations, mentorship, and freelance work. Let's build something amazing together!" />
        <meta name="keywords" content="contact, collaboration, hire developer, freelance, mentorship, job opportunities" />
      </Helmet>
      <Header />
      {/* Floating Background Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {floatingParticles}
      </div>
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center space-x-3 mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 bg-gradient-to-br from-neon-green to-electric-blue rounded-2xl flex items-center justify-center neon-glow"
                >
                  <Icon name="MessageCircle" size={32} className="text-background" />
                </motion.div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-poppins font-bold text-foreground mb-6">
                Contact &{' '}
                <span className="bg-gradient-to-r from-neon-green to-electric-blue bg-clip-text text-transparent">
                  Collaboration Hub
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                Ready to bring your ideas to life? Let's connect and create something extraordinary together. Whether you're looking to hire, collaborate, or just say hello - I'd love to hear from you.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                  <span className="text-neon-green font-medium">Available for new projects</span>
                </div>
                <div className="w-1 h-4 bg-border"></div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} className="text-muted-foreground" />
                  <span className="text-muted-foreground">Response within 24 hours</span>
                </div>
                <div className="w-1 h-4 bg-border"></div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} className="text-muted-foreground" />
                  <span className="text-muted-foreground">Colombo, Sri Lanka (GMT+5:30)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Collaboration Types */}
            <div className="mb-20">
              <CollaborationTypes />
            </div>

            {/* Contact Form and Social Links */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              <ContactForm />
              <SocialLinks />
            </div>

            {/* Calendar Widget and Contact Info */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              <div className="lg:col-span-1">
                <CalendarWidget />
              </div>
              <div className="lg:col-span-2">
                <ContactInfo />
              </div>
            </div>

            {/* Professional Email Signature Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="glassmorphism rounded-2xl p-8 mb-20"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-coral-red/20 rounded-lg flex items-center justify-center">
                  <Icon name="FileText" size={20} className="text-coral-red" />
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-bold text-foreground">
                    Professional Email Signature
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    How I present myself in formal communications
                  </p>
                </div>
              </div>

              <div className="bg-card/30 rounded-xl p-6 border border-border/20 font-mono text-sm">
                <div className="space-y-2">
                  <p className="text-foreground font-semibold">Best regards,</p>
                  <p className="text-neon-green font-bold text-lg">Mihiranga Perera</p>
                  <p className="text-muted-foreground">Creative Technologist & Frontend Developer</p>
                  <div className="border-t border-border/20 pt-3 mt-3 space-y-1">
                    <p className="text-muted-foreground">📧 mihiranga.dev@gmail.com</p>
                    <p className="text-muted-foreground">🌐 LinkedIn: /in/mihiranga-dev</p>
                    <p className="text-muted-foreground">💻 GitHub: /mihiranga-dev</p>
                    <p className="text-muted-foreground">📍 Colombo, Sri Lanka (GMT+5:30)</p>
                  </div>
                  <div className="border-t border-border/20 pt-3 mt-3">
                    <p className="text-xs text-muted-foreground italic">
                      "Crafting tomorrow's interfaces today - where engineering meets creativity"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Final CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-center"
            >
              <div className="glassmorphism rounded-2xl p-12 bg-gradient-to-br from-neon-green/5 to-electric-blue/5 border border-neon-green/20">
                <div className="flex items-center justify-center space-x-2 mb-6">
                  <Icon name="Sparkles" size={24} className="text-neon-green" />
                  <h2 className="text-2xl font-poppins font-bold text-foreground">
                    Ready to Start Something Amazing?
                  </h2>
                  <Icon name="Sparkles" size={24} className="text-electric-blue" />
                </div>
                
                <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                  Every great project starts with a conversation. Whether you have a clear vision or just an idea, 
                  I'm here to help bring it to life with creativity, technical expertise, and passion.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Icon name="CheckCircle" size={16} className="text-neon-green" />
                    <span className="text-foreground">Free consultation</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Icon name="CheckCircle" size={16} className="text-electric-blue" />
                    <span className="text-foreground">Quick response</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Icon name="CheckCircle" size={16} className="text-purple-accent" />
                    <span className="text-foreground">Collaborative approach</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date()?.getFullYear()} Mihiranga Perera. Crafted with passion and precision.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ContactCollaborationHub;