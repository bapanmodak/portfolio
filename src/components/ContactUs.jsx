import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;

        if (!name || !email || !subject || !message) {
            toast.error("Please fill in all fields");
            return;
        }

        toast.success("Message sent successfully!");
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <motion.div
            className="bg-[#2a2c39] lg:px-48 px-4 py-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <motion.form
                onSubmit={handleSubmit}
                className="space-y-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <div className="flex flex-col md:flex-row gap-6">
                    {['name', 'email'].map((field, index) => (
                        <motion.input
                            key={field}
                            type={field === 'email' ? 'email' : 'text'}
                            name={field}
                            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                            value={formData[field]}
                            onChange={handleChange}
                            className="w-full border-b border-secondary bg-transparent text-white py-2 px-2 outline-none"
                            whileFocus={{ scale: 1.03 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        />
                    ))}
                </div>

                <motion.input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full border-b border-secondary bg-transparent text-white py-2 px-2 outline-none"
                    whileFocus={{ scale: 1.03 }}
                />

                <motion.textarea
                    name="message"
                    rows="4"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border-b border-secondary bg-transparent text-white py-2 px-2 outline-none"
                    whileFocus={{ scale: 1.02 }}
                ></motion.textarea>

                <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full border border-secondary rounded-full py-4 text-white hover:bg-secondary transition"
                >
                    Send Message
                </motion.button>
            </motion.form>
        </motion.div>
    );
};

export default ContactUs;
