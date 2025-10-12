import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiUsers, FiTarget, FiTrendingUp, FiShield, FiGlobe } = FiIcons;

const About = () => {
  const values = [
    {
      icon: FiAward,
      title: "Excellence",
      description: "Commitment to the finest quality in every cup"
    },
    {
      icon: FiUsers,
      title: "Family Heritage",
      description: "Rooted in tradition, inspired by family values"
    },
    {
      icon: FiTarget,
      title: "Authenticity",
      description: "Genuine Turkish coffee crafted with passion"
    },
    {
      icon: FiTrendingUp,
      title: "Innovation",
      description: "Evolving while honoring timeless traditions"
    }
  ];

  const partnershipBenefits = [
    {
      icon: FiShield,
      title: "Quality Assurance",
      description: "NextSupply's rigorous quality control ensures every batch meets premium standards"
    },
    {
      icon: FiGlobe,
      title: "Nationwide Distribution",
      description: "Extensive network guarantees fresh Bondeega coffee reaches every corner of Egypt"
    },
    {
      icon: FiTrendingUp,
      title: "Market Leadership",
      description: "Combined expertise makes Bondeega Egypt's fastest-growing coffee brand"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            About Bondeega
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            A journey from traditional roastery to Egypt's most beloved Turkish coffee brand
          </p>
          <div className="flex items-center justify-center space-x-4">
            <img 
              src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1759920659257-NEXT%20SUPPLY%20JPEG.jpg" 
              alt="Next Supply Logo" 
              className="w-16 h-16 object-contain"
            />
            <span className="text-green-700 font-medium text-lg">Proudly part of the Next Supply family</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-green-800 mb-6">
              Our Heritage & Partnership
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Bondeega (بنديجا) began as a small family roastery with a simple mission: 
              to bring the authentic taste of Turkish coffee to Egyptian homes. What started 
              as a traditional craft has evolved into Egypt's signature coffee brand, trusted 
              by families across the nation.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our strategic partnership with <strong className="text-green-800">Next Supply Trading and Distribution</strong> has 
              been transformative. Together, we've maintained our commitment to artisanal excellence 
              while embracing modern innovation and expanding our reach across Egypt. This synergy 
              combines Bondeega's coffee expertise with Next Supply's distribution excellence.
            </p>
            
            {/* NextSupply Partnership Highlight */}
            <div className="bg-gradient-to-r from-green-50 to-amber-50 p-6 rounded-xl border border-green-100">
              <div className="flex items-center space-x-4 mb-4">
                <img 
                  src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1759920659257-NEXT%20SUPPLY%20JPEG.jpg" 
                  alt="Next Supply Logo" 
                  className="w-24 h-24 object-contain"
                />
                <div>
                  <h4 className="font-bold text-green-800 text-xl">NextSupply Trading & Distribution</h4>
                  <p className="text-green-600 text-base">Premium Food & Beverage Solutions</p>
                </div>
              </div>
              <p className="text-green-700 leading-relaxed text-lg">
                NextSupply's commitment to excellence aligns perfectly with Bondeega's values. 
                Their extensive distribution network, quality assurance systems, and market expertise 
                have enabled us to become Egypt's leading Turkish coffee brand while maintaining 
                our artisanal roots.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="flex justify-center mb-8">
              <div className="relative">
                <img 
                  src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1759845307731-logo%20adjusted.png" 
                  alt="Bondeega Coffee Logo" 
                  className="w-32 h-32 object-contain drop-shadow-2xl"
                />
                <div className="absolute -bottom-3 -right-3 bg-white rounded-full p-3 shadow-lg">
                  <img 
                    src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1759920659257-NEXT%20SUPPLY%20JPEG.jpg" 
                    alt="Next Supply Logo" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Traditional coffee roasting"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-2xl" />
          </motion.div>
        </div>

        {/* Partnership Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-green-800 text-center mb-4">
            The Power of Partnership
          </h3>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our collaboration with NextSupply Trading & Distribution creates unmatched value for coffee lovers across Egypt
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg text-center border border-green-100"
              >
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={benefit.icon} className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-green-800 mb-4">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-green-800 text-center mb-12">
            Our Shared Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-green-50 to-amber-50 p-6 rounded-xl shadow-lg text-center"
              >
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={value.icon} className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-green-800 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Experience the Bondeega Difference</h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Discover why Egyptian families trust Bondeega for authentic Turkish coffee experiences, 
            backed by NextSupply's commitment to excellence.
          </p>
          <div className="flex items-center justify-center space-x-6">
            <img 
              src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1759845307731-logo%20adjusted.png" 
              alt="Bondeega Logo" 
              className="w-20 h-20 object-contain"
            />
            <span className="text-2xl font-bold">×</span>
            <img 
              src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1759920659257-NEXT%20SUPPLY%20JPEG.jpg" 
              alt="Next Supply Logo" 
              className="w-20 h-20 object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;