import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection = ({ data }) => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('key-highlights');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Curved Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-white curved-overlay z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          className="glass-card p-8 md:p-12 rounded-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Company Name */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="inline-block px-4 py-2 bg-white/30 backdrop-blur-sm rounded-full text-sm font-semibold text-white border border-white/20">
              {data.subtitle}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="heading-xl text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="block">INVESTIS</span>
            <span className="block text-3xl md:text-5xl font-normal mt-2">
              ANNUAL REPORT
            </span>
            <span className="block text-4xl md:text-6xl font-light text-[var(--investis-warm-beige)] mt-2">
              2024
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {data.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <motion.button
              onClick={scrollToNext}
              className="glass-button px-8 py-4 rounded-2xl text-white font-semibold text-lg flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore Report</span>
              <ChevronDown size={20} />
            </motion.button>
            
            <motion.button
              className="px-8 py-4 rounded-2xl text-white font-semibold text-lg border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download PDF
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm"
        animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute top-1/3 right-16 w-16 h-16 bg-[var(--investis-warm-beige)]/20 rounded-full backdrop-blur-sm"
        animate={{ y: [0, 15, 0], rotate: [0, -180, -360] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-white/15 rounded-full backdrop-blur-sm"
        animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
      />
    </section>
  );
};

export default HeroSection;

