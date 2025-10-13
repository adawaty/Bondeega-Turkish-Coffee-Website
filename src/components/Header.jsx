import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX, FiGlobe } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [isRTL, i18n.language]);

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.products'), path: '/products' },
    { name: t('nav.distribution'), path: '/distribution' },
    { name: t('nav.contact'), path: '/contact' }
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bondeega Brand Bar - Now Secondary */}
        <div className="border-b border-green-100 py-2">
          <div className={`flex items-center justify-center space-x-3 text-sm ${isRTL ? 'space-x-reverse' : ''}`}>
            <img 
              src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1759845307731-logo%20adjusted.png" 
              alt="Bondeega Coffee Logo" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-green-700 font-medium">
              {isRTL ? 'بنديجا' : 'Bondeega Coffee'}
            </span>
            <span className="text-green-500">•</span>
            <span className="text-gray-600">
              {isRTL ? 'قهوة تركية فاخرة' : 'Premium Turkish Coffee Brand'}
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center py-4">
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`flex items-center space-x-4 cursor-pointer ${isRTL ? 'space-x-reverse' : ''}`}
            >
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1759920909971-NEXT%20SUPPLY%20PNG.png" 
                alt="Next Supply Trading & Distribution Logo" 
                className="w-16 h-16 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-green-800">
                  {isRTL ? 'نكست سبلاي' : 'Next Supply'}
                </h1>
                <p className="text-sm text-green-600 font-medium">
                  {isRTL ? 'للتجارة والتوزيع' : 'Trading & Distribution'}
                </p>
              </div>
              <div className={`hidden lg:block ml-4 pl-4 border-l border-green-200 ${isRTL ? 'ml-0 mr-4 pl-0 pr-4 border-l-0 border-r' : ''}`}>
                <p className="text-xs text-green-600 font-medium">
                  {isRTL ? 'حلول الأغذية والمشروبات الفاخرة' : 'Premium Food & Beverage Solutions'}
                </p>
                <p className="text-xs text-gray-500">
                  {isRTL ? 'شبكة توزيع على مستوى الدولة' : 'Nationwide Distribution Network'}
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center space-x-6 ${isRTL ? 'space-x-reverse' : ''}`}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-green-700 hover:text-green-900 font-medium transition-colors ${
                  location.pathname === item.path ? 'border-b-2 border-green-700' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-2 text-green-700 hover:text-green-900 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-green-50"
              >
                <SafeIcon icon={FiGlobe} className="w-5 h-5" />
                <span className="text-sm">{i18n.language === 'ar' ? 'عربي' : 'EN'}</span>
              </button>
              
              {isLangMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl border border-green-100 overflow-hidden"
                >
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`block w-full text-left px-4 py-3 hover:bg-green-50 transition-colors ${
                      i18n.language === 'en' ? 'bg-green-100 text-green-800 font-semibold' : 'text-gray-700'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => changeLanguage('ar')}
                    className={`block w-full text-left px-4 py-3 hover:bg-green-50 transition-colors ${
                      i18n.language === 'ar' ? 'bg-green-100 text-green-800 font-semibold' : 'text-gray-700'
                    }`}
                  >
                    العربية
                  </button>
                </motion.div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-green-700"
          >
            <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 space-y-2"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-green-700 hover:text-green-900 font-medium ${
                  location.pathname === item.path ? 'border-l-4 border-green-700 pl-3' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Language Switcher */}
            <div className="pt-4 border-t border-green-100">
              <p className="text-sm text-gray-500 mb-2">{isRTL ? 'اللغة' : 'Language'}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => changeLanguage('en')}
                  className={`flex-1 px-4 py-2 rounded-lg transition-colors ${
                    i18n.language === 'en' ? 'bg-green-700 text-white' : 'bg-green-100 text-green-700'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage('ar')}
                  className={`flex-1 px-4 py-2 rounded-lg transition-colors ${
                    i18n.language === 'ar' ? 'bg-green-700 text-white' : 'bg-green-100 text-green-700'
                  }`}
                >
                  العربية
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;

