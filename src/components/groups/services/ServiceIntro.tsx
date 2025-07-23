import { motion } from 'framer-motion';

const ServiceIntro = ({ intro }: { intro: { heading: string; subtext: string; image: string } }) => (
  <section className="relative min-h-screen sm:min-h-[120vh] flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
    <img src={intro.image} className="absolute h-full w-full object-cover top-0 left-0" />
    <div className="absolute top-0 w-full left-0 h-full bg-black/60" />
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <motion.div>
        <h1 className="text-3xl sm:text-4xl md:text-7xl text-white mb-6 md:mb-8 font-medium text-center">
          {intro.heading}
        </h1>
        <p className="text-lg sm:text-xl text-zinc-100 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed text-center">
          {intro.subtext}
        </p>
      </motion.div>
    </div>
    <style>{`
      .bg-grid-slate-100 {
        background-image: linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px);
        background-size: 20px 20px;
      }
    `}</style>
  </section>
);

export default ServiceIntro;
