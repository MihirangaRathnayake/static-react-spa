import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import ProjectCard from './components/ProjectCard';
import ProjectFilter from './components/ProjectFilter';
import CaseStudyModal from './components/CaseStudyModal';
import FutureProjectCard from './components/FutureProjectCard';

const ProjectsGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock Projects Data
  const projects = [
    {
      id: 1,
      title: "EcoTracker Dashboard",
      category: "Web Application",
      description: "A comprehensive environmental impact tracking platform that helps users monitor their carbon footprint through interactive visualizations and personalized recommendations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "D3.js", "MongoDB", "Express", "Tailwind CSS"],
      duration: "3 months",
      teamSize: "Solo Project",
      status: "Live",
      featured: true,
      metrics: "40% faster",
      liveUrl: "https://ecotracker-demo.com",
      githubUrl: "https://github.com/mihiranga/ecotracker",
      caseStudy: {
        problem: `Environmental awareness is growing, but individuals lack accessible tools to track and understand their personal carbon footprint. Existing solutions are either too complex for everyday users or lack the visual appeal to encourage consistent engagement.`,
        solution: `I designed and developed EcoTracker, an intuitive web application that gamifies environmental tracking through beautiful data visualizations and personalized insights. The platform uses interactive charts and progress indicators to make environmental data engaging and actionable.`,
        features: [
          "Real-time carbon footprint calculation",
          "Interactive D3.js data visualizations",
          "Personalized sustainability recommendations",
          "Social sharing and community challenges",
          "Mobile-responsive design with offline capabilities"
        ],
        implementation: `Built with React 18 and modern hooks for state management, the application leverages D3.js for custom data visualizations and Node.js with Express for the backend API. MongoDB stores user data and tracking metrics, while Tailwind CSS ensures a consistent, responsive design system.`,
        codeSnippet: `// Carbon footprint calculation hook
const useCarbonCalculator = (activities) => {
  const [footprint, setFootprint] = useState(0);
  
  useEffect(() => {
    const total = activities.reduce((sum, activity) => {
      return sum + (activity.amount * activity.emissionFactor);
    }, 0);
    setFootprint(total);
  }, [activities]);
  
  return { footprint, reduction: calculateReduction(footprint) };
};`,
        results: `The application achieved a 40% improvement in user engagement compared to traditional environmental tracking tools. Users reported increased awareness of their environmental impact and adopted more sustainable practices after using the platform for just two weeks.`,
        learnings: [
          "Data visualization significantly improves user engagement with complex information",
          "Gamification elements encourage consistent user behavior change",
          "Performance optimization is crucial for real-time data processing",
          "User feedback loops are essential for iterative design improvements"
        ]
      }
    },
    {
      id: 2,
      title: "MindfulSpace Mobile UI",
      category: "UI/UX Design",
      description: "A meditation and mindfulness app interface designed to promote calm and focus through minimalist design principles and intuitive user flows.",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=600&fit=crop",
      technologies: ["Figma", "Adobe XD", "Principle", "React Native", "Framer Motion"],
      duration: "2 months",
      teamSize: "2 Designers",
      status: "In Progress",
      featured: false,
      metrics: "95% satisfaction",
      liveUrl: null,
      githubUrl: "https://github.com/mihiranga/mindfulspace-ui",
      caseStudy: {
        problem: `Mental health apps often overwhelm users with complex interfaces and too many options, contradicting their purpose of promoting calm and mindfulness. Users need a simple, intuitive experience that reduces cognitive load while encouraging regular meditation practice.`,
        solution: `I created MindfulSpace, a minimalist mobile interface that prioritizes simplicity and emotional well-being. The design uses calming colors, generous white space, and gentle animations to create a serene digital environment that supports mindfulness practices.`,
        features: [
          "Minimalist interface with calming color palette",
          "Gesture-based navigation for intuitive interaction",
          "Personalized meditation recommendations",
          "Progress tracking with subtle visual feedback",
          "Accessibility features for inclusive design"
        ],
        implementation: `The design system was built in Figma with a comprehensive component library and design tokens. Prototypes were created using Principle for micro-interactions, while the React Native implementation uses Framer Motion for smooth, calming animations that enhance the meditative experience.`,
        codeSnippet: `// Breathing animation component
const BreathingCircle = ({ isActive }) => {
  return (
    <motion.div
      className="breathing-circle"
      animate={isActive ? {
        scale: [1, 1.2, 1],
        opacity: [0.7, 1, 0.7]
      } : {}}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};`,
        results: `User testing revealed a 95% satisfaction rate with the interface design. Participants reported feeling more relaxed while using the app compared to competitors, and 87% said they would recommend the app based on the design alone.`,
        learnings: [
          "Less is more when designing for mental wellness applications",
          "Micro-interactions can significantly impact emotional response",
          "Color psychology plays a crucial role in user experience",
          "Accessibility considerations improve usability for all users"
        ]
      }
    },
    {
      id: 3,
      title: "TaskFlow Productivity Suite",
      category: "Web Application",
      description: "A comprehensive project management platform with real-time collaboration features, advanced analytics, and customizable workflows for modern teams.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL", "Redis", "Docker"],
      duration: "4 months",
      teamSize: "4 Developers",
      status: "Live",
      featured: true,
      metrics: "60% efficiency",
      liveUrl: "https://taskflow-suite.com",
      githubUrl: "https://github.com/mihiranga/taskflow",
      caseStudy: {
        problem: `Remote teams struggle with fragmented communication and project tracking across multiple tools. Existing project management solutions often lack real-time collaboration features or are too complex for small to medium-sized teams to adopt effectively.`,
        solution: `TaskFlow combines project management, real-time collaboration, and analytics in a unified platform. The solution features intuitive drag-and-drop interfaces, live cursors for collaborative editing, and intelligent automation that adapts to team workflows.`,
        features: [
          "Real-time collaborative editing with live cursors",
          "Drag-and-drop task management with Kanban boards",
          "Advanced analytics and reporting dashboard",
          "Customizable workflow automation",
          "Integration with popular development tools"
        ],
        implementation: `Built with React and TypeScript for type safety, the application uses Socket.io for real-time features and PostgreSQL for data persistence. Redis handles caching and session management, while Docker ensures consistent deployment across environments.`,
        codeSnippet: `// Real-time collaboration hook
const useCollaboration = (documentId) => {
  const [cursors, setCursors] = useState({});
  const socket = useSocket();
  
  useEffect(() => {
    socket.emit('join-document', documentId);
    
    socket.on('cursor-update', (data) => {
      setCursors(prev => ({
        ...prev,
        [data.userId]: data.position
      }));
    });
    
    return () => socket.off('cursor-update');
  }, [documentId, socket]);
  
  return { cursors, updateCursor: (position) => {
    socket.emit('cursor-move', { documentId, position });
  }};
};`,
        results: `Teams using TaskFlow reported a 60% increase in productivity and 45% reduction in project completion time. The real-time collaboration features eliminated the need for multiple communication tools, streamlining team workflows significantly.`,
        learnings: [
          "Real-time features require careful consideration of performance and scalability",
          "User onboarding is critical for complex productivity tools",
          "Integration capabilities are essential for team tool adoption",
          "Performance monitoring is crucial for collaborative applications"
        ]
      }
    },
    {
      id: 4,
      title: "ArtGallery Virtual Experience",
      category: "Mobile Interface",
      description: "An immersive virtual art gallery experience with AR features, allowing users to explore artworks in 3D space and learn through interactive storytelling.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      technologies: ["React Native", "Three.js", "ARKit", "WebGL", "Firebase"],
      duration: "5 months",
      teamSize: "3 Developers",
      status: "Live",
      featured: false,
      metrics: "300% engagement",
      liveUrl: "https://artgallery-vr.com",
      githubUrl: "https://github.com/mihiranga/artgallery-vr",
      caseStudy: {
        problem: `Traditional art galleries have limited accessibility and engagement, especially for younger audiences. Physical constraints prevent many people from experiencing world-class art collections, while static digital galleries fail to capture the immersive nature of art appreciation.`,
        solution: `ArtGallery VR creates an immersive virtual experience that combines 3D visualization, augmented reality, and interactive storytelling. Users can explore virtual galleries, view artworks in detail, and learn through engaging multimedia content that brings art history to life.`,
        features: [
          "3D virtual gallery environments with realistic lighting",
          "AR features for viewing artworks in personal space",
          "Interactive audio guides with artist stories",
          "Social features for sharing favorite artworks",
          "Educational quizzes and art history timelines"
        ],
        implementation: `Developed with React Native for cross-platform compatibility, the app integrates Three.js for 3D rendering and ARKit for augmented reality features. Firebase handles user authentication and data synchronization, while WebGL ensures smooth 3D performance across devices.`,
        codeSnippet: `// 3D artwork viewer component
const ArtworkViewer = ({ artwork }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });
  
  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[artwork.width, artwork.height]} />
      <meshStandardMaterial map={useTexture(artwork.imageUrl)} />
    </mesh>
  );
};`,
        results: `The virtual gallery experience achieved 300% higher user engagement compared to traditional digital galleries. Users spent an average of 25 minutes per session, and 78% completed the full gallery tour, indicating strong content engagement and user satisfaction.`,
        learnings: [
          "3D experiences require careful optimization for mobile devices",
          "User interface design in 3D space follows different principles",
          "Audio storytelling significantly enhances visual experiences",
          "Cross-platform AR implementation presents unique challenges"
        ]
      }
    },
    {
      id: 5,
      title: "HealthSync Patient Portal",
      category: "Web Application",
      description: "A secure patient portal for healthcare providers featuring appointment scheduling, medical records access, and telemedicine integration with HIPAA compliance.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "JWT", "WebRTC", "AWS"],
      duration: "6 months",
      teamSize: "5 Developers",
      status: "Live",
      featured: true,
      metrics: "50% reduction",
      liveUrl: "https://healthsync-portal.com",
      githubUrl: "https://github.com/mihiranga/healthsync",
      caseStudy: {
        problem: `Healthcare providers struggle with fragmented patient communication systems that lack integration and security compliance. Patients often face difficulties accessing their medical records and scheduling appointments, leading to inefficient healthcare delivery and poor patient experience.`,
        solution: `HealthSync provides a comprehensive patient portal that centralizes healthcare interactions while maintaining strict HIPAA compliance. The platform integrates appointment scheduling, secure messaging, medical record access, and telemedicine capabilities in a user-friendly interface.`,
        features: [
          "Secure appointment scheduling with provider availability",
          "HIPAA-compliant medical record access and sharing",
          "Integrated telemedicine with WebRTC video calls",
          "Prescription management and refill requests",
          "Multi-language support for diverse patient populations"
        ],
        implementation: `Built with React for the frontend and Node.js for the backend API, the system uses PostgreSQL for secure data storage and JWT for authentication. WebRTC enables secure video consultations, while AWS provides HIPAA-compliant cloud infrastructure with end-to-end encryption.`,
        codeSnippet: `// Secure video call component
const SecureVideoCall = ({ appointmentId }) => {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const peerConnection = useRef(null);
  
  useEffect(() => {
    initializeWebRTC();
    return () => cleanupConnection();
  }, []);
  
  const initializeWebRTC = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    });
    setLocalStream(stream);
    
    peerConnection.current = new RTCPeerConnection({
      iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
    });
  };
  
  return (
    <div className="video-call-container">
      <video ref={localVideoRef} autoPlay muted />
      <video ref={remoteVideoRef} autoPlay />
    </div>
  );
};`,
        results: `HealthSync reduced administrative overhead by 50% and improved patient satisfaction scores by 35%. The platform processed over 10,000 appointments in its first quarter, with 92% of users rating the experience as excellent or very good.`,
        learnings: [
          "Healthcare applications require extensive security and compliance considerations",
          "User experience design must accommodate diverse technical literacy levels",
          "Real-time communication in healthcare demands high reliability",
          "Integration with existing healthcare systems is complex but essential"
        ]
      }
    },
    {
      id: 6,
      title: "CryptoTrader Analytics",
      category: "Web Application",
      description: "A real-time cryptocurrency trading dashboard with advanced charting, portfolio tracking, and AI-powered market insights for informed trading decisions.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
      technologies: ["React", "Python", "TensorFlow", "WebSocket", "Chart.js", "Redis"],
      duration: "4 months",
      teamSize: "Solo Project",
      status: "Development",
      featured: false,
      metrics: "85% accuracy",
      liveUrl: null,
      githubUrl: "https://github.com/mihiranga/cryptotrader",
      caseStudy: {
        problem: `Cryptocurrency traders need real-time market data and analytical tools to make informed decisions, but existing platforms often lack comprehensive features or are too expensive for individual traders. Many solutions don't provide the depth of analysis needed for successful trading strategies.`,
        solution: `CryptoTrader Analytics combines real-time market data with AI-powered insights and advanced charting tools. The platform provides portfolio tracking, technical analysis indicators, and machine learning predictions to help traders make data-driven decisions.`,
        features: [
          "Real-time cryptocurrency price tracking and alerts",
          "Advanced charting with technical analysis indicators",
          "AI-powered market trend predictions",
          "Portfolio performance tracking and analytics",
          "Social trading features and community insights"
        ],
        implementation: `The frontend uses React with Chart.js for data visualization, while the backend combines Node.js APIs with Python services for machine learning. TensorFlow powers the AI predictions, WebSocket connections provide real-time data, and Redis caches frequently accessed market information.`,
        codeSnippet: `// Real-time price tracking hook
const useCryptoPrices = (symbols) => {
  const [prices, setPrices] = useState({});
  const [socket, setSocket] = useState(null);
  
  useEffect(() => {
    const ws = new WebSocket('wss://api.crypto-exchange.com/ws');
    
    ws.onopen = () => {
      ws.send(JSON.stringify({
        method: 'SUBSCRIBE',
        params: symbols.map(s => \`\${s}@ticker\`)
      }));
    };
    
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setPrices(prev => ({
        ...prev,
        [data.symbol]: {
          price: parseFloat(data.price),
          change: parseFloat(data.priceChangePercent)
        }
      }));
    };
    
    setSocket(ws);
    return () => ws.close();
  }, [symbols]);
  
  return prices;
};`,
        results: `The AI prediction model achieved 85% accuracy in short-term price movement predictions during backtesting. Beta users reported improved trading performance and better risk management through the platform's analytical tools and real-time insights.`,
        learnings: [
          "Real-time data processing requires careful architecture planning",
          "Machine learning models need continuous training and validation",
          "Financial applications demand high accuracy and reliability",
          "User interface design for complex data requires careful consideration"
        ]
      }
    }
  ];

  // Future Projects Data
  const futureProjects = [
    {
      id: 'future-1',
      title: "AI-Powered Learning Platform",
      description: "An adaptive learning platform that uses machine learning to personalize educational content and track student progress with intelligent recommendations.",
      icon: "Brain",
      learningGoals: ["Machine Learning", "Educational Technology", "Adaptive UI"],
      timeline: "Q2 2024",
      progress: 25
    },
    {
      id: 'future-2',
      title: "Sustainable Living App",
      description: "A comprehensive mobile application for tracking and improving personal sustainability habits with community challenges and environmental impact visualization.",
      icon: "Leaf",
      learningGoals: ["React Native", "Environmental APIs", "Gamification"],
      timeline: "Q3 2024",
      progress: 15
    },
    {
      id: 'future-3',
      title: "Voice-Controlled Smart Home",
      description: "An IoT dashboard for smart home management with voice control integration and predictive automation based on user behavior patterns.",
      icon: "Home",
      learningGoals: ["IoT Development", "Voice Recognition", "Predictive Analytics"],
      timeline: "Q4 2024",
      progress: 10
    }
  ];

  const categories = ['All Projects', 'Web Application', 'UI/UX Design', 'Mobile Interface'];

  // Filter projects based on active category
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All Projects') {
      return projects;
    }
    return projects?.filter(project => project?.category === activeCategory);
  }, [activeCategory, projects]);

  // Calculate project counts for each category
  const projectCounts = useMemo(() => {
    const counts = { 'All Projects': projects?.length };
    categories?.slice(1)?.forEach(category => {
      counts[category] = projects?.filter(p => p?.category === category)?.length;
    });
    return counts;
  }, [projects, categories]);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      <Helmet>
        <title>Projects - Interactive Case Study Gallery | Mihiranga Portfolio</title>
        <meta name="description" content="Explore Mihiranga's portfolio of web applications, UI/UX designs, and mobile interfaces. Interactive case studies showcase technical implementation, problem-solving approach, and project outcomes." />
        <meta name="keywords" content="web development projects, UI UX design portfolio, React applications, case studies, technical portfolio" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-neon-green to-electric-blue rounded-2xl flex items-center justify-center mr-4">
                  <Icon name="FolderOpen" size={24} className="text-background" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-foreground">
                  Project <span className="text-neon-green">Gallery</span>
                </h1>
              </div>
              
              <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
                Explore my journey through interactive case studies showcasing technical implementation, 
                creative problem-solving, and measurable outcomes across web applications, UI/UX design, and mobile interfaces.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Project Filter */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <ProjectFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              projectCounts={projectCounts}
            />
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects?.map((project, index) => (
                <ProjectCard
                  key={project?.id}
                  project={project}
                  onViewDetails={handleViewDetails}
                  index={index}
                />
              ))}
            </motion.div>

            {filteredProjects?.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-poppins font-semibold text-foreground mb-2">
                  No projects found
                </h3>
                <p className="text-muted-foreground">
                  Try selecting a different category to explore more projects.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Future Projects Section */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
                Future <span className="text-purple-accent">Roadmap</span>
              </h2>
              <p className="text-muted-foreground font-inter max-w-2xl mx-auto">
                Upcoming projects and learning goals that showcase my commitment to continuous growth 
                and exploration of emerging technologies.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {futureProjects?.map((project, index) => (
                <FutureProjectCard
                  key={project?.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glassmorphism rounded-2xl p-8 md:p-12 text-center"
            >
              <Icon name="MessageCircle" size={48} className="text-neon-green mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-poppins font-bold text-foreground mb-4">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-muted-foreground font-inter mb-8 max-w-2xl mx-auto">
                Interested in collaborating on a project or discussing how these solutions could benefit your organization? 
                I'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact-collaboration-hub"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-8 py-3 bg-neon-green text-background font-inter font-medium rounded-lg hover:bg-neon-green/90 transition-colors duration-300 neon-glow"
                >
                  <Icon name="Mail" size={20} className="mr-2" />
                  Start a Conversation
                </motion.a>
                <motion.a
                  href="https://github.com/mihiranga"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-8 py-3 border border-electric-blue/30 text-electric-blue font-inter font-medium rounded-lg hover:bg-electric-blue/10 transition-colors duration-300"
                >
                  <Icon name="Github" size={20} className="mr-2" />
                  View All Code
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Case Study Modal */}
        <CaseStudyModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </>
  );
};

export default ProjectsGallery;