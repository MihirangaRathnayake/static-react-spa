import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const CertificationBadges = () => {
  const certifications = [
    {
      name: 'React Developer Certification',
      issuer: 'freeCodeCamp',
      date: 'December 2023',
      verificationLink: '#',
      icon: 'Award',
      color: 'neon-green',
      status: 'verified'
    },
    {
      name: 'Full Stack Web Development',
      issuer: 'Coursera',
      date: 'September 2023',
      verificationLink: '#',
      icon: 'Shield',
      color: 'electric-blue',
      status: 'verified'
    },
    {
      name: 'UI/UX Design Principles',
      issuer: 'Google UX Design',
      date: 'August 2023',
      verificationLink: '#',
      icon: 'Palette',
      color: 'purple-accent',
      status: 'verified'
    },
    {
      name: 'JavaScript Algorithms',
      issuer: 'freeCodeCamp',
      date: 'June 2023',
      verificationLink: '#',
      icon: 'Code',
      color: 'coral-red',
      status: 'verified'
    },
    {
      name: 'Node.js Development',
      issuer: 'Udemy',
      date: 'November 2023',
      verificationLink: '#',
      icon: 'Server',
      color: 'neon-green',
      status: 'verified'
    },
    {
      name: 'Advanced CSS & Sass',
      issuer: 'Jonas Schmedtmann',
      date: 'July 2023',
      verificationLink: '#',
      icon: 'Paintbrush',
      color: 'electric-blue',
      status: 'verified'
    }
  ];

  const upcomingCertifications = [
    {
      name: 'AI/ML for Web Developers',
      issuer: 'Coursera',
      expectedDate: 'March 2025',
      progress: 65,
      icon: 'Brain',
      color: 'purple-accent',
      status: 'in-progress'
    },
    {
      name: 'Three.js Mastery',
      issuer: 'Three.js Journey',
      expectedDate: 'April 2025',
      progress: 40,
      icon: 'Box',
      color: 'coral-red',
      status: 'in-progress'
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-poppins font-bold text-foreground mb-4"
        >
          Certifications & Achievements
        </motion.h2>
        <p className="text-muted-foreground font-inter max-w-2xl mx-auto">
          Verified certifications from renowned platforms and institutions, demonstrating 
          commitment to continuous learning and professional development.
        </p>
      </div>
      {/* Verified Certifications */}
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <Icon name="CheckCircle" size={20} className="text-neon-green" />
          <h3 className="text-xl font-poppins font-semibold text-foreground">
            Verified Certifications
          </h3>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications?.map((cert, index) => (
            <motion.div
              key={cert?.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glassmorphism rounded-2xl p-6 group hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => window.open(cert?.verificationLink, '_blank')}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 bg-${cert?.color}/10 rounded-xl flex items-center justify-center group-hover:bg-${cert?.color}/20 transition-colors duration-300`}>
                    <Icon 
                      name={cert?.icon} 
                      size={24} 
                      className={`text-${cert?.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="ExternalLink" size={14} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    <span className="text-xs text-muted-foreground group-hover:text-primary font-inter transition-colors duration-300">
                      Verify
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="font-poppins font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {cert?.name}
                  </h4>
                  <p className="text-sm text-muted-foreground font-inter mb-2">
                    {cert?.issuer}
                  </p>
                  <div className="flex items-center space-x-2">
                    <Icon name="Calendar" size={12} className="text-muted-foreground" />
                    <span className="text-xs text-muted-foreground font-inter">
                      {cert?.date}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-border/20">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                    <span className="text-xs text-neon-green font-inter font-medium">
                      Verified
                    </span>
                  </div>
                  <Icon name="Shield" size={14} className="text-neon-green" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* In Progress Certifications */}
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <Icon name="Clock" size={20} className="text-electric-blue" />
          <h3 className="text-xl font-poppins font-semibold text-foreground">
            In Progress
          </h3>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingCertifications?.map((cert, index) => (
            <motion.div
              key={cert?.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glassmorphism rounded-2xl p-6"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-${cert?.color}/10 rounded-xl flex items-center justify-center`}>
                    <Icon 
                      name={cert?.icon} 
                      size={24} 
                      className={`text-${cert?.color}`}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-poppins font-semibold text-foreground">
                      {cert?.name}
                    </h4>
                    <p className="text-sm text-muted-foreground font-inter">
                      {cert?.issuer}
                    </p>
                  </div>
                  <span className={`text-sm font-inter font-medium text-${cert?.color}`}>
                    {cert?.progress}%
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="w-full bg-muted/20 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${cert?.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className={`h-2 bg-${cert?.color} rounded-full relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                    </motion.div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Icon name="Target" size={12} className="text-muted-foreground" />
                    <span className="text-xs text-muted-foreground font-inter">
                      Expected: {cert?.expectedDate}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Certification Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="glassmorphism rounded-2xl p-6"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-poppins font-bold text-neon-green mb-1">6</div>
            <div className="text-sm text-muted-foreground font-inter">Verified Certs</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-poppins font-bold text-electric-blue mb-1">2</div>
            <div className="text-sm text-muted-foreground font-inter">In Progress</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-poppins font-bold text-purple-accent mb-1">5</div>
            <div className="text-sm text-muted-foreground font-inter">Platforms</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-poppins font-bold text-coral-red mb-1">2023</div>
            <div className="text-sm text-muted-foreground font-inter">Latest Year</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CertificationBadges;