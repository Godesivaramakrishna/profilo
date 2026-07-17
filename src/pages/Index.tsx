import { lazy, Suspense, useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";

const About = lazy(() => import("@/components/portfolio/About"));
const Skills = lazy(() => import("@/components/portfolio/Skills"));
const Projects = lazy(() => import("@/components/portfolio/Projects"));
const Experience = lazy(() => import("@/components/portfolio/Experience"));
const CodingProfiles = lazy(() => import("@/components/portfolio/CodingProfiles"));
const Certifications = lazy(() => import("@/components/portfolio/Certifications"));
const Contact = lazy(() => import("@/components/portfolio/Contact"));
const Footer = lazy(() => import("@/components/portfolio/Footer"));
const ChatBot = lazy(() => import("@/components/portfolio/ChatBot"));

const Index = () => {
  const [showBelowFold, setShowBelowFold] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 1,
  });

  useEffect(() => {
    const requestIdle = (callback: () => void): number | ReturnType<typeof setTimeout> => {
      if ("requestIdleCallback" in window) {
        return (window as Window & {
          requestIdleCallback: (cb: () => void, options?: { timeout: number }) => number;
        }).requestIdleCallback(callback, { timeout: 1200 });
      }
      return setTimeout(callback, 300);
    };

    const cancelIdle = (handle: number | ReturnType<typeof setTimeout>) => {
      if ("cancelIdleCallback" in window) {
        (window as Window & { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(handle as number);
      } else {
        clearTimeout(handle as ReturnType<typeof setTimeout>);
      }
    };

    const handle = requestIdle(() => setShowBelowFold(true));

    return () => cancelIdle(handle);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-y-auto">
      {/* Scroll Progress Bar */}
      <motion.div
        style={{
          scaleX: smoothScroll,
          transformOrigin: "0%",
        }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 z-50"
      />
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        {showBelowFold && (
          <>
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Certifications />
            <CodingProfiles />
            <Contact />
            <Footer />
            <ChatBot />
          </>
        )}
      </Suspense>
    </div>
  );
};

export default Index;
