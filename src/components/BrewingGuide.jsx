import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCoffee, FiDroplet, FiThermometer, FiHeart } = FiIcons;

const BrewingGuide = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const steps = [
    {
      icon: FiCoffee,
      title: t('brewing.step1'),
      description: t('brewing.step1Text')
    },
    {
      icon: FiDroplet,
      title: t('brewing.step2'),
      description: t('brewing.step2Text')
    },
    {
      icon: FiThermometer,
      title: t('brewing.step3'),
      description: t('brewing.step3Text')
    },
    {
      icon: FiHeart,
      title: t('brewing.step4'),
      description: t('brewing.step4Text')
    }
  ];

  return (
    <section id="brewing" className="py-20 bg-gradient-to-br from-amber-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            {t('brewing.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('brewing.subtitle')}
          </p>
          <p className="text-lg text-gray-500 mt-4">
            {t('brewing.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center group"
            >
              <div className="bg-gradient-to-br from-green-600 to-green-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <SafeIcon icon={step.icon} className="w-8 h-8 text-white" />
              </div>
              <div className="bg-green-100 text-green-800 font-bold text-sm px-4 py-1 rounded-full inline-block mb-4">
                {isRTL ? `${index + 1} الخطوة` : `Step ${index + 1}`}
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-gradient-to-br from-green-700 to-green-800 rounded-3xl shadow-2xl p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">
            {isRTL ? 'نصيحة احترافية' : 'Pro Tip'}
          </h3>
          <p className="text-lg text-green-100 max-w-3xl mx-auto">
            {isRTL 
              ? 'للحصول على أفضل النتائج، استخدم الماء البارد دائماً واطحن قهوة بنديجا طازجة قبل التحضير مباشرة. القهوة التركية الحقيقية يجب ألا تُغلى أبداً - فقط تُسخن حتى تتكون الرغوة.'
              : 'For the best results, always use cold water and grind your Bondeega coffee fresh just before brewing. True Turkish coffee should never boil - only heat until foam forms.'
            }
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BrewingGuide;

