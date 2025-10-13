import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiMapPin, FiHeart } = FiIcons;

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const testimonials = [
    {
      id: 1,
      name: "أحمد محمد",
      nameEn: "Ahmed Mohamed",
      location: "Cairo",
      rating: 5,
      text: "Bondeega has become our family's daily ritual. The cardamom blend is absolutely perfect - it reminds me of my grandmother's coffee.",
      textAr: "بنديجا أصبحت طقس عائلتنا اليومي. خلطة الهيل مثالية تماماً - تذكرني بقهوة جدتي.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      name: "فاطمة علي",
      nameEn: "Fatima Ali",
      location: "Alexandria",
      rating: 5,
      text: "The quality is exceptional! Every cup is consistently perfect. Bondeega truly understands Egyptian coffee culture.",
      textAr: "الجودة استثنائية! كل كوب مثالي بشكل ثابت. بنديجا تفهم ثقافة القهوة المصرية حقاً.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b372?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
    },
    {
      id: 3,
      name: "محمود حسن",
      nameEn: "Mahmoud Hassan",
      location: "Giza",
      rating: 5,
      text: "I've tried many brands, but Bondeega's medium roast with cardamom is unmatched. Perfect for our evening gatherings.",
      textAr: "جربت علامات تجارية كثيرة، لكن التحميص المتوسط بالهيل من بنديجا لا يُضاهى. مثالي لجلساتنا المسائية.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
    },
    {
      id: 4,
      name: "نور الدين",
      nameEn: "Nour El-Din",
      location: "Mansoura",
      rating: 5,
      text: "The packaging keeps the coffee fresh for weeks! And the taste... it's like having a traditional coffee house at home.",
      textAr: "التغليف يحافظ على نضارة القهوة لأسابيع! والطعم... كأن عندك قهوة شعبية في البيت.",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxواG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
    },
    {
      id: 5,
      name: "سارة إبراهيم",
      nameEn: "Sarah Ibrahim",
      location: "Aswan",
      rating: 5,
      text: "Bondeega connects me to my Egyptian roots. Whether I'm in Cairo or traveling, this coffee tastes like home.",
      textAr: "بنديجا تربطني بجذوري المصرية. سواء كنت في القاهرة أو مسافرة، هذه القهوة طعمها زي البيت.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxواG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 6,
      name: "يوسف عبدالله",
      nameEn: "Youssef Abdullah",
      location: "Luxor",
      rating: 5,
      text: "The light roast is perfect for morning coffee. Bondeega has mastered the art of Turkish coffee roasting.",
      textAr: "التحميص الخفيف مثالي لقهوة الصباح. بنديجا أتقنت فن تحميص القهوة التركية.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxواG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers", labelAr: "عميل سعيد" },
    { number: "4.9/5", label: "Average Rating", labelAr: "متوسط التقييم" },
    { number: "95%", label: "Customer Retention", labelAr: "الاحتفاظ بالعملاء" },
    { number: "27", label: "Egyptian Cities", labelAr: "مدينة مصرية" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-3xl md:text-4xl font-bold text-green-800 mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
              <p className="text-green-600 text-sm font-amiri">{stat.labelAr}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-green-50 to-amber-50 rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.nameEn}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-green-800">{testimonial.nameEn}</h4>
                  <p className="text-sm text-green-600 font-amiri">{testimonial.name}</p>
                  <div className="flex items-center mt-1">
                    <SafeIcon icon={FiMapPin} className="w-3 h-3 text-gray-500 mr-1" />
                    <span className="text-xs text-gray-500">{testimonial.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <SafeIcon key={i} icon={FiStar} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-gray-700 leading-relaxed mb-4">
                "{testimonial.text}"
              </blockquote>

              <div className="border-t border-green-200 pt-4">
                <p className="text-sm text-green-700 font-amiri italic">
                  "{testimonial.textAr}"
                </p>
              </div>

              <div className="flex items-center justify-end mt-4">
                <SafeIcon icon={FiHeart} className="w-4 h-4 text-red-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join Our Coffee Community</h3>
            <p className="text-green-100 mb-6">
              Become part of Egypt's growing Bondeega family and share your coffee moments with us
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <span className="text-green-200">Share your experience:</span>
              <div className="flex space-x-2">
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm">#BondeegaCoffee</span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm">#بنديجا</span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm">#EgyptianCoffee</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;