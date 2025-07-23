import React from 'react';
import AboutHero from '@/components/groups/about/AboutHero';
import MissionSection from '@/components/groups/about/MissionSection';
import StorySection from '@/components/groups/about/StorySection';
import Highlights from '@/components/groups/about/Highlights';
import { Shield, Zap, Smile } from 'lucide-react';

// Content configuration object
const aboutContent = {
  hero: {
    heading: "About Cult Hospitality",
    subheading: "A new-age hospitality partner for modern hotel owners.",
    description:
      "Cult Hospitality is more than just a hospitality brand—we’re a full-service management partner for boutique hotels, cafés, and event spaces in emerging cities like Solapur. We combine localized expertise with tech-driven operations to help you run smoother, earn better, and grow faster."
  },
  mission: {
    title: "Our Mission",
    description:
      "We’re on a mission to empower independent property owners with the systems, support, and brand identity needed to thrive in India’s evolving hospitality landscape.",
    highlight: "From design to delivery, we manage what matters most—so you can focus on ownership.",
    values: [
      {
        icon: Shield,
        title: "Consistency",
        description: "Operational excellence and quality assurance at every guest touchpoint"
      },
      {
        icon: Zap,
        title: "Convenience",
        description: "Digital-first tools, automated SOPs, and seamless guest management"
      },
      {
        icon: Smile,
        title: "Connection",
        description: "Locally relevant experiences that build loyalty and community"
      }
    ]
  },
  story: {
    title: "Our Story",
    content:
      "Cult Hospitality was born out of a challenge many property owners face: inconsistent service, operational chaos, and underperforming spaces. With a background in design, tech, and hospitality, we set out to offer something better—a scalable management model for small-format properties in Tier-2 cities.",
    values:
      "We're not just managing properties—we're building a standard. A Cult standard that stands for trust, growth, and great experiences."
  },
  highlights: [
    {
      number: "4",
      title: "Properties Managed",
      description: "From hotels to cafés—each space is uniquely run but centrally optimized"
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
      number: "80%",
      title: "Repeat Business Rate",
      description: "Loyal guests and recurring events due to our consistency and care"
    }
  ],
  cta: {
    heading: "Let's Redefine Hospitality Together",
    subtext:
      "Own a property? Let’s talk. We partner with forward-thinking owners to co-create remarkable guest experiences and profitable operations.",
    buttonText: "Partner With Us"
  }
};


const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
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
      <Highlights highlights={aboutContent.highlights} />
      {/* <AboutCTA cta={aboutContent.cta} /> */}
      {/* <CallToAction title={`Ready to recover`} /> */}
    </div>
  );
};

export default AboutPage;