import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin, FiHeart, FiFacebook, FiInstagram, FiTwitter } = FiIcons;

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const footerLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.products'), path: '/products' },
    { name: t('nav.distribution'), path: '/distribution' },
    { name: t('nav.contact'), path: '/contact' }
  ];

  return (
    <footer className="bg-gradient-to-b from-green-800 to-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className={`flex items-center space-x-3 mb-4 ${isRTL ? 'space-x-reverse' : ''}`}>
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1759845307731-logo%20adjusted.png" 
                alt="Bondeega Coffee Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold">Bondeega</h3>
                <p className="text-green-200 font-amiri">بنديجا</p>
              </div>
            </div>
            
            <p className="text-green-100 leading-relaxed max-w-md">
              {t('footer.aboutText')}
            </p>

            <div className="space-y-3">
              <div className={`flex items-center space-x-3 ${isRTL ? 'space-x-reverse' : ''}`}>
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-green-300" />
                <span className="text-green-100" dir="ltr">+20 103 151 2020</span>
              </div>
              <div className={`flex items-center space-x-3 ${isRTL ? 'space-x-reverse' : ''}`}>
                <SafeIcon icon={FiMail} className="w-5 h-5 text-green-300" />
                <span className="text-green-100">info@nextsupplytd.com</span>
              </div>
              <div className={`flex items-center space-x-3 ${isRTL ? 'space-x-reverse' : ''}`}>
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-green-300" />
                <span className="text-green-100">{t('distribution.addressText')}</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1759920909971-NEXT%20SUPPLY%20PNG.png" 
                alt="Next Supply Logo" 
                className="w-16 h-16 object-contain"
              />
              <div>
                <p className="text-sm text-green-200">
                  {isRTL ? 'بفخر جزء من' : 'Proudly part of'}
                </p>
                <p className="font-semibold text-white">
                  {isRTL ? 'نكست سبلاي للتجارة والتوزيع' : 'Next Supply Trading & Distribution'}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-green-200 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-4">{t('footer.followUs')}</h4>
            <div className={`flex space-x-4 ${isRTL ? 'space-x-reverse' : ''}`}>
              <a
                href="https://www.facebook.com/profile.php?id=61581742165961"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-700 hover:bg-green-600 p-3 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <SafeIcon icon={FiFacebook} className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/nextsupplytd/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-700 hover:bg-green-600 p-3 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <SafeIcon icon={FiInstagram} className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-green-200 text-sm text-center md:text-left">
              {t('footer.copyright')}
            </p>
            <div className={`flex items-center space-x-2 text-green-200 text-sm ${isRTL ? 'space-x-reverse' : ''}`}>
              <span>{isRTL ? 'صنع بـ' : 'Made with'}</span>
              <SafeIcon icon={FiHeart} className="w-4 h-4 text-red-400" />
              <span>{isRTL ? 'في مصر' : 'in Egypt'}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

