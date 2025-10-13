import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiSun, FiCoffee, FiMoon, FiPackage } = FiIcons;

const Products = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const products = [
    {
      id: 1,
      name: "Dark Roast Premium",
      arabicName: "تحميص غامق فاخر",
      roastLevel: "Dark",
      icon: FiMoon,
      size: "200gm",
      imageUrl: "/products/1.png",
      description: "A bold and intense 200gm dark roast for a rich, full-bodied coffee experience.",
      flavorProfile: "Low acidity, chocolate notes, smoky finish",
      color: "from-gray-700 to-amber-800",
      bgColor: "bg-gray-50"
    },
    {
      id: 2,
      name: "Light Roast Premium",
      arabicName: "تحميص خفيف فاخر",
      roastLevel: "Light",
      icon: FiSun,
      size: "200gm",
      imageUrl: "/products/2.png",
      description: "Delicate and bright, our 200gm light roast offers a vibrant start to your day.",
      flavorProfile: "Bright acidity, floral aroma, citrus undertones",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50"
    },
    {
      id: 3,
      name: "Light Roast Travel Pack",
      arabicName: "تحميص خفيف للسفر",
      roastLevel: "Light",
      icon: FiSun,
      size: "50gm",
      imageUrl: "/products/3.png",
      description: "The same bright and floral notes in a convenient 50gm travel-friendly pack.",
      flavorProfile: "Floral aroma, citrus undertones",
      color: "from-yellow-400 to-green-500",
      bgColor: "bg-yellow-50"
    },
    {
      id: 4,
      name: "Medium Roast Travel Pack",
      arabicName: "تحميص متوسط للسفر",
      roastLevel: "Medium",
      icon: FiCoffee,
      size: "50gm",
      imageUrl: "/products/4.png",
      description: "A balanced and smooth medium roast in a compact 50gm size for any occasion.",
      flavorProfile: "Balanced acidity, caramel sweetness",
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50"
    },
    {
      id: 5,
      name: "Dark Roast Travel Pack",
      arabicName: "تحميص غامق للسفر",
      roastLevel: "Dark",
      icon: FiMoon,
      size: "50gm",
      imageUrl: "/products/5.png",
      description: "Enjoy our intense and rich dark roast on the go with this 50gm travel pack.",
      flavorProfile: "Chocolate notes, smoky finish",
      color: "from-gray-700 to-green-700",
      bgColor: "bg-gray-50"
    },
    {
      id: 6,
      name: "Dark Roast Standard",
      arabicName: "تحميص غامق عادي",
      roastLevel: "Dark",
      icon: FiMoon,
      size: "125gm",
      imageUrl: "/products/6.png",
      description: "Our signature dark roast in a 125gm pack, perfect for regular coffee lovers.",
      flavorProfile: "Rich body, chocolate notes, bold finish",
      color: "from-gray-700 to-amber-800",
      bgColor: "bg-gray-50"
    },
    {
      id: 7,
      name: "Medium Roast Standard",
      arabicName: "تحميص متوسط عادي",
      roastLevel: "Medium",
      icon: FiCoffee,
      size: "125gm",
      imageUrl: "/products/7.png",
      description: "A perfectly balanced 125gm medium roast for everyday enjoyment.",
      flavorProfile: "Balanced acidity, caramel sweetness, smooth finish",
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50"
    },
    {
      id: 8,
      name: "Light Roast Standard",
      arabicName: "تحميص خفيف عادي",
      roastLevel: "Light",
      icon: FiSun,
      size: "125gm",
      imageUrl: "/products/8.png",
      description: "Bright and aromatic 125gm light roast for those who prefer a lighter cup.",
      flavorProfile: "Bright acidity, floral notes, citrus undertones",
      color: "from-yellow-400 to-green-500",
      bgColor: "bg-yellow-50"
    },
    {
      id: 9,
      name: "Medium Roast Premium",
      arabicName: "تحميص متوسط فاخر",
      roastLevel: "Medium",
      icon: FiCoffee,
      size: "200gm",
      imageUrl: "/products/9.png",
      description: "Our premium 200gm medium roast blend, offering the perfect balance of flavor and aroma.",
      flavorProfile: "Balanced acidity, caramel sweetness, nutty undertones",
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-green-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            {t('products.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('products.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`${product.bgColor} rounded-2xl shadow-xl overflow-hidden flex flex-col group`}
            >
              <div className="relative">
                <img 
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-72 object-cover"
                />
                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-t ${product.color} opacity-20 group-hover:opacity-0 transition-opacity duration-300`}></div>
              </div>
              
              <div className={`p-6 text-white bg-gradient-to-r ${product.color}`}>
                <div className="flex items-center justify-between mb-2">
                  <SafeIcon icon={product.icon} className="w-8 h-8" />
                   <span className="flex items-center text-sm bg-white/20 px-3 py-1 rounded-full">
                      <SafeIcon icon={FiPackage} className="w-4 h-4 mr-2" />
                      {product.size}
                    </span>
                </div>
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <p className="font-amiri opacity-90">{product.arabicName}</p>
              </div>

              <div className="p-6 space-y-4 flex-grow flex flex-col">
                <p className="text-gray-700 leading-relaxed flex-grow">{product.description}</p>
                
                <div>
                  <h4 className="font-semibold text-green-800 mb-1">{t('products.flavorProfile')}:</h4>
                  <p className="text-sm text-gray-600">{product.flavorProfile}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-sm font-medium text-green-700">
                    {product.roastLevel} {t('products.roast')}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;