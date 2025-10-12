import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiShoppingBag, FiTruck, FiPhone, FiGlobe, FiStar } = FiIcons;

const Distribution = () => {
  const regions = [
    {
      name: "Greater Cairo",
      nameAr: "القاهرة الكبرى",
      cities: ["Cairo", "Giza", "Qalyubia"],
      stores: 150,
      color: "from-green-500 to-green-600"
    },
    {
      name: "Alexandria",
      nameAr: "الإسكندرية",
      cities: ["Alexandria", "Beheira", "Matrouh"],
      stores: 85,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Delta Region",
      nameAr: "منطقة الدلتا",
      cities: ["Dakahlia", "Gharbia", "Kafr El Sheikh", "Damietta"],
      stores: 120,
      color: "from-amber-500 to-amber-600"
    },
    {
      name: "Upper Egypt",
      nameAr: "صعيد مصر",
      cities: ["Assiut", "Sohag", "Luxor", "Aswan"],
      stores: 95,
      color: "from-red-500 to-red-600"
    },
    {
      name: "Canal Cities",
      nameAr: "مدن القناة",
      cities: ["Suez", "Ismailia", "Port Said"],
      stores: 45,
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Red Sea",
      nameAr: "البحر الأحمر",
      cities: ["Hurghada", "Marsa Alam", "Safaga"],
      stores: 25,
      color: "from-teal-500 to-teal-600"
    }
  ];

  const storeTypes = [
    {
      icon: FiShoppingBag,
      title: "Supermarkets",
      description: "Major chains including Carrefour, Spinneys, and Metro",
      count: "200+ locations"
    },
    {
      icon: FiStar,
      title: "Premium Stores",
      description: "Specialty coffee shops and gourmet food stores",
      count: "150+ locations"
    },
    {
      icon: FiTruck,
      title: "Distributors",
      description: "Authorized Next Supply distribution partners",
      count: "50+ partners"
    },
    {
      icon: FiGlobe,
      title: "Online Platforms",
      description: "E-commerce websites and delivery apps",
      count: "10+ platforms"
    }
  ];

  const contactInfo = {
    phone: "+20 2 1234 5678",
    email: "info@nextsupply.com.eg",
    address: "Cairo, Egypt"
  };

  return (
    <section id="distribution" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Find Bondeega Near You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Available across Egypt through our extensive distribution network powered by Next Supply
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {regions.map((region, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${region.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <SafeIcon icon={FiMapPin} className="w-8 h-8" />
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                    {region.stores} stores
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{region.name}</h3>
                <p className="text-sm opacity-90 font-amiri">{region.nameAr}</p>
              </div>

              <div className="p-6">
                <h4 className="font-semibold text-green-800 mb-3">Available in:</h4>
                <div className="flex flex-wrap gap-2">
                  {region.cities.map((city, cityIndex) => (
                    <span
                      key={cityIndex}
                      className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-green-800 text-center mb-12">
            Where to Buy Bondeega
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {storeTypes.map((type, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-amber-50 to-green-50 p-6 rounded-xl shadow-lg text-center"
              >
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={type.icon} className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-green-800 mb-2">{type.title}</h4>
                <p className="text-gray-600 mb-3">{type.description}</p>
                <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-semibold">
                  {type.count}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-6">Become a Retailer</h3>
            <p className="text-green-100 mb-6 leading-relaxed">
              Join our growing network of Bondeega retailers across Egypt. 
              Partner with Next Supply Trading & Distribution to bring authentic 
              Turkish coffee to your customers.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-green-200" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-green-200" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold mt-6 hover:bg-green-50 transition-colors"
            >
              Contact Us Today
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                Distribution Statistics
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Total Retail Locations</span>
                  <span className="font-bold text-green-800">520+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Egyptian Governorates</span>
                  <span className="font-bold text-green-800">27</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Distribution Partners</span>
                  <span className="font-bold text-green-800">50+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Daily Deliveries</span>
                  <span className="font-bold text-green-800">1,000+</span>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 p-6 rounded-xl">
              <h4 className="font-bold text-green-800 mb-3">Next Supply Advantage</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <SafeIcon icon={FiTruck} className="w-4 h-4 text-green-600" />
                  <span>Nationwide logistics network</span>
                </li>
                <li className="flex items-center space-x-2">
                  <SafeIcon icon={FiStar} className="w-4 h-4 text-green-600" />
                  <span>Quality assurance guarantee</span>
                </li>
                <li className="flex items-center space-x-2">
                  <SafeIcon icon={FiPhone} className="w-4 h-4 text-green-600" />
                  <span>24/7 customer support</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Distribution;