import { Carousel, Card } from "@/components/ui/apple-cards-carousel";


interface ServiceCard {
    category: string;
    title: string;
    isSpecial: boolean;
    src: string;
    content: React.ReactNode;
}

export default function ServicesList({ services }: { services: ServiceCard[] }) {
    const cards = services.map((card, index) => (
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