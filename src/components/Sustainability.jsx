import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiLeaf, FiRecycle, FiGlobe, FiHeart, FiShield, FiTrendingUp } = FiIcons;

const Sustainability = () => {
  const initiatives = [
    {
      icon: FiLeaf,
      title: "Eco-Friendly Packaging",
      description: "Biodegradable and recyclable materials for all our coffee packaging",
      color: "from-green-500 to-green-600"
    },
    {
      icon: FiGlobe,
      title: "Responsible Sourcing",
      description: "Direct partnerships with coffee farmers ensuring fair trade practices",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FiRecycle,
      title: "Zero Waste Initiative",
      description: "Minimizing waste through efficient production and recycling programs",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: FiHeart,
      title: "Community Support",
      description: "Supporting local Egyptian communities and coffee farming cooperatives",
      color: "from-red-500 to-red-600"
    }
  ];

  const innovations = [
    {
      icon: FiShield,
      title: "Quality Preservation",
      description: "Advanced packaging technology maintains freshness while reducing environmental impact"
    },
    {
      icon: FiTrendingUp,
      title: "Continuous Improvement",
      description: "Ongoing research into sustainable coffee production and distribution methods"
    },
    {
      icon: FiGlobe,
      title: "Carbon Footprint Reduction",
      description: "Optimized supply chain and local sourcing to minimize transportation emissions"
    }
  ];

  return (
    <section id="sustainability" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Sustainability & Innovation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to environmental responsibility and continuous innovation 
            in coffee production and packaging
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${initiative.color} p-6 text-white text-center`}>
                <SafeIcon icon={initiative.icon} className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold">{initiative.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">{initiative.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-green-800 mb-6">
                Innovation in Every Cup
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Bondeega continuously evolves our processes to ensure that every cup 
                of coffee not only tastes exceptional but also contributes to a 
                sustainable future for coffee culture in Egypt and beyond.
              </p>
            </div>

            <div className="space-y-6">
              {innovations.map((innovation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                    <SafeIcon icon={innovation.icon} className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-green-800 mb-2">
                      {innovation.title}
                    </h4>
                    <p className="text-gray-600">{innovation.description}</p>
                  </div>
                </motion.div>
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
            <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Our Commitment</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiLeaf} className="w-6 h-6 text-green-200" />
                  <span>100% Recyclable Packaging by 2025</span>
                </div>
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiGlobe} className="w-6 h-6 text-green-200" />
                  <span>Supporting 50+ Local Farmers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiHeart} className="w-6 h-6 text-green-200" />
                  <span>Carbon Neutral Operations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiTrendingUp} className="w-6 h-6 text-green-200" />
                  <span>Continuous Innovation</span>
                </div>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2013&q=80"
              alt="Sustainable coffee farming"
              className="rounded-2xl shadow-2xl w-full h-64 object-cover mt-8"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;