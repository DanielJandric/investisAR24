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

// Embedded data to avoid loading issues
const financialData = {
  "keyMetrics": {
    "2024": {
      "revenue": 152707,
      "ebitda": 48897,
      "ebit": 274518,
      "netProfit": 246507,
      "netProfitExcludingRevaluation": 156503,
      "ffo": 45606,
      "totalAssets": 2079021,
      "totalPropertyPortfolio": 1995247,
      "interestBearingLiabilities": 551000,
      "grossLTV": 27.6,
      "shareholdersEquity": 1339505,
      "equityRatio": 64.4,
      "employees": 17,
      "fte": 795
    },
    "2023": {
      "revenue": 231530,
      "ebitda": 50062,
      "ebit": -1487,
      "netProfit": -5402,
      "netProfitExcludingRevaluation": 35548,
      "ffo": 40612,
      "totalAssets": 1609590,
      "totalPropertyPortfolio": 1518026,
      "interestBearingLiabilities": 397000,
      "grossLTV": 26.2,
      "shareholdersEquity": 1029243,
      "equityRatio": 63.9,
      "employees": 2305,
      "fte": 1600
    }
  },
  "portfolioValue": [
    { "year": 2020, "total": 1490, "geneva": 1200 },
    { "year": 2021, "total": 1735, "geneva": 1350 },
    { "year": 2022, "total": 1508, "geneva": 1180 },
    { "year": 2023, "total": 1518, "geneva": 1200 },
    { "year": 2024, "total": 1995, "geneva": 1580 }
  ],
  "sharePerformance": [
    { "date": "2024-01-01", "investis": 97.00, "spi": 100, "reAllShares": 100 },
    { "date": "2024-03-31", "investis": 102.50, "spi": 105, "reAllShares": 103 },
    { "date": "2024-06-30", "investis": 108.00, "spi": 110, "reAllShares": 106 },
    { "date": "2024-09-30", "investis": 110.50, "spi": 112, "reAllShares": 108 },
    { "date": "2024-12-31", "investis": 112.00, "spi": 115, "reAllShares": 110 }
  ]
};

const contentStructure = {
  "sections": [
    {
      "id": "hero",
      "title": "Investis Group Annual Report 2024",
      "subtitle": "Real Estate Group",
      "description": "Strong results in an eventful year – successful expansion of the property portfolio",
      "backgroundImage": "001.webp",
      "type": "hero"
    },
    {
      "id": "key-highlights",
      "title": "Key Highlights 2024",
      "description": "Strategic pivot by divesting its Service segment – further expansion of the property portfolio",
      "type": "highlights",
      "items": [
        {
          "title": "Portfolio Value",
          "value": "CHF 1,995 million",
          "description": "Excellent EBITDA of CHF 48.9 million"
        },
        {
          "title": "Residential Share",
          "value": "81%",
          "description": "197 buildings and 2,976 residential units"
        },
        {
          "title": "Rental Growth",
          "value": "+3.4%",
          "description": "Outstanding like-for-like rental growth"
        },
        {
          "title": "Revaluation Gains",
          "value": "CHF 105 million",
          "description": "Due to lower interest rates and high quality portfolio"
        },
        {
          "title": "Net Profit",
          "value": "CHF 246.5 million",
          "description": "Net profit excluding revaluation effect of CHF 156.5 million"
        },
        {
          "title": "LTV Ratio",
          "value": "27.6%",
          "description": "Conservative loan-to-value ratio"
        }
      ]
    },
    {
      "id": "ceo-statement",
      "title": "CEO Statement",
      "type": "statement",
      "author": "Stéphane Bonvin",
      "position": "CEO and Member of the Board of Directors",
      "quote": "It is a pleasure to reflect on a successful financial year, during which we strategically shifted our focus to expanding our real estate portfolio and profitably sold our entire Services business. Our well-timed strategic decision to sell part of our portfolio in 2022 and buy comparable properties at significantly lower prices in 2024, has created additional value for our shareholders.",
      "image": "011.webp"
    },
    {
      "id": "financial-performance",
      "title": "Financial Performance",
      "type": "financial",
      "description": "Comprehensive overview of financial metrics and performance indicators"
    },
    {
      "id": "property-portfolio",
      "title": "Property Portfolio",
      "subtitle": "94% of the portfolio is located in the Lake Geneva region",
      "type": "portfolio",
      "description": "The portfolio is valued at CHF 1,995 million at 31 December 2024 and consists mainly of 2,976 middle-income residential units in 197 buildings.",
      "image": "019.webp"
    },
    {
      "id": "sustainability",
      "title": "Sustainability",
      "subtitle": "On a path to net zero",
      "type": "sustainability",
      "description": "Investis' commitment to sustainability and social responsibility reflects its strategic integration of environmental, social, and governance (ESG) principles into its operations.",
      "image": "015.webp",
      "pillars": [
        {
          "title": "Environmental sustainability",
          "description": "Investis sets clear priorities to reduce the carbon footprint of its property portfolio"
        },
        {
          "title": "Social responsibility",
          "description": "Investis ensures its business decisions contribute positively to society"
        },
        {
          "title": "Governance and ethical practices",
          "description": "Investis adheres to governance principles that prioritise transparency and ethical conduct"
        }
      ]
    },
    {
      "id": "market-overview",
      "title": "Market Overview",
      "type": "market",
      "description": "The residential property market in the Lake Geneva region in 2024 was driven by economic, demographic and regulatory factors.",
      "image": "018.webp",
      "keyPoints": [
        "Demand for quality housing remained stable due to Geneva's international appeal",
        "Limited supply under pressure due to scarce building land and strict regulations",
        "Strong demand for mid-range rental properties, especially 1-3 room apartments",
        "Young professionals, students and small households drive demand for compact housing"
      ]
    },
    {
      "id": "financial-statements",
      "title": "Financial Statements",
      "type": "statements",
      "description": "Detailed consolidated financial statements including income statement, balance sheet, and cash flow statement"
    }
  ],
  "navigation": [
    { "id": "hero", "label": "Home", "icon": "home" },
    { "id": "key-highlights", "label": "Highlights", "icon": "star" },
    { "id": "financial-performance", "label": "Financials", "icon": "chart" },
    { "id": "property-portfolio", "label": "Portfolio", "icon": "building" },
    { "id": "sustainability", "label": "Sustainability", "icon": "leaf" },
    { "id": "market-overview", "label": "Market", "icon": "globe" },
    { "id": "financial-statements", "label": "Statements", "icon": "document" }
  ]
};

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
      const currentSection = sections.find((section, index) => {
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

