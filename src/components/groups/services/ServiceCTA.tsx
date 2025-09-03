
const ServiceCTA = ({ cta }: { cta: { heading: string; subtext: string; phone: string; email: string } }) => (
  <section className="relative py-24 px-4 bg-white overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-slate-50 to-transparent rounded-full transform translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-slate-50 to-transparent rounded-full transform -translate-x-48 translate-y-48"></div>
      <div className="absolute inset-0 opacity-5">
        <div style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} className="w-full h-full"></div>
      </div>
    </div>
    <div className="relative z-10 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-6">
          <svg className="w-4 h-4 mr-2 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          Premium Hospitality Services
        </div>
        <p className="text-3xl md:text-4xl font-medium text-black max-w-3xl mx-auto leading-relaxed mb-12">
          {cta.heading}
        </p>
      </div>
      <div className="text-center mb-20">
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <a href="https://maps.app.goo.gl/iPz1Rii6x26L6rECA" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-full font-medium text-lg hover:bg-slate-800 transition-all duration-300 shadow-sm hover:shadow-xl transform hover:-translate-y-0.5" style={{ textDecoration: 'none' }}>
            <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Visit Our Locations
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a href={`mailto:${cta.email}`} className="group inline-flex items-center justify-center px-8 py-4 border-2 border-slate-200 text-slate-900 rounded-full font-medium text-lg hover:border-slate-300 hover:bg-slate-50 transition-all duration-300" style={{ textDecoration: 'none' }}>
            <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get in Touch
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-center md:justify-end gap-3 text-slate-600">
            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <div className="text-sm text-slate-500">WhatsApp</div>
              <div className="font-medium">+91 72830 72930</div>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3 text-slate-600">
            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <div className="text-sm text-slate-500">Email</div>
              <div className="font-medium">{cta.email}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center group">
            <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-100 transition-colors duration-300">
              <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Premium Quality</h3>
            <p className="text-slate-600">Uncompromising standards in every aspect of our service delivery</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-100 transition-colors duration-300">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Trusted Excellence</h3>
            <p className="text-slate-600">Years of experience delivering exceptional hospitality experiences</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors duration-300">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">24/7 Support</h3>
            <p className="text-slate-600">Round-the-clock assistance to ensure your complete satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ServiceCTA;
