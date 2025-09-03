import ApplicationForm from "@/components/groups/careers/ApplicationForm";
import CareersHero from "@/components/groups/careers/CareersHero";
import WhyWorkWithUs from "@/components/groups/careers/WhyWorkWithUs";


// Centralized Careers page content
const content = {
  hero: {
    heading: ["Join the Cult of", "Hospitality"],
    subtitle: "We're always looking for passionate individuals who want to craft extraordinary hospitality experiences and grow with a team that values excellence."
  },

  whyWorkWithUs: {
    heading: ["Why Choose", "Our Culture"],
    description: "At Cult Hospitality, we don't just create experiences — we build careers, foster creativity, and celebrate the art of exceptional service.",
    values: [
      {
        icon: "Users",
        title: "Growth Together",
        description: "We invest in your development, fostering a culture where personal and professional growth flourishes."
      },
      {
        icon: "Lightbulb",
        title: "Creative Innovation",
        description: "Challenge conventions and bring fresh ideas to life. We celebrate creativity in every aspect of hospitality."
      },
      {
        icon: "Target",
        title: "Impact That Matters",
        description: "Every role contributes to creating memorable experiences that guests treasure for a lifetime."
      },
      {
        icon: "Sparkles",
        title: "Excellence in Everything",
        description: "From the smallest detail to grand gestures, we maintain the highest standards in all we do."
      }
    ]
  },

  applicationForm: {
    heading: ["Start Your", "Journey"],
    description: "We believe great talent builds great experiences. Send us your details, and we'll be in touch to explore how you can contribute to our mission.",
    positions: [
      "Select Position",
      "Hotel Operations Manager",
      "Food & Beverage Coordinator",
      "Guest Experience Specialist",
      "Event Planning Executive",
      "Marketing & Brand Manager",
      "Finance & Administration",
      "Housekeeping Supervisor",
      "Culinary Team Member",
      "Other"
    ],
    formspreeEndpoint: "https://formspree.io/f/xdkdyzqj"
  }
};

const Careers = () => {
  return (
    <div className="min-h-screen">
      <CareersHero content={content.hero} />
      <WhyWorkWithUs content={content.whyWorkWithUs} />
      <ApplicationForm content={content.applicationForm} />
    </div>
  );
};

export default Careers;