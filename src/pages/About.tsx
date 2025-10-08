import React from 'react';
import AboutHero from '@/components/groups/about/AboutHero';
import MissionSection from '@/components/groups/about/MissionSection';
import StorySection from '@/components/groups/about/StorySection';
import Highlights from '@/components/groups/about/Highlights';
import TeamSection from '@/components/groups/about/TeamSection';
import { Shield, Zap, Award, Heart, Users, Leaf, Target, Star, TrendingUp } from 'lucide-react';
import DepartmentsSection from '@/components/groups/about/DepartmentsSection';

// Content configuration object
const aboutContent = {
  hero: {
    heading: "About The Cult Hospitality",
    subheading: "A premier hospitality group dedicated to redefining industry standards.",
    description:
      "The Cult Hospitality is a premier hospitality group dedicated to redefining industry standards with unparalleled experiences and personalized service across a diverse array of brands. Our mission is to offer exceptional stays, dining, and event experiences, ensuring every guest enjoys world-class hospitality."
  },
  mission: {
    title: "Our Mission",
    description:
      "We're on a mission to offer exceptional stays, dining, and event experiences, ensuring every guest enjoys world-class hospitality while empowering property owners with professional management solutions.",
    highlight: "From design to delivery, we manage what matters most—so you can focus on ownership.",
    values: [
      {
        icon: Award,
        title: "Excellence",
        description: "Striving for perfection in all aspects of hospitality"
      },
      {
        icon: Zap,
        title: "Innovation",
        description: "Continuously enhancing guest experiences through creativity"
      },
      {
        icon: Shield,
        title: "Integrity",
        description: "Operating with honesty and transparency"
      },
      {
        icon: Heart,
        title: "Customer-Centricity",
        description: "Prioritizing guest satisfaction and personalization"
      },
      {
        icon: Leaf,
        title: "Sustainability",
        description: "Committed to eco-friendly practices and responsible sourcing"
      },
      {
        icon: Users,
        title: "Teamwork",
        description: "Encouraging collaboration and inclusivity"
      },
      {
        icon: Target,
        title: "Community",
        description: "Supporting local businesses and initiatives"
      },
      {
        icon: Star,
        title: "Respect",
        description: "Treating everyone with dignity and fairness"
      },
      {
        icon: TrendingUp,
        title: "Passion",
        description: "Infusing dedication and enthusiasm into our work"
      },
      // {
      //   icon: Shield,
      //   title: "Quality",
      //   description: "Ensuring the highest service standards"
      // },
      // {
      //   icon: Zap,
      //   title: "Adaptability",
      //   description: "Responding proactively to industry trends and guest needs"
      // }
    ]
  },
  story: {
    title: "Our Story",
    content:
      "The Cult Hospitality was born out of a vision to transform the hospitality landscape in emerging cities. With a deep understanding of both guest expectations and property owner challenges, we set out to create a comprehensive solution that bridges the gap between luxury experiences and operational efficiency.",
    values:
      "We're not just managing properties—we're building a standard. A Cult standard that stands for trust, growth, and great experiences."
  },
  team: {
    title: "Our Team",
    description: "Our team consists of industry experts committed to delivering excellence:",
    members: [
      {
        name: "Sahil Bhandari",
        role: "Co-Founder & Director",
        description: "Leads with extensive hospitality experience, ensuring innovation and guest satisfaction."
      },
      {
        name: "Siddeshwar Jokare",
        role: "Co-Founder & Director",
        description: "Drives strategic growth and operational excellence across all brands."
      },
      {
        name: "Mahesh Bhandari",
        role: "Mentor",
        description: "Provides strategic vision and invaluable guidance."
      }
    ],
  },
  departments: {
    title: "Our Expert Departments",
    description:
      "Each of our specialized departments plays a critical role in delivering exceptional experiences to our guests. Backed by seasoned professionals, our team ensures excellence in every detail — from warm hospitality to flawless operations.",
    departments: [
      {
        name: "Hospitality & Guest Relations",
        summary:
          "Led by experienced hoteliers, this department ensures every guest enjoys a seamless, personalized, and luxurious experience from check-in to check-out.",
        keyResponsibilities: [
          "Oversee front-of-house operations",
          "Deliver tailored services to exceed guest expectations",
          "Maintain consistently high standards of service and professionalism"
        ]
      },
      {
        name: "Event Planning & Coordination",
        summary:
          "Our creative and detail-oriented planners bring each event to life with precision, offering customized solutions for both private and corporate gatherings.",
        keyResponsibilities: [
          "Design and manage end-to-end event experiences",
          "Coordinate with vendors, suppliers, and internal teams",
          "Ensure flawless execution and guest satisfaction"
        ]
      },
      {
        name: "Culinary Arts & Dining",
        summary:
          "Our chefs and culinary experts deliver exceptional, innovative cuisine crafted with the finest ingredients and a passion for gastronomic excellence.",
        keyResponsibilities: [
          "Curate dynamic and seasonal menus",
          "Ensure high-quality preparation and presentation",
          "Incorporate guest feedback into culinary innovation"
        ]
      },
      {
        name: "Customer Service & Concierge",
        summary:
          "Dedicated to exceeding expectations, our customer service professionals ensure every interaction is warm, responsive, and attentive to individual needs.",
        keyResponsibilities: [
          "Provide expert knowledge and local recommendations",
          "Resolve guest inquiries and concerns promptly",
          "Create memorable, guest-centric experiences"
        ]
      },
      {
        name: "Facilities & Support Services",
        summary:
          "Behind the scenes, our support staff uphold the highest standards of safety, cleanliness, and operational efficiency to maintain guest comfort.",
        keyResponsibilities: [
          "Manage housekeeping and maintenance operations",
          "Ensure compliance with safety and hygiene standards",
          "Support all departments with seamless back-of-house operations"
        ]
      }
    ]
  },
  highlights: [
    {
      number: "4",
      title: "Brands Managed",
      description: "From hotels to cafés—each brand is uniquely positioned but centrally optimized"
    },
    {
      number: "100%",
      title: "Tech-Enabled",
      description: "We run on data, automation, and guest-first digital experiences"
    },
    {
      number: "1",
      title: "City Presence",
      description: "Deep focus on Solapur, with plans to scale to similar high-potential cities"
    },
    {
      number: "95.5%",
      title: "Success Rate",
      description: "Consistent guest satisfaction and operational excellence"
    }
  ],
  cta: {
    heading: "Let's Redefine Hospitality Together",
    subtext:
      "Own a property? Let's talk. We partner with forward-thinking owners to co-create remarkable guest experiences and profitable operations.",
    buttonText: "Partner With Us"
  }
};

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <AboutHero subheading={aboutContent.hero.subheading} description={aboutContent.hero.description} />
      <MissionSection
        title={aboutContent.mission.title}
        description={aboutContent.mission.description}
        highlight={aboutContent.mission.highlight}
        values={aboutContent.mission.values}
      />
      <StorySection
        title={aboutContent.story.title}
        content={aboutContent.story.content}
        values={aboutContent.story.values}
      />
      <TeamSection
        title={aboutContent.team.title}
        description={aboutContent.team.description}
        members={aboutContent.team.members}
      />

      <DepartmentsSection
        title={aboutContent.departments.title}
        description={aboutContent.departments.description}
        departments={aboutContent.departments.departments}
      />
      <Highlights highlights={aboutContent.highlights} />
      {/* <AboutCTA cta={aboutContent.cta} /> */}
      {/* <CallToAction title={`Ready to recover`} /> */}
    </div>
  );
};

export default AboutPage;