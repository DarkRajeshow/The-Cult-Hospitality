
import { Bed, Utensils, Wheat, Coffee } from 'lucide-react';
import ContactHero from '@/components/groups/contact/ContactHero';
import ContactLocations from '@/components/groups/contact/ContactLocations';
import ContactCTA from '@/components/groups/contact/ContactCTA';

const contactContent = {
  hero: {
    heading: 'Let’s Talk Business. Hospitality That Works.',
    subheading:
      `We collaborate with property owners, entrepreneurs, and developers looking to grow their hospitality ventures in Solapur. From consulting to full management—we’re ready to scale with you.`,
    phone: '+91 95454 06070',
    email: 'partners@thecultstay.com'
  },
  locations: [
    {
      name: 'The Cult Stay',
      type: 'Managed Boutique Hotel',
      address: 'Pavan Ganapathi Road, Near Furde Complex, Laxmi Peth, Damani Nagar, Solapur',
      email: 'partners@thecultstay.com',
      icon: Bed,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60825.273859370864!2d75.8472690523744!3d17.6700585824414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5d159f87fa887%3A0x1610b7c07da62f0d!2sThe%20Cult%20Stay!5e0!3m2!1sen!2sin!4v1753090494422!5m2!1sen!2sin',
      phone: '+91 9356406070',
    },
    {
      name: 'The Cult Banquet',
      type: 'Event Venue Operations',
      address: 'Near Old IMS Road, Opposite Joshi Petrol Pump, Solapur, Maharashtra, India',
      email: 'partners@thecultstay.com',
      icon: Utensils,
      iconBg: 'bg-rose-50',
      iconColor: 'text-rose-600',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60825.273859370864!2d75.8472690523744!3d17.6700585824414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5dbc72bf26db5%3A0x4dca8e87d1701a6c!2sThe%20Cult%20Banquet!5e0!3m2!1sen!2sin!4v1753090468995!5m2!1sen!2sin',
      phone: '+91 9545406070',
    },
    {
      name: `The Cult's Kitchen`,
      type: 'Wellness Retail Concept',
      address: 'Near Old IMS Road, Opposite Joshi Petrol Pump, Solapur, Maharashtra, India',
      email: 'partners@thecultstay.com',
      icon: Wheat,
      iconBg: 'bg-green-50',
      iconColor: 'text-green-600',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60825.273859370864!2d75.8472690523744!3d17.6700585824414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5dbc72bf26db5%3A0x4dca8e87d1701a6c!2sThe%20Cult%20Banquet!5e0!3m2!1sen!2sin!4v1753090468995!5m2!1sen!2sin',
      phone: '+91 9545406070',
    },
    {
      name: 'The Cult Café',
      type: 'Managed Café Experience',
      address: 'Near Old IMS Road, Opposite Joshi Petrol Pump, Solapur, Maharashtra, India',
      email: 'partners@thecultstay.com',
      icon: Coffee,
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60825.273859370864!2d75.8472690523744!3d17.6700585824414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5dbc72bf26db5%3A0x4dca8e87d1701a6c!2sThe%20Cult%20Banquet!5e0!3m2!1sen!2sin!4v1753090468995!5m2!1sen!2sin',
      phone: '+91 9545406070',
    },
    {
      name: 'Cult Nuts and Millets',
      type: 'Healthy and organic farming product outlet',
      address: 'Solapur, Maharashtra, India',
      email: 'info@culthospitality.com',
      icon: Wheat,
      iconBg: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
      mapUrl: '',
      phone: '+91 7030330303',
    }
  ],
  cta: {
    heading: 'Let’s Build the Next Hospitality Standard Together',
    subtext:
      `From space management to guest experience strategy—we help property owners unlock performance and profitability. Let’s explore what we can build together.`,
    phone: '+91 95454 06070',
    email: 'partners@thecultstay.com'
  }
};


const Contact = () => {
  return (
    <div className="min-h-screen bg-[#FFFDF7]">
      <ContactHero hero={contactContent.hero} />
      <ContactLocations locations={contactContent.locations} />
      <ContactCTA cta={contactContent.cta} />
    </div>
  );
};

export default Contact;