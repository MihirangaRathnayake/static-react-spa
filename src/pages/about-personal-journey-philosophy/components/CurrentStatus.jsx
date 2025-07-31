import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const CurrentStatus = () => {
  const [progress, setProgress] = useState({
    nibm: 0,
    react: 0,
    design: 0,
    portfolio: 0
  });

  useEffect(() => {
    // Animate progress bars when component comes into view
    const timer = setTimeout(() => {
      setProgress({
        nibm: 75,
        react: 85,
        design: 78,
        portfolio: 90
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const currentProjects = [
    {
      id: 'nibm-studies',
      title: 'NIBM Computer Science Degree',
      description: 'Advanced coursework in software engineering and computer science fundamentals',
      progress: progress?.nibm,
      status: 'In Progress',
      color: 'neon-green',
      icon: 'GraduationCap',
      details: ['Software Engineering', 'Database Systems', 'Web Technologies', 'Project Management']
    },
    {
      id: 'react-mastery',
      title: 'React Ecosystem Mastery',
      description: 'Deep diving into advanced React patterns, state management, and performance optimization',
      progress: progress?.react,
      status: 'Advanced',
      color: 'electric-blue',
      icon: 'Code',
      details: ['Advanced Hooks', 'State Management', 'Performance Optimization', 'Testing Patterns']
    },
    {
      id: 'design-thinking',
      title: 'Design Thinking Certification',
      description: 'Formal training in user-centered design methodologies and design thinking processes',
      progress: progress?.design,
      status: 'In Progress',
      color: 'purple-accent',
      icon: 'Palette',
      details: ['User Research', 'Prototyping', 'Design Systems', 'Accessibility']
    },
    {
      id: 'portfolio-dev',
      title: 'Professional Portfolio Development',
      description: 'Building a comprehensive showcase of my work and capabilities',
      progress: progress?.portfolio,
      status: 'Near Completion',
      color: 'coral-red',
      icon: 'Monitor',
      details: ['Case Studies', 'Interactive Demos', 'Code Samples', 'Blog Articles']
    }
  ];

  const futureGoals = [
    {
      title: 'Full-Stack Expertise',
      description: 'Expand backend knowledge with Node.js and cloud technologies',
      timeline: '2024 Q2',
      icon: 'Server'
    },
    {
      title: 'Open Source Contributions',
      description: 'Contribute to React ecosystem and design system libraries',
      timeline: '2024 Q3',
      icon: 'GitBranch'
    },
    {
      title: 'Mentorship Program',
      description: 'Start mentoring junior developers and design students',
      timeline: '2024 Q4',
      icon: 'Users'
    },
    {
      title: 'Tech Conference Speaking',
      description: 'Share knowledge about creative technology at industry events',
      timeline: '2025',
      icon: 'Mic'
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
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 lg:py-32 relative bg-gradient-to-b from-background to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-foreground mb-6">
            Current <span className="text-neon-green">Status</span> & 
            <span className="text-electric-blue"> Future Goals</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            My ongoing journey at NIBM, current learning objectives, and aspirations for the future
          </p>
        </motion.div>

        {/* Current Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {currentProjects?.map((project, index) => (
            <motion.div
              key={project?.id}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glassmorphism p-6 lg:p-8 rounded-2xl h-full transition-all duration-300 group-hover:neon-glow"
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-br from-${project?.color} to-${project?.color}/70 rounded-xl flex items-center justify-center`}>
                      <Icon 
                        name={project?.icon} 
                        size={24} 
                        className="text-background" 
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-poppins font-bold text-foreground group-hover:text-neon-green transition-colors duration-300">
                        {project?.title}
                      </h3>
                      <span className={`inline-block px-3 py-1 bg-${project?.color}/10 border border-${project?.color}/20 rounded-full text-xs font-inter font-medium text-${project?.color} mt-2`}>
                        {project?.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground font-inter mb-6 leading-relaxed">
                  {project?.description}
                </p>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-inter font-medium text-foreground">
                      Progress
                    </span>
                    <span className={`text-sm font-inter font-bold text-${project?.color}`}>
                      {project?.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-muted/20 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r from-${project?.color} to-${project?.color}/80 rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${project?.progress}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                    />
                  </div>
                </div>

                {/* Key Areas */}
                <div>
                  <h4 className="text-sm font-poppins font-semibold text-foreground mb-3 uppercase tracking-wide">
                    Key Focus Areas
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project?.details?.map((detail, detailIndex) => (
                      <motion.div
                        key={detail}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: detailIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-muted/5 transition-colors duration-200"
                      >
                        <Icon name="CheckCircle" size={14} className={`text-${project?.color}`} />
                        <span className="text-sm font-inter text-muted-foreground">
                          {detail}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Future Goals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-poppins font-bold text-foreground mb-4">
              Future Learning <span className="text-electric-blue">Goals</span>
            </h3>
            <p className="text-muted-foreground font-inter max-w-2xl mx-auto">
              My roadmap for continuous growth and contribution to the tech community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {futureGoals?.map((goal, index) => (
              <motion.div
                key={goal?.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="glassmorphism p-6 rounded-xl group cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-green/20 to-electric-blue/20 rounded-lg flex items-center justify-center group-hover:from-neon-green/30 group-hover:to-electric-blue/30 transition-all duration-300">
                    <Icon name={goal?.icon} size={20} className="text-neon-green" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-poppins font-semibold text-foreground group-hover:text-neon-green transition-colors duration-300">
                        {goal?.title}
                      </h4>
                      <span className="text-xs text-electric-blue font-inter font-medium px-2 py-1 bg-electric-blue/10 rounded-full">
                        {goal?.timeline}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground font-inter">
                      {goal?.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glassmorphism p-8 lg:p-12 rounded-2xl border border-neon-green/20">
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse" />
                <h3 className="text-xl font-poppins font-bold text-foreground">
                  Available for Opportunities
                </h3>
                <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse" />
              </div>
              
              <p className="text-muted-foreground font-inter max-w-2xl mx-auto">
                I'm actively seeking internship opportunities, collaborative projects, and freelance work 
                that align with my passion for creative technology and user-centered design.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <motion.a
                  href="/contact-collaboration-hub"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-neon-green text-background rounded-lg font-inter font-medium hover:neon-glow transition-all duration-300"
                >
                  <Icon name="Mail" size={20} />
                  <span>Let's Connect</span>
                </motion.a>
                
                <motion.a
                  href="/projects-interactive-case-study-gallery"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 px-6 py-3 border border-electric-blue text-electric-blue rounded-lg font-inter font-medium hover:bg-electric-blue/10 hover:neon-glow-blue transition-all duration-300"
                >
                  <Icon name="FolderOpen" size={20} />
                  <span>View My Work</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentStatus;