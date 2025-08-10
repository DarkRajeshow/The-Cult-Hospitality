
const ServicePolicy = ({ policy }: { policy: { mainHeading: string; trustWords: string[]; description: string } }) => (
  <section className="h-screen flex items-center justify-center px-4 bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50">
    <div className="max-w-4xl mx-auto text-center">
      <div>
        <svg className="w-16 h-16 text-amber-600 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        <h2 className="text-3xl font-semibold text-slate-800 mb-6">
          {policy.mainHeading}
        </h2>
        <div className="text-4xl md:text-6xl font-semibold text-amber-600 mb-6">
          Excellence & Passion
        </div>
      </div>
      <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
        {policy.description}
      </p>
      <div className="flex flex-wrap justify-center gap-6 text-sm">
        {policy.trustWords.map((word, idx) => (
          <div key={idx} className="flex items-center gap-2 text-green-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{word}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicePolicy;
