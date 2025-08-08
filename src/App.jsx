import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Home, Star, TrendingUp, Building, Leaf, Globe, FileText, Menu, X } from 'lucide-react';
import './App.css';

// Components
import HeroSection from './components/HeroSection';
import HighlightsSection from './components/HighlightsSection';
import CEOStatementSection from './components/CEOStatementSection';
import FinancialSection from './components/FinancialSection';
import PortfolioSection from './components/PortfolioSection';
import SustainabilitySection from './components/SustainabilitySection';
import MarketSection from './components/MarketSection';
import StatementsSection from './components/StatementsSection';

// Data
import financialData from './data/financial_data.json';
import contentStructure from './data/content_structure.json';

const iconMap = {
  home: Home,
  star: Star,
  chart: TrendingUp,
  building: Building,
  leaf: Leaf,
  globe: Globe,
  document: FileText
};

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Update active section based on scroll position
      const sections = contentStructure.sections;
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/20 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-[var(--investis-blue-grey)] to-[var(--investis-warm-beige)]"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 glass-nav"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-[var(--investis-blue-grey)] to-[var(--investis-deep-blue)] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">I</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Investis Group</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {contentStructure.navigation.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-[var(--investis-blue-grey)] text-white shadow-lg'
                        : 'text-gray-700 hover:bg-white/50'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={16} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg glass-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden glass-card mx-4 mb-4 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-4 space-y-2">
                {contentStructure.navigation.map((item) => {
                  const Icon = iconMap[item.icon];
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                        activeSection === item.id
                          ? 'bg-[var(--investis-blue-grey)] text-white'
                          : 'text-gray-700 hover:bg-white/50'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon size={18} />
                      <span className="font-medium">{item.label}</span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <main className="pt-16">
        <HeroSection data={contentStructure.sections[0]} />
        <HighlightsSection data={contentStructure.sections[1]} financialData={financialData} />
        <CEOStatementSection data={contentStructure.sections[2]} />
        <FinancialSection data={contentStructure.sections[3]} financialData={financialData} />
        <PortfolioSection data={contentStructure.sections[4]} financialData={financialData} />
        <SustainabilitySection data={contentStructure.sections[5]} />
        <MarketSection data={contentStructure.sections[6]} />
        <StatementsSection data={contentStructure.sections[7]} financialData={financialData} />
      </main>

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-12 h-12 glass-button rounded-full flex items-center justify-center shadow-lg"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: scrollProgress > 10 ? 1 : 0,
          scale: scrollProgress > 10 ? 1 : 0
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronDown className="rotate-180" size={20} />
      </motion.button>
    </div>
  );
}

export default App;


