import { motion } from 'framer-motion';
import {
  Coffee,
  Leaf,
  Star,
  Award,
  Users,
  Heart,
  Zap,
  Wheat,
  Sprout
} from 'lucide-react';
import CardSpotlight from '@/components/groups/about/CardSpotlight';
import { BackgroundBeams } from '@/components/ui/background-beams';

// Type definitions
interface Brand {
  id: number;
  name: string;
  type: string;
  description: string;
  icon: any;
  image: string;
  features: string[];
  gradient: string;
  subBrands?: Brand[];
}

const brandsContent = {
  hero: {
    heading: "Discover Our Distinctive Brands Shaping the Future of Hospitality Experiences",
    subheading: "A diverse portfolio of hospitality excellence",
    description: "The Cult Hospitality manages a comprehensive portfolio of brands, each designed to deliver exceptional experiences in their respective domains. From boutique stays to culinary excellence, we create memorable moments for every guest."
  },

  brands: [
    {
      id: 1,
      name: "The Cult Stay",
      type: "Boutique Hotel Brand",
      description: "Boutique hotel experiences curated for comfort and culture.",
      icon: () => (<img src="/assets/images/logo_cult_stay.jpg" alt="The Cult Stay" className='h-10 object-contain' />),
      image: "/assets/images/bedroom.png",
      features: [
        "Contemporary elegance and comfort",
        "High-end amenities",
        "Personalized service",
        "Memorable stay experiences"
      ],
      gradient: "from-amber-500 to-orange-600"
    },
    {
      id: 2,
      name: "The Cult Banquet",
      type: "Premier Event Space",
      description: "Premium event venues for weddings, gatherings, and milestones.",
      icon: () => (<img src="/assets/images/cult-banquet-logo.png" alt="The Cult Banquet" className='h-10 object-contain' />),
      image: "/assets/images/cult-banquet.png",
      features: [
        "Cutting-edge technology",
        "Customizable interiors",
        "Wedding and corporate events",
        "Flawless execution"
      ],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      name: "The Cult's Cafe",
      type: "Cozy Café Experience",
      description: "Charming spaces for coffee, calm, and conversations.",
      icon: () => (<img src="/assets/images/cult-cafe-logo.png" alt="The Cult Banquet" className='h-10 object-contain' />),
      image: "/assets/images/cult-cafe.png",
      features: [
        "Artisanal coffees",
        "Freshly baked goods",
        "Bistro classics",
        "Casual dining atmosphere"
      ],
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      id: 4,
      name: "Cloud Kitchens",
      type: "Delivery-First Dining",
      description: "A new era of delivery-first dining, powered by The Cult Hospitality.",
      icon: () => (<img src="/assets/images/cult-kitchen-logo.png" alt="The Cult's Kitchen" className='w-8 h-8 object-contain' />),
      image: "/assets/images/cults-kitchen.png",
      features: [
        "Delivery-first approach",
        "Multiple culinary concepts",
        "Quality food delivery",
        "Innovative dining solutions"
      ],
      gradient: "from-emerald-500 to-green-600",
      subBrands: [
        {
          id: 4.1,
          name: "The Cult's Kitchen",
          type: "Elevated Dining",
          description: "Elevated dining with seasonal menus and conscious cooking.",
          icon: () => (<img src="/assets/images/cult-kitchen-logo.png" alt="The Cult's Kitchen" className='w-8 h-8 object-contain' />),
          image: "/assets/images/cults-kitchen.png",
          features: [
            "Seasonal menus",
            "Conscious cooking",
            "Elevated dining experience",
            "Fresh ingredients"
          ],
          gradient: "from-emerald-500 to-green-600"
        },
        {
          id: 4.2,
          name: "The Thali Spot",
          type: "Authentic Indian Thalis",
          description: "Authentic, home-style Indian thalis delivered fresh to your door.",
          icon: () => (<img src="/assets/images/cult-kitchen-logo.png" alt="The Cult's Kitchen" className='w-8 h-8 object-contain' />),
          image: "/assets/images/cults-kitchen.png",
          features: [
            "Home-style Indian thalis",
            "Authentic recipes",
            "Fresh delivery",
            "Traditional flavors"
          ],
          gradient: "from-yellow-500 to-amber-600"
        }
      ]
    },
    {
      id: 5,
      name: "Other Initiatives by Cult",
      type: "Sustainable Ventures",
      description: "Expanding our impact through sustainable and wellness-focused ventures.",
      icon: () => (<img src="/assets/images/cults-nuts-n-millets.png" alt="The Cult's Kitchen" className='w-8 h-8 object-contain' />),
      image: "/assets/images/cult-nuts.png",
      features: [
        "Sustainable practices",
        "Wellness-focused products",
        "Organic offerings",
        "Health-conscious choices"
      ],
      gradient: "from-green-500 to-emerald-600",
      subBrands: [
        {
          id: 5.1,
          name: "Cult Organics",
          type: "Premium Organic Products",
          description: "Premium organic products for a healthier lifestyle.",
          icon: () => (<img src="/assets/images/cults-nuts-n-millets.png" alt="The Cult's Kitchen" className='w-8 h-8 object-contain' />),
          image: "/assets/images/cult-nuts.png",
          features: [
            "Premium organic products",
            "Healthier lifestyle focus",
            "Quality ingredients",
            "Sustainable sourcing"
          ],
          gradient: "from-yellow-500 to-amber-600",
          subBrands: [
            {
              id: 5.11,
              name: "Nuts & Millets",
              type: "Premium Nutrition",
              description: "Premium quality nuts and ancient millets sourced from the finest locations for modern nutrition and wellness.",
              icon: () => (<img src="/assets/images/cults-nuts-n-millets.png" alt="The Cult's Kitchen" className='w-8 h-8 object-contain' />),
              image: "/assets/images/cult-nuts.png",
              features: [
                "Premium quality nuts",
                "Ancient millets",
                "Modern nutrition",
                "Wellness focus"
              ],
              gradient: "from-amber-500 to-yellow-600"
            }
          ]
        }
      ]
    },
    {
      id: 6,
      name: "Social Activities",
      type: "Community Impact",
      description: "Making a positive impact on communities and the environment.",
      icon: () => (<img src="/assets/images/social-logo.png" alt="Cult Foundation" className='h-10' />),
      image: "/assets/images/story.png",
      features: [
        "Community development",
        "Environmental conservation",
        "Sustainable initiatives",
        "Positive social impact"
      ],
      gradient: "from-teal-500 to-cyan-600",
      subBrands: [
        {
          id: 6.1,
          name: "Cult Foundation",
          type: "Community Initiatives",
          description: "Community-driven initiatives for sustainable development.",
          icon: () => (<img src="/assets/images/social-logo.png" alt="Cult Foundation" className='h-10' />),
          image: "/assets/images/story.png",
          features: [
            "Community-driven initiatives",
            "Sustainable development",
            "Social responsibility",
            "Local impact"
          ],
          gradient: "from-pink-500 to-rose-600",
          subBrands: [
            {
              id: 6.11,
              name: "Tree Plantation",
              type: "Greening Initiatives",
              description: "Greening initiatives for a sustainable future.",
              icon: () => (<img src="/assets/images/social-logo.png" alt="Cult Foundation" className='h-10' />),
              image: "/assets/images/story.png",
              features: [
                "Tree plantation drives",
                "Sustainable future",
                "Environmental awareness",
                "Green initiatives"
              ],
              gradient: "from-green-500 to-emerald-600"
            },
            {
              id: 6.12,
              name: "Seed Balls",
              type: "Reforestation",
              description: "Innovative approach to reforestation and environmental conservation.",
              icon: () => (<img src="/assets/images/social-logo.png" alt="Cult Foundation" className='h-10' />),
              image: "/assets/images/story.png",
              features: [
                "Innovative reforestation",
                "Environmental conservation",
                "Seed ball technology",
                "Eco-friendly approach"
              ],
              gradient: "from-emerald-500 to-green-600"
            }
          ]
        }
      ]
    }
  ] as Brand[],

  values: {
    title: "What Makes Our Brands Special",
    description: "Each brand in our portfolio is built on a foundation of excellence, innovation, and guest-centric service.",
    points: [
      {
        icon: Star,
        title: "Excellence",
        description: "Striving for perfection in all aspects of hospitality"
      },
      {
        icon: Zap,
        title: "Innovation",
        description: "Continuously enhancing guest experiences through creativity"
      },
      {
        icon: Heart,
        title: "Guest-Centric",
        description: "Prioritizing guest satisfaction and personalization"
      },
      {
        icon: Users,
        title: "Community",
        description: "Supporting local businesses and initiatives"
      }
    ]
  },

  cta: {
    heading: "Experience The Cult Difference",
    description: "Whether you're a guest seeking exceptional experiences or a property owner looking to partner with us, we're here to create something extraordinary.",
    contact: {
      email: "partners@theculthospitality.com",
      phone: "+91 72830 72930"
    }
  }
};



const BrandsPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <BackgroundBeams className="absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center leading-loose">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black mb-4 lg:px-4 sm:mb-6 lg:mb-8 font-medium leading-tight">
                {brandsContent.hero.heading}
              </h1>
              <p className="text-sm md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                {brandsContent.hero.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Brands Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
                Our Core Brands
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Discover our flagship brands that define The Cult Hospitality experience
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {brandsContent.brands.slice(0, 3).map((brand, index) => (
                <motion.div
                  key={brand.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CardSpotlight className="p-6 h-full group transition-transform duration-300">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <brand.icon />
                    </div>
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {brand.name}
                      </h3>
                      <p className="text-blue-600 font-medium mb-3 text-sm">
                        {brand.type}
                      </p>
                      <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                        {brand.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
                      <ul className="space-y-1">
                        {brand.features.map((feature: string, featureIndex: number) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <Award className="w-3 h-3 text-blue-500 flex-shrink-0" />
                            <span className="text-xs lg:text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {brand.image && (
                      <div className="mt-4 rounded-lg overflow-hidden">
                        <img
                          src={brand.image}
                          alt={brand.name}
                          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                  </CardSpotlight>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Kitchens Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
                Cloud Kitchens
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                A new era of delivery-first dining, powered by The Cult Hospitality
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {brandsContent.brands[3].subBrands?.map((subBrand) => (
                <motion.div
                  key={subBrand.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <CardSpotlight className="p-6 h-full group transition-transform duration-300">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <subBrand.icon />
                    </div>

                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {subBrand.name}
                      </h3>
                      <p className="text-blue-600 font-medium mb-3 text-sm">
                        {subBrand.type}
                      </p>
                      <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                        {subBrand.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
                      <ul className="space-y-1">
                        {subBrand.features.map((feature: string, featureIndex: number) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <Award className="w-3 h-3 text-blue-500 flex-shrink-0" />
                            <span className="text-xs lg:text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {subBrand.image && (
                      <div className="mt-4 rounded-lg overflow-hidden">
                        <img
                          src={subBrand.image}
                          alt={subBrand.name}
                          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                  </CardSpotlight>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Initiatives Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
                The Cult Organics
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Expanding our impact through sustainable and wellness-focused ventures
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Cult Organics */}
              {/* <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <CardSpotlight className="p-6 h-full group transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Wheat className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Cult Organics
                    </h3>
                    <p className="text-blue-600 font-medium mb-3 text-sm">
                      Premium Organic Products
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                      Premium organic products for a healthier lifestyle.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center space-x-2">
                        <Award className="w-3 h-3 text-blue-500 flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-gray-600">Premium organic products</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Award className="w-3 h-3 text-blue-500 flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-gray-600">Healthier lifestyle focus</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Award className="w-3 h-3 text-blue-500 flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-gray-600">Quality ingredients</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Award className="w-3 h-3 text-blue-500 flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-gray-600">Sustainable sourcing</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4 rounded-lg overflow-hidden">
                    <img 
                      src="/assets/images/cult-nuts.png" 
                      alt="Cult Organics"
                      className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardSpotlight>
              </motion.div> */}

              {/* Nuts & Millets */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <CardSpotlight className="p-6 h-full group transition-transform duration-300 border-amber-200">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <img src="/assets/images/cults-nuts-n-millets.png" alt="The Cult's Kitchen" className='h-10' />
                  </div>

                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Nuts & Millets
                    </h3>
                    <p className="text-blue-600 font-medium mb-3 text-sm">
                      Premium Nutrition
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                      Premium quality nuts and ancient millets sourced from the finest locations for modern nutrition and wellness.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center space-x-2">
                        <Award className="w-3 h-3 text-blue-500 flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-gray-600">Premium quality nuts</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Award className="w-3 h-3 text-blue-500 flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-gray-600">Ancient millets</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Award className="w-3 h-3 text-blue-500 flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-gray-600">Modern nutrition</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Award className="w-3 h-3 text-blue-500 flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-gray-600">Wellness focus</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4 rounded-lg overflow-hidden">
                    <img
                      src="/assets/images/cult-nuts.png"
                      alt="Nuts & Millets"
                      className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardSpotlight>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Activities Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
                Social Activities
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Making a positive impact on communities and the environment
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Cult Foundation */}
              {/* <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <CardSpotlight className="p-6 h-full group transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Cult Foundation
                    </h3>
                    <p className="text-blue-600 font-medium mb-3 text-sm">
                      Community Initiatives
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                      Community-driven initiatives for sustainable development.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center space-x-2">
                        <Award className="w-3 h-3 text-blue-500 flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-gray-600">Community-driven initiatives</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Award className="w-3 h-3 text-blue-500 flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-gray-600">Sustainable development</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Award className="w-3 h-3 text-blue-500 flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-gray-600">Social responsibility</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Award className="w-3 h-3 text-blue-500 flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-gray-600">Local impact</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4 rounded-lg overflow-hidden">
                    <img 
                      src="/assets/images/story.png" 
                      alt="Cult Foundation"
                      className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardSpotlight>
              </motion.div> */}

              {/* Tree Plantation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <CardSpotlight className="p-6 h-full group transition-transform duration-300 border-green-200">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <img src="/assets/images/social-logo.png" alt="The Cult's Kitchen" className='h-10' />
                  </div>

                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Tree Plantation
                    </h3>
                    <p className="text-blue-600 font-medium mb-3 text-sm">
                      Greening Initiatives
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                      Greening initiatives for a sustainable future.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center space-x-2">
                        <Award className="w-3 h-3 text-blue-500 flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-gray-600">Tree plantation drives</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Award className="w-3 h-3 text-blue-500 flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-gray-600">Sustainable future</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Award className="w-3 h-3 text-blue-500 flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-gray-600">Environmental awareness</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Award className="w-3 h-3 text-blue-500 flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-gray-600">Green initiatives</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4 rounded-lg overflow-hidden">
                    <img
                      src="/assets/images/story.png"
                      alt="Tree Plantation"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardSpotlight>
              </motion.div>

              {/* Seed Balls */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <CardSpotlight className="p-6 h-full group transition-transform duration-300 border-emerald-200">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <img src="/assets/images/social-logo.png" alt="The Cult's Kitchen" className='h-10' />
                  </div>

                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Seed Balls
                    </h3>
                    <p className="text-blue-600 font-medium mb-3 text-sm">
                      Reforestation
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                      Innovative approach to reforestation and environmental conservation.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center space-x-2">
                        <Award className="w-3 h-3 text-blue-500 flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-gray-600">Innovative reforestation</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Award className="w-3 h-3 text-blue-500 flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-gray-600">Environmental conservation</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Award className="w-3 h-3 text-blue-500 flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-gray-600">Seed ball technology</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Award className="w-3 h-3 text-blue-500 flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-gray-600">Eco-friendly approach</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4 rounded-lg overflow-hidden">
                    <img
                      src="/assets/images/story.png"
                      alt="Seed Balls"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardSpotlight>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
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
                {brandsContent.values.title}
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                {brandsContent.values.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {brandsContent.values.points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <point.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
                {brandsContent.cta.heading}
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                {brandsContent.cta.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center justify-center space-x-3">
                  <Coffee className="w-5 h-5" />
                  <span>{brandsContent.cta.contact.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Building className="w-5 h-5" />
                  <span>{brandsContent.cta.contact.phone}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default BrandsPage;
