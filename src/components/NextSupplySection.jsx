import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTruck, FiShield, FiTrendingUp } = FiIcons;

const NextSupplySection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const capabilities = [
    {
      icon: FiTruck,
      title: t('nextSupply.network'),
      description: t('nextSupply.networkText')
    },
    {
      icon: FiShield,
      title: t('nextSupply.commitment'),
      description: t('nextSupply.commitmentText')
    },
    {
      icon: FiTrendingUp,
      title: t('nextSupply.expertise'),
      description: t('nextSupply.expertiseText')
    }
  ];

  const achievements = [
    { number: "500+", label: isRTL ? "شريك تجزئة" : "Retail Partners" },
    { number: "27", label: isRTL ? "محافظة مغطاة" : "Governorates" },
    { number: "15+", label: isRTL ? "سنوات خبرة" : "Years Experience" },
    { number: "#1", label: isRTL ? "توزيع القهوة" : "Coffee Distribution" }
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
          <div className={`flex items-center justify-center space-x-6 mb-8 ${isRTL ? 'space-x-reverse' : ''}`}>
            <img 
              src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1759920909971-NEXT%20SUPPLY%20PNG.png" 
              alt="Next Supply Logo" 
              className="w-32 h-32 object-contain"
            />
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <h2 className="text-4xl font-bold text-green-800">
                {t('nextSupply.title')}
              </h2>
              <p className="text-green-600 font-medium text-xl">
                {isRTL ? 'للتجارة والتوزيع' : 'Trading & Distribution'}
              </p>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('nextSupply.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-green-700 to-green-800 rounded-3xl shadow-2xl p-12 mb-16 text-white"
        >
          <p className="text-lg leading-relaxed mb-8 text-center">
            {t('nextSupply.description')}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-amber-300 mb-2">
                  {achievement.number}
                </div>
                <div className="text-green-100 text-sm md:text-base">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-green-100 group"
            >
              <div className="bg-gradient-to-br from-green-600 to-green-700 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <SafeIcon icon={capability.icon} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">
                {capability.title}
              </h3>
              <p className="text-gray-600">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NextSupplySection;

