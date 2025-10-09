import {
  Star,
  Shield,
  Heart,
  Coffee,
  Wheat,
} from 'lucide-react';

import HeroSection from '@/components/groups/home/HeroSection';
import BrandIntroduction from '@/components/groups/home/BrandIntroduction';
import WhyChooseUs from '@/components/groups/home/WhyChooseUs';
import CallToAction from '@/components/groups/home/CallToAction';
import OurOfferings from '@/components/groups/home/OurOfferings';



// Centralized Home page content
const content = {
  hero: {
    guests: "3.5lacks+ Delighted Guests",
    heading: ["The Cult", "Hospitality"],
    subtitle: "Where hospitality transforms into",
    typewriterWords: ["experiences", "stories", "elegance", "growth", "moments"],
    rating: {
      value: 5.0,
      label: "Exquisite Hospitality"
    },
    cta: {
      label: "Explore Our Properties",
      link: "/brands"
    },
    video: {
      title: "Our Story",
      description: "A journey of passion, purpose, and partnerships"
    }
  },

  brandIntroduction: {
    badge: "WHO WE ARE",
    heading: ["Creating Boutique Hospitality", " That Leaves a Mark"],
    gradient: "text-blue-800",
    paragraphs: [
      "The Cult Hospitality is a premier hospitality group dedicated to redefining industry standards with unparalleled experiences and personalized service across a diverse array of brands. Our mission is to offer exceptional stays, dining, and event experiences, ensuring every guest enjoys world-class hospitality.",
      "Whether you're a traveler seeking soulful stays or a property owner seeking professional hotel management, The Cult is where authenticity meets excellence.",
      "With every brand we build, we don't just provide hospitality — we shape culture, create connections, and deliver results that go beyond rooms and rates."
    ],
    image: "/assets/images/bedroom.png",
    imageAlt: "Cult Hospitality Signature Room"
  },

  offerings: [
    {
      id: 1,
      title: "The Cult Stay",
      description: "Boutique hotel experiences curated for comfort and culture.",
      icon: () => (<img src="/assets/images/logo_cult_stay.jpg" alt="The Cult Stay" className='h-12 object-contain' />),
      image: "/assets/images/bedroom.png",
      gradient: "from-blue-100 to-blue-50"
    },
    {
      id: 2,
      title: "The Cult Banquet",
      description: "Premium event venues for weddings, gatherings, and milestones.",
      icon: () => (<img src="/assets/images/cult-banquet-logo.png" alt="The Cult Banquet" className='h-12 object-contain' />),
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=300&fit=crop",
      gradient: "from-blue-100 to-blue-50"
    },
    {
      id: 4,
      title: "The Cult's Cafe",
      description: "Charming spaces for coffee, calm, and conversations.",
      icon: () => (<img src="/assets/images/cult-cafe-logo.png" alt="The Cult Banquet" className='h-12 object-contain' />),
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop",
      gradient: "from-blue-100 to-blue-50"
    },
    {
      id: 3,
      title: "Cloud Kitchens",
      description: "A new era of delivery-first dining, powered by The Cult Hospitality.",
      icon: () => (<img src="/assets/images/cult-kitchen-logo.png" alt="The Cult's Kitchen" className='w-8 h-8 object-contain' />),
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
      gradient: "from-blue-100 to-blue-50",
      subOfferings: [
        {
          id: 3.1,
          title: "The Cult's Kitchen",
          description: "Elevated dining with seasonal menus and conscious cooking.",
          icon: () => (<img src="/assets/images/cult-kitchen-logo.png" alt="The Cult's Kitchen" className='w-8 h-8 object-contain' />),
          image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
          gradient: "from-blue-100 to-blue-50"
        },
        {
          id: 3.2,
          title: "The Thali Spot",
          description: "Authentic, home-style Indian thalis delivered fresh to your door.",
          icon: () => (<img src="/assets/images/cult-kitchen-logo.png" alt="The Cult's Kitchen" className='w-8 h-8 object-contain' />),
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
          gradient: "from-yellow-100 to-yellow-50"
        }
      ]
    },
    {
      id: 5,
      title: "Cult Organics",
      description: "Premium organic products for a healthier lifestyle.",
      icon: () => (<img src="/assets/images/cults-nuts-n-millets.png" alt="The Cult's Kitchen" className='w-8 h-8 object-contain' />),
      image: "/assets/images/cult-nuts.png",
      gradient: "from-yellow-100 to-yellow-50",
      subOfferings: [
        {
          id: 5.11,
          title: "Nuts & Millets",
          description: "Premium quality nuts and ancient millets sourced from the finest locations for modern nutrition and wellness.",
          icon: () => (<img src="/assets/images/cults-nuts-n-millets.png" alt="The Cult's Kitchen" className='w-8 h-8 object-contain' />),
          image: "/assets/images/cult-nuts.png",
          gradient: "from-amber-100 to-yellow-50"
        }
      ]
    },
    {
      id: 6,
      title: "Cult Foundation",
      description: "Community-driven initiatives for sustainable development.",
      icon: () => (<img src="/assets/images/social-logo.png" alt="Cult Foundation" className='h-12' />),
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
      gradient: "from-pink-100 to-pink-50",
      subOfferings: [
        {
          id: 6.1,
          title: "Tree Plantation",
          description: "Greening initiatives for a sustainable future.",
          icon: () => (<img src="/assets/images/social-logo.png" alt="Cult Foundation" className='h-12' />),
          image: "https://images.pexels.com/photos/5029853/pexels-photo-5029853.jpeg",
          gradient: "from-green-100 to-green-50"

        },
        {
          id: 6.12,
          title: "Seed Balls",
          description: "Innovative approach to reforestation and environmental conservation.",
          icon: () => (<img src="/assets/images/social-logo.png" alt="Cult Foundation" className='h-12' />),
          image: "https://images.pexels.com/photos/8543605/pexels-photo-8543605.jpeg?_gl=1*b84a3q*_ga*MTY5MDEyNTQyMS4xNzU2ODg5NTQw*_ga_8JE65Q40S6*czE3NTk5MDc0OTMkbzIkZzEkdDE3NTk5MDc3NDYkajU5JGwwJGgw",
          gradient: "from-emerald-100 to-emerald-50"
        }
      ]
    }
  ],
  // offerings: [
  //   {
  //     id: 1,
  //     title: "The Cult Stay",
  //     description: "Boutique hotel experiences curated for comfort and culture.",
  //     icon: Building,
  //     image: "/assets/images/bedroom.png",
  //     gradient: "from-amber-100 to-amber-50"
  //   },
  //   {
  //     id: 2,
  //     title: "The Cult Banquet",
  //     description: "Premium event venues for weddings, gatherings, and milestones.",
  //     icon: Calendar,
  //     image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=300&fit=crop",
  //     gradient: "from-rose-100 to-rose-50"
  //   },
  //   {
  //     id: 4,
  //     title: "The Cult's Cafe",
  //     description: "Charming spaces for coffee, calm, and conversations.",
  //     icon: Coffee,
  //     image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop",
  //     gradient: "from-blue-100 to-blue-50"
  //   },
  //   {
  //     id: 3,
  //     title: "Cloud Kitchens",
  //     description: "A new era of delivery-first dining, powered by The Cult Hospitality.",
  //     icon: ChefHat,
  //     image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
  //     gradient: "from-emerald-100 to-emerald-50",
  //     subOfferings: [
  //       {
  //         id: 3.1,
  //         title: "The Cult's Kitchen",
  //         description: "Elevated dining with seasonal menus and conscious cooking.",
  //         icon: ChefHat,
  //         image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
  //         gradient: "from-emerald-100 to-emerald-50"
  //       },
  //       {
  //         id: 3.2,
  //         title: "The Thali Spot",
  //         description: "Authentic, home-style Indian thalis delivered fresh to your door.",
  //         icon: Wheat,
  //         image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
  //         gradient: "from-yellow-100 to-yellow-50"
  //       }
  //     ]
  //   },
  //   {
  //     id: 5,
  //     title: "Other Initiatives by Cult",
  //     description: "Expanding our impact through sustainable and wellness-focused ventures.",
  //     icon: Leaf,
  //     image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
  //     gradient: "from-green-100 to-green-50",
  //     subOfferings: [
  //       {
  //         id: 5.1,
  //         title: "Cult Organics",
  //         description: "Premium organic products for a healthier lifestyle.",
  //         icon: Wheat,
  //         image: "/assets/images/cult-nuts.png",
  //         gradient: "from-yellow-100 to-yellow-50",
  //         subOfferings: [
  //           {
  //             id: 5.11,
  //             title: "Nuts & Millets",
  //             description: "Premium quality nuts and ancient millets sourced from the finest locations for modern nutrition and wellness.",
  //             icon: Wheat,
  //             image: "/assets/images/cult-nuts.png",
  //             gradient: "from-amber-100 to-yellow-50"
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     id: 6,
  //     title: "Social Activities",
  //     description: "Making a positive impact on communities and the environment.",
  //     icon: Sprout,
  //     image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
  //     gradient: "from-teal-100 to-teal-50",
  //     subOfferings: [
  //       {
  //         id: 6.1,
  //         title: "Cult Foundation",
  //         description: "Community-driven initiatives for sustainable development.",
  //         icon: Heart,
  //         image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
  //         gradient: "from-pink-100 to-pink-50",
  //         subOfferings: [
  //           {
  //             id: 6.11,
  //             title: "Tree Plantation",
  //             description: "Greening initiatives for a sustainable future.",
  //             icon: Sprout,
  //             image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
  //             gradient: "from-green-100 to-green-50"
  //           },
  //           {
  //             id: 6.12,
  //             title: "Seed Balls",
  //             description: "Innovative approach to reforestation and environmental conservation.",
  //             icon: Leaf,
  //             image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
  //             gradient: "from-emerald-100 to-emerald-50"
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // ],

  features: [
    {
      icon: Star,
      title: "Tailored Hospitality",
      description: "Each brand is designed to reflect its own charm and story."
    },
    {
      icon: Shield,
      title: "Operational Excellence",
      description: "We bring efficiency, trust, and innovation to every property."
    },
    {
      icon: Heart,
      title: "Guest-Centric Philosophy",
      description: "Our experiences are designed around people — not processes."
    }
  ],

  testimonials: [
    {
      quote: "Spacious rooms, EV charging, and Amar's warm breakfast service made our stay super comfortable and memorable. Highly recommended for families!",
      name: "Adithya Bhat",
      designation: "Family Traveler",
      src: "/assets/images/aditya.png"
    },
    {
      quote: "Delicious Maharashtrian food and top-notch hospitality by Amar and team. Truly a place that feels like home away from home.",
      name: "Shubham Agarwal",
      designation: "Frequent Guest",
      src: "/assets/images/shubham.png"
    },
    {
      quote: "Impeccably clean rooms, stunning design, and exceptional hospitality from Shrikant and Kiran. The breakfast was a standout! Can't wait to return!",
      name: "Naresh Mhaske",
      designation: "Leisure Guest",
      src: "/assets/images/naresh.png"
    }
  ],
  callToAction: {
    badge: "PARTNER WITH THE CULT",
    heading: ["Transform Your Property", " Into Excellence"],
    gradient: "text-blue-800",
    description: "Own a hotel or property? Let us handle your hospitality operations with our proven management expertise and turn your property into a profitable, guest-loved destination.",
    inputPlaceholder: "Enter your business email",
    button: {
      default: "Partner With Us",
      submitted: "Submission Received"
    },
    error: {
      empty: "Please enter your email.",
      invalid: "Please enter a valid email address."
    },
    success: "We'll contact you within 24 hours to discuss partnership opportunities!"
  }
};



const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection content={content.hero} />
      <BrandIntroduction content={content.brandIntroduction} />
      <OurOfferings offerings={content.offerings} />
      <WhyChooseUs features={content.features} />
      {/* <TestimonialsSection testimonials={content.testimonials} /> */}
      <CallToAction content={content.callToAction} />
    </div>
  );
};

export default Home;