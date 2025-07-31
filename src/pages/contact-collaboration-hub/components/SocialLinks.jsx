import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SocialLinks = () => {
  const socialPlatforms = [
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      url: 'https://linkedin.com/in/mihiranga-dev',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/20',
      description: 'Professional networking and career updates'
    },
    {
      name: 'GitHub',
      icon: 'Github',
      url: 'https://github.com/mihiranga-dev',
      color: 'text-foreground',
      bgColor: 'bg-foreground/10',
      borderColor: 'border-foreground/20',
      description: 'Code repositories and open source contributions'
    },
    {
      name: 'Twitter',
      icon: 'Twitter',
      url: 'https://twitter.com/mihiranga_dev',
      color: 'text-electric-blue',
      bgColor: 'bg-electric-blue/10',
      borderColor: 'border-electric-blue/20',
      description: 'Tech insights and industry discussions'
    },
    {
      name: 'Instagram',
      icon: 'Instagram',
      url: 'https://instagram.com/mihiranga.dev',
      color: 'text-pink-400',
      bgColor: 'bg-pink-400/10',
      borderColor: 'border-pink-400/20',
      description: 'Behind-the-scenes and creative process'
    },
    {
      name: 'Email',
      icon: 'Mail',
      url: 'mailto:mihiranga.dev@gmail.com',
      color: 'text-neon-green',
      bgColor: 'bg-neon-green/10',
      borderColor: 'border-neon-green/20',
      description: 'Direct email communication'
    },
    {
      name: 'Discord',
      icon: 'MessageCircle',
      url: 'https://discord.com/users/mihiranga#1234',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      borderColor: 'border-purple-400/20',
      description: 'Real-time chat and collaboration'
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="glassmorphism rounded-2xl p-8"
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-electric-blue/20 rounded-lg flex items-center justify-center">
          <Icon name="Share2" size={20} className="text-electric-blue" />
        </div>
        <div>
          <h3 className="text-xl font-poppins font-bold text-foreground">
            Connect With Me
          </h3>
          <p className="text-sm text-muted-foreground">
            Choose your preferred platform for communication
          </p>
        </div>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {socialPlatforms?.map((platform) => (
          <motion.a
            key={platform?.name}
            variants={itemVariants}
            href={platform?.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group p-4 rounded-xl border ${platform?.bgColor} ${platform?.borderColor} hover:scale-105 transition-all duration-300 hover:shadow-lg`}
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${platform?.bgColor}`}>
                <Icon 
                  name={platform?.icon} 
                  size={18} 
                  className={`${platform?.color} group-hover:scale-110 transition-transform duration-300`} 
                />
              </div>
              <span className="font-poppins font-semibold text-foreground">
                {platform?.name}
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {platform?.description}
            </p>
          </motion.a>
        ))}
      </motion.div>
      <div className="mt-8 p-4 bg-neon-green/5 rounded-xl border border-neon-green/20">
        <div className="flex items-start space-x-3">
          <Icon name="Zap" size={16} className="text-neon-green mt-0.5" />
          <div className="text-sm">
            <p className="text-foreground font-medium mb-1">Quick Response</p>
            <p className="text-muted-foreground">
              For fastest response, reach out via LinkedIn or Email. I'm most active on these platforms and check them regularly.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SocialLinks;