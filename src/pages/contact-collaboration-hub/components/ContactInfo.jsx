import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: 'MapPin',
      label: 'Location',
      value: 'Colombo, Sri Lanka',
      subValue: 'GMT+5:30 (IST)',
      color: 'text-neon-green'
    },
    {
      icon: 'Mail',
      label: 'Email',
      value: 'mihiranga.dev@gmail.com',
      subValue: 'Professional inquiries',
      color: 'text-electric-blue'
    },
    {
      icon: 'Clock',
      label: 'Response Time',
      value: 'Within 24 hours',
      subValue: 'Usually much faster',
      color: 'text-purple-accent'
    },
    {
      icon: 'Calendar',
      label: 'Availability',
      value: 'Open for opportunities',
      subValue: 'Full-time & freelance',
      color: 'text-coral-red'
    }
  ];

  const preferredMethods = [
    {
      method: 'LinkedIn',
      icon: 'Linkedin',
      description: 'Best for professional networking and job opportunities',
      responseTime: '2-4 hours',
      priority: 'High'
    },
    {
      method: 'Email',
      icon: 'Mail',
      description: 'Ideal for detailed project discussions and formal inquiries',
      responseTime: '4-8 hours',
      priority: 'High'
    },
    {
      method: 'GitHub',
      icon: 'Github',
      description: 'Perfect for code collaboration and technical discussions',
      responseTime: '6-12 hours',
      priority: 'Medium'
    },
    {
      method: 'Social Media',
      icon: 'MessageCircle',
      description: 'Great for casual conversations and quick questions',
      responseTime: '12-24 hours',
      priority: 'Low'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="space-y-8"
    >
      {/* Contact Details */}
      <div className="glassmorphism rounded-2xl p-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-neon-green/20 rounded-lg flex items-center justify-center">
            <Icon name="Info" size={20} className="text-neon-green" />
          </div>
          <div>
            <h3 className="text-xl font-poppins font-bold text-foreground">
              Contact Information
            </h3>
            <p className="text-sm text-muted-foreground">
              How to reach me and what to expect
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactDetails?.map((detail, index) => (
            <motion.div
              key={detail?.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex items-start space-x-4 p-4 rounded-xl bg-card/50 border border-border/20"
            >
              <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center">
                <Icon name={detail?.icon} size={16} className={detail?.color} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  {detail?.label}
                </p>
                <p className="text-foreground font-semibold mb-1">
                  {detail?.value}
                </p>
                <p className="text-xs text-muted-foreground">
                  {detail?.subValue}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Preferred Communication Methods */}
      <div className="glassmorphism rounded-2xl p-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-electric-blue/20 rounded-lg flex items-center justify-center">
            <Icon name="MessageSquare" size={20} className="text-electric-blue" />
          </div>
          <div>
            <h3 className="text-xl font-poppins font-bold text-foreground">
              Preferred Communication Methods
            </h3>
            <p className="text-sm text-muted-foreground">
              Choose the best way to reach me based on your needs
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {preferredMethods?.map((method, index) => (
            <motion.div
              key={method?.method}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="flex items-start space-x-4 p-4 rounded-xl bg-card/30 border border-border/10 hover:bg-card/50 transition-colors duration-300"
            >
              <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center">
                <Icon name={method?.icon} size={16} className="text-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h4 className="font-poppins font-semibold text-foreground">
                    {method?.method}
                  </h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    method?.priority === 'High' ?'bg-neon-green/20 text-neon-green' 
                      : method?.priority === 'Medium' ?'bg-electric-blue/20 text-electric-blue' :'bg-muted/20 text-muted-foreground'
                  }`}>
                    {method?.priority} Priority
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {method?.description}
                </p>
                <div className="flex items-center space-x-4 text-xs">
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={12} className="text-muted-foreground" />
                    <span className="text-muted-foreground">
                      Response: {method?.responseTime}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* What to Expect */}
      <div className="glassmorphism rounded-2xl p-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-purple-accent/20 rounded-lg flex items-center justify-center">
            <Icon name="CheckCircle" size={20} className="text-purple-accent" />
          </div>
          <div>
            <h3 className="text-xl font-poppins font-bold text-foreground">
              What to Expect
            </h3>
            <p className="text-sm text-muted-foreground">
              My communication style and response approach
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Icon name="Zap" size={16} className="text-neon-green mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Quick Response</h4>
                <p className="text-sm text-muted-foreground">
                  I aim to respond within 24 hours, often much faster during business hours.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Icon name="Heart" size={16} className="text-coral-red mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Personal Touch</h4>
                <p className="text-sm text-muted-foreground">
                  Every message gets a thoughtful, personalized response - no templates here.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Icon name="Target" size={16} className="text-electric-blue mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Clear Communication</h4>
                <p className="text-sm text-muted-foreground">
                  I believe in transparent, honest communication about timelines and expectations.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Icon name="Users" size={16} className="text-purple-accent mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Collaborative Approach</h4>
                <p className="text-sm text-muted-foreground">
                  I love working together to find the best solutions for your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;