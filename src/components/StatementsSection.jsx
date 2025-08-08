import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, Eye, BarChart3, TrendingUp } from 'lucide-react';

const StatementsSection = ({ data }) => {
  const [activeStatement, setActiveStatement] = useState('income');

  const statements = [
    {
      id: 'income',
      title: 'Income Statement',
      icon: BarChart3,
      description: 'Revenue, expenses, and profitability overview',
      image: '097.webp'
    },
    {
      id: 'balance',
      title: 'Balance Sheet',
      icon: FileText,
      description: 'Assets, liabilities, and equity position',
      image: '098.webp'
    },
    {
      id: 'cashflow',
      title: 'Cash Flow Statement',
      icon: TrendingUp,
      description: 'Operating, investing, and financing activities',
      image: '099.webp'
    }
  ];

  const keyFinancialData = {
    income: [
      { label: 'Revenue', value: 'CHF 152.7M', change: '-34.0%' },
      { label: 'Operating Profit (EBIT)', value: 'CHF 274.5M', change: '+18,570%' },
      { label: 'Net Profit', value: 'CHF 246.5M', change: '+4,663%' },
      { label: 'Earnings per Share', value: 'CHF 19.32', change: '+4,700%' }
    ],
    balance: [
      { label: 'Total Assets', value: 'CHF 2.08B', change: '+29.2%' },
      { label: 'Property Portfolio', value: 'CHF 1.995B', change: '+31.4%' },
      { label: "Shareholders' Equity", value: 'CHF 1.34B', change: '+30.1%' },
      { label: 'Equity Ratio', value: '64.4%', change: '+0.5pp' }
    ],
    cashflow: [
      { label: 'Operating Cash Flow', value: 'CHF 55.5M', change: '+9.8%' },
      { label: 'Investing Cash Flow', value: 'CHF -173.4M', change: '+86.1%' },
      { label: 'Financing Cash Flow', value: 'CHF 116.1M', change: '+172.0%' },
      { label: 'Net Cash Change', value: 'CHF -1.8M', change: '-1,118%' }
    ]
  };

  return (
    <section id="financial-statements" className="section-padding bg-gradient-to-br from-white to-slate-50">
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
              FINANCIAL STATEMENTS
            </span>
          </motion.div>
          
          <h2 className="heading-lg mb-4">{data.title}</h2>
          <p className="body-lg max-w-3xl mx-auto text-gray-600">
            {data.description}
          </p>
        </motion.div>

        {/* Statement Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {statements.map((statement) => {
            const Icon = statement.icon;
            return (
              <motion.button
                key={statement.id}
                onClick={() => setActiveStatement(statement.id)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                  activeStatement === statement.id
                    ? 'bg-[var(--investis-blue-grey)] text-white shadow-lg'
                    : 'glass-card text-gray-700 hover:bg-white/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={20} />
                <div className="text-left">
                  <div className="font-semibold">{statement.title}</div>
                  <div className="text-xs opacity-80">{statement.description}</div>
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Statement Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Statement Visual */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStatement}
                className="glass-card p-6 rounded-3xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <div className="w-full h-80 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <div className="text-xl font-semibold mb-2">
                        {statements.find(s => s.id === activeStatement)?.title}
                      </div>
                      <div className="text-sm">Preview unavailable</div>
                    </div>
                  </div>
                  
                  {/* Overlay Actions */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <motion.button
                      className="glass-button p-3 rounded-xl"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Eye size={16} className="text-[var(--investis-blue-grey)]" />
                    </motion.button>
                    <motion.button
                      className="glass-button p-3 rounded-xl"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Download size={16} className="text-[var(--investis-blue-grey)]" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {statements.find(s => s.id === activeStatement)?.title}
                </h3>
                <p className="text-gray-600">
                  {statements.find(s => s.id === activeStatement)?.description}
                </p>
              </div>

              {/* Key Metrics Cards */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStatement}
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {keyFinancialData[activeStatement]?.map((metric, index) => (
                    <motion.div
                      key={index}
                      className="glass-card p-4 rounded-xl flex items-center justify-between group"
                      whileHover={{ scale: 1.02, x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div>
                        <div className="font-semibold text-gray-800">{metric.label}</div>
                        <div className="text-2xl font-bold text-[var(--investis-blue-grey)]">
                          {metric.value}
                        </div>
                      </div>
                      <div className={`text-sm font-semibold px-3 py-1 rounded-full ${
                        metric.change.startsWith('+') 
                          ? 'bg-green-100 text-green-700' 
                          : metric.change.startsWith('-')
                          ? 'bg-red-100 text-red-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {metric.change}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Download Actions */}
              <motion.div
                className="pt-6 space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.button
                  className="w-full glass-button p-4 rounded-xl flex items-center justify-center space-x-3 text-[var(--investis-blue-grey)] font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={20} />
                  <span>Download Full Annual Report (PDF)</span>
                </motion.button>
                
                <motion.button
                  className="w-full glass-button p-4 rounded-xl flex items-center justify-center space-x-3 text-[var(--investis-blue-grey)] font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FileText size={20} />
                  <span>Export Financial Data (Excel)</span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            {
              title: 'Auditor Report',
              description: "Independent auditor's report by KPMG AG",
              icon: FileText,
              action: 'View Report'
            },
            {
              title: 'Valuation Expert',
              description: 'Independent property valuation by CBRE',
              icon: BarChart3,
              action: 'View Valuation'
            },
            {
              title: '5-Year Review',
              description: 'Historical financial performance overview',
              icon: TrendingUp,
              action: 'View History'
            }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="glass-card p-6 rounded-2xl text-center group"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-[var(--investis-blue-grey)] to-[var(--investis-deep-blue)] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="text-white" size={20} />
                </motion.div>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4">
                  {item.description}
                </p>
                
                <motion.button
                  className="text-[var(--investis-blue-grey)] font-semibold text-sm hover:underline"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.action}
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default StatementsSection;


