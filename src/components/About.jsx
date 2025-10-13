import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiTarget, FiTrendingUp } = FiIcons;

const About = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const values = [
    {
      icon: FiAward,
      title: t('about.quality'),
      description: t('about.qualityText')
    },
    {
      icon: FiTarget,
      title: t('about.authenticity'),
      description: t('about.authenticityText')
    },
    {
      icon: FiTrendingUp,
      title: t('about.innovation'),
      description: t('about.innovationText')
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
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            {t('about.subtitle')}
          </p>
          <div className={`flex items-center justify-center space-x-4 ${isRTL ? 'space-x-reverse' : ''}`}>
            <img 
              src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1759920909971-NEXT%20SUPPLY%20PNG.png" 
              alt="Next Supply Logo" 
              className="w-16 h-16 object-contain"
            />
            <span className="text-green-700 font-medium text-lg">
              {isRTL ? 'بفخر جزء من عائلة نكست سبلاي' : 'Proudly part of the Next Supply family'}
            </span>
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
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80" 
                alt="Turkish Coffee" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-green-700 to-green-800 text-white p-6 rounded-xl shadow-xl">
                <p className="text-3xl font-bold">2017</p>
                <p className="text-sm">{isRTL ? 'منذ' : 'Since'}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-green-800 mb-4">
                {t('about.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('about.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-green-800 mb-2">
                  {t('about.mission')}
                </h4>
                <p className="text-gray-600 text-sm">
                  {t('about.missionText')}
                </p>
              </div>
              <div className="bg-amber-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-amber-800 mb-2">
                  {t('about.vision')}
                </h4>
                <p className="text-gray-600 text-sm">
                  {t('about.visionText')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-green-800 text-center mb-12">
            {t('about.values')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-gradient-to-br from-green-50 to-amber-50 p-8 rounded-2xl shadow-lg text-center group"
              >
                <div className="bg-gradient-to-br from-green-600 to-green-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <SafeIcon icon={value.icon} className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-green-800 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              {t('about.team')}
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('about.teamDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mohsen Tohami - Founder & Managing Director */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-green-50 to-amber-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img
                  src="/MohsenTohamiFounderManagingDirector.jpg"
                  alt="Mohsen Tohami"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h4 className="text-2xl font-bold text-green-800 mb-2">
                  {isRTL ? 'محسن طحامي' : 'Mohsen Tohami'}
                </h4>
                <p className="text-green-600 font-semibold mb-2">
                  {t('about.founderManagingDirector')}
                </p>
                <p className="text-gray-600 text-sm">
                  {t('about.mohsenBio')}
                </p>
              </div>
            </motion.div>

            {/* Ali Taha - Co-Founder & Finance Director */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-green-50 to-amber-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img
                  src="/AliTahaCo-FounderFinanceDirector.png"
                  alt="Ali Taha"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h4 className="text-2xl font-bold text-green-800 mb-2">
                  {isRTL ? 'علي طه' : 'Ali Taha'}
                </h4>
                <p className="text-green-600 font-semibold mb-2">
                  {t('about.coFounderFinanceDirector')}
                </p>
                <p className="text-gray-600 text-sm">
                  {t('about.aliBio')}
                </p>
              </div>
            </motion.div>

            {/* Mohamed Hamza - Co-Founder & Operations Director */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-green-50 to-amber-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img
                  src="/MohamedHamzaCo-FounderOperationsDirector.png"
                  alt="Mohamed Hamza"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h4 className="text-2xl font-bold text-green-800 mb-2">
                  {isRTL ? 'محمد حمزة' : 'Mohamed Hamza'}
                </h4>
                <p className="text-green-600 font-semibold mb-2">
                  {t('about.coFounderOperationsDirector')}
                </p>
                <p className="text-gray-600 text-sm">
                  {t('about.mohamedBio')}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

