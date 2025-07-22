import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const data = [
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
                        <h3 className="text-xl font-bold text-neutral-800">Luxury Accommodation</h3>
                        <p className="text-sm text-neutral-600">Boutique hotels & residences</p>
                    </div>
                </div>
                <p className="text-neutral-700 text-base md:text-xl mx-auto leading-relaxed">
                    Redefining luxury accommodation with strategically located boutique hotels and residences.
                    Contemporary elegance meets comfort with high-end amenities, plush furnishings, and bespoke services.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Prime Locations</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">Boutique Hotels</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Bespoke Services</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">Luxury Amenities</span>
                </div>
            </div>
        ),
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
                        <h3 className="text-xl font-bold text-neutral-800">Grand Celebrations</h3>
                        <p className="text-sm text-neutral-600">Impeccable event management</p>
                    </div>
                </div>
                <p className="text-neutral-700 text-base md:text-xl mx-auto leading-relaxed">
                    Synonymous with grand celebrations featuring cutting-edge audiovisual technology, versatile seating arrangements,
                    and exquisite interiors. Comprehensive event solutions from intimate gatherings to large-scale celebrations.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">AV Technology</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">Custom Décor</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">Full Catering</span>
                </div>
            </div>
        ),
    },
    {
        category: "Dining",
        title: "The Cults Kitchen",
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
                        <h3 className="text-xl font-bold text-neutral-800">Culinary Artistry</h3>
                        <p className="text-sm text-neutral-600">Gastronomy meets creativity</p>
                    </div>
                </div>
                <p className="text-neutral-700 text-base md:text-xl mx-auto leading-relaxed">
                    A culinary haven where passionate chefs create dishes that satisfy the palate and tell a story.
                    Blending traditional recipes with modern techniques using the freshest, locally sourced ingredients.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Fresh Ingredients</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Modern Techniques</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Fine Dining</span>
                    <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">Sustainable</span>
                </div>
            </div>
        ),
    },
    {
        category: "Casual Dining",
        title: "The Cults Cafe and Bistro",
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
                        <h3 className="text-xl font-bold text-neutral-800">Community Hub</h3>
                        <p className="text-sm text-neutral-600">Artisanal coffee & bistro classics</p>
                    </div>
                </div>
                <p className="text-neutral-700 text-base md:text-xl mx-auto leading-relaxed">
                    A charming and cozy spot offering artisanal coffees, freshly baked goods, and contemporary bistro dishes.
                    More than just a café - it's a welcoming community hub with free Wi-Fi and comfortable seating.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">Artisanal Coffee</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Fresh Bakery</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Free Wi-Fi</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Cozy Atmosphere</span>
                </div>
            </div>
        ),
    },
];

export default function ServicesList() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} layout={true} />
    ));

    return (
        <div className="w-full h-full py-10 md:py-20 bg-transparent">
            <div className="text-center mb-10 md:mb-16">
                <div className="flex flex-col sm:flex-row justify-center items-center mt-8 space-y-6 sm:space-y-0 sm:space-x-10 md:space-x-20">
                    <div className="text-center flex flex-col gap-2 md:gap-4">
                        <div className="text-2xl md:text-3xl lg:text-7xl font-bold text-blue-600">4</div>
                        <div className="text-base md:text-lg lg:text-xl font-medium text-neutral-600">Premium Brands</div>
                    </div>
                    <div className="text-center flex flex-col gap-2 md:gap-4">
                        <div className="text-2xl md:text-3xl lg:text-7xl font-bold text-green-600">24/7</div>
                        <div className="text-base md:text-lg lg:text-xl font-medium text-neutral-600">Guest Service</div>
                    </div>
                    <div className="text-center flex flex-col gap-2 md:gap-4">
                        <div className="text-2xl md:text-3xl lg:text-7xl font-bold text-purple-600">100%</div>
                        <div className="text-base md:text-lg lg:text-xl font-medium text-neutral-600">Guest Satisfaction</div>
                    </div>
                </div>
            </div>
            <Carousel items={cards} />
        </div>
    );
}