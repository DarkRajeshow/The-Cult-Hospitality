
import ContactHero from '@/components/groups/contact/ContactHero';
import InquiryForm from '@/components/groups/contact/InquiryForm';
import ContactCTA from '@/components/groups/contact/ContactCTA';

const contactContent = {
  hero: {
    heading: 'Let\'s Talk Business. Hospitality That Works.',
    subheading:
      `We collaborate with property owners, entrepreneurs, and developers looking to grow their hospitality ventures. From consulting to full management—we're ready to scale with you.`,
    phone: '+91 72830 72930',
    email: 'partners@theculthospitality.com'
  },
  inquiry: {
    heading: 'Ready to Partner With The Cult Hospitality?',
    subtext: 'Fill out the form below and our partnership team will get back to you within 24 hours to discuss how we can help transform your property.',
    phone: '+91 72830 72930',
    email: 'partners@theculthospitality.com'
  },
  cta: {
    heading: 'Let\'s Build the Next Hospitality Standard Together',
    subtext:
      `From space management to guest experience strategy—we help property owners unlock performance and profitability. Let's explore what we can build together.`,
    phone: '+91 72830 72930',
    email: 'partners@theculthospitality.com'
  }
};

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#FFFDF7]">
      <ContactHero hero={contactContent.hero} />
      <InquiryForm 
        heading={contactContent.inquiry.heading}
        subtext={contactContent.inquiry.subtext}
        phone={contactContent.inquiry.phone}
        email={contactContent.inquiry.email}
      />
      <ContactCTA cta={contactContent.cta} />
    </div>
  );
};

export default Contact;