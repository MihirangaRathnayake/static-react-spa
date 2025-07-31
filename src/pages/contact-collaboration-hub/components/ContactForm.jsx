import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypeOptions = [
    { value: 'job-opportunity', label: 'Job Opportunity' },
    { value: 'collaboration', label: 'Collaboration' },
    { value: 'mentorship', label: 'Mentorship' },
    { value: 'general-inquiry', label: 'General Inquiry' },
    { value: 'freelance-project', label: 'Freelance Project' },
    { value: 'speaking-opportunity', label: 'Speaking Opportunity' }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.name?.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData?.name?.trim()?.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData?.projectType) {
      newErrors.projectType = 'Please select a project type';
    }

    if (!formData?.message?.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData?.message?.trim()?.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear error when user starts typing
    if (errors?.[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({ name: '', email: '', projectType: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glassmorphism rounded-2xl p-8 text-center"
      >
        <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-6 neon-glow">
          <Icon name="CheckCircle" size={32} className="text-neon-green" />
        </div>
        <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">
          Message Sent Successfully!
        </h3>
        <p className="text-muted-foreground mb-6">
          Thank you for reaching out! I'll get back to you within 24 hours. 
          In the meantime, feel free to connect with me on social media.
        </p>
        <Button
          variant="outline"
          onClick={() => setIsSubmitted(false)}
          className="border-neon-green/30 text-neon-green hover:bg-neon-green/10"
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glassmorphism rounded-2xl p-8"
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-neon-green/20 rounded-lg flex items-center justify-center">
          <Icon name="MessageSquare" size={20} className="text-neon-green" />
        </div>
        <div>
          <h3 className="text-xl font-poppins font-bold text-foreground">
            Let's Start a Conversation
          </h3>
          <p className="text-sm text-muted-foreground">
            Tell me about your project or opportunity
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter your name"
            value={formData?.name}
            onChange={(e) => handleInputChange('name', e?.target?.value)}
            error={errors?.name}
            required
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="your.email@example.com"
            value={formData?.email}
            onChange={(e) => handleInputChange('email', e?.target?.value)}
            error={errors?.email}
            required
          />
        </div>

        <Select
          label="Project Type"
          placeholder="Select the type of inquiry"
          options={projectTypeOptions}
          value={formData?.projectType}
          onChange={(value) => handleInputChange('projectType', value)}
          error={errors?.projectType}
          required
        />

        <div>
          <Input
            label="Message"
            type="text"
            placeholder="Tell me about your project, opportunity, or how I can help..."
            value={formData?.message}
            onChange={(e) => handleInputChange('message', e?.target?.value)}
            error={errors?.message}
            required
            className="min-h-[120px] resize-none"
          />
          <p className="text-xs text-muted-foreground mt-2">
            {formData?.message?.length}/500 characters
          </p>
        </div>

        <div className="flex items-start space-x-3 p-4 bg-electric-blue/5 rounded-xl border border-electric-blue/20">
          <Icon name="Info" size={16} className="text-electric-blue mt-0.5" />
          <div className="text-sm">
            <p className="text-foreground font-medium mb-1">Response Time</p>
            <p className="text-muted-foreground">
              I typically respond within 24 hours. For urgent matters, feel free to reach out on LinkedIn.
            </p>
          </div>
        </div>

        <Button
          type="submit"
          variant="default"
          loading={isSubmitting}
          fullWidth
          iconName="Send"
          iconPosition="right"
          className="bg-gradient-to-r from-neon-green to-electric-blue hover:neon-glow"
        >
          {isSubmitting ? 'Sending Message...' : 'Send Message'}
        </Button>
      </form>
    </motion.div>
  );
};

export default ContactForm;