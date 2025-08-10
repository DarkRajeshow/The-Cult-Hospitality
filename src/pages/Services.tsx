import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Shield, 
  Building, 
  TrendingUp, 
  Star, 
  Zap, 
  Users, 
  CheckCircle, 
  Award, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';
import CardSpotlight from '@/components/groups/about/CardSpotlight';
import { BackgroundBeams } from '@/components/ui/background-beams';

const servicesContent = {
  hero: {
    heading: "Join The Cult – Partner With Us",
    subheading: "Grow with The Cult Hospitality",
    description: "The Cult Hospitality is more than a hospitality brand – it's a movement to redefine the guest experience through personalized service, design-forward properties, and operational excellence. Whether you're a property owner, developer, or entrepreneur, our proven model and powerful brand can help you unlock your property's full potential."
  },

  whyPartner: {
    title: "Why Partner With The Cult Hospitality?",
    benefits: [
      {
        icon: Shield,
        title: "Strong Brand Identity",
        description: "Our portfolio – from The Cult Stay to The Cult Banquet, Cults Kitchen, and Cults Café – stands for quality, innovation, and elevated guest experiences."
      },
      {
        icon: Building,
        title: "Turnkey Hospitality Solutions",
        description: "We offer complete hotel management, branding, technology, and F&B solutions to help you build, launch, or transform your property."
      },
      {
        icon: TrendingUp,
        title: "Revenue-First Approach",
        description: "Our team specializes in revenue management, dynamic pricing, and digital marketing to maximize your profitability from day one."
      },
      {
        icon: Star,
        title: "Personalized Design & Experience",
        description: "We don't just manage properties; we curate experiences. Our designers, architects, and guest experience specialists work together to align your property with modern lifestyle trends."
      },
      {
        icon: Zap,
        title: "Technology-Driven Operations",
        description: "We empower properties with cloud-based PMS, smart check-in systems, automated reporting, and AI-backed guest engagement tools."
      }
    ]
  },

  whoCanJoin: {
    title: "Who Can Join?",
    description: "We partner with:",
    partners: [
      "Boutique hotel owners",
      "Unbranded hotels looking for a makeover",
      "New property developers",
      "Standalone banquet halls or event spaces",
      "F&B concepts seeking scaling or restructuring",
      "Investors interested in asset-light partnerships"
    ]
  },

  partnershipModels: {
    title: "Our Models of Partnership",
    models: [
      {
        icon: Building,
        title: "Full Management Contract",
        description: "Let The Cult Hospitality fully operate and manage your property under The Cult brand, with shared revenue and full operational support.",
        features: ["Complete operational control", "Shared revenue model", "Full brand integration", "24/7 management support"]
      },
      {
        icon: Users,
        title: "Branding & Operations Support",
        description: "Keep ownership, but benefit from our brand, SOPs, tech stack, and team training to boost guest satisfaction and revenue.",
        features: ["Brand licensing", "SOP implementation", "Tech stack access", "Team training programs"]
      },
      {
        icon: TrendingUp,
        title: "Franchise Model",
        description: "Own your business but operate under The Cult Hospitality's flag, systems, and reputation.",
        features: ["Coming soon", "Franchise agreement", "System access", "Brand reputation"]
      }
    ]
  },

  whatYouGet: {
    title: "What You Get With Us",
    services: [
      "Branding & Interior Concept Design",
      "24x7 Revenue & Reservation Management",
      "Tech Suite (PMS + CRM + Channel Manager)",
      "Professional F&B Curation & Management",
      "Marketing, PR & Influencer Campaigns",
      "HR, Training & SOP Implementation",
      "Access to Preferred Vendors & Partnerships"
    ]
  },

  cta: {
    heading: "Partner With Passion – Build With Cult",
    description: "We're always looking to collaborate with passionate owners who share our commitment to design, service, and operational excellence.",
    contact: {
      email: "partnerships@theculthospitality.com",
      phone: "+91 72830 72930",
      website: "www.theculthospitality.com"
    }
  }
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-rose-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <BackgroundBeams className="absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-gray-900 mb-6">
                {servicesContent.hero.heading}
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-blue-600 mb-6">
                {servicesContent.hero.subheading}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                {servicesContent.hero.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
                {servicesContent.whyPartner.title}
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesContent.whyPartner.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CardSpotlight className="p-8 h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardSpotlight>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Join Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
                {servicesContent.whoCanJoin.title}
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                {servicesContent.whoCanJoin.description}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {servicesContent.whoCanJoin.partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{partner}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Models Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
                {servicesContent.partnershipModels.title}
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {servicesContent.partnershipModels.models.map((model, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <CardSpotlight className="p-8 h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                      <model.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {model.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {model.description}
                    </p>
                    <ul className="space-y-2">
                      {model.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardSpotlight>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
                {servicesContent.whatYouGet.title}
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {servicesContent.whatYouGet.services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <Award className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
                {servicesContent.cta.heading}
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                {servicesContent.cta.description}
              </p>
              
              <div className="grid md:flex justify-between gap-4 mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>{servicesContent.cta.contact.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>{servicesContent.cta.contact.phone}</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="w-5 h-5" />
                  <span>{servicesContent.cta.contact.website}</span>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-medium"
              >
                Fill the Partnership Inquiry Form
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;