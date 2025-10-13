import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCoffee, FiHeart } = FiIcons;

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-amber-900 opacity-90" />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2061&q=80")'
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center mb-6"
            >
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1759845307731-logo%20adjusted.png" 
                alt="Bondeega Coffee Logo" 
                className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-2xl"
              />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-white"
            >
              {t('hero.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl md:text-4xl font-amiri text-amber-200"
            >
              {isRTL ? 'بنديجا' : t('hero.subtitle')}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-green-100 italic"
            >
              {t('hero.tagline')}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="space-y-6"
          >
            <p className="text-lg text-green-100 max-w-2xl mx-auto leading-relaxed">
              {t('hero.description')}
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl flex items-center space-x-2 ${isRTL ? 'space-x-reverse' : ''}`}
                >
                  <SafeIcon icon={FiCoffee} className="w-5 h-5" />
                  <span>{t('hero.cta')}</span>
                </motion.button>
              </Link>
              
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 transition-all duration-300 ${isRTL ? 'space-x-reverse' : ''}`}
                >
                  <SafeIcon icon={FiHeart} className="w-5 h-5" />
                  <span>{t('hero.learnMore')}</span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-white"
        >
          {[
            { title: isRTL ? "أرابيكا فاخرة" : "Premium Arabica", subtitle: isRTL ? "أفضل حبوب القهوة" : "Finest Quality Beans" },
            { title: isRTL ? "تحميص تقليدي" : "Traditional Roasting", subtitle: isRTL ? "تميز حرفي" : "Artisanal Excellence" },
            { title: isRTL ? "تراث مصري" : "Egyptian Heritage", subtitle: isRTL ? "صنع بفخر" : "Made with Pride" }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center space-y-2"
            >
              <h3 className="text-xl font-bold text-amber-200">{item.title}</h3>
              <p className="text-green-100">{item.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

