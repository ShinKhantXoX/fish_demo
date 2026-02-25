"use client";

import { motion } from "motion/react";
import { Fish, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900/50 backdrop-blur-md border-t border-white/10 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Fish className="w-8 h-8 text-orange-500" strokeWidth={2.5} />
              <h3 className="text-xl font-black">Glory One</h3>
            </div>
            <p className="text-sky-100 font-semibold mb-2">
              Seafood Processing and Cold Storage Plant
            </p>
            <p className="text-sm text-sky-200">
              Fresh Water Fish Export Excellence since 2020
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-4 text-orange-400">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Phone size={16} className="text-orange-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail size={16} className="text-orange-400" />
                <span>info@gloryone.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={16} className="text-orange-400" />
                <span>1234 Harbor St, Coastal City</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-4 text-orange-400">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>• Seafood Processing</li>
              <li>• Cold Storage Facility</li>
              <li>• Fresh Water Fish Export</li>
              <li>• Quality Assurance</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-sky-200"
        >
          <p>&copy; 2026 Glory One Seafood. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
