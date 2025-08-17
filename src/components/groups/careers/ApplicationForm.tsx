import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface ApplicationFormProps {
  content: {
    heading: string[];
    description: string;
    positions: string[];
    formspreeEndpoint: string;
  };
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ content }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    
    try {
      const response = await fetch(content.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          position: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  return (
    <section className="px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {content.heading[0]} <span className="bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">{content.heading[1]}</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {content.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-lg border border-white/30"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-200 bg-white/70"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-200 bg-white/70"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-200 bg-white/70"
                  placeholder="+91 00000 00000"
                />
              </div>

              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                  Position of Interest *
                </label>
                <div className="relative">
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-200 bg-white/70 appearance-none"
                  >
                    {content.positions.map((position, index) => (
                      <option key={index} value={index === 0 ? '' : position} disabled={index === 0}>
                        {position}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Tell us about yourself
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-200 bg-white/70 resize-none"
                placeholder="Share your experience, passion for hospitality, or what excites you about joining our team..."
              />
            </div>

            <button
              type="submit"
              disabled={submitStatus === 'loading'}
              className={`w-full py-4 px-6 rounded-xl font-medium text-white transition-all duration-300 flex items-center justify-center space-x-2 ${
                submitStatus === 'loading'
                  ? 'bg-gray-400 cursor-not-allowed'
                  : submitStatus === 'success'
                  ? 'bg-green-500'
                  : submitStatus === 'error'
                  ? 'bg-red-500'
                  : 'bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 shadow-lg hover:shadow-xl'
              }`}
            >
              {submitStatus === 'loading' && (
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
              )}
              {submitStatus === 'success' && <CheckCircle className="w-5 h-5" />}
              {submitStatus === 'error' && <AlertCircle className="w-5 h-5" />}
              <Send className={`w-5 h-5 ${submitStatus === 'loading' ? 'opacity-0' : 'opacity-100'}`} />
              <span>
                {submitStatus === 'loading'
                  ? 'Sending...'
                  : submitStatus === 'success'
                  ? 'Application Sent!'
                  : submitStatus === 'error'
                  ? 'Try Again'
                  : 'Submit Application'
                }
              </span>
            </button>

            {submitStatus === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-green-600 text-sm"
              >
                Thank you for your interest! We'll be in touch soon.
              </motion.p>
            )}

            {submitStatus === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-red-600 text-sm"
              >
                Something went wrong. Please try again or email us directly.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplicationForm;
