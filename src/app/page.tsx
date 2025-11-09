export default function Home() {
  return (
    // Use global gradient from layout; remove page-level gradient
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Pattern removed to keep a single site-wide gradient */}
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Main Headline */}
            <div className="mb-8 sm:mb-12">
              <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-primary-500/10 to-blue-500/10 rounded-full border border-primary-200/30">
                <span className="text-primary-700 font-semibold text-xs sm:text-sm tracking-wide uppercase">Premium Cleaning Services</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight tracking-tight px-2 sm:px-0">
                Izzy's
                <span className="block bg-gradient-to-r from-primary-600 via-blue-600 to-primary-700 bg-clip-text text-transparent">
                  Carpet Cleaning & Restoration
                </span>
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-700 mt-2 sm:mt-3 tracking-wide">
                  Services
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <div className="mb-12 sm:mb-16">
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-light px-2 sm:px-0">
                Transform your home with our expert carpet and upholstery cleaning. 
                <span className="block mt-2 sm:mt-3 font-medium text-gray-800">
                  We make your carpets spotless, fresh, and like new again.
                </span>
              </p>
              
              {/* Key Benefits - Grid Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto text-sm md:text-base text-gray-700 mb-8 sm:mb-12 px-2 sm:px-0">
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2.5 rounded-full border border-gray-200/50 shadow-sm justify-center sm:justify-start">
                  <div className="w-2.5 h-2.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex-shrink-0"></div>
                  <span className="font-medium whitespace-nowrap">Same Day Service</span>
                </div>
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2.5 rounded-full border border-gray-200/50 shadow-sm justify-center sm:justify-start">
                  <div className="w-2.5 h-2.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex-shrink-0"></div>
                  <span className="font-medium whitespace-nowrap">Eco-Friendly Products</span>
                </div>
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2.5 rounded-full border border-gray-200/50 shadow-sm justify-center sm:justify-start">
                  <div className="w-2.5 h-2.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex-shrink-0"></div>
                  <span className="font-medium whitespace-nowrap">100% Satisfaction Guarantee</span>
                </div>
              </div>
            </div>

            {/* Call-to-Action Buttons - Mobile optimized */}
            <div className="flex flex-col gap-4 justify-center items-center mb-16 sm:mb-20 px-4 sm:px-0">
              <button className="group relative overflow-hidden bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 text-white font-semibold px-8 sm:px-10 py-4 text-base sm:text-lg rounded-xl w-full sm:w-auto max-w-sm sm:max-w-none transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl border-0">
                <span className="relative z-10">Get Free Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
              <button className="group bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 hover:text-gray-900 px-8 sm:px-10 py-4 text-base sm:text-lg font-semibold w-full sm:w-auto max-w-sm sm:max-w-none transform hover:scale-105 transition-all duration-300 rounded-xl border-2 border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-lg">
                <span className="flex items-center justify-center gap-2">
                  <span className="text-lg sm:text-xl">📞</span>
                  <span className="text-sm sm:text-base">Call (619) 408-5401</span>
                </span>
              </button>
            </div>


          </div>
        </div>

      </section>

      {/* About Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-primary-500/10 to-blue-500/10 rounded-full border border-primary-200/30">
              <span className="text-primary-700 font-semibold text-sm tracking-wide uppercase">About Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Izzy's Carpet Cleaning & Restoration
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Izzy's Carpet Cleaning & Restoration Services LLC is your local carpet and tile cleaning expert.
              Our team has over 20 years of experience in the industry delivering fresh, long‑lasting results with care and integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
           

            {/* Work Gallery Carousel */}
            <div className="relative w-full max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto lg:col-span-2" id="work-carousel-root">
              <div className="overflow-hidden rounded-2xl">
                <div id="work-carousel" className="flex transition-transform duration-500 ease-in-out">
                  <div className="w-full flex-shrink-0 px-1">
                    <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200">
                      <img src="/work/picture1.jpg" alt="Carpet cleaning result" className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="w-full flex-shrink-0 px-1">
                    <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200">
                      <img src="/work/picture2.jpg" alt="Tile cleaning result" className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="w-full flex-shrink-0 px-1">
                    <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200">
                      <img src="/work/picture3.jpg" alt="Upholstery cleaning result" className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="w-full flex-shrink-0 px-1">
                    <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200">
                      <img src="/work/picture4.jpg" alt="Restoration project" className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="mt-6 flex items-center justify-between">
                <button id="work-prev" className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-300 shadow-sm">
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <div className="flex space-x-2" id="work-dots">
                  <button className="w-2.5 h-2.5 rounded-full bg-primary-600" data-work="0"></button>
                  <button className="w-2.5 h-2.5 rounded-full bg-gray-300 hover:bg-primary-400" data-work="1"></button>
                  <button className="w-2.5 h-2.5 rounded-full bg-gray-300 hover:bg-primary-400" data-work="2"></button>
                  <button className="w-2.5 h-2.5 rounded-full bg-gray-300 hover:bg-primary-400" data-work="3"></button>
                </div>
                <button id="work-next" className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-300 shadow-sm">
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Services Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-primary-500/10 to-blue-500/10 rounded-full border border-primary-200/30">
              <span className="text-primary-700 font-semibold text-sm tracking-wide uppercase">Our Services</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Comprehensive Cleaning &
              <span className="block bg-gradient-to-r from-primary-600 via-blue-600 to-primary-700 bg-clip-text text-transparent">
                Restoration Solutions
              </span>
            </h2>
            
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From routine maintenance to emergency restoration, we provide expert cleaning services 
              that protect and enhance your property's value.
            </p>
          </div>

          {/* Services Carousel */}
          <div className="relative max-w-4xl mx-auto">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" id="services-carousel">
                
                {/* Slide 1 - Carpet, Upholstery & Tile Cleaning */}
                <div className="w-full flex-shrink-0 flex justify-center">
                  <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 hover:border-primary-200/50 max-w-lg w-full">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                      Carpet, Upholstery & Tile Cleaning
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                      Professional deep cleaning for carpets, furniture, and tile surfaces using eco-friendly solutions that restore beauty and extend lifespan.
                    </p>
                    <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700">
                      <span>Learn More</span>
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>

                {/* Slide 2 - Duct & Dryer Vent Cleaning */}
                <div className="w-full flex-shrink-0 flex justify-center">
                  <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 hover:border-primary-200/50 max-w-lg w-full">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                      Duct & Dryer Vent Cleaning
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                      Improve air quality and reduce fire hazards with thorough ductwork and dryer vent cleaning services for a safer, healthier home.
                    </p>
                    <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700">
                      <span>Learn More</span>
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>

                {/* Slide 3 - Flooring Installation */}
                <div className="w-full flex-shrink-0 flex justify-center">
                  <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 hover:border-primary-200/50 max-w-lg w-full">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                      Flooring Installation
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                      Expert installation of various flooring types including hardwood, laminate, vinyl, and tile with precision and attention to detail.
                    </p>
                    <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700">
                      <span>Learn More</span>
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>

                {/* Slide 4 - Water Damage Restoration */}
                <div className="w-full flex-shrink-0 flex justify-center">
                  <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 hover:border-primary-200/50 max-w-lg w-full">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                      Water Damage Restoration
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                      Rapid response water extraction, drying, and restoration services to prevent mold and structural damage to your property.
                    </p>
                    <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700">
                      <span>Learn More</span>
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>

                {/* Slide 5 - Color Restoration */}
                <div className="w-full flex-shrink-0 flex justify-center">
                  <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 hover:border-primary-200/50 max-w-lg w-full">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                      Color Restoration
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                      Restore faded or discolored carpets and fabrics to their original beauty using specialized techniques and professional-grade products.
                    </p>
                    <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700">
                      <span>Learn More</span>
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>

                {/* Slide 6 - Mold Remediation */}
                <div className="w-full flex-shrink-0 flex justify-center">
                  <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 hover:border-primary-200/50 max-w-lg w-full">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                      Mold Remediation
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                      Safe and effective mold removal and prevention services to protect your family's health and preserve your property's integrity.
                    </p>
                    <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700">
                      <span>Learn More</span>
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>

                {/* Slide 7 - Emergency Fire & Flood Services */}
                <div className="w-full flex-shrink-0 flex justify-center">
                  <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 hover:border-primary-200/50 max-w-lg w-full">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                      24/7 Emergency Fire & Flood Services
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                      Round-the-clock emergency response for fire and flood damage with rapid mobilization and comprehensive restoration services.
                    </p>
                    <div className="flex items-center text-red-600 font-medium group-hover:text-red-700">
                      <span>Emergency Call</span>
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>

                {/* Slide 8 - Furniture Cleaning */}
                <div className="w-full flex-shrink-0 flex justify-center">
                  <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 hover:border-primary-200/50 max-w-lg w-full">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                      Furniture Cleaning
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                      Specialized cleaning for all types of furniture including leather, fabric, and antique pieces with care and expertise.
                    </p>
                    <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700">
                      <span>Learn More</span>
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>

                {/* Slide 9 - Pet Treatment */}
                <div className="w-full flex-shrink-0 flex justify-center">
                  <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 hover:border-primary-200/50 max-w-lg w-full">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                      Pet Treatment & Odor Removal
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                      Specialized pet stain and odor removal treatments that eliminate problems at the source for a fresh, clean environment.
                    </p>
                    <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700">
                      <span>Learn More</span>
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Carousel Navigation */}
            <div className="flex justify-between items-center mt-12">
              {/* Previous Button */}
              <button 
                id="prev-slide" 
                className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6 text-gray-600 group-hover:text-primary-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="flex space-x-2 overflow-x-auto max-w-xs">
                <button className="w-2 h-2 rounded-full bg-primary-600 transition-all duration-300 flex-shrink-0" data-slide="0"></button>
                <button className="w-2 h-2 rounded-full bg-gray-300 hover:bg-primary-400 transition-all duration-300 flex-shrink-0" data-slide="1"></button>
                <button className="w-2 h-2 rounded-full bg-gray-300 hover:bg-primary-400 transition-all duration-300 flex-shrink-0" data-slide="2"></button>
                <button className="w-2 h-2 rounded-full bg-gray-300 hover:bg-primary-400 transition-all duration-300 flex-shrink-0" data-slide="3"></button>
                <button className="w-2 h-2 rounded-full bg-gray-300 hover:bg-primary-400 transition-all duration-300 flex-shrink-0" data-slide="4"></button>
                <button className="w-2 h-2 rounded-full bg-gray-300 hover:bg-primary-400 transition-all duration-300 flex-shrink-0" data-slide="5"></button>
                <button className="w-2 h-2 rounded-full bg-gray-300 hover:bg-primary-400 transition-all duration-300 flex-shrink-0" data-slide="6"></button>
                <button className="w-2 h-2 rounded-full bg-gray-300 hover:bg-primary-400 transition-all duration-300 flex-shrink-0" data-slide="7"></button>
                <button className="w-2 h-2 rounded-full bg-gray-300 hover:bg-primary-400 transition-all duration-300 flex-shrink-0" data-slide="8"></button>
              </div>

              {/* Next Button */}
              <button 
                id="next-slide" 
                className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6 text-gray-600 group-hover:text-primary-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          

          {/* Call-to-Action */}
          <div className="text-center mt-16 lg:mt-20">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-200/50 max-w-2xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Every property is unique. Contact us for a personalized consultation and free estimate tailored to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Get Free Consultation
                </button>
                <button className="bg-white/80 hover:bg-white text-gray-800 hover:text-gray-900 px-8 py-4 font-semibold rounded-xl border-2 border-gray-200 hover:border-gray-300 transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-lg">
                  View All Services
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 lg:py-32 overflow-hidden">
        {/* Removed section-specific decorative gradient background */}
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-primary-500/10 to-blue-500/10 rounded-full border border-primary-200/30">
              <span className="text-primary-700 font-semibold text-sm tracking-wide uppercase">Contact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Ready To Restore & Refresh Your Space?
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              The fastest way to reach us is by phone. Call now for same‑day service availability, pricing, or to schedule a free on‑site estimate.
            </p>
          </div>

          <div className="grid gap-8 lg:gap-10 lg:grid-cols-3 max-w-6xl mx-auto items-stretch">
            {/* Primary Call Card */}
            <div className="lg:col-span-2 flex flex-col justify-between bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-3xl shadow-xl p-8 sm:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_60%)]" />
              <div className="relative">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Call Us Now</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Speak directly with a local specialist—no call centers, just real help. We can often be on the road to you within hours.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center sm:justify-start">
                  <a href="tel:+16194085401" className="group relative inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-primary-600 to-blue-600 text-white font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:from-primary-700 hover:to-blue-700">
                    <span className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm ring-1 ring-white/20">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.72 19.72 0 0 1-8.59-3.07A19.5 19.5 0 0 1 3.15 9.77 19.72 19.72 0 0 1 .08 1.18 2 2 0 0 1 2.06-.9999999e-7h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L6.16 8.41a16 16 0 0 0 7.43 7.43l1.77-1.15a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>
                    </span>
                    <span className="flex flex-col items-start">
                      <span className="text-xs tracking-wide uppercase opacity-80">Call Now</span>
                      <span className="text-2xl font-bold tracking-tight">(619) 408-5401</span>
                    </span>
                    <span className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-4 ring-white/20 transition-all duration-500" />
                  </a>
                  <div className="flex flex-col items-center sm:items-start">
                    <span className="text-sm font-medium text-gray-800 mb-1">Business Hours</span>
                    <ul className="text-sm text-gray-600 space-y-0.5">
                      <li>Mon–Sat: 7:00 AM – 7:00 PM</li>
                      <li>Sunday: By Appointment</li>
                      <li className="text-primary-600 font-medium">24/7 Emergency Response</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative mt-10 grid gap-6 sm:grid-cols-3">
                <div className="bg-white/70 backdrop-blur rounded-2xl p-5 border border-gray-200/60 shadow-sm">
                  <span className="block text-xs font-semibold tracking-wide text-primary-600 uppercase mb-2">Coverage</span>
                  <p className="text-sm font-medium text-gray-800">Local & surrounding areas</p>
                </div>
                <div className="bg-white/70 backdrop-blur rounded-2xl p-5 border border-gray-200/60 shadow-sm">
                  <span className="block text-xs font-semibold tracking-wide text-primary-600 uppercase mb-2">Response</span>
                  <p className="text-sm font-medium text-gray-800">Same-Day Available</p>
                </div>
                <div className="bg-white/70 backdrop-blur rounded-2xl p-5 border border-gray-200/60 shadow-sm">
                  <span className="block text-xs font-semibold tracking-wide text-primary-600 uppercase mb-2">Guarantee</span>
                  <p className="text-sm font-medium text-gray-800">100% Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Secondary Info Card */}
            <div className="flex flex-col gap-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/60 shadow-lg p-8 flex flex-col">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Request a Callback</h4>
                <p className="text-gray-600 text-sm mb-6">Prefer we reach out to you? Enter your phone number and we will return your call as soon as possible.</p>
                <form className="space-y-4" action="#" method="post" aria-disabled="true">
                  <div className="text-left">
                    <label htmlFor="callbackPhone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input id="callbackPhone" type="tel" placeholder="(619) 408-5401" className="w-full rounded-xl border-gray-300 focus:border-primary-500 focus:ring-primary-500 px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm" disabled />
                  </div>
                  <button type="button" className="w-full inline-flex justify-center items-center gap-2 rounded-xl bg-gradient-to-r from-primary-600 to-blue-600 text-white font-semibold py-3.5 shadow-md transition-all duration-300 opacity-60 cursor-not-allowed">
                    <span>Request Callback (Demo)</span>
                  </button>
                  <p className="text-[11px] text-gray-500 leading-snug">Demo only – phone entry disabled.</p>
                </form>
              </div>
              <div className="bg-gradient-to-br from-primary-600 to-blue-600 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,white,transparent_60%)]" />
                <h4 className="text-xl font-semibold mb-3 relative">Emergency Service</h4>
                <p className="text-white/90 text-sm mb-6 relative">Water, fire, or mold emergency? We mobilize fast—call anytime, day or night.</p>
                <a href="tel:+16194085401" className="relative inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/15 backdrop-blur ring-1 ring-white/30 text-white font-semibold hover:bg-white/25 transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.72 19.72 0 0 1-8.59-3.07A19.5 19.5 0 0 1 3.15 9.77 19.72 19.72 0 0 1 .08 1.18 2 2 0 0 1 2.06-.9999999e-7h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L6.16 8.41a16 16 0 0 0 7.43 7.43l1.77-1.15a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>
                  <span className="text-lg font-bold">(619) 408-5401</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center text-xs text-gray-500 max-w-3xl mx-auto leading-relaxed">
            <p>We respect your time & privacy. Your phone number is only used to respond to your inquiry and provide service-related updates.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-xs text-gray-500">
        © 2025 Izzy's Carpet Cleaning & Restoration. All rights reserved.
      </footer>

      {/* Carousel JavaScript */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const carousel = document.getElementById('services-carousel');
            const prevBtn = document.getElementById('prev-slide');
            const nextBtn = document.getElementById('next-slide');
            const dots = document.querySelectorAll('[data-slide]');
            let currentSlide = 0;
            const totalSlides = 9;

            function updateCarousel() {
              // Move carousel by full container width per slide
              const translateX = -currentSlide * 100;
              carousel.style.transform = \`translateX(\${translateX}%)\`;
              
              // Update dots
              dots.forEach((dot, index) => {
                if (index === currentSlide) {
                  dot.classList.remove('bg-gray-300');
                  dot.classList.add('bg-primary-600');
                } else {
                  dot.classList.remove('bg-primary-600');
                  dot.classList.add('bg-gray-300');
                }
              });
            }

            function nextSlide() {
              currentSlide = (currentSlide + 1) % totalSlides;
              updateCarousel();
            }

            function prevSlide() {
              currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
              updateCarousel();
            }

            function goToSlide(slideIndex) {
              currentSlide = slideIndex;
              updateCarousel();
            }

            // Event listeners
            nextBtn.addEventListener('click', nextSlide);
            prevBtn.addEventListener('click', prevSlide);
            
            dots.forEach((dot, index) => {
              dot.addEventListener('click', () => goToSlide(index));
            });

            // Initialize carousel
            updateCarousel();

            // Auto-play (optional)
            setInterval(nextSlide, 8000);
          });
        `
      }} />

      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const workCarousel = document.getElementById('work-carousel');
            const workPrev = document.getElementById('work-prev');
            const workNext = document.getElementById('work-next');
            const workDots = document.querySelectorAll('[data-work]');
            let workIndex = 0;
            const workTotal = workDots.length; // 4

            function updateWorkCarousel() {
              workCarousel.style.transform = 'translateX(' + (-workIndex * 100) + '%)';
              workDots.forEach((d,i)=>{
                if(i===workIndex){
                  d.classList.remove('bg-gray-300');
                  d.classList.add('bg-primary-600');
                } else {
                  d.classList.remove('bg-primary-600');
                  d.classList.add('bg-gray-300');
                }
              });
            }
            function nextWork(){ workIndex = (workIndex + 1) % workTotal; updateWorkCarousel(); }
            function prevWork(){ workIndex = (workIndex - 1 + workTotal) % workTotal; updateWorkCarousel(); }
            workNext.addEventListener('click', nextWork);
            workPrev.addEventListener('click', prevWork);
            workDots.forEach((dot,i)=> dot.addEventListener('click', ()=> { workIndex = i; updateWorkCarousel(); }));
            updateWorkCarousel();
            setInterval(nextWork, 7000);
          });
        `
      }} />




      

    </main>
  )
}
