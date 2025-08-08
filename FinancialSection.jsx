import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, DollarSign, Building, Users } from 'lucide-react';

const FinancialSection = ({ data, financialData }) => {
  const [activeChart, setActiveChart] = useState('revenue');

  const chartData = {
    revenue: [
      { year: '2020', value: 180000, label: 'CHF 180M' },
      { year: '2021', value: 195000, label: 'CHF 195M' },
      { year: '2022', value: 210000, label: 'CHF 210M' },
      { year: '2023', value: 231530, label: 'CHF 232M' },
      { year: '2024', value: 152707, label: 'CHF 153M' }
    ],
    portfolio: financialData.portfolioValue.map(item => ({
      year: item.year.toString(),
      total: item.total,
      geneva: item.geneva,
      label: `CHF ${item.total}M`
    })),
    performance: financialData.sharePerformance.map(item => ({
      date: new Date(item.date).toLocaleDateString('en-US', { month: 'short' }),
      investis: item.investis,
      spi: item.spi,
      reAllShares: item.reAllShares
    })),
    breakdown: [
      { name: 'Residential Properties', value: 81, color: '#6B8CAE' },
      { name: 'Commercial Properties', value: 19, color: '#C4A882' }
    ]
  };

  const chartTabs = [
    { id: 'revenue', label: 'Revenue', icon: DollarSign },
    { id: 'portfolio', label: 'Portfolio Value', icon: Building },
    { id: 'performance', label: 'Share Performance', icon: TrendingUp },
    { id: 'breakdown', label: 'Portfolio Mix', icon: Users }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-card p-4 rounded-xl border border-white/20">
          <p className="font-semibold text-gray-800">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const renderChart = () => {
    switch (activeChart) {
      case 'revenue':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={chartData.revenue}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(107, 140, 174, 0.2)" />
              <XAxis dataKey="year" stroke="#6B8CAE" />
              <YAxis stroke="#6B8CAE" />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#6B8CAE" 
                strokeWidth={3}
                dot={{ fill: '#6B8CAE', strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, fill: '#C4A882' }}
              />
            </LineChart>
          </ResponsiveContainer>
        );
      
      case 'portfolio':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData.portfolio}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(107, 140, 174, 0.2)" />
              <XAxis dataKey="year" stroke="#6B8CAE" />
              <YAxis stroke="#6B8CAE" />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="total" fill="#6B8CAE" radius={[4, 4, 0, 0]} />
              <Bar dataKey="geneva" fill="#C4A882" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );
      
      case 'performance':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={chartData.performance}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(107, 140, 174, 0.2)" />
              <XAxis dataKey="date" stroke="#6B8CAE" />
              <YAxis stroke="#6B8CAE" />
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="investis" stroke="#6B8CAE" strokeWidth={3} name="Investis" />
              <Line type="monotone" dataKey="spi" stroke="#C4A882" strokeWidth={2} name="SPI" />
              <Line type="monotone" dataKey="reAllShares" stroke="#8FA4C2" strokeWidth={2} name="RE All Shares" />
            </LineChart>
          </ResponsiveContainer>
        );
      
      case 'breakdown':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={chartData.breakdown}
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {chartData.breakdown.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        );
      
      default:
        return null;
    }
  };

  return (
    <section id="financial-performance" className="section-padding bg-gradient-to-br from-white to-slate-50">
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
              FINANCIAL PERFORMANCE
            </span>
          </motion.div>
          
          <h2 className="heading-lg mb-4">{data.title}</h2>
          <p className="body-lg max-w-3xl mx-auto text-gray-600">
            {data.description}
          </p>
        </motion.div>

        {/* Chart Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {chartTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveChart(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeChart === tab.id
                    ? 'bg-[var(--investis-blue-grey)] text-white shadow-lg'
                    : 'glass-card text-gray-700 hover:bg-white/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={18} />
                <span className="font-medium">{tab.label}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Chart Container */}
        <motion.div
          className="chart-container mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeChart}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderChart()}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Key Metrics Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            {
              label: 'Total Assets',
              value: 'CHF 2.08B',
              change: '+29.2%',
              trend: 'up',
              icon: Building
            },
            {
              label: 'Net Profit',
              value: 'CHF 246.5M',
              change: '+4,663%',
              trend: 'up',
              icon: TrendingUp
            },
            {
              label: 'Equity Ratio',
              value: '64.4%',
              change: '+0.5pp',
              trend: 'up',
              icon: DollarSign
            },
            {
              label: 'Dividend Yield',
              value: '2.3%',
              change: '-0.3pp',
              trend: 'down',
              icon: Users
            }
          ].map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                className="metric-card text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--investis-blue-grey)] to-[var(--investis-deep-blue)] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-white" size={20} />
                </div>
                
                <div className="text-2xl font-bold text-[var(--investis-blue-grey)] mb-1">
                  {metric.value}
                </div>
                
                <div className="text-sm text-gray-600 mb-2">
                  {metric.label}
                </div>
                
                <div className={`text-xs font-semibold ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-500'
                }`}>
                  {metric.change}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FinancialSection;

