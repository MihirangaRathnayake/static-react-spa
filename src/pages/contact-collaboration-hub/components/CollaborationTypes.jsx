import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const CollaborationTypes = () => {
  const collaborationTypes = [
    {
      title: 'Job Opportunities',
      icon: 'Briefcase',
      color: 'text-neon-green',
      bgColor: 'bg-neon-green/10',
      borderColor: 'border-neon-green/20',
      description: 'Looking for junior frontend developers with UI/UX sensibilities',
      features: [
        'React & Next.js development',
        'Responsive design implementation',
        'Component library creation',
        'Performance optimization'
      ],
      cta: 'View Resume',
      audience: 'Recruiters & Hiring Managers'
    },
    {
      title: 'Project Collaboration',
      icon: 'Users',
      color: 'text-electric-blue',
      bgColor: 'bg-electric-blue/10',
      borderColor: 'border-electric-blue/20',
      description: 'Partner with fellow developers on exciting projects',
      features: [
        'Open source contributions',
        'Hackathon participation',
        'Side project development',
        'Code review & feedback'
      ],
      cta: 'See Projects',
      audience: 'Fellow Developers & Students'
    },
    {
      title: 'Mentorship & Guidance',
      icon: 'BookOpen',
      color: 'text-purple-accent',
      bgColor: 'bg-purple-accent/10',
      borderColor: 'border-purple-accent/20',
      description: 'Seeking guidance from experienced professionals',
      features: [
        'Career path advice',
        'Technical skill development',
        'Industry insights',
        'Portfolio feedback'
      ],
      cta: 'Connect',
      audience: 'Industry Professionals & Mentors'
    },
    {
      title: 'Freelance Projects',
      icon: 'Laptop',
      color: 'text-coral-red',
      bgColor: 'bg-coral-red/10',
      borderColor: 'border-coral-red/20',
      description: 'Available for small to medium-scale web development projects',
      features: [
        'Landing page development',
        'Portfolio websites',
        'Component libraries',
        'UI/UX implementation'
      ],
      cta: 'Discuss Project',
      audience: 'Small Businesses & Startups'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="space-y-8"
    >
      <div className="text-center">
        <h2 className="text-3xl font-poppins font-bold text-foreground mb-4">
          Let's Build Something Together
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I'm always excited to collaborate on meaningful projects and connect with like-minded professionals. Here's how we can work together:
        </p>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {collaborationTypes?.map((type, index) => (
          <motion.div
            key={type?.title}
            variants={itemVariants}
            className={`glassmorphism rounded-2xl p-6 border ${type?.borderColor} hover:scale-105 transition-all duration-300 group`}
          >
            <div className="flex items-start space-x-4 mb-4">
              <div className={`w-12 h-12 rounded-xl ${type?.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={type?.icon} size={24} className={type?.color} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-poppins font-bold text-foreground mb-1">
                  {type?.title}
                </h3>
                <p className="text-xs text-muted-foreground font-medium">
                  {type?.audience}
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {type?.description}
            </p>

            <div className="space-y-2 mb-6">
              {type?.features?.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center space-x-2">
                  <Icon name="Check" size={14} className={type?.color} />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className={`p-3 rounded-lg ${type?.bgColor} border ${type?.borderColor}`}>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">
                  Ready to collaborate?
                </span>
                <Icon name="ArrowRight" size={16} className={`${type?.color} group-hover:translate-x-1 transition-transform duration-300`} />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="glassmorphism rounded-2xl p-6 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Icon name="Heart" size={20} className="text-coral-red" />
          <span className="text-lg font-poppins font-semibold text-foreground">
            Open to New Opportunities
          </span>
        </div>
        <p className="text-muted-foreground mb-4">
          Currently available for new projects and collaborations. Let's create something amazing together!
        </p>
        <div className="flex items-center justify-center space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
            <span className="text-neon-green font-medium">Available</span>
          </div>
          <div className="w-1 h-4 bg-border"></div>
          <span className="text-muted-foreground">Response time: 24 hours</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CollaborationTypes;