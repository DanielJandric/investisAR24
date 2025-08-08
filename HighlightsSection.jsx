import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Building, DollarSign, Target, Award, Shield } from 'lucide-react';

const iconMap = {
  'Portfolio Value': DollarSign,
  'Residential Share': Building,
  'Rental Growth': TrendingUp,
  'Revaluation Gains': Award,
  'Net Profit': Target,
  'LTV Ratio': Shield
};

const HighlightsSection = ({ data, financialData }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="key-highlights" className="section-padding bg-gradient-to-br from-white to-slate-50">
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
              2024 PERFORMANCE
            </span>
          </motion.div>
          
          <h2 className="heading-lg mb-4">{data.title}</h2>
          <p className="body-lg max-w-3xl mx-auto text-gray-600">
            {data.description}
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {data.items.map((item, index) => {
            const Icon = iconMap[item.title] || TrendingUp;
            
            return (
              <motion.div
                key={index}
                className="metric-card group cursor-pointer"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                {/* Icon */}
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-[var(--investis-blue-grey)] to-[var(--investis-deep-blue)] rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="text-white" size={24} />
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>

                {/* Value */}
                <motion.div
                  className="text-3xl font-bold text-[var(--investis-blue-grey)] mb-3"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.value}
                </motion.div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[var(--investis-blue-grey)]/5 to-[var(--investis-warm-beige)]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                {/* Floating Particles */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-[var(--investis-warm-beige)] rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Stats Row */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { label: 'Total Assets', value: 'CHF 2.08B', change: '+29.2%' },
            { label: 'Equity Ratio', value: '64.4%', change: '+0.5pp' },
            { label: 'Buildings', value: '197', change: '+45' },
            { label: 'Residential Units', value: '2,976', change: '+499' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 glass-card rounded-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl font-bold text-[var(--investis-blue-grey)] mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
              <div className="text-xs text-green-600 font-semibold">
                {stat.change}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Background Decorations */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-[var(--investis-blue-grey)]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-[var(--investis-warm-beige)]/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: 1
          }}
        />
      </div>
    </section>
  );
};

export default HighlightsSection;

