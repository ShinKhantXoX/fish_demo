"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Fish, Waves, Snowflake, Award, ArrowRight } from "lucide-react";

const heroImage = "/hero.jpg";

export function Home() {
  const features = [
    {
      icon: Fish,
      title: "Fresh Water Fish",
      description: "Premium quality Tilapia, Karfu, Puti, and Shoil",
    },
    {
      icon: Snowflake,
      title: "Cold Storage",
      description: "State-of-the-art preservation facilities",
    },
    {
      icon: Waves,
      title: "Processing Plant",
      description: "Modern seafood processing technology",
    },
    {
      icon: Award,
      title: "Quality Export",
      description: "International standards certified",
    },
  ];

  const fishVarieties = [
    { name: "Tilapia", scientific: "Oreochromis", family: "Cichlid" },
    {
      name: "Karfu",
      scientific: "Valencia letourneuxi",
      family: "Valenciidae",
    },
    { name: "Puti", scientific: "Puntius", family: "Pungti" },
    { name: "Shoil", scientific: "Channa Striata", family: "Channidae" },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4">
        {/* Animated background elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl"
        />

        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block"
            >
              <span className="bg-orange-500 text-white px-6 py-2 rounded-full font-black text-sm md:text-base inline-block mb-6">
                SEAFOOD PROCESSING AND COLD STORAGE PLANT
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-5xl md:text-7xl font-black text-white mb-6"
              style={{
                textShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)",
              }}
            >
              Fresh Water Fish
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl md:text-2xl text-sky-100 font-bold mb-8"
            >
              Premium seafood export with international quality standards
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-500 text-white px-8 py-4 rounded-full font-black text-lg flex items-center gap-2 shadow-lg hover:bg-orange-600 transition-colors"
                >
                  View Products
                  <ArrowRight size={24} />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-black text-lg shadow-lg hover:bg-sky-50 transition-colors"
                >
                  Contact Us
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <img
                src={heroImage}
                alt="Fresh Water Fish Varieties"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent rounded-3xl" />
            </motion.div>

            {/* Floating fish icons */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  rotate: [0, Math.random() * 20 - 10, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut",
                }}
                className="absolute"
                style={{
                  top: `${Math.random() * 80}%`,
                  left: `${Math.random() * 80}%`,
                }}
              >
                <Fish
                  className="text-white/40"
                  size={20 + Math.random() * 20}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-white text-center mb-16"
            style={{
              textShadow: "3px 3px 6px rgba(0, 0, 0, 0.3)",
            }}
          >
            Why Choose Glory One?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-center shadow-xl border border-white/30"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="inline-block mb-4"
                >
                  <div className="bg-orange-500 p-4 rounded-full">
                    <feature.icon
                      className="w-8 h-8 text-white"
                      strokeWidth={2.5}
                    />
                  </div>
                </motion.div>
                <h3 className="text-xl font-black text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sky-100 font-semibold">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fish Varieties Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-black text-white mb-4"
              style={{
                textShadow: "3px 3px 6px rgba(0, 0, 0, 0.3)",
              }}
            >
              Our Premium Selection
            </h2>
            <p className="text-xl text-sky-100 font-bold">
              High-quality fresh water fish varieties
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fishVarieties.map((fish, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-white rounded-2xl p-6 shadow-xl"
              >
                <div className="bg-gradient-to-br from-sky-400 to-blue-600 rounded-xl p-4 mb-4">
                  <motion.div
                    animate={{ x: [0, 10, 0], rotate: [0, 5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Fish
                      className="w-12 h-12 text-white mx-auto"
                      strokeWidth={2.5}
                    />
                  </motion.div>
                </div>
                <h3 className="text-2xl font-black text-blue-900 mb-2">
                  {fish.name}
                </h3>
                <div className="space-y-1 text-sm">
                  <p className="text-gray-700 font-bold">
                    Scientific:{" "}
                    <span className="font-normal italic">
                      {fish.scientific}
                    </span>
                  </p>
                  <p className="text-gray-700 font-bold">
                    Family: <span className="font-normal">{fish.family}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 text-white px-8 py-4 rounded-full font-black text-lg shadow-lg hover:bg-orange-600 transition-colors inline-flex items-center gap-2"
              >
                View All Products
                <ArrowRight size={24} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
