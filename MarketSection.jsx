import React from 'react';
import { motion } from 'framer-motion';
import { Globe, TrendingUp, MapPin, Users, Building, Target } from 'lucide-react';

const MarketSection = ({ data }) => {
  const marketInsights = [
    {
      icon: Globe,
      title: 'International Appeal',
      description: 'Geneva\'s global status drives consistent demand for quality housing',
      stat: 'Stable',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Building,
      title: 'Limited Supply',
      description: 'Scarce building land and strict regulations constrain new construction',
      stat: 'Constrained',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Strong Demand',
      description: 'Young professionals and students drive demand for compact housing',
      stat: 'High',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: TrendingUp,
      title: 'Rental Growth',
      description: 'Steady rent increases due to supply-demand imbalance',
      stat: '+3.4%',
      color: 'from-purple-500 to-indigo-600'
    }
  ];

  const locationFactors = [
    {
      title: 'Transport Hubs',
      description: 'Properties near train stations and city centers command premium rents',
      icon: MapPin
    },
    {
      title: 'Educational Facilities',
      description: 'Proximity to schools and universities increases rental demand',
      icon: Building
    },
    {
      title: 'Employment Centers',
      description: 'Access to international organizations and business districts',
      icon: Users
    },
    {
      title: 'Quality of Life',
      description: 'Healthcare, culture, and leisure amenities enhance property values',
      icon: Target
    }
  ];

  return (
    <section id="market-overview" className="section-padding bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
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
              MARKET OVERVIEW
            </span>
          </motion.div>
          
          <h2 className="heading-lg mb-4">{data.title}</h2>
          <p className="body-lg max-w-3xl mx-auto text-gray-600">
            {data.description}
          </p>
        </motion.div>

        {/* Market Image with Overlay */}
        <motion.div
          className="relative mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass-card p-6 rounded-3xl">
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <img
                src="/src/assets/018.webp"
                alt="Lake Geneva Market"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--investis-blue-grey)]/80 to-transparent" />
              
              {/* Market Stats Overlay */}
              <div className="absolute inset-0 flex items-center">
                <div className="p-8 text-white max-w-lg">
                  <h3 className="text-3xl font-bold mb-4">Lake Geneva Region</h3>
                  <p className="text-lg mb-6 text-white/90">
                    Dynamic market driven by economic, demographic and regulatory factors
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass-card p-4 rounded-xl">
                      <div className="text-2xl font-bold">94%</div>
                      <div className="text-sm">Portfolio Focus</div>
                    </div>
                    <div className="glass-card p-4 rounded-xl">
                      <div className="text-2xl font-bold">Low</div>
                      <div className="text-sm">Vacancy Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Market Insights Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {marketInsights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <motion.div
                key={index}
                className="glass-card p-6 rounded-2xl text-center group"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`w-12 h-12 bg-gradient-to-br ${insight.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="text-white" size={20} />
                </motion.div>
                
                <div className="text-2xl font-bold text-[var(--investis-blue-grey)] mb-2">
                  {insight.stat}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {insight.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {insight.description}
                </p>

                {/* Hover Glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${insight.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Key Points Section */}
        <motion.div
          className="glass-card p-8 rounded-3xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Market Dynamics
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.keyPoints.map((point, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="w-3 h-3 bg-[var(--investis-blue-grey)] rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Location Factors */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {locationFactors.map((factor, index) => {
            const Icon = factor.icon;
            return (
              <motion.div
                key={index}
                className="glass-card p-6 rounded-2xl group"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-[var(--investis-warm-beige)] to-[var(--investis-light-beige)] rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="text-white" size={20} />
                </motion.div>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {factor.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {factor.description}
                </p>

                {/* Floating Element */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-[var(--investis-warm-beige)] rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0, 1, 0]
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
          className="absolute top-20 right-10 w-40 h-40 bg-[var(--investis-blue-grey)]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 7,
            repeat: Infinity
          }}
        />
        
        <motion.div
          className="absolute bottom-20 left-10 w-32 h-32 bg-[var(--investis-warm-beige)]/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.7, 0.3, 0.7]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: 1.5
          }}
        />
      </div>
    </section>
  );
};

export default MarketSection;

