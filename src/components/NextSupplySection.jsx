import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTruck, FiShield, FiGlobe, FiTrendingUp, FiUsers, FiAward } = FiIcons;

const NextSupplySection = () => {
  const capabilities = [
    {
      icon: FiTruck,
      title: "Nationwide Distribution",
      description: "Comprehensive logistics network covering all Egyptian governorates"
    },
    {
      icon: FiShield,
      title: "Quality Assurance",
      description: "Rigorous quality control and cold-chain management systems"
    },
    {
      icon: FiGlobe,
      title: "Market Reach",
      description: "Strategic partnerships with retailers, cafes, and hospitality sector"
    },
    {
      icon: FiTrendingUp,
      title: "Growth Partnership",
      description: "Supporting Bondeega's expansion across Egypt's coffee market"
    }
  ];

  const achievements = [
    { number: "500+", label: "Retail Partners" },
    { number: "27", label: "Governorates Covered" },
    { number: "15+", label: "Years Experience" },
    { number: "#1", label: "Coffee Distribution" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-6 mb-8">
            <img 
              src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1759920659257-NEXT%20SUPPLY%20JPEG.jpg" 
              alt="Next Supply Logo" 
              className="w-32 h-32 object-contain"
            />
            <div className="text-left">
              <h2 className="text-4xl font-bold text-green-800">NextSupply</h2>
              <p className="text-green-600 font-medium text-xl">Trading & Distribution</p>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The driving force behind Bondeega's success, ensuring premium coffee reaches every Egyptian home
          </p>
        </motion.div>

        {/* Partnership Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-green-800 mb-6">
              A Strategic Partnership Built on Excellence
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              NextSupply Trading & Distribution has been the cornerstone of Bondeega's growth story. 
              With over 15 years of experience in Egypt's food and beverage market, NextSupply brings 
              unmatched expertise in distribution, quality management, and market development.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              This partnership combines Bondeega's artisanal coffee expertise with NextSupply's 
              operational excellence, creating a winning formula that has made Bondeega Egypt's 
              fastest-growing Turkish coffee brand.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((stat, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                  <div className="text-2xl font-bold text-green-800">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Distribution warehouse"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent rounded-2xl" />
            
            {/* Floating Logo */}
            <div className="absolute top-6 right-6 bg-white rounded-full p-4 shadow-xl">
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1759920659257-NEXT%20SUPPLY%20JPEG.jpg" 
                alt="Next Supply Logo" 
                className="w-16 h-16 object-contain"
              />
            </div>
          </motion.div>
        </div>

        {/* Capabilities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-green-800 text-center mb-12">
            NextSupply's Core Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center border border-green-100"
              >
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={capability.icon} className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-green-800 mb-3">{capability.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnership Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Together, We're Transforming Egypt's Coffee Culture</h3>
          <p className="text-green-100 mb-8 max-w-3xl mx-auto">
            The synergy between Bondeega's coffee artistry and NextSupply's distribution mastery 
            has created Egypt's most trusted Turkish coffee experience, available nationwide.
          </p>
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1759845307731-logo%20adjusted.png" 
                alt="Bondeega Logo" 
                className="w-24 h-24 object-contain mx-auto mb-3"
              />
              <p className="text-green-200 text-base">Coffee Excellence</p>
            </div>
            <div className="text-4xl font-bold text-green-300">+</div>
            <div className="text-center">
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1759920659257-NEXT%20SUPPLY%20JPEG.jpg" 
                alt="Next Supply Logo" 
                className="w-24 h-24 object-contain mx-auto mb-3"
              />
              <p className="text-green-200 text-base">Distribution Mastery</p>
            </div>
            <div className="text-4xl font-bold text-green-300">=</div>
            <div className="text-center">
              <SafeIcon icon={FiAward} className="w-24 h-24 text-amber-300 mx-auto mb-3" />
              <p className="text-green-200 text-base">Market Leadership</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NextSupplySection;