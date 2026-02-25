"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Fish, Package, Ruler, FileText } from "lucide-react";

const productImage = "/product.png";

export function Products() {
  const products = [
    {
      name: "Tilapia",
      scientificName: "Oreochromis",
      family: "Cichlid",
      sizes: ["100/200", "200/300", "300/500", "500/800", "800/1000", "1 UP"],
      specification: "Whole, GGS",
      color: "from-cyan-400 to-blue-500",
    },
    {
      name: "Karfu",
      scientificName: "Valencia letourneuxi",
      family: "Valenciidae",
      sizes: ["1", "2 UP"],
      specification: "Whole",
      color: "from-amber-400 to-orange-500",
    },
    {
      name: "Puti",
      scientificName: "Puntius",
      family: "Pungti",
      sizes: ["500/800", "800/1000", "1 UP"],
      specification: "Whole",
      color: "from-emerald-400 to-teal-500",
    },
    {
      name: "Shoil",
      scientificName: "Channa Striata",
      family: "Channidae",
      sizes: ["800/1000", "1", "2 UP"],
      specification: "Whole, Steaks",
      color: "from-slate-400 to-slate-600",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block mb-6"
          >
            <span className="bg-orange-500 text-white px-8 py-3 rounded-full font-black text-lg">
              SEAFOOD AND FRESHWATER FISH EXPORT
            </span>
          </motion.div>

          <h1
            className="text-5xl md:text-6xl font-black text-white mb-6"
            style={{
              textShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)",
            }}
          >
            Our Products
          </h1>
          <p className="text-xl text-sky-100 font-bold max-w-2xl mx-auto">
            Premium quality fresh water fish processed to international
            standards
          </p>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative max-w-5xl mx-auto"
          >
            <img
              src={productImage}
              alt="Fresh Water Fish Products"
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent rounded-3xl" />
          </motion.div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Product Header */}
              <div
                className={`bg-gradient-to-br ${product.color} p-8 relative overflow-hidden`}
              >
                <motion.div
                  animate={{
                    x: [0, 20, 0],
                    y: [0, -10, 0],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-4 right-4 opacity-20"
                >
                  <Fish size={100} strokeWidth={3} className="text-white" />
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="relative z-10"
                >
                  <h2
                    className="text-4xl md:text-5xl font-black text-white mb-3"
                    style={{
                      textShadow: "3px 3px 6px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    {product.name}
                  </h2>
                </motion.div>
              </div>

              {/* Product Details */}
              <div className="p-8 space-y-6">
                {/* Scientific Info */}
                <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-orange-500">
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                    <div className="space-y-1">
                      <div>
                        <span className="font-black text-gray-700 text-sm">
                          Scientific Name
                        </span>
                        <p className="text-gray-900 font-semibold italic">
                          {product.scientificName}
                        </p>
                      </div>
                      <div>
                        <span className="font-black text-gray-700 text-sm">
                          Family Name
                        </span>
                        <p className="text-gray-900 font-semibold">
                          {product.family}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sizes */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Ruler className="w-5 h-5 text-blue-600" />
                    <h3 className="font-black text-gray-900">
                      Available Sizes
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.3 + idx * 0.05,
                          type: "spring",
                          stiffness: 200,
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="bg-blue-100 text-blue-900 px-4 py-2 rounded-full font-bold text-sm border-2 border-blue-300 inline-block">
                          {size}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Specification */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Package className="w-5 h-5 text-green-600" />
                    <h3 className="font-black text-gray-900">Specification</h3>
                  </div>
                  <span className="bg-green-100 text-green-900 px-6 py-3 rounded-xl font-bold border-2 border-green-300 inline-block">
                    {product.specification}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Interested in Our Products?
          </h2>
          <p className="text-sky-100 font-bold text-lg mb-8 max-w-2xl mx-auto">
            Contact us for detailed specifications, pricing, and export
            information
          </p>
          <Link href="/contact">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-white px-10 py-5 rounded-full font-black text-xl shadow-lg hover:bg-orange-600 transition-colors inline-block"
            >
              Get in Touch
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
