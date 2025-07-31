import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProjects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "EcoTrack - Sustainability Dashboard",
      description: "A comprehensive environmental impact tracking platform built with React and D3.js, featuring real-time data visualization and gamified sustainability goals.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["React", "D3.js", "Node.js", "MongoDB"],
      category: "Web Application",
      status: "Live",
      metrics: {
        users: "2.5K+",
        performance: "98%",
        satisfaction: "4.8/5"
      },
      links: {
        live: "#",
        github: "#",
        case_study: "/projects-interactive-case-study-gallery"
      },
      color: "#32FF7E"
    },
    {
      id: 2,
      title: "MindFlow - Mental Wellness App",
      description: "A React Native mobile application focused on mental health tracking with AI-powered mood analysis and personalized meditation recommendations.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      technologies: ["React Native", "TensorFlow.js", "Firebase", "Expo"],
      category: "Mobile Application",
      status: "In Development",
      metrics: {
        downloads: "1.2K+",
        rating: "4.9/5",
        retention: "85%"
      },
      links: {
        prototype: "#",
        github: "#",
        case_study: "/projects-interactive-case-study-gallery"
      },
      color: "#00C9FF"
    },
    {
      id: 3,
      title: "CodeCollab - Developer Platform",
      description: "A collaborative coding platform with real-time code sharing, integrated video calls, and AI-powered code review suggestions for remote development teams.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
      technologies: ["Next.js", "Socket.io", "WebRTC", "PostgreSQL"],
      category: "SaaS Platform",
      status: "Beta",
      metrics: {
        teams: "150+",
        sessions: "5K+",
        uptime: "99.9%"
      },
      links: {
        demo: "#",
        github: "#",
        case_study: "/projects-interactive-case-study-gallery"
      },
      color: "#A855F7"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects?.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects?.length) % projects?.length);
  };

  const goToProject = (index) => {
    setCurrentProject(index);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-900/50 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-foreground mb-4">
            Featured <span className="text-electric-blue">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
            A showcase of my latest work where creativity meets functionality. 
            Each project tells a story of problem-solving and innovation.
          </p>
        </motion.div>

        {/* Main Project Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="glassmorphism rounded-3xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative group overflow-hidden">
                  <Image
                    src={projects?.[currentProject]?.image}
                    alt={projects?.[currentProject]?.title}
                    className="w-full h-64 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-inter font-medium text-background"
                      style={{ backgroundColor: projects?.[currentProject]?.color }}
                    >
                      {projects?.[currentProject]?.status}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-inter font-medium bg-background/80 text-foreground backdrop-blur-sm">
                      {projects?.[currentProject]?.category}
                    </span>
                  </div>

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Details */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h3 className="text-2xl lg:text-3xl font-poppins font-bold text-foreground mb-4">
                      {projects?.[currentProject]?.title}
                    </h3>
                    
                    <p className="text-muted-foreground font-inter mb-6 leading-relaxed">
                      {projects?.[currentProject]?.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {projects?.[currentProject]?.technologies?.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-lg text-xs font-inter font-medium bg-muted/20 text-foreground border border-muted/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {Object.entries(projects?.[currentProject]?.metrics)?.map(([key, value], index) => (
                        <div key={index} className="text-center">
                          <div 
                            className="text-lg font-poppins font-bold"
                            style={{ color: projects?.[currentProject]?.color }}
                          >
                            {value}
                          </div>
                          <div className="text-xs text-muted-foreground capitalize font-inter">
                            {key?.replace('_', ' ')}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        variant="default"
                        iconName="ExternalLink"
                        iconPosition="right"
                        className="flex-1"
                        style={{ 
                          backgroundColor: projects?.[currentProject]?.color,
                          color: '#020617'
                        }}
                      >
                        View Project
                      </Button>
                      
                      <Button
                        variant="outline"
                        iconName="Github"
                        iconPosition="left"
                        className="flex-1 border-muted text-foreground hover:bg-muted/10 hover:text-white hover:neon-glow-blue transition-all duration-300"
                      >
                        Source Code
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Previous/Next Buttons */}
            <div className="flex space-x-2">
              <button
                onClick={prevProject}
                className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center text-foreground hover:text-neon-green hover:neon-glow transition-all duration-300"
              >
                <Icon name="ChevronLeft" size={20} />
              </button>
              
              <button
                onClick={nextProject}
                className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center text-foreground hover:text-neon-green hover:neon-glow transition-all duration-300"
              >
                <Icon name="ChevronRight" size={20} />
              </button>
            </div>

            {/* Project Indicators */}
            <div className="flex space-x-2">
              {projects?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject
                      ? 'bg-neon-green neon-glow' :'bg-muted/40 hover:bg-muted/60'
                  }`}
                />
              ))}
            </div>

            {/* View All Projects Link */}
            <Button
              variant="ghost"
              iconName="ArrowRight"
              iconPosition="right"
              className="text-electric-blue hover:text-electric-blue/80"
            >
              View All
            </Button>
          </div>
        </div>

        {/* Quick Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {projects?.map((project, index) => (
            <motion.div
              key={project?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glassmorphism rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                index === currentProject ? 'ring-2 ring-neon-green/50' : 'hover:neon-glow'
              }`}
              onClick={() => goToProject(index)}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: project?.color }}
                />
                <h4 className="font-poppins font-semibold text-foreground text-sm">
                  {project?.title}
                </h4>
              </div>
              
              <p className="text-xs text-muted-foreground font-inter line-clamp-2">
                {project?.description}
              </p>
              
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs text-muted-foreground">
                  {project?.category}
                </span>
                <Icon 
                  name="ArrowUpRight" 
                  size={16} 
                  className={`transition-colors duration-300 ${
                    hoveredProject === index ? 'text-neon-green' : 'text-muted-foreground'
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;