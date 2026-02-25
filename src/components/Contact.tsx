"use client";

import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Clock, Globe } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      subContent: "+1 (555) 987-6543",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@gloryone.com",
      subContent: "export@gloryone.com",
      color: "from-orange-400 to-orange-600",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "1234 Harbor Street",
      subContent: "Coastal City, CC 12345",
      color: "from-teal-400 to-teal-600",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Fri: 8AM - 6PM",
      subContent: "Sat: 9AM - 3PM",
      color: "from-purple-400 to-purple-600",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block mb-6"
          >
            <Globe className="w-16 h-16 text-orange-500" strokeWidth={2.5} />
          </motion.div>

          <h1
            className="text-5xl md:text-6xl font-black text-white mb-6"
            style={{
              textShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)",
            }}
          >
            Get In Touch
          </h1>
          <p className="text-xl text-sky-100 font-bold max-w-2xl mx-auto">
            Ready to partner with us? Contact our team for inquiries about our
            products and services
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className={`bg-gradient-to-br ${info.color} p-6`}>
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut",
                  }}
                >
                  <info.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="font-black text-gray-900 mb-3 text-lg">
                  {info.title}
                </h3>
                <p className="text-gray-700 font-semibold text-sm mb-1">
                  {info.content}
                </p>
                <p className="text-gray-600 font-semibold text-sm">
                  {info.subContent}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/20 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-xl"
          >
            <h2 className="text-3xl font-black text-white mb-6">
              Send Us a Message
            </h2>

            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="bg-green-500 text-white p-8 rounded-2xl text-center"
              >
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="inline-block mb-4"
                >
                  <Send className="w-12 h-12" strokeWidth={2.5} />
                </motion.div>
                <h3 className="text-2xl font-black mb-2">Message Sent!</h3>
                <p className="font-semibold">We'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white font-bold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/90 border-2 border-transparent focus:border-orange-500 focus:outline-none font-semibold"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-white font-bold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/90 border-2 border-transparent focus:border-orange-500 focus:outline-none font-semibold"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-white font-bold mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/90 border-2 border-transparent focus:border-orange-500 focus:outline-none font-semibold"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-white font-bold mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white/90 border-2 border-transparent focus:border-orange-500 focus:outline-none font-semibold resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-orange-500 text-white px-8 py-4 rounded-full font-black text-lg shadow-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={20} />
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Map Placeholder */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden h-80 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 flex items-center justify-center">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <MapPin className="w-20 h-20 text-white" strokeWidth={2} />
                </motion.div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-blue-900/30">
                <span className="text-white font-black text-2xl">
                  Location Map
                </span>
              </div>
            </motion.div>

            {/* Additional Info */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-black text-gray-900 mb-6">
                Why Choose Us?
              </h3>
              <ul className="space-y-4">
                {[
                  "Premium quality fresh water fish",
                  "International export standards",
                  "Modern cold storage facilities",
                  "Competitive pricing",
                  "Reliable supply chain",
                  "24/7 customer support",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-gray-700 font-semibold"
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
