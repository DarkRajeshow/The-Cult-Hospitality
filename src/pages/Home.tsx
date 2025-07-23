import {
  Star,
  Shield,
  Heart,
  Calendar,
  ChefHat,
  Building,
  Coffee,
  Wheat,
} from 'lucide-react';

import HeroSection from '@/components/groups/home/HeroSection';
import BrandIntroduction from '@/components/groups/home/BrandIntroduction';
import WhyChooseUs from '@/components/groups/home/WhyChooseUs';
import TestimonialsSection from '@/components/groups/home/TestimonialsSection';
import CallToAction from '@/components/groups/home/CallToAction';
import OurOfferings from '@/components/groups/home/OurOfferings';



// Centralized Home page content
const content = {
  hero: {
    location: "Solapur, Maharashtra",
    guests: "10K+ Delighted Guests",
    heading: ["The Cult", "Hospitality"],
    subtitle: "Where hospitality transforms into",
    typewriterWords: ["experiences", "stories", "elegance", "growth", "moments"],
    rating: {
      value: 5.0,
      label: "Exquisite Hospitality"
    },
    cta: {
      label: "Explore Our Properties",
      link: "/services"
    },
    video: {
      title: "Our Story",
      description: "A journey of passion, purpose, and partnerships"
    }
  },

  brandIntroduction: {
    badge: "WHO WE ARE",
    heading: ["Creating Boutique Hospitality", " That Leaves a Mark"],
    gradient: "bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent",
    paragraphs: [
      "The Cult Hospitality is a full-service hospitality firm redefining how boutique properties operate, serve, and scale. Based in Solapur, we manage everything from boutique hotels and event spaces to cafés and wellness retail — crafting guest experiences that feel personal, immersive, and unforgettable.",
      "Whether you're a traveler seeking soulful stays or a property owner seeking professional hotel management, The Cult is where authenticity meets excellence.",
      "With every brand we build, we don’t just provide hospitality — we shape culture, create connections, and deliver results that go beyond rooms and rates."
    ],
    image: "/assets/images/bedroom.png",
    imageAlt: "Cult Hospitality Signature Room"
  },

  offerings: [
    {
      id: 1,
      title: "The Cult Stay",
      description: "Boutique hotel experiences curated for comfort and culture.",
      icon: Building,
      image: "/assets/images/bedroom.png",
      gradient: "from-amber-100 to-amber-50"
    },
    {
      id: 2,
      title: "The Cult Banquet",
      description: "Premium event venues for weddings, gatherings, and milestones.",
      icon: Calendar,
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=300&fit=crop",
      gradient: "from-rose-100 to-rose-50"
    },
    {
      id: 3,
      title: "The Cult Kitchen",
      description: "Elevated dining with seasonal menus and conscious cooking.",
      icon: ChefHat,
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
      gradient: "from-emerald-100 to-emerald-50"
    },
    {
      id: 4,
      title: "The Cult Café & Bistro",
      description: "Charming spaces for coffee, calm, and conversations.",
      icon: Coffee,
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop",
      gradient: "from-blue-100 to-blue-50"
    },
    {
      id: 5,
      title: "Cult Nuts and Millets",
      description: "Premium nuts, millets, and natural foods for a better lifestyle.",
      icon: Wheat,
      image: "/assets/images/cult-nuts.png",
      gradient: "from-yellow-100 to-yellow-50"
    }
  ],
  
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
      quote: "Spacious rooms, EV charging, and Amar’s warm breakfast service made our stay super comfortable and memorable. Highly recommended for families!",
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
      quote: "Impeccably clean rooms, stunning design, and exceptional hospitality from Shrikant and Kiran. The breakfast was a standout! Can’t wait to return!",
      name: "Naresh Mhaske",
      designation: "Leisure Guest",
      src: "/assets/images/naresh.png"
    }
  ],
  callToAction: {
    badge: "READY TO EXPERIENCE THE CULT?",
    heading: ["Let Us Craft Your", " Perfect Experience"],
    gradient: "bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent",
    description: "Whether you're planning a stay, celebration, or dining experience, we're here to make it extraordinary.",
    inputPlaceholder: "Enter your email",
    button: {
      default: "Join Us",
      submitted: "Thank You!"
    },
    error: {
      empty: "Please enter your email.",
      invalid: "Please enter a valid email address."
    },
    success: "We'll be in touch soon with exclusive offers!"
  }
};



const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-rose-50">
      <HeroSection content={content.hero} />
      <BrandIntroduction content={content.brandIntroduction} />
      <OurOfferings offerings={content.offerings} />
      <WhyChooseUs features={content.features} />
      <TestimonialsSection testimonials={content.testimonials} />
      <CallToAction content={content.callToAction} />
    </div>
  );
};

export default Home;