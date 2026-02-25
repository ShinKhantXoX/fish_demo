"use client";

import { motion } from "motion/react";
import {
  Fish,
  Award,
  Target,
  Users,
  Snowflake,
  TrendingUp,
} from "lucide-react";

export function About() {
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "International standards in every product we deliver",
    },
    {
      icon: Snowflake,
      title: "Modern Facilities",
      description: "State-of-the-art cold storage and processing plant",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals dedicated to seafood excellence",
    },
    {
      icon: TrendingUp,
      title: "Sustainable Growth",
      description: "Committed to environmentally responsible practices",
    },
  ];

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "1000+", label: "Tons Processed" },
    { number: "50+", label: "Export Markets" },
    { number: "100%", label: "Quality Assured" },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="inline-block mb-6"
          >
            <Fish className="w-16 h-16 text-orange-500" strokeWidth={2.5} />
          </motion.div>

          <h1
            className="text-5xl md:text-6xl font-black text-white mb-6"
            style={{
              textShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)",
            }}
          >
            About Glory One
          </h1>
          <p className="text-xl text-sky-100 font-bold max-w-3xl mx-auto">
            Leading seafood processing and cold storage facility specializing in
            premium fresh water fish export
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/20 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-orange-500 p-3 rounded-xl">
                <Target className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h2 className="text-3xl font-black text-white">Our Mission</h2>
            </div>
            <p className="text-sky-100 font-semibold text-lg leading-relaxed">
              To deliver premium quality fresh water fish to global markets
              through sustainable practices, cutting-edge technology, and
              unwavering commitment to excellence in seafood processing and
              preservation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/20 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-500 p-3 rounded-xl">
                <Award className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h2 className="text-3xl font-black text-white">Our Vision</h2>
            </div>
            <p className="text-sky-100 font-semibold text-lg leading-relaxed">
              To be the world's most trusted name in fresh water fish export,
              recognized for quality, innovation, and sustainability while
              contributing to global food security and community prosperity.
            </p>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 mb-20 shadow-2xl"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut",
                  }}
                >
                  <div
                    className="text-5xl md:text-6xl font-black text-white mb-2"
                    style={{
                      textShadow: "3px 3px 6px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-white/90 font-bold text-lg">
                    {stat.label}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2
            className="text-4xl md:text-5xl font-black text-white text-center mb-12"
            style={{
              textShadow: "3px 3px 6px rgba(0, 0, 0, 0.3)",
            }}
          >
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-xl text-center"
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                    ease: "easeInOut",
                  }}
                  className="inline-block mb-4"
                >
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-4 rounded-full">
                    <value.icon
                      className="w-8 h-8 text-white"
                      strokeWidth={2.5}
                    />
                  </div>
                </motion.div>
                <h3 className="text-xl font-black text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700 font-semibold">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Facilities Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/20 backdrop-blur-md rounded-3xl p-12 border border-white/30 shadow-xl"
        >
          <h2
            className="text-4xl md:text-5xl font-black text-white text-center mb-8"
            style={{
              textShadow: "3px 3px 6px rgba(0, 0, 0, 0.3)",
            }}
          >
            Our Facilities
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl p-6"
            >
              <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Snowflake className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">
                Cold Storage Plant
              </h3>
              <ul className="space-y-2 text-gray-700 font-semibold">
                <li>• Temperature-controlled storage</li>
                <li>• 24/7 monitoring systems</li>
                <li>• Large capacity facilities</li>
                <li>• Energy-efficient technology</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl p-6"
            >
              <div className="bg-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Fish className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">
                Processing Plant
              </h3>
              <ul className="space-y-2 text-gray-700 font-semibold">
                <li>• Automated processing lines</li>
                <li>• Quality control at every stage</li>
                <li>• Hygienic processing environment</li>
                <li>• Export-ready packaging</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
