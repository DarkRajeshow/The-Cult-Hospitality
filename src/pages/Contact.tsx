import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Coffee, Bed, Utensils, Wheat } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// Simple animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.3
    }
  }
};

const Contact = () => {
  const locations = [
    {
      name: "The Cult Stay",
      type: "Premium Hotel Experience",
      address: "Pavan Ganapathi Road, Near Furde Complex, Laxmi Peth, Damani Nagar, Solapur",
      email: "info@thecultstay.com",
      icon: Bed,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60825.273859370864!2d75.8472690523744!3d17.6700585824414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5d159f87fa887%3A0x1610b7c07da62f0d!2sThe%20Cult%20Stay!5e0!3m2!1sen!2sin!4v1753090494422!5m2!1sen!2sin"
    },

    {
      name: "The Cult Banquet",
      type: "Stylish Banquet Hall",
      address: "Near Old IMS Road, Opposite Joshi Petrol Pump, Solapur, Maharashtra, India",
      email: "info@thecultstay.com",
      icon: Utensils,
      iconBg: "bg-rose-50",
      iconColor: "text-rose-600",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60825.273859370864!2d75.8472690523744!3d17.6700585824414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5dbc72bf26db5%3A0x4dca8e87d1701a6c!2sThe%20Cult%20Banquet!5e0!3m2!1sen!2sin!4v1753090468995!5m2!1sen!2sin"
    },
    {
      name: "The Cult's Kitchen",
      type: "Health-Focused Food Shop",
      address: "Near Old IMS Road, Opposite Joshi Petrol Pump, Solapur, Maharashtra, India",
      email: "info@thecultstay.com",
      icon: Wheat,
      iconBg: "bg-green-50",
      iconColor: "text-green-600",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60825.273859370864!2d75.8472690523744!3d17.6700585824414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5dbc72bf26db5%3A0x4dca8e87d1701a6c!2sThe%20Cult%20Banquet!5e0!3m2!1sen!2sin!4v1753090468995!5m2!1sen!2sin"
    },
    {
      name: "The Cult Café",
      type: "Cozy Modern Café",
      address: "Near Old IMS Road, Opposite Joshi Petrol Pump, Solapur, Maharashtra, India",
      email: "info@thecultstay.com",
      icon: Coffee,
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60825.273859370864!2d75.8472690523744!3d17.6700585824414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5dbc72bf26db5%3A0x4dca8e87d1701a6c!2sThe%20Cult%20Banquet!5e0!3m2!1sen!2sin!4v1753090468995!5m2!1sen!2sin"
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF7]">
      {/* Hero Section */}
      <motion.section
        className="py-20 md:py-28 px-4 bg-gradient-to-b from-gray-50 to-white"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div variants={fadeInUp}>
            <h1 className="text-3xl sm:text-4xl md:text-7xl max-w-4xl mx-auto text-black mb-6 md:mb-8 font-medium text-center">
              Reach Out. Relax. Revel in Cult Hospitality.
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed text-center">
              Whether you're planning a dreamy stay, a soulful brunch, or a grand celebration — we’re just a message away. Let’s craft memorable moments together in Solapur’s most refined spaces.
            </p>
          </motion.div>


          {/* Contact Info */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-12 justify-center items-center my-20 font-medium"
          >
            <div className="flex items-center space-x-3">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                <Phone className="size-7 text-blue-600" />
              </div>
              <div className="text-left">
                <p className="text-xl text-black/70 tracking-wide">Call Us</p>
                <a
                  href="tel:+917888172579"
                  className="text-2xl font-medium text-gray-900"
                >
                  +91 78881 72579
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
                <Mail className="size-7 text-purple-600" />
              </div>
              <div className="text-left">
                <p className="text-xl text-black/70 tracking-wide">Email Us</p>
                <a
                  href="mailto:info@thecultstay.com"
                  className="text-2xl font-medium text-gray-900"
                >
                  info@thecultstay.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Locations Section */}
      <motion.section
        className="py-16 px-4 bg-gradient-to-br from-[#FFFDF7] to-[#F3F4F6]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold text-center text-gray-900 mb-12 tracking-tight">Our Locations in Solapur</h2>
          <div className="space-y-12">
            {locations.map((location, index) => {
              const IconComponent = location.icon;
              const isEven = index % 2 === 0;
              // Badge text based on type
              let badge = '';
              if (location.name.includes('Stay')) badge = 'Hotel';
              else if (location.name.includes('Café')) badge = 'Café';
              else if (location.name.includes('Banquet')) badge = 'Banquet';
              else if (location.name.includes('Kitchen')) badge = 'Shop';

              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  title={badge}
                  id={badge} // Add id for HTML anchor navigation
                  className="relative flex flex-col lg:flex-row gap-8 items-stretch bg-white rounded-2xl shadow-xl p-6 lg:p-10 border border-gray-100 transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl group"
                >
                  {/* Badge */}
                  <span className="absolute top-6 right-6 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold shadow group-hover:bg-blue-200 group-hover:text-blue-900 transition-colors">{badge}</span>
                  {/* Info Card */}
                  <div className={`flex-1 flex flex-col justify-between ${isEven ? '' : 'lg:order-2'}`}>
                    <div>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`w-14 h-14 ${location.iconBg} rounded-lg flex items-center justify-center`}>
                          <IconComponent className={`w-7 h-7 ${location.iconColor}`} />
                        </div>
                        <div>
                          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                            {location.name}
                          </h2>
                          <p className="text-base md:text-lg text-gray-600">
                            {location.type}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-3 pl-2">
                        <div className="flex items-start space-x-2">
                          <MapPin className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                            {location.address}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          <a
                            href={`mailto:${location.email}`}
                            className="text-blue-600 font-medium text-base md:text-lg hover:underline"
                          >
                            {location.email}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="pt-6 pl-2">
                      <a
                        href="tel:+917888172579"
                        className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold shadow hover:bg-gray-800 transition-colors text-base md:text-lg"
                      >
                        <Phone className="w-5 h-5" />
                        <span>Call Now</span>
                      </a>
                    </div>
                  </div>
                  {/* Map */}
                  <div className={`flex-1 flex items-center justify-center ${isEven ? '' : 'lg:order-1'}`}>
                    <Card className="w-full h-full shadow-none border-0 bg-transparent">
                      <CardContent className="p-0 overflow-hidden rounded-xl">
                        <div className="aspect-video rounded-xl overflow-hidden min-w-[250px] min-h-[250px] max-h-[350px]">
                          <iframe
                            src={location.mapUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '250px', minWidth: '250px' }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`${location.name} Location`}
                            allowFullScreen
                          ></iframe>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Footer CTA */}
      <motion.section
        className="py-20 px-4 min-h-screen flex items-center bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={fadeInUp}>
            <h3 className="text-3xl md:text-7xl font-semibold text-gray-900 mb-6">
              Ready to Experience Cult Hospitality?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're planning a stay, craving artisanal coffee, organizing an event, or seeking healthy food options, we're here to serve you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917888172579"
                className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Us Now</span>
              </a>
              <a
                href="mailto:info@thecultstay.com"
                className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Send Email</span>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;