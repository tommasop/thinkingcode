import React from "react";
import "./App.css";
import { 
  Header, 
  HeroSection, 
  ServicesSection, 
  AboutSection, 
  ProjectsSection, 
  BlogSection, 
  ContactSection, 
  Footer 
} from './components';

function App() {
  return (
    <div className="App bg-white min-h-screen" data-theme="vintage">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
