import React from 'react';
import AboutHero from '@/components/groups/about/AboutHero';
import MissionSection from '@/components/groups/about/MissionSection';
import StorySection from '@/components/groups/about/StorySection';
import Highlights from '@/components/groups/about/Highlights';
// import CallToAction from '@/components/groups/home/CallToAction';
import { Shield, Zap, Smile } from 'lucide-react';
import { SUCCESS_RATE, CASES_SOLVED } from "@/utils/constants";

// Content configuration object
const aboutContent = {
  hero: {
    heading: "About Cult Hospitality",
    subheading: "We’re redefining luxury stays for the modern Indian traveler.",
    description: "Cult Hospitality isn’t just about rooms — it’s+ about curated experiences. We’re building a chain of beautifully designed, digitally powered, and culturally rooted stays that offer consistency, comfort, and character across India."
  },
  mission: {
    title: "Our Mission",
    description: "We exist to make premium hospitality accessible, aesthetic, and reliable for new-age travelers. Every Cult stay reflects thoughtful design, tech-first convenience, and deep respect for local culture.",
    highlight: "Where comfort meets culture — that's the Cult experience.",
    values: [
      { icon: Shield, title: "Consistency", description: "Same premium experience across every Cult property" },
      { icon: Zap, title: "Convenience", description: "Seamless digital check-ins, instant support, zero waiting" },
      { icon: Smile, title: "Connection", description: "Spaces designed for warmth, community, and local vibes" }
    ]
  },
  story: {
    title: "Our Story",
    content: "Cult Hospitality began with a simple frustration — why is it so hard to find a place that looks amazing, feels premium, and works like magic when you travel in India? We took that frustration and turned it into a vision: a growing network of design-forward, tech-enabled homestays and boutique hotels across Tier-2 and Tier-3 cities.",
    values: "We’re not building just another chain. We're building a cult — of quality, trust, and unforgettable hospitality."
  },
  highlights: [
    {
      number: "4",
      title: "Boutique Stays Curated",
      description: "Carefully selected and designed stays offering comfort, style, and local charm"
    },
    {
      number: "100%",
      title: "Digitally Enabled",
      description: "From contactless check-ins to real-time support — everything is powered by tech"
    },
    {
      number: "1",
      title: "City Presence",
      description: "Currently operating in Solapur, with plans to expand to more cities soon"
    },
    {
      number: "80%",
      title: "High Guest Retention",
      description: "Positive reviews and repeat bookings driven by consistency and thoughtful hospitality"
    }
  ],
  cta: {
    heading: "Let's Redefine Hospitality Together",
    subtext: "Whether you're a traveler, a property owner, or a believer in better stays — join the Cult.",
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