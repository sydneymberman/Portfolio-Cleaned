import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { WorkSection } from "./components/WorkSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { Resume } from "./components/Resume";
import { AllProjects } from "./components/AllProjects";
import { CaseStudyFitify } from "./components/CaseStudyFitify";
import { CaseStudyEmbody } from "./components/CaseStudyEmbody";
import { CaseStudyPong } from "./components/CaseStudyPong";
import { BrowserRouter as Router, Routes, Route } from "react-router";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              <div className="size-full">
                <Navigation />
                <Hero />
                <WorkSection />
                <AboutSection />
                <ContactSection />
                <Footer />
              </div>
            } 
          />
          <Route 
            path="/resume" 
            element={
              <>
                <Resume />
                <Footer />
              </>
            } 
          />
          <Route 
            path="/projects" 
            element={
              <>
                <AllProjects />
                <Footer />
              </>
            } 
          />
          <Route 
            path="/projects/fitify" 
            element={
              <>
                <CaseStudyFitify />
                <Footer />
              </>
            } 
          />
          <Route 
            path="/projects/embody" 
            element={
              <>
                <CaseStudyEmbody />
                <Footer />
              </>
            } 
          />
          <Route 
            path="/projects/pong" 
            element={
              <>
                <CaseStudyPong />
                <Footer />
              </>
            } 
          />
          <Route 
            path="*" 
            element={
              <div className="size-full">
                <Navigation />
                <Hero />
                <WorkSection />
                <AboutSection />
                <ContactSection />
                <Footer />
              </div>
            } 
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}