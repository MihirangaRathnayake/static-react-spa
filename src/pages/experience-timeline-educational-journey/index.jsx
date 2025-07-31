import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import TimelineCard from './components/TimelineCard';
import TimelineFilter from './components/TimelineFilter';
import TimelineStats from './components/TimelineStats';
import FutureGoals from './components/FutureGoals';

const ExperienceTimelineEducationalJourney = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeTimeFilter, setActiveTimeFilter] = useState('all');
  const [expandedCard, setExpandedCard] = useState(null);
  const [filteredMilestones, setFilteredMilestones] = useState([]);

  // Mock timeline data
  const timelineMilestones = [
    {
      id: 1,
      title: "Started BSc (Hons) in Computing",
      organization: "National Institute of Business Management (NIBM)",
      date: "January 2022",
      category: "Education",
      description: "Embarked on my formal journey in computing, focusing on software development, web technologies, and computer science fundamentals.",
      detailedDescription: `Beginning my undergraduate studies at NIBM marked a pivotal moment in my career transition from general studies to specialized computing education. The program covers comprehensive computer science topics including programming fundamentals, data structures, algorithms, database management, and software engineering principles.\n\nThis decision represented my commitment to building a solid theoretical foundation while gaining practical skills in modern web development technologies.`,
      progress: 75,
      skills: ["Programming Fundamentals", "HTML/CSS", "JavaScript", "Database Design", "Software Engineering"],
      achievements: [
        "Maintained consistent academic performance above 3.5 GPA",
        "Completed foundational programming courses with distinction",
        "Participated in university coding competitions",
        "Built first web application as coursework project"
      ],
      challenges: [
        "Transitioning from non-technical background required intensive self-study",
        "Balancing theoretical concepts with practical application",
        "Adapting to fast-paced curriculum and technical terminology"
      ],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=300&fit=crop",
      links: [
        { label: "NIBM Official", url: "https://nibm.lk", icon: "ExternalLink" }
      ]
    },
    {
      id: 2,
      title: "First React.js Project",
      organization: "Personal Development",
      date: "June 2022",
      category: "Projects",
      description: "Built my first React application - a personal task management tool that sparked my passion for modern frontend development.",
      detailedDescription: `This project marked my introduction to React.js and modern frontend development practices. The task management application featured user authentication, CRUD operations, local storage persistence, and responsive design.\n\nWorking on this project taught me component-based architecture, state management, and the importance of user experience in web applications. It was my first taste of building something truly interactive and dynamic.`,
      skills: ["React.js", "JavaScript ES6+", "CSS3", "Local Storage API", "Responsive Design"],
      achievements: [
        "Successfully deployed first React application",
        "Implemented user authentication system",
        "Created responsive design for mobile and desktop",
        "Learned component lifecycle and state management"
      ],
      challenges: [
        "Understanding React's component lifecycle and hooks",
        "Managing application state effectively",
        "Implementing responsive design patterns",
        "Debugging complex component interactions"
      ],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
      links: [
        { label: "View Project", url: "https://github.com/mihiranga/task-manager", icon: "Github" },
        { label: "Live Demo", url: "https://mihiranga-tasks.netlify.app", icon: "ExternalLink" }
      ]
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals Certificate",
      organization: "Google UX Design Professional Certificate",
      date: "September 2022",
      category: "Certifications",
      description: "Completed comprehensive UX design course covering user research, wireframing, prototyping, and design thinking methodologies.",
      detailedDescription: `This certification program provided deep insights into user-centered design principles and methodologies. The course covered the entire UX design process from user research and persona development to wireframing, prototyping, and usability testing.\n\nCompleting this program enhanced my ability to think from a user's perspective and create more intuitive, accessible interfaces. It bridged the gap between my technical skills and design sensibility.`,
      skills: ["User Research", "Wireframing", "Prototyping", "Figma", "Design Thinking", "Usability Testing"],
      achievements: [
        "Completed 6-month intensive UX design program",
        "Created comprehensive case study portfolio",
        "Mastered industry-standard design tools",
        "Developed user-centered design mindset"
      ],
      challenges: [
        "Learning to balance user needs with technical constraints",
        "Developing eye for visual hierarchy and typography",
        "Understanding accessibility principles and implementation"
      ],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
      links: [
        { label: "Certificate", url: "https://coursera.org/verify/certificate", icon: "Award" },
        { label: "Portfolio", url: "https://mihiranga-ux.behance.net", icon: "ExternalLink" }
      ]
    },
    {
      id: 4,
      title: "Advanced JavaScript & Modern Frameworks",
      organization: "Self-Directed Learning",
      date: "December 2022",
      category: "Personal Growth",
      description: "Deep dive into advanced JavaScript concepts, ES6+ features, and exploration of modern frameworks including Vue.js and Angular basics.",
      detailedDescription: `This intensive self-study period focused on mastering advanced JavaScript concepts that are crucial for modern web development. Topics included closures, prototypes, async/await, promises, modules, and advanced array methods.\n\nI also explored other popular frameworks to understand different approaches to frontend development, which broadened my perspective on React's strengths and use cases.`,
      skills: ["Advanced JavaScript", "ES6+ Features", "Async Programming", "Vue.js", "Angular Basics", "Module Systems"],
      achievements: [
        "Mastered complex JavaScript concepts and patterns",
        "Built comparison projects in multiple frameworks",
        "Improved code quality and architectural thinking",
        "Developed framework-agnostic problem-solving skills"
      ],
      challenges: [
        "Understanding complex asynchronous programming patterns",
        "Comparing and contrasting different framework philosophies",
        "Maintaining focus across multiple learning tracks simultaneously"
      ],
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500&h=300&fit=crop"
    },
    {
      id: 5,
      title: "E-commerce Platform Development",
      organization: "Freelance Project",
      date: "March 2023",
      category: "Projects",
      description: "Developed a full-featured e-commerce platform for a local business using React, Node.js, and MongoDB with payment integration.",
      detailedDescription: `This was my first major client project, involving the complete development of an e-commerce platform from concept to deployment. The project included product catalog management, user authentication, shopping cart functionality, payment processing, and admin dashboard.\n\nWorking with a real client taught me valuable lessons about requirement gathering, project management, client communication, and delivering production-ready applications.`,
      skills: ["React.js", "Node.js", "MongoDB", "Express.js", "Payment Integration", "JWT Authentication"],
      achievements: [
        "Successfully delivered first major client project",
        "Implemented secure payment processing system",
        "Created comprehensive admin dashboard",
        "Achieved 99.9% uptime in production environment"
      ],
      challenges: [
        "Managing complex state across multiple user flows",
        "Implementing secure payment processing",
        "Optimizing performance for large product catalogs",
        "Balancing client requirements with technical best practices"
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      links: [
        { label: "Case Study", url: "https://mihiranga.dev/projects/ecommerce", icon: "ExternalLink" }
      ]
    },
    {
      id: 6,
      title: "React Advanced Patterns Workshop",
      organization: "Tech Conference Sri Lanka",
      date: "July 2023",
      category: "Certifications",
      description: "Attended intensive workshop on advanced React patterns including render props, higher-order components, and custom hooks.",
      detailedDescription: `This workshop provided hands-on experience with advanced React patterns and performance optimization techniques. Topics covered included render props, higher-order components, compound components, custom hooks, and React performance optimization strategies.\n\nThe workshop also covered testing strategies for complex React applications and best practices for large-scale application architecture.`,
      skills: ["Advanced React Patterns", "Performance Optimization", "Custom Hooks", "Testing Strategies", "Component Architecture"],
      achievements: [
        "Mastered advanced React architectural patterns",
        "Learned performance optimization techniques",
        "Networked with senior developers in the industry",
        "Applied learnings to improve existing projects"
      ],
      challenges: [
        "Understanding when to apply specific patterns appropriately",
        "Balancing code complexity with maintainability",
        "Implementing performance optimizations without over-engineering"
      ],
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop"
    },
    {
      id: 7,
      title: "Portfolio Website Launch",
      organization: "Personal Branding",
      date: "October 2023",
      category: "Projects",
      description: "Designed and developed comprehensive portfolio website showcasing projects, skills, and professional journey with modern animations.",
      detailedDescription: `This portfolio website represents the culmination of my learning journey, incorporating advanced React concepts, modern design principles, and sophisticated animations. The site features interactive project showcases, skill visualizations, and an engaging user experience.\n\nThe project challenged me to balance technical complexity with user experience, resulting in a site that effectively communicates my capabilities while remaining accessible and performant.`,
      skills: ["React 18", "Framer Motion", "Tailwind CSS", "Responsive Design", "SEO Optimization", "Performance Optimization"],
      achievements: [
        "Created comprehensive personal brand presence",
        "Implemented complex animations and interactions",
        "Achieved perfect Lighthouse performance scores",
        "Received positive feedback from industry professionals"
      ],
      challenges: [
        "Balancing visual appeal with loading performance",
        "Creating engaging animations without overwhelming content",
        "Ensuring accessibility across all interactive elements"
      ],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      links: [
        { label: "Live Site", url: "https://mihiranga.dev", icon: "ExternalLink" },
        { label: "Source Code", url: "https://github.com/mihiranga/portfolio", icon: "Github" }
      ]
    },
    {
      id: 8,
      title: "Open Source Contributions",
      organization: "GitHub Community",
      date: "January 2024",
      category: "Personal Growth",
      description: "Started contributing to open source projects, focusing on React component libraries and developer tools.",
      detailedDescription: `Beginning my open source journey marked an important step in giving back to the developer community and improving my collaborative coding skills. I focused on contributing to React component libraries, documentation improvements, and bug fixes.\n\nThis experience taught me about code review processes, community collaboration, and the importance of clear communication in distributed development teams.`,
      skills: ["Git Advanced", "Code Review", "Community Collaboration", "Documentation", "Testing"],
      achievements: [
        "Made first accepted pull request to major open source project",
        "Contributed to documentation improvements",
        "Participated in community discussions and issue resolution",
        "Built reputation within developer community"
      ],
      challenges: [
        "Understanding large codebases and contribution guidelines",
        "Communicating effectively with international development teams",
        "Balancing personal projects with community contributions"
      ],
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=500&h=300&fit=crop",
      links: [
        { label: "GitHub Profile", url: "https://github.com/mihiranga", icon: "Github" }
      ]
    },
    {
      id: 9,
      title: "Mobile-First Development Specialization",
      organization: "Coursera - Meta",
      date: "May 2024",
      category: "Certifications",
      description: "Completed specialization in mobile-first development approaches, Progressive Web Apps, and cross-platform development strategies.",
      detailedDescription: `This specialization focused on modern mobile development approaches, including Progressive Web App development, responsive design strategies, and cross-platform development using React Native fundamentals.\n\nThe course emphasized performance optimization for mobile devices, offline functionality, and creating app-like experiences in web browsers.`,
      skills: ["Progressive Web Apps", "Mobile-First Design", "Service Workers", "React Native Basics", "Performance Optimization"],
      achievements: [
        "Mastered PWA development and deployment",
        "Implemented offline-first application strategies",
        "Created mobile-optimized user experiences",
        "Learned cross-platform development principles"
      ],
      challenges: [
        "Understanding service worker lifecycle and caching strategies",
        "Optimizing performance for various mobile devices",
        "Balancing native app features with web technologies"
      ],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop"
    },
    {
      id: 10,
      title: "Current: Final Year Project",
      organization: "NIBM - Computing Degree",
      date: "September 2024 - Present",
      category: "Education",
      description: "Working on capstone project: AI-powered learning management system with personalized content recommendations.",
      detailedDescription: `My final year project involves developing an intelligent learning management system that uses machine learning algorithms to provide personalized content recommendations and adaptive learning paths for students.\n\nThis project combines my frontend development skills with backend technologies and introduces me to AI/ML concepts, representing the culmination of my undergraduate studies.`,
      progress: 60,
      skills: ["Full-Stack Development", "Machine Learning", "Python", "TensorFlow", "API Development", "Data Analysis"],
      achievements: [
        "Successfully completed project proposal and approval",
        "Implemented core LMS functionality",
        "Integrated basic recommendation algorithms",
        "Conducting user testing with beta group"
      ],
      challenges: [
        "Learning machine learning concepts while maintaining project timeline",
        "Integrating AI features with existing web technologies",
        "Managing complex data relationships and user interactions"
      ],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop"
    }
  ];

  // Filter milestones based on active filters
  useEffect(() => {
    let filtered = timelineMilestones;

    // Filter by category
    if (activeFilter !== 'all') {
      filtered = filtered?.filter(milestone => milestone?.category === activeFilter);
    }

    // Filter by time period
    if (activeTimeFilter !== 'all') {
      if (activeTimeFilter === 'future') {
        filtered = filtered?.filter(milestone => 
          milestone?.date?.toLowerCase()?.includes('present') || 
          milestone?.date?.toLowerCase()?.includes('ongoing')
        );
      } else {
        filtered = filtered?.filter(milestone => milestone?.date?.includes(activeTimeFilter));
      }
    }

    setFilteredMilestones(filtered);
  }, [activeFilter, activeTimeFilter]);

  const handleExpandCard = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Experience Timeline - Educational Journey | Mihiranga Portfolio</title>
        <meta name="description" content="Explore Mihiranga's educational and professional journey through an interactive timeline showcasing milestones, achievements, and continuous learning in creative technology." />
        <meta name="keywords" content="experience timeline, educational journey, milestones, achievements, learning path, career development" />
      </Helmet>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-accent/20 to-electric-blue/20 rounded-full border border-purple-accent/30 mb-6">
                <Icon name="Clock" size={20} className="text-purple-accent" />
                <span className="text-sm font-medium text-purple-accent">Journey Timeline</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-poppins font-bold text-foreground mb-6">
                My Learning
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-electric-blue">
                  Journey
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                From curious beginner to emerging creative technologist - explore the milestones, 
                challenges, and achievements that have shaped my path in technology and design.
              </p>
            </motion.div>

            {/* Stats Overview */}
            <TimelineStats milestones={timelineMilestones} />

            {/* Filters */}
            <TimelineFilter 
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
              activeTimeFilter={activeTimeFilter}
              onTimeFilterChange={setActiveTimeFilter}
            />
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Timeline Container */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-neon-green via-electric-blue to-purple-accent h-full opacity-30"></div>
              
              {/* Timeline Cards */}
              <div className="space-y-0">
                {filteredMilestones?.length > 0 ? (
                  filteredMilestones?.map((milestone, index) => (
                    <TimelineCard
                      key={milestone?.id}
                      milestone={milestone}
                      index={index}
                      isLeft={index % 2 === 0}
                      onExpand={handleExpandCard}
                      isExpanded={expandedCard === milestone?.id}
                    />
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20"
                  >
                    <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-poppins font-semibold text-foreground mb-2">
                      No milestones found
                    </h3>
                    <p className="text-muted-foreground">
                      Try adjusting your filters to see more timeline entries.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Future Goals Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <FutureGoals />
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-foreground mb-6">
                Ready to Create Something Amazing?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                My journey continues with each new project and collaboration. 
                Let's connect and explore how we can build innovative solutions together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/projects-interactive-case-study-gallery"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-neon-green to-electric-blue text-background rounded-xl font-medium hover:neon-glow transition-all duration-300"
                >
                  <Icon name="FolderOpen" size={20} />
                  <span>View My Projects</span>
                </a>
                <a
                  href="/contact-collaboration-hub"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 border border-neon-green/30 text-neon-green rounded-xl font-medium hover:bg-neon-green/10 transition-all duration-300"
                >
                  <Icon name="MessageCircle" size={20} />
                  <span>Let's Connect</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ExperienceTimelineEducationalJourney;