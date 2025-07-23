import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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

type Location = {
  name: string;
  type: string;
  address: string;
  email: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  mapUrl: string;
  phone?: string;
};

type ContactLocationsProps = {
  locations: Location[];
};

export default function ContactLocations({ locations }: ContactLocationsProps) {
  return (
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
          {locations.map((location: Location, index: number) => {
            const IconComponent = location.icon;
            const isEven = index % 2 === 0;
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
                id={badge}
                className="relative flex flex-col lg:flex-row gap-8 items-stretch bg-white rounded-2xl shadow-xl p-6 lg:p-10 border border-gray-100 transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl group"
              >
                <span className="absolute top-6 right-6 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold shadow group-hover:bg-blue-200 group-hover:text-blue-900 transition-colors">{badge}</span>
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
                      {location.phone && (
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-base text-gray-700 font-semibold">Mobile:</span>
                          <a href={`tel:${location.phone}`} className="text-blue-600 underline font-medium">{location.phone}</a>
                          <a href={`tel:${location.phone}`} className="ml-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm font-semibold">Call</a>
                        </div>
                      )}
                      <div className="flex items-start space-x-2">
                        <MapPin className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                          {location.address}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <a href={`mailto:${location.email}`} className="text-blue-600 font-medium text-base md:text-lg hover:underline">
                          {location.email}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 pl-2">
                    <a href={`tel:${location.phone || '+919545406070'}`} className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold shadow hover:bg-gray-800 transition-colors text-base md:text-lg">
                      <Phone className="w-5 h-5" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
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
  );
}
