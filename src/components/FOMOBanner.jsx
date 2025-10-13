import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX, FiTrendingUp, FiUsers, FiClock } = FiIcons;

const FOMOBanner = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [isVisible, setIsVisible] = useState(true);
  const [viewers, setViewers] = useState(Math.floor(Math.random() * 20) + 15);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers(prev => {
        const change = Math.floor(Math.random() * 5) - 2;
        return Math.max(10, Math.min(40, prev + change));
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const phoneNumber = '+201031512020';
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\+/g, '')}?text=${encodeURIComponent(t('fomo.whatsappMessage'))}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-6 right-6 left-6 md:left-auto md:w-96 z-50"
        >
          <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 rounded-2xl shadow-2xl p-6 text-white relative overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-3 right-3 text-white/80 hover:text-white transition-colors"
              aria-label="Close"
            >
              <SafeIcon icon={FiX} className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="relative space-y-4">
              {/* Header with Icon */}
              <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="bg-white/20 p-2 rounded-lg animate-bounce">
                  <SafeIcon icon={FiTrendingUp} className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">{t('fomo.title')}</h3>
              </div>

              {/* Live Viewers */}
              <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <SafeIcon icon={FiUsers} className="w-5 h-5 animate-pulse" />
                <p className="text-sm">
                  <span className="font-bold">{viewers}</span> {t('fomo.viewers')}
                </p>
              </div>

              {/* Urgency Message */}
              <p className="text-sm leading-relaxed">
                {t('fomo.message')}
              </p>

              {/* Limited Time Indicator */}
              <div className={`flex items-center gap-2 bg-white/20 rounded-lg p-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <SafeIcon icon={FiClock} className="w-5 h-5 animate-pulse" />
                <p className="text-sm font-semibold">{t('fomo.limitedTime')}</p>
              </div>

              {/* CTA Button */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-white text-amber-600 font-bold py-3 px-6 rounded-xl hover:bg-amber-50 transition-all duration-300 shadow-lg"
                >
                  {t('fomo.cta')}
                </motion.button>
              </a>

              {/* Trust Badge */}
              <p className="text-xs text-center text-white/80">
                {t('fomo.trustBadge')}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FOMOBanner;

