import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin, FiHeart, FiExternalLink, FiTruck } = FiIcons;

const Footer = () => {
  const footerLinks = {
    products: [
      "Light Roast Coffee",
      "Medium Roast Coffee", 
      "Dark Roast Coffee",
      "Cardamom Blends",
      "Gift Sets"
    ],
    company: [
      "About Bondeega",
      "Next Supply Partnership",
      "Quality Guarantee",
      "Sustainability",
      "Careers"
    ],
    support: [
      "Brewing Guide",
      "Store Locator",
      "Customer Service",
      "Returns & Exchanges",
      "FAQ"
    ]
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-green-800 to-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section - Wider */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="flex items-center space-x-3 mb-4">
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
            <p className="text-green-100 leading-relaxed">
              Egypt's signature Turkish coffee brand, bringing authentic flavors 
              and traditional excellence to every cup since our founding.
            </p>

            {/* NextSupply Partnership Highlight */}
            <div className="bg-green-700/50 p-6 rounded-lg border border-green-600">
              <div className="flex items-center space-x-4 mb-3">
                <img 
                  src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1759920659257-NEXT%20SUPPLY%20JPEG.jpg" 
                  alt="Next Supply Logo" 
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h4 className="font-bold text-white text-lg">NextSupply Trading & Distribution</h4>
                  <p className="text-green-200 text-base">Our Distribution Partner</p>
                </div>
              </div>
              <p className="text-green-100 text-base">
                Ensuring nationwide availability and premium quality across Egypt
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="w-4 h-4 text-green-200" />
                <span className="text-green-100">+20 2 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="w-4 h-4 text-green-200" />
                <span className="text-green-100">info@bondeega.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMapPin} className="w-4 h-4 text-green-200" />
                <span className="text-green-100">Cairo, Egypt</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6">Our Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('#products')}
                    className="text-green-200 hover:text-white transition-colors text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('#about')}
                    className="text-green-200 hover:text-white transition-colors text-left flex items-center space-x-2"
                  >
                    <span>{link}</span>
                    {link === "Next Supply Partnership" && (
                      <SafeIcon icon={FiExternalLink} className="w-3 h-3" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('#brewing')}
                    className="text-green-200 hover:text-white transition-colors text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-green-700 pt-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex items-center space-x-2">
              <span className="text-green-200">© 2024 Bondeega Coffee. All rights reserved.</span>
            </div>
            
            {/* Enhanced NextSupply Attribution */}
            <div className="flex items-center space-x-4 bg-green-700/30 px-6 py-4 rounded-lg">
              <SafeIcon icon={FiTruck} className="w-6 h-6 text-green-300" />
              <div className="flex items-center space-x-4">
                <span className="text-green-200 text-base">Distributed by</span>
                <img 
                  src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1759920659257-NEXT%20SUPPLY%20JPEG.jpg" 
                  alt="Next Supply Logo" 
                  className="w-14 h-14 object-contain"
                />
                <span className="text-white font-semibold text-base">Next Supply Trading & Distribution</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-green-200">Made with</span>
              <SafeIcon icon={FiHeart} className="w-4 h-4 text-red-400" />
              <span className="text-green-200">in Egypt</span>
            </div>
          </div>

          <div className="text-center mt-8 pt-6 border-t border-green-700">
            <p className="text-green-300 text-sm mb-2">
              Experience the authentic taste of Egyptian hospitality with every cup of Bondeega Turkish Coffee
            </p>
            <p className="text-green-400 text-sm mb-6 font-amiri">
              استمتع بالطعم الأصيل للضيافة المصرية مع كل كوب من قهوة بنديجا التركية
            </p>
            
            {/* Partnership Logos */}
            <div className="flex items-center justify-center space-x-8 pt-4">
              <div className="flex items-center space-x-3 text-green-300">
                <img 
                  src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1759845307731-logo%20adjusted.png" 
                  alt="Bondeega Logo" 
                  className="w-16 h-16 object-contain opacity-75"
                />
                <span className="text-base">Premium Coffee Brand</span>
              </div>
              <span className="text-green-500 text-2xl">×</span>
              <div className="flex items-center space-x-3 text-green-300">
                <img 
                  src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1759920659257-NEXT%20SUPPLY%20JPEG.jpg" 
                  alt="Next Supply Logo" 
                  className="w-16 h-16 object-contain opacity-75"
                />
                <span className="text-base">Distribution Excellence</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;