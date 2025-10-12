import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCoffee, FiDroplet, FiThermometer, FiClock, FiHeart, FiCheck, FiStar, FiGift } = FiIcons;

const BrewingGuide = () => {
  const [activeGuide, setActiveGuide] = useState('traditional');

  const guides = {
    traditional: {
      title: "Traditional Turkish Coffee",
      subtitle: "The UNESCO World Heritage brewing method",
      steps: [
        {
          icon: FiDroplet,
          title: "Cold Water First",
          description: "Use cold water - 1 demitasse cup (60ml) per person. Pour into cezve (ibrik)"
        },
        {
          icon: FiCoffee,
          title: "Add Bondeega Coffee",
          description: "1 heaping teaspoon of finely ground Bondeega per cup. Mix while cold"
        },
        {
          icon: FiHeart,
          title: "Sugar to Taste",
          description: "Add sugar now if desired: None (sade), little (az şekerli), medium (orta), or sweet (şekerli)"
        },
        {
          icon: FiThermometer,
          title: "Gentle Heat",
          description: "Place on lowest heat. Stir gently until coffee and sugar dissolve completely"
        },
        {
          icon: FiClock,
          title: "Watch the Foam",
          description: "Heat slowly for 3-4 minutes. Foam will form gradually - this is the 'kaymak'"
        },
        {
          icon: FiStar,
          title: "First Rise",
          description: "When foam rises, remove from heat. Distribute foam equally into cups"
        },
        {
          icon: FiCheck,
          title: "Final Brewing",
          description: "Return cezve to heat briefly until coffee rises again, then pour into cups"
        }
      ]
    },
    cardamom: {
      title: "Cardamom Turkish Coffee",
      subtitle: "Enhanced with aromatic Middle Eastern spices",
      steps: [
        {
          icon: FiDroplet,
          title: "Prepare Water",
          description: "Cold water in cezve - 60ml per person, same as traditional method"
        },
        {
          icon: FiCoffee,
          title: "Bondeega Cardamom Blend",
          description: "1 heaping teaspoon of Bondeega cardamom coffee per cup"
        },
        {
          icon: FiGift,
          title: "Extra Cardamom",
          description: "Optional: Add a pinch of freshly ground cardamom for stronger aroma"
        },
        {
          icon: FiHeart,
          title: "Sugar Addition",
          description: "Add sugar while cold - cardamom pairs beautifully with medium sweetness"
        },
        {
          icon: FiThermometer,
          title: "Slow Heating",
          description: "Heat very slowly to release cardamom oils properly - patience is key"
        },
        {
          icon: FiStar,
          title: "Aromatic Foam",
          description: "Watch for cardamom-scented foam formation - distribute to each cup"
        },
        {
          icon: FiCheck,
          title: "Traditional Service",
          description: "Serve with dates, Turkish delight, or a small glass of water"
        }
      ]
    }
  };

  const culturalTips = [
    {
      title: "The Cezve (Ibrik)",
      description: "Use a traditional copper or brass cezve for authentic flavor. The narrow neck is essential for proper foam formation."
    },
    {
      title: "Grind Consistency",
      description: "Turkish coffee requires the finest grind - finer than espresso, almost powder-like. Bondeega is pre-ground to perfection."
    },
    {
      title: "The Sacred Foam",
      description: "Foam (kaymak) is the soul of Turkish coffee. Each cup must receive equal foam - it's a sign of respect to guests."
    },
    {
      title: "Never Let It Boil",
      description: "Turkish coffee should never reach a full boil. The moment it rises, remove from heat immediately."
    },
    {
      title: "Serving Tradition",
      description: "Serve with a glass of water and something sweet. The eldest is served first, followed by guests."
    },
    {
      title: "Fortune Telling",
      description: "After drinking, turn the cup upside down on the saucer. The remaining grounds can be read for fortune telling (tasseography)."
    }
  ];

  const sugarLevels = [
    { name: "Sade", description: "No sugar - pure coffee taste", arabic: "بدون سكر" },
    { name: "Az Şekerli", description: "Little sugar - 1/2 teaspoon", arabic: "سكر قليل" },
    { name: "Orta", description: "Medium sweet - 1 teaspoon", arabic: "سكر متوسط" },
    { name: "Şekerli", description: "Sweet - 1.5-2 teaspoons", arabic: "سكر كثير" }
  ];

  return (
    <section id="brewing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            The Art of Turkish Coffee
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Master the UNESCO World Heritage brewing method with our authentic step-by-step guide
          </p>
          <div className="bg-amber-50 p-4 rounded-lg max-w-2xl mx-auto">
            <p className="text-green-800 font-medium">
              "Turkish coffee should be black as hell, strong as death, and sweet as love" - Turkish Proverb
            </p>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Method Selection */}
          <div className="flex justify-center mb-8">
            <div className="bg-green-50 p-2 rounded-xl">
              <button
                onClick={() => setActiveGuide('traditional')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeGuide === 'traditional'
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'text-green-600 hover:bg-green-100'
                }`}
              >
                Traditional Method
              </button>
              <button
                onClick={() => setActiveGuide('cardamom')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeGuide === 'cardamom'
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'text-green-600 hover:bg-green-100'
                }`}
              >
                With Cardamom
              </button>
            </div>
          </div>

          {/* Brewing Steps */}
          <motion.div
            key={activeGuide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-green-50 to-amber-50 rounded-2xl p-8 mb-12"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-green-800 mb-2">
                {guides[activeGuide].title}
              </h3>
              <p className="text-green-600 mb-4">{guides[activeGuide].subtitle}</p>
              <div className="bg-white p-4 rounded-lg max-w-md mx-auto">
                <p className="text-sm text-gray-600">
                  <strong>Equipment needed:</strong> Cezve (ibrik), small spoon, demitasse cups
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {guides[activeGuide].steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg relative"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <SafeIcon icon={step.icon} className="w-6 h-6 text-white" />
                    </div>
                    <div className="bg-green-100 text-green-800 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-green-800 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Sugar Levels Guide */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-green-800 text-center mb-8">
              Traditional Sugar Levels
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sugarLevels.map((level, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <h4 className="text-lg font-bold text-green-800 mb-2">{level.name}</h4>
                  <p className="text-gray-600 text-sm mb-2">{level.description}</p>
                  <p className="text-green-600 font-amiri text-sm">{level.arabic}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Cultural Tips */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-amber-50 to-green-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-green-800 mb-8 text-center">
              Cultural Traditions & Expert Tips
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {culturalTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <div className="flex items-start space-x-3">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-green-800 mb-2">{tip.title}</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">{tip.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 bg-green-600 rounded-xl p-6 text-white text-center">
              <h4 className="text-xl font-bold mb-3">The Bondeega Promise</h4>
              <p className="text-green-100">
                Our coffee is ground to the perfect fineness for authentic Turkish coffee preparation. 
                Each package includes detailed brewing instructions to help you master this ancient art.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrewingGuide;