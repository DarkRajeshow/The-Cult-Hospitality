import ServicesList from '@/components/groups/services/ServicesList';
import ServiceIntro from '@/components/groups/services/ServiceIntro';
import ServicePolicy from '@/components/groups/services/ServicePolicy';
import ServiceCTA from '@/components/groups/services/ServiceCTA';
import { servicesContent } from '@/components/groups/services/ServiceContent';

// Main Services Page Component
const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <ServiceIntro intro={servicesContent.intro}/>
      <ServicesList services={servicesContent.services} />
      <ServicePolicy policy={servicesContent.policy} />
      <ServiceCTA cta={servicesContent.cta} />
    </div>
  );
};

export default ServicesPage;