import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Motion

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      showToast("Please fill in all fields", "error");
      return;
    }

    showToast("Message sent successfully!", "success");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-[#2a2c39] relative overflow-hidden min-h-screen">
      {/* Toast Notification with Motion */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            className="fixed top-8 right-8 z-50"
          >
            <div
              className={`px-6 py-4 rounded-xl shadow-2xl backdrop-blur-md ${
                toast.type === "success"
                  ? "bg-green-500/20 border border-green-500/30"
                  : "bg-red-500/20 border border-red-500/30"
              }`}
            >
              <p className="text-white font-medium">{toast.message}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 lg:px-12 xl:px-48 mx-auto px-4 py-16 md:py-24">
        {/* Form container with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          {/* Animated border gradient */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500 rounded-2xl opacity-30 group-hover:opacity-50 blur transition duration-1000 animate-pulse"></div>

          <div className="relative bg-[#1e1f2b] backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-gray-700/50 shadow-2xl">
            <div className="space-y-8">
              {/* Name and Email row */}
              <div className="grid md:grid-cols-2 gap-6">
                {["name", "email"].map((field, index) => (
                  <motion.div
                    key={field}
                    initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="relative group/input"
                  >
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      placeholder=" "
                      value={formData[field]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field)}
                      onBlur={() => setFocusedField(null)}
                      className="peer w-full bg-transparent text-white py-4 px-4 outline-none border-2 border-gray-700 rounded-xl focus:border-gray-500 transition-all duration-300"
                    />
                    <label
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        formData[field] || focusedField === field
                          ? "-top-3 text-xs bg-[#1e1f2b] px-2 text-gray-400"
                          : "top-4 text-gray-500"
                      }`}
                    >
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                  </motion.div>
                ))}
              </div>

              {/* Subject field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="relative group/input"
              >
                <input
                  type="text"
                  name="subject"
                  placeholder=" "
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  className="peer w-full bg-transparent text-white py-4 px-4 outline-none border-2 border-gray-700 rounded-xl focus:border-gray-500 transition-all duration-300"
                />
                <label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    formData.subject || focusedField === "subject"
                      ? "-top-3 text-xs bg-[#1e1f2b] px-2 text-gray-400"
                      : "top-4 text-gray-500"
                  }`}
                >
                  Subject
                </label>
              </motion.div>

              {/* Message field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="relative group/input"
              >
                <textarea
                  name="message"
                  rows="5"
                  placeholder=" "
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className="peer w-full bg-transparent text-white py-4 px-4 outline-none border-2 border-gray-700 rounded-xl focus:border-gray-500 transition-all duration-300 resize-none"
                ></textarea>
                <label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    formData.message || focusedField === "message"
                      ? "-top-3 text-xs bg-[#1e1f2b] px-2 text-gray-400"
                      : "top-4 text-gray-500"
                  }`}
                >
                  Message
                </label>
              </motion.div>

              {/* Submit button with Motion */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                className="relative w-full group/btn overflow-hidden"
              >
                <div className="relative bg-gradient-to-r from-gray-500 to-gray-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg group-hover/btn:shadow-gray-500/50 transition-all duration-300 flex items-center justify-center gap-2">
                  <span>Send Message</span>
                  <motion.svg
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </motion.svg>
                </div>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
