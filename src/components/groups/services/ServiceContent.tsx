export const servicesContent = {
  intro: {
    heading: "Comprehensive Hospitality Solutions, Curated for Modern India",
    subtext: "We don’t just run hotels. We craft high-retention, brand-forward hospitality models that blend tech, taste, and timeless design — built for scale, trusted for quality.",
    image: "/assets/images/bedroom.png"
  },

  services: [
    {
      category: "Hospitality Services",
      title: "The Cult Stay",
      isSpecial: true,
      src: "/assets/images/bedroom.png",
      content: (
        <div className="p-8 pl-0 md:p-14 md:pl-0 rounded-3xl mb-4">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21v-4a2 2 0 012-2h2a2 2 0 012 2v4" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-neutral-800">Design-Led Boutique Stays</h3>
              <p className="text-sm text-neutral-600">Premium stays for the experience-driven guest</p>
            </div>
          </div>
          <p className="text-neutral-700 text-base md:text-xl mx-auto leading-relaxed">
            Strategically located boutique properties designed for aesthetics, efficiency, and scale. Each stay delivers high repeat value and brand recall with a focus on automation, guest comfort, and cultural relevance.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Smart Automation</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">Brand-First Design</span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">High Guest Retention</span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">Owner ROI Focused</span>
          </div>
        </div>
      )
    },
    {
      category: "Event Management",
      title: "The Cult Banquet",
      src: "/assets/images/cult-banquet.png",
      isSpecial: true,
      content: (
        <div className="p-8 pl-0 md:p-14 md:pl-0 rounded-3xl mb-4">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-neutral-800">Banquet Operations That Deliver</h3>
              <p className="text-sm text-neutral-600">High-margin, fully managed event spaces</p>
            </div>
          </div>
          <p className="text-neutral-700 text-base md:text-xl mx-auto leading-relaxed">
            Modern banquet infrastructure with complete operational support — from layout design to lead generation and event execution. Built to drive volume and client satisfaction while optimizing margins.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">End-to-End Ops</span>
            <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">In-House Decor & Catering</span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">Lead Pipeline Support</span>
          </div>
        </div>
      )
    },
    {
      category: "Dining",
      title: "The Cult's Kitchen",
      src: "/assets/images/cults-kitchen.png",
      isSpecial: false,
      content: (
        <div className="p-8 pl-0 md:p-14 md:pl-0 rounded-3xl mb-4">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-neutral-800">Smart Kitchens, Strong Margins</h3>
              <p className="text-sm text-neutral-600">Health-forward, delivery-ready menus</p>
            </div>
          </div>
          <p className="text-neutral-700 text-base md:text-xl mx-auto leading-relaxed">
            Central kitchens designed for volume, consistency, and health-focused menus. Low overheads, high turnaround, and optimized for both dine-in and delivery models.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Delivery Optimized</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Nutrition-Centered</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Low Wastage Ops</span>
            <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">Cost-Effective Buildout</span>
          </div>
        </div>
      )
    },
    {
      category: "Casual Dining",
      title: "The Cult's Cafe and Bistro",
      isSpecial: true,
      src: "/assets/images/cult-cafe.png",
      content: (
        <div className="p-8 pl-0 md:p-14 md:pl-0 rounded-3xl mb-4">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-neutral-800">Cafe Models for Urban India</h3>
              <p className="text-sm text-neutral-600">Scalable formats with high retention</p>
            </div>
          </div>
          <p className="text-neutral-700 text-base md:text-xl mx-auto leading-relaxed">
            Vibrant cafés built for community, coworking, and casual hangs. Flexible interiors, artisanal menus, and a vibe that keeps guests coming back — perfect for urban & tier-2 markets alike.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">Community Vibe</span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Cowork-Friendly</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Artisanal Menus</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Repeat Footfall</span>
          </div>
        </div>
      )
    },
    {
      category: "Organic Retail",
      title: "Cult Nuts and Millets",
      isSpecial: true,
      src: "/assets/images/cult-nuts.png",
      content: (
        <div className="p-8 pl-0 md:p-14 md:pl-0 rounded-3xl mb-4">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} fill="none" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 15c1.333-2 2.667-2 4 0" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9h6" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-neutral-800">Healthy & Organic Farming Outlet</h3>
              <p className="text-sm text-neutral-600">Premium nuts, millets, and natural foods</p>
            </div>
          </div>
          <p className="text-neutral-700 text-base md:text-xl mx-auto leading-relaxed">
            Discover a curated selection of organic nuts, millets, and farm-fresh products. Cult Nuts and Millets is dedicated to promoting healthy living and sustainable agriculture, offering only the best for your wellness journey.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Organic & Natural</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Farm to Table</span>
            <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">Healthy Living</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Sustainable Choices</span>
          </div>
        </div>
      )
    }
  ],

  policy: {
    mainHeading: "Hospitality Reimagined With",
    trustWords: [
      "Tech-Enabled Stays",
      "Efficient Cost Models",
      "Consistent Guest Experience",
      "Sustainable & Scalable Operations"
    ],
    description:
      "Cult Hospitality is designed to help property owners unlock new value through smarter, scalable, and design-driven hospitality models. We bring tech, branding, and operations together — so you don’t have to."
  },

  cta: {
    heading: "Ready to Unlock Your Property's Potential with Cult?",
    subtext: "Let's co-create hospitality spaces that earn trust, drive retention, and build legacy.",
    phone: "+91 72830 72930",
    email: "partnerships@theculthospitality.com"
  }
};
