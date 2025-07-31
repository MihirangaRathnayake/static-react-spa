import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CaseStudyModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.2, ease: "easeIn" }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 bg-background/80 backdrop-blur-lg"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-4xl max-h-[90vh] glassmorphism rounded-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 glassmorphism border-b border-border/20 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div>
                    <h2 className="text-2xl font-poppins font-bold text-foreground">
                      {project?.title}
                    </h2>
                    <p className="text-muted-foreground font-inter">
                      {project?.category} • {project?.duration}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  {project?.liveUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="ExternalLink"
                      iconPosition="left"
                      onClick={() => window.open(project?.liveUrl, '_blank')}
                      className="border-electric-blue/30 text-electric-blue hover:bg-electric-blue/10"
                    >
                      Live Demo
                    </Button>
                  )}
                  
                  {project?.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="Github"
                      iconPosition="left"
                      onClick={() => window.open(project?.githubUrl, '_blank')}
                      className="border-muted/30 text-muted-foreground hover:text-foreground"
                    >
                      View Code
                    </Button>
                  )}
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="X"
                    onClick={onClose}
                    className="text-muted-foreground hover:text-foreground"
                  />
                </div>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="p-6 space-y-8">
                {/* Hero Image */}
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src={project?.image}
                    alt={project?.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                </div>

                {/* Project Overview */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    {/* Problem Statement */}
                    <section>
                      <h3 className="text-xl font-poppins font-bold text-foreground mb-3 flex items-center">
                        <Icon name="AlertCircle" size={20} className="text-coral-red mr-2" />
                        Problem Statement
                      </h3>
                      <p className="text-muted-foreground font-inter leading-relaxed">
                        {project?.caseStudy?.problem}
                      </p>
                    </section>

                    {/* Solution Approach */}
                    <section>
                      <h3 className="text-xl font-poppins font-bold text-foreground mb-3 flex items-center">
                        <Icon name="Lightbulb" size={20} className="text-warning mr-2" />
                        Solution Approach
                      </h3>
                      <p className="text-muted-foreground font-inter leading-relaxed mb-4">
                        {project?.caseStudy?.solution}
                      </p>
                      
                      {project?.caseStudy?.features && (
                        <div className="space-y-2">
                          <h4 className="font-poppins font-semibold text-foreground">Key Features:</h4>
                          <ul className="space-y-2">
                            {project?.caseStudy?.features?.map((feature, index) => (
                              <li key={index} className="flex items-start space-x-2 text-muted-foreground">
                                <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                                <span className="font-inter">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </section>

                    {/* Technical Implementation */}
                    <section>
                      <h3 className="text-xl font-poppins font-bold text-foreground mb-3 flex items-center">
                        <Icon name="Code" size={20} className="text-electric-blue mr-2" />
                        Technical Implementation
                      </h3>
                      <p className="text-muted-foreground font-inter leading-relaxed mb-4">
                        {project?.caseStudy?.implementation}
                      </p>
                      
                      {project?.caseStudy?.codeSnippet && (
                        <div className="bg-muted/10 border border-muted/20 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-inter text-muted-foreground">Code Example</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              iconName="Copy"
                              iconSize={14}
                              className="text-muted-foreground hover:text-foreground"
                            >
                              Copy
                            </Button>
                          </div>
                          <pre className="text-sm font-mono text-foreground overflow-x-auto">
                            <code>{project?.caseStudy?.codeSnippet}</code>
                          </pre>
                        </div>
                      )}
                    </section>

                    {/* Results & Learnings */}
                    <section>
                      <h3 className="text-xl font-poppins font-bold text-foreground mb-3 flex items-center">
                        <Icon name="TrendingUp" size={20} className="text-success mr-2" />
                        Results & Learnings
                      </h3>
                      <p className="text-muted-foreground font-inter leading-relaxed mb-4">
                        {project?.caseStudy?.results}
                      </p>
                      
                      {project?.caseStudy?.learnings && (
                        <div className="space-y-2">
                          <h4 className="font-poppins font-semibold text-foreground">Key Learnings:</h4>
                          <ul className="space-y-2">
                            {project?.caseStudy?.learnings?.map((learning, index) => (
                              <li key={index} className="flex items-start space-x-2 text-muted-foreground">
                                <Icon name="BookOpen" size={16} className="text-purple-accent mt-0.5 flex-shrink-0" />
                                <span className="font-inter">{learning}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </section>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    {/* Project Details */}
                    <div className="glassmorphism rounded-xl p-4">
                      <h4 className="font-poppins font-semibold text-foreground mb-3">Project Details</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Duration:</span>
                          <span className="text-foreground font-medium">{project?.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Category:</span>
                          <span className="text-foreground font-medium">{project?.category}</span>
                        </div>
                        {project?.teamSize && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Team Size:</span>
                            <span className="text-foreground font-medium">{project?.teamSize}</span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Status:</span>
                          <span className={`font-medium ${
                            project?.status === 'Live' ? 'text-success' : 
                            project?.status === 'In Progress' ? 'text-warning' : 'text-muted-foreground'
                          }`}>
                            {project?.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Technology Stack */}
                    <div className="glassmorphism rounded-xl p-4">
                      <h4 className="font-poppins font-semibold text-foreground mb-3">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project?.technologies?.map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-neon-green/10 text-neon-green text-xs font-inter rounded-md border border-neon-green/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    {project?.metrics && (
                      <div className="glassmorphism rounded-xl p-4">
                        <h4 className="font-poppins font-semibold text-foreground mb-3">Key Metrics</h4>
                        <div className="text-center">
                          <div className="text-2xl font-poppins font-bold text-neon-green mb-1">
                            {project?.metrics}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Performance Improvement
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CaseStudyModal;