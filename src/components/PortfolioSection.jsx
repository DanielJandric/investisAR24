import React from 'react';
import { motion } from 'framer-motion';
import { Building, MapPin, TrendingUp, Users, Home, Percent } from 'lucide-react';

const PortfolioSection = ({ data }) => {
  const metrics = [
    {
      icon: Building,
      label: 'Total Buildings',
      value: '197',
      change: '+45 from 2023',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Home,
      label: 'Residential Units',
      value: '2,976',
      change: '+499 from 2023',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Percent,
      label: 'Vacancy Rate',
      value: '1.9%',
      change: '+1.0% from 2023',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: TrendingUp,
      label: 'Like-for-like Growth',
      value: '3.4%',
      change: '+0.3% from 2023',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const portfolioHighlights = [
    {
      title: 'Lake Geneva Focus',
      description: '94% of portfolio located in prime Lake Geneva region',
      icon: MapPin,
      stat: '94%'
    },
    {
      title: 'Quality Properties',
      description: 'Mid-income residential units in strategic locations',
      icon: Building,
      stat: 'CHF 1.995B'
    },
    {
      title: 'Strong Occupancy',
      description: 'Low vacancy rate demonstrates portfolio quality',
      icon: Users,
      stat: '98.1%'
    }
  ];

  return (
    <section id="property-portfolio" className="section-padding bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block px-4 py-2 bg-[var(--investis-blue-grey)]/10 rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-[var(--investis-blue-grey)] font-semibold text-sm">
              PROPERTY PORTFOLIO
            </span>
          </motion.div>
          
          <h2 className="heading-lg mb-4">{data.title}</h2>
          <p className="text-xl text-[var(--investis-warm-beige)] font-medium mb-4">
            {data.subtitle}
          </p>
          <p className="body-lg max-w-3xl mx-auto text-gray-600">
            {data.description}
          </p>
        </motion.div>

        {/* Hero Image with Overlay Stats */}
        <motion.div
          className="relative mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass-card p-6 rounded-3xl">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Floating Stats */}
              <motion.div
                className="absolute top-6 left-6 glass-card p-4 rounded-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">CHF 1.995B</div>
                  <div className="text-sm text-white/80">Portfolio Value</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-6 right-6 glass-card p-4 rounded-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">81%</div>
                  <div className="text-sm text-white/80">Residential</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-6 left-6 glass-card p-4 rounded-xl"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">197</div>
                  <div className="text-sm text-white/80">Buildings</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-6 right-6 glass-card p-4 rounded-xl"
                animate={{ x: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">2,976</div>
                  <div className="text-sm text-white/80">Units</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                className="metric-card text-center group"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="text-white" size={20} />
                </motion.div>
                
                <div className="text-3xl font-bold text-[var(--investis-blue-grey)] mb-2">
                  {metric.value}
                </div>
                
                <div className="text-sm text-gray-600 mb-2">
                  {metric.label}
                </div>
                
                <div className="text-xs text-green-600 font-semibold">
                  {metric.change}
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[var(--investis-blue-grey)]/5 to-[var(--investis-warm-beige)]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Portfolio Highlights */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {portfolioHighlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={index}
                className="glass-card p-8 rounded-2xl text-center group"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-[var(--investis-blue-grey)] to-[var(--investis-deep-blue)] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-all duration-300"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="text-white" size={28} />
                </motion.div>

                {/* Stat */}
                <motion.div
                  className="text-4xl font-bold text-[var(--investis-warm-beige)] mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {highlight.stat}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {highlight.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>

                {/* Decorative Element */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 bg-[var(--investis-warm-beige)] rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Background Decorations */}
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-[var(--investis-blue-grey)]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-[var(--investis-warm-beige)]/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.7, 0.3, 0.7]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: 2
          }}
        />
      </div>
    </section>
  );
};

export default PortfolioSection;


