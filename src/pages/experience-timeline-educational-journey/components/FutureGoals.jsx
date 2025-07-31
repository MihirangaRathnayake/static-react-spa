import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const FutureGoals = () => {
  const futureGoals = [
    {
      id: 1,
      title: "Complete Advanced React Specialization",
      description: "Master advanced React patterns, performance optimization, and state management solutions",
      timeline: "Q2 2025",
      priority: "High",
      skills: ["React 19", "Concurrent Features", "Server Components", "Performance Optimization"],
      icon: "Rocket"
    },
    {
      id: 2,
      title: "Full-Stack Development Certification",
      description: "Expand backend knowledge with Node.js, databases, and cloud deployment strategies",
      timeline: "Q3 2025",
      priority: "High",
      skills: ["Node.js", "MongoDB", "AWS", "Docker", "GraphQL"],
      icon: "Server"
    },
    {
      id: 3,
      title: "UI/UX Design Mastery",
      description: "Deepen design thinking skills and create more user-centered digital experiences",
      timeline: "Q4 2025",
      priority: "Medium",
      skills: ["Figma Advanced", "Design Systems", "User Research", "Prototyping"],
      icon: "Palette"
    },
    {
      id: 4,
      title: "Open Source Contributions",
      description: "Contribute to major open source projects and build community presence",
      timeline: "Ongoing",
      priority: "Medium",
      skills: ["Git Advanced", "Community Building", "Code Review", "Documentation"],
      icon: "GitBranch"
    },
    {
      id: 5,
      title: "Tech Leadership Role",
      description: "Transition into a senior developer or team lead position at a forward-thinking company",
      timeline: "2026",
      priority: "High",
      skills: ["Team Leadership", "Mentoring", "Architecture Design", "Project Management"],
      icon: "Users"
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'text-coral-red border-coral-red bg-coral-red/10';
      case 'Medium':
        return 'text-electric-blue border-electric-blue bg-electric-blue/10';
      case 'Low':
        return 'text-neon-green border-neon-green bg-neon-green/10';
      default:
        return 'text-muted-foreground border-muted bg-muted/10';
    }
  };

  return (
    <div className="mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-neon-green/20 to-electric-blue/20 rounded-full border border-neon-green/30 mb-4">
          <Icon name="Target" size={20} className="text-neon-green" />
          <span className="text-sm font-medium text-neon-green">Future Roadmap</span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-foreground mb-4">
          Goals & Aspirations
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          My planned learning journey and career milestones for continuous growth as a creative technologist
        </p>
      </motion.div>
      <div className="grid gap-6 lg:grid-cols-2">
        {futureGoals?.map((goal, index) => (
          <motion.div
            key={goal?.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="glassmorphism rounded-2xl p-6 hover:neon-glow-blue transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-neon-green/20 to-electric-blue/20 rounded-xl flex items-center justify-center">
                  <Icon name={goal?.icon} size={24} className="text-neon-green" />
                </div>
                <div>
                  <h3 className="text-lg font-poppins font-semibold text-foreground">
                    {goal?.title}
                  </h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className={`px-2 py-1 rounded-lg text-xs font-medium border ${getPriorityColor(goal?.priority)}`}>
                      {goal?.priority} Priority
                    </span>
                    <span className="text-xs text-muted-foreground">{goal?.timeline}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {goal?.description}
            </p>

            {/* Skills */}
            <div className="mb-4">
              <h4 className="text-sm font-poppins font-medium text-foreground mb-2">
                Target Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {goal?.skills?.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-2 py-1 bg-muted/20 text-xs rounded-lg text-muted-foreground border border-muted/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={14} className="text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Planned for {goal?.timeline}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="ArrowRight" size={14} className="text-neon-green" />
                <span className="text-xs text-neon-green font-medium">In Planning</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-12"
      >
        <div className="glassmorphism rounded-2xl p-8 max-w-2xl mx-auto">
          <Icon name="MessageCircle" size={32} className="text-neon-green mx-auto mb-4" />
          <h3 className="text-xl font-poppins font-semibold text-foreground mb-3">
            Let's Build the Future Together
          </h3>
          <p className="text-muted-foreground mb-6">
            Interested in collaborating on any of these goals or have opportunities that align with my roadmap? I'd love to connect and explore possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact-collaboration-hub"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-neon-green text-background rounded-xl font-medium hover:neon-glow transition-all duration-300"
            >
              <Icon name="Mail" size={18} />
              <span>Get in Touch</span>
            </a>
            <a
              href="https://linkedin.com/in/mihiranga"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 border border-electric-blue/30 text-electric-blue rounded-xl font-medium hover:bg-electric-blue/10 transition-all duration-300"
            >
              <Icon name="Linkedin" size={18} />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FutureGoals;