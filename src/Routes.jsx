import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import ProjectsGallery from './pages/projects-interactive-case-study-gallery';
import Homepage from './pages/homepage-creative-technologist-portfolio';
import ContactCollaborationHub from './pages/contact-collaboration-hub';
import ExperienceTimelineEducationalJourney from './pages/experience-timeline-educational-journey';
import AboutPersonalJourneyPhilosophy from './pages/about-personal-journey-philosophy';
import SkillsTechnologyMatrix from './pages/skills-technology-matrix';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<ContactCollaborationHub />} />
        <Route path="/projects-interactive-case-study-gallery" element={<ProjectsGallery />} />
        <Route path="/homepage-creative-technologist-portfolio" element={<Homepage />} />
        <Route path="/contact-collaboration-hub" element={<ContactCollaborationHub />} />
        <Route path="/experience-timeline-educational-journey" element={<ExperienceTimelineEducationalJourney />} />
        <Route path="/about-personal-journey-philosophy" element={<AboutPersonalJourneyPhilosophy />} />
        <Route path="/skills-technology-matrix" element={<SkillsTechnologyMatrix />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;