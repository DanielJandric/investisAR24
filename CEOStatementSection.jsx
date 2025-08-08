import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const CEOStatementSection = ({ data }) => {
  return (
    <section id="ceo-statement" className="section-padding bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Quote Side */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Section Label */}
            <motion.div
              className="inline-block px-4 py-2 bg-[var(--investis-blue-grey)]/10 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-[var(--investis-blue-grey)] font-semibold text-sm">
                CEO STATEMENT
              </span>
            </motion.div>

            {/* Quote Container */}
            <motion.div
              className="glass-card p-8 rounded-3xl relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Quote Icon */}
              <motion.div
                className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[var(--investis-blue-grey)] to-[var(--investis-deep-blue)] rounded-full flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Quote className="text-white" size={20} />
              </motion.div>

              {/* Quote Text */}
              <motion.blockquote
                className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6 italic"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                "{data.quote}"
              </motion.blockquote>

              {/* Author Info */}
              <motion.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--investis-warm-beige)] to-[var(--investis-light-beige)] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {data.author.split(' ').map(name => name[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{data.author}</div>
                  <div className="text-sm text-gray-600">{data.position}</div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-[var(--investis-warm-beige)]/10 to-[var(--investis-light-beige)]/10 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity
                }}
              />
            </motion.div>

            {/* Additional Quote Points */}
            <motion.div
              className="mt-8 space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {[
                "Strategic expansion of property portfolio worth CHF 370+ million",
                "Successful divestment of Real Estate Services segment",
                "Strong balance sheet with conservative 27.6% LTV ratio"
              ].map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3 p-4 glass-card rounded-xl"
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-2 h-2 bg-[var(--investis-blue-grey)] rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">{point}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Main Image Container */}
              <div className="glass-card p-6 rounded-3xl">
                <div
                  className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center"
                >
                  <div className="text-center text-gray-600">
                    <div className="w-16 h-16 bg-[var(--investis-blue-grey)] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-2xl">SB</span>
                    </div>
                    <p className="font-semibold">Stéphane Bonvin</p>
                    <p className="text-sm">CEO & Board Member</p>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <motion.div
                className="absolute -top-6 -right-6 glass-card p-4 rounded-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--investis-blue-grey)]">111%</div>
                  <div className="text-xs text-gray-600">Growth since IPO</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 glass-card p-4 rounded-2xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--investis-warm-beige)]">CHF 2.6</div>
                  <div className="text-xs text-gray-600">Dividend per share</div>
                </div>
              </motion.div>

              {/* Background Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[var(--investis-blue-grey)]/10 to-[var(--investis-warm-beige)]/10 rounded-3xl blur-2xl -z-10"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorations */}
      <motion.div
        className="absolute top-1/4 left-0 w-64 h-64 bg-[var(--investis-blue-grey)]/5 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-0 w-48 h-48 bg-[var(--investis-warm-beige)]/5 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 20, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          delay: 2
        }}
      />
    </section>
  );
};

export default CEOStatementSection;

