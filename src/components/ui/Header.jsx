import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage-creative-technologist-portfolio', icon: 'Home' },
    { name: 'About', path: '/about-personal-journey-philosophy', icon: 'User' },
    { name: 'Projects', path: '/projects-interactive-case-study-gallery', icon: 'FolderOpen' },
    { name: 'Skills', path: '/skills-technology-matrix', icon: 'Code' },
    { name: 'Experience', path: '/experience-timeline-educational-journey', icon: 'Briefcase' }
  ];

  const secondaryItems = [
    { name: 'Contact', path: '/contact-collaboration-hub', icon: 'Mail' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const Logo = () => (
    <Link
      to="/homepage-creative-technologist-portfolio"
      className="flex items-center space-x-3 group"
      onClick={closeMenu}
    >
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-neon-green to-electric-blue rounded-lg flex items-center justify-center transition-all duration-300 group-hover:neon-glow">
          <span className="text-background font-poppins font-bold text-lg">M</span>
        </div>
        <div className="absolute -inset-1 bg-gradient-to-br from-neon-green to-electric-blue rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
      </div>
      <div className="hidden sm:block">
        <h1 className="text-xl font-poppins font-bold text-foreground group-hover:text-neon-green transition-colors duration-300">
          Mihiranga
        </h1>
        <p className="text-xs text-muted-foreground font-inter">Software Engineer</p>
      </div>
    </Link>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'glassmorphism shadow-glassmorphism'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.name}
                to={item?.path}
                className={`px-4 py-2 rounded-lg text-sm font-inter font-medium transition-all duration-300 flex items-center space-x-2 group ${isActivePath(item?.path)
                  ? 'bg-primary/10 text-primary border border-primary/20' : 'text-muted-foreground hover:text-foreground hover:bg-muted/10'
                  }`}
              >
                <Icon
                  name={item?.icon}
                  size={16}
                  className={`transition-colors duration-300 ${isActivePath(item?.path) ? 'text-primary' : 'group-hover:text-neon-green'
                    }`}
                />
                <span>{item?.name}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contact-collaboration-hub">
              <Button
                variant="outline"
                size="sm"
                iconName="Mail"
                iconPosition="left"
                className="border-neon-green/30 text-neon-green hover:bg-neon-green/10 hover:text-white hover:neon-glow transition-all duration-300"
              >
                Let's Connect
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/10 transition-all duration-300"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div
        className={`lg:hidden transition-all duration-300 ease-brand ${isMenuOpen
          ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
      >
        <div className="glassmorphism border-t border-border/20 mx-4 mt-2 rounded-2xl">
          <nav className="px-6 py-4 space-y-2">
            {navigationItems?.map((item) => (
              <Link
                key={item?.name}
                to={item?.path}
                onClick={closeMenu}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-inter font-medium transition-all duration-300 ${isActivePath(item?.path)
                  ? 'bg-primary/10 text-primary border border-primary/20' : 'text-muted-foreground hover:text-foreground hover:bg-muted/10'
                  }`}
              >
                <Icon
                  name={item?.icon}
                  size={18}
                  className={`transition-colors duration-300 ${isActivePath(item?.path) ? 'text-primary' : ''
                    }`}
                />
                <span>{item?.name}</span>
              </Link>
            ))}

            <div className="pt-4 border-t border-border/20">
              {secondaryItems?.map((item) => (
                <Link
                  key={item?.name}
                  to={item?.path}
                  onClick={closeMenu}
                  className="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-inter font-medium text-neon-green hover:bg-neon-green/10 transition-all duration-300"
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.name}</span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;