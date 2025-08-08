import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Users, Shield, Target, Zap, Recycle } from 'lucide-react';

const SustainabilitySection = ({ data }) => {
  const pillars = [
    {
      title: 'Environmental sustainability',
      description: 'Investis sets clear priorities to reduce the carbon footprint of its property portfolio',
      icon: Leaf,
      color: 'from-green-500 to-emerald-600',
      features: [
        'Energy-efficient renovations',
        'District heating implementation',
        'Sustainable building materials',
        'Carbon footprint reduction'
      ]
    },
    {
      title: 'Social responsibility',
      description: 'Investis ensures its business decisions contribute positively to society',
      icon: Users,
      color: 'from-blue-500 to-cyan-600',
      features: [
        'Tenant engagement programs',
        'Affordable housing initiatives',
        'Community development',
        'Workplace inclusion'
      ]
    },
    {
      title: 'Governance and ethical practices',
      description: 'Investis adheres to governance principles that prioritise transparency and ethical conduct',
      icon: Shield,
      color: 'from-purple-500 to-indigo-600',
      features: [
        'Transparent reporting',
        'Ethical business conduct',
        'Risk management',
        'Stakeholder engagement'
      ]
    }
  ];

  const sustainabilityMetrics = [
    {
      icon: Target,
      label: 'Net Zero Target',
      value: '2050',
      description: 'Carbon neutrality goal'
    },
    {
      icon: Zap,
      label: 'Energy Efficiency',
      value: '15%',
      description: 'Improvement target'
    },
    {
      icon: Recycle,
      label: 'Renovation Rate',
      value: '8%',
      description: 'Annual portfolio upgrade'
    }
  ];

  return (
    <section id="sustainability" className="section-padding bg-gradient-to-br from-white to-green-50 relative overflow-hidden">
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
            className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-green-700 font-semibold text-sm">
              SUSTAINABILITY
            </span>
          </motion.div>
          
          <h2 className="heading-lg mb-4">{data.title}</h2>
          <p className="text-xl text-green-600 font-medium mb-4">
            {data.subtitle}
          </p>
          <p className="body-lg max-w-3xl mx-auto text-gray-600">
            {data.description}
          </p>
        </motion.div>

        {/* Sustainability Metrics */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {sustainabilityMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                className="glass-card p-6 rounded-2xl text-center group"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="text-white" size={20} />
                </motion.div>
                
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {metric.value}
                </div>
                
                <div className="text-sm font-semibold text-gray-800 mb-1">
                  {metric.label}
                </div>
                
                <div className="text-xs text-gray-600">
                  {metric.description}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ESG Pillars */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                className="glass-card p-8 rounded-3xl group relative overflow-hidden"
                whileHover={{ scale: 1.02, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-xl transition-all duration-300`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="text-white" size={28} />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 mb-4 capitalize">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Features List */}
                <div className="space-y-3">
                  {pillar.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 + featureIndex * 0.1 }}
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${pillar.color} rounded-full flex-shrink-0`} />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Floating Particles */}
                <motion.div
                  className={`absolute top-6 right-6 w-3 h-3 bg-gradient-to-r ${pillar.color} rounded-full opacity-0 group-hover:opacity-100`}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />

                <motion.div
                  className={`absolute bottom-6 left-6 w-2 h-2 bg-gradient-to-r ${pillar.color} rounded-full opacity-0 group-hover:opacity-100`}
                  animate={{
                    x: [0, 15, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.7
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div
            className="glass-card p-8 rounded-3xl max-w-4xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Commitment to a Sustainable Future
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Investis is dedicated to creating long-term value while minimizing environmental impact 
              and maximizing positive social outcomes. Our ESG strategy is integrated into every 
              aspect of our business operations.
            </p>
            <motion.button
              className="glass-button px-8 py-4 rounded-2xl text-[var(--investis-blue-grey)] font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Our ESG Initiatives
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Background Decorations */}
        <motion.div
          className="absolute top-20 left-10 w-48 h-48 bg-green-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-10 w-36 h-36 bg-emerald-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: 2
          }}
        />
      </div>
    </section>
  );
};

export default SustainabilitySection;

