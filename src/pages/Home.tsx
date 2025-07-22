import {
  Star,
  Shield,
  Heart,
  Calendar,
  ChefHat,
  Building,
  Coffee,
} from 'lucide-react';

import HeroSection from '@/components/groups/home/HeroSection';
import BrandIntroduction from '@/components/groups/home/BrandIntroduction';
import WhyChooseUs, { type Feature } from '@/components/groups/home/WhyChooseUs';
import TestimonialsSection, { type Testimonial } from '@/components/groups/home/TestimonialsSection';
import CallToAction from '@/components/groups/home/CallToAction';
import OurOfferings, { type Offering } from '@/components/groups/home/OurOfferings';


// Brand offerings data
const offerings: Offering[] = [
  {
    id: 1,
    title: "The Cult Stay",
    description: "Luxury boutique hotels crafted for discerning travelers",
    icon: Building,
    image: "/assets/images/bedroom.png",
    gradient: "from-amber-100 to-amber-50"
  },
  {
    id: 2,
    title: "The Cult Banquet",
    description: "Exclusive event venues for memorable celebrations",
    icon: Calendar,
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=300&fit=crop",
    gradient: "from-rose-100 to-rose-50"
  },
  {
    id: 3,
    title: "The Cults Kitchen",
    description: "Fine dining experiences by world-class chefs",
    icon: ChefHat,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
    gradient: "from-emerald-100 to-emerald-50"
  },
  {
    id: 4,
    title: "The Cults Café & Bistro",
    description: "Cozy café experiences in elegant settings",
    icon: Coffee,
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop",
    gradient: "from-blue-100 to-blue-50"
  }
];

// Features data
const features: Feature[] = [
  {
    icon: Star,
    title: "Personalized Luxury",
    description: "Tailored experiences that exceed expectations"
  },
  {
    icon: Shield,
    title: "Trusted Excellence",
    description: "Consistent quality across all our venues"
  },
  {
    icon: Heart,
    title: "Emotional Connection",
    description: "Creating memories that last a lifetime"
  }
];

// Testimonials data
const testimonials: Testimonial[] = [
  {
    quote: "Spacious rooms, EV charging facility, and Amar’s warm breakfast service made our stay super comfortable and memorable. Highly recommended for families!",
    name: "Adithya Bhat",
    designation: "Family Traveler",
    src: "/assets/images/aditya.png"
  },
  {
    quote: "Delicious Maharashtrian food and top-notch hospitality by Amar and the entire team. Truly a place that feels like home away from home.",
    name: "Shubham Agarwal",
    designation: "Family Guest",
    src: "/assets/images/shubham.png"
  },
  {
    quote: "Impeccably clean rooms, stunning design, and exceptional hospitality from Shrikant and Kiran. The breakfast was a standout! Can’t wait to return!",
    name: "Naresh Mhaske",
    designation: "Guest",
    src: "/assets/images/naresh.png"
  }
]






const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-rose-50">
      <HeroSection />
      <BrandIntroduction />
      <OurOfferings offerings={offerings} />
      <WhyChooseUs features={features} />
      <TestimonialsSection testimonials={testimonials} />
      <CallToAction />
    </div>
  );
};

export default Home;