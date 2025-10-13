import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiPhone, FiMapPin, FiClock, FiMessageCircle } = FiIcons;

const ContactPage = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const phoneNumber = '+201031512020';
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\+/g, '')}`;

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
          <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* WhatsApp and Call Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">
                {t('contact.callUs')}
              </h3>
              
              <div className="space-y-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-6 px-6 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                  >
                    <SafeIcon icon={FiMessageCircle} className="w-6 h-6" />
                    <span className="text-lg">{t('contact.whatsapp')}</span>
                  </motion.button>
                </a>

                <a href={`tel:${phoneNumber}`} className="block">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-green-700 to-green-800 text-white font-semibold py-6 px-6 rounded-xl hover:from-green-800 hover:to-green-900 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                  >
                    <SafeIcon icon={FiPhone} className="w-6 h-6" />
                    <span className="text-lg" dir="ltr">{phoneNumber}</span>
                  </motion.button>
                </a>
              </div>

              <div className="mt-8 p-6 bg-green-50 rounded-xl">
                <p className="text-center text-gray-700">
                  {isRTL 
                    ? 'نحن متاحون للإجابة على جميع استفساراتكم حول قهوة بنديجا وفرص التوزيع.'
                    : 'We are available to answer all your inquiries about Bondeega coffee and distribution opportunities.'
                  }
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-green-50 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                Next Supply Trading & Distribution
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {isRTL 
                  ? 'نكست سبلاي للتجارة والتوزيع هي الموزع الحصري لقهوة بنديجا في مصر. نحن ملتزمون بتقديم أفضل منتجات القهوة وخدمات التوزيع.'
                  : 'Next Supply Trading & Distribution is the exclusive distributor of Bondeega coffee in Egypt. We are committed to providing the best coffee products and distribution services.'
                }
              </p>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-green-700 to-green-800 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">{t('contact.info')}</h3>
              
              <div className="space-y-6">
                <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <SafeIcon icon={FiPhone} className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <h4 className="font-semibold mb-2">{t('distribution.phone')}</h4>
                    <a 
                      href={`tel:${phoneNumber}`}
                      className="text-green-100 hover:text-white transition-colors block" 
                      dir="ltr"
                    >
                      +20 103 151 2020
                    </a>
                  </div>
                </div>

                <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <SafeIcon icon={FiMail} className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <h4 className="font-semibold mb-2">{t('distribution.email')}</h4>
                    <a 
                      href="mailto:info@nextsupplytd.com"
                      className="text-green-100 hover:text-white transition-colors"
                    >
                      info@nextsupplytd.com
                    </a>
                  </div>
                </div>

                <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <SafeIcon icon={FiMapPin} className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <h4 className="font-semibold mb-2">{t('contact.location')}</h4>
                    <p className="text-green-100">
                      {isRTL ? 'القاهرة، مصر' : 'Cairo, Egypt'}
                    </p>
                  </div>
                </div>

                <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <SafeIcon icon={FiClock} className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <h4 className="font-semibold mb-2">{t('contact.hours')}</h4>
                    <p className="text-green-100">{t('contact.hoursText')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1759920909971-NEXT%20SUPPLY%20PNG.png" 
                  alt="Next Supply Logo" 
                  className="w-20 h-20 object-contain"
                />
                <div>
                  <h3 className="text-xl font-bold text-green-800">Next Supply</h3>
                  <p className="text-gray-600">
                    {isRTL ? 'للتجارة والتوزيع' : 'Trading & Distribution'}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-700">500+</div>
                  <div className="text-sm text-gray-600">
                    {isRTL ? 'شريك تجزئة' : 'Retail Partners'}
                  </div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-700">27</div>
                  <div className="text-sm text-gray-600">
                    {isRTL ? 'محافظة' : 'Governorates'}
                  </div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-700">15+</div>
                  <div className="text-sm text-gray-600">
                    {isRTL ? 'سنوات خبرة' : 'Years Experience'}
                  </div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-700">#1</div>
                  <div className="text-sm text-gray-600">
                    {isRTL ? 'توزيع القهوة' : 'Coffee Distribution'}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Interactive Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-green-800 text-center mb-8">
            {t('contact.location')}
          </h3>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative w-full h-[500px]">
              <iframe
                src="https://www.google.com/maps?q=30.302962,31.7521204&hl=en&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Next Supply Trading & Distribution Location"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-6 bg-gradient-to-r from-green-50 to-amber-50">
              <div className={`flex items-center justify-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <SafeIcon icon={FiMapPin} className="w-6 h-6 text-green-700" />
                <p className="text-gray-700 font-medium">
                  {isRTL 
                    ? 'موقع نكست سبلاي للتجارة والتوزيع - القاهرة، مصر'
                    : 'Next Supply Trading & Distribution Location - Cairo, Egypt'
                  }
                </p>
              </div>
              <div className="text-center mt-4">
                <a
                  href="https://www.google.com/maps?q=30.302962,31.7521204"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold py-3 px-8 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {isRTL ? 'افتح في خرائط جوجل' : 'Open in Google Maps'}
                  </motion.button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;

