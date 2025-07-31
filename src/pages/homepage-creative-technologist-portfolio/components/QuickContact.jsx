import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const QuickContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'Github',
      url: 'https://github.com/mihiranga',
      color: '#32FF7E',
      followers: '1.2K'
    },
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      url: 'https://linkedin.com/in/mihiranga',
      color: '#00C9FF',
      connections: '850+'
    },
    {
      name: 'Twitter',
      icon: 'Twitter',
      url: 'https://twitter.com/mihiranga_dev',
      color: '#A855F7',
      followers: '650'
    },
    {
      name: 'Instagram',
      icon: 'Instagram',
      url: 'https://instagram.com/mihiranga.codes',
      color: '#FF6B6B',
      followers: '420'
    }
  ];

  const contactMethods = [
    {
      type: 'Email',
      value: 'mihiranga.dev@gmail.com',
      icon: 'Mail',
      color: '#32FF7E'
    },
    {
      type: 'Phone',
      value: '+94 77 123 4567',
      icon: 'Phone',
      color: '#00C9FF'
    },
    {
      type: 'Location',
      value: 'Colombo, Sri Lanka',
      icon: 'MapPin',
      color: '#A855F7'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-900/30 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-foreground mb-4">
            Let's <span className="text-coral-red">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
            Ready to collaborate on something amazing? I'm always excited to discuss new opportunities, 
            share ideas, or just have a friendly chat about technology and design.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glassmorphism p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-poppins font-semibold text-foreground mb-6">
              Send a Message
            </h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" size={32} className="text-neon-green" />
                </div>
                <h4 className="text-xl font-poppins font-semibold text-foreground mb-2">
                  Message Sent!
                </h4>
                <p className="text-muted-foreground font-inter">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Full Name"
                  type="text"
                  name="name"
                  value={formData?.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />

                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData?.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                />

                <div>
                  <label className="block text-sm font-inter font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData?.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-neon-green/50 focus:border-neon-green transition-all duration-300 resize-none font-inter"
                    placeholder="Tell me about your project or just say hello..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  loading={isSubmitting}
                  iconName="Send"
                  iconPosition="right"
                  fullWidth
                  className="bg-neon-green text-background hover:neon-glow"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="glassmorphism p-8 rounded-2xl">
              <h3 className="text-2xl font-poppins font-semibold text-foreground mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                {contactMethods?.map((method, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4 p-3 rounded-xl hover:bg-muted/10 transition-all duration-300 group cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${method?.color}20` }}
                    >
                      <Icon 
                        name={method?.icon} 
                        size={20} 
                        style={{ color: method?.color }}
                      />
                    </div>
                    
                    <div>
                      <p className="text-sm font-inter font-medium text-muted-foreground">
                        {method?.type}
                      </p>
                      <p className="text-foreground font-inter">
                        {method?.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glassmorphism p-8 rounded-2xl">
              <h3 className="text-2xl font-poppins font-semibold text-foreground mb-6">
                Follow My Journey
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks?.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 rounded-xl hover:bg-muted/10 transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${social?.color}20` }}
                    >
                      <Icon 
                        name={social?.icon} 
                        size={20} 
                        style={{ color: social?.color }}
                      />
                    </div>
                    
                    <div>
                      <p className="text-sm font-poppins font-semibold text-foreground">
                        {social?.name}
                      </p>
                      <p className="text-xs text-muted-foreground font-inter">
                        {social?.followers || social?.connections} followers
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="glassmorphism p-6 rounded-2xl text-center"
            >
              <div className="flex items-center justify-center space-x-2 mb-3">
                <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse" />
                <span className="text-sm font-inter font-medium text-neon-green">
                  Available for Projects
                </span>
              </div>
              
              <p className="text-sm text-muted-foreground font-inter">
                Currently accepting new freelance projects and collaboration opportunities. 
                Let's build something amazing together!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuickContact;