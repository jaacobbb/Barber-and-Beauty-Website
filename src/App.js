import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import Services from './pages/Services';
import FindUs from './pages/FindUs';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import MeetUs from './pages/MeetUs';

function HomeFadeInWrapper() {
  const location = useLocation();
  return (
    <div key={location.key} className="relative isolate px-6 pt-28 lg:px-8 fade-in-down">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
      </div>
      <div className="mx-auto max-w-7xl py-12 sm:py-16 lg:py-20 flex flex-col lg:flex-row items-center gap-16">
        {/* Left: Main Content */}
        <div className="flex-1 max-w-xl w-full text-center">
          <h1 className="text-6xl sm:text-8xl font-bold tracking-tight text-balance text-gray-900 font-serif">Classic Cuts. Timeless Style.</h1>
          <p className="mt-10 text-2xl sm:text-3xl font-medium text-pretty text-gray-500">Where you're not just a customer. You're family.</p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
            <a href="https://calendly.com/jacoblokheenlee9/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto button-classic px-5 py-2.5 text-sm text-center hover-tilt">Book an appointment today</a>
            <Link to="/services" className="w-full sm:w-auto button-outline-classic px-5 py-2.5 text-sm text-center ml-0 sm:ml-2 hover-tilt">View Services <span aria-hidden="true">→</span></Link>
          </div>
          {/* Section Divider SVG */}
          <div className="section-divider">
            <svg width="180" height="24" viewBox="0 0 180 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <rect x="0" y="10" width="24" height="4" rx="2" fill="#b94a4a"/>
                <rect x="31" y="10" width="24" height="4" rx="2" fill="#4a6fa5"/>
                <rect x="62" y="10" width="24" height="4" rx="2" fill="#b94a4a"/>
                <rect x="93" y="10" width="24" height="4" rx="2" fill="#4a6fa5"/>
                <rect x="124" y="10" width="24" height="4" rx="2" fill="#b94a4a"/>
                <rect x="155" y="10" width="24" height="4" rx="2" fill="#4a6fa5"/>
              </g>
            </svg>
          </div>
        </div>
        {/* Right: 2x2 Image Grid */}
        <div className="flex-1 flex items-center justify-center">
          <div className="grid grid-cols-2 grid-rows-2 gap-6 w-96 h-96 md:w-[32rem] md:h-[32rem]">
            <div className="w-full h-full">
              <img src="/haircut1.jpg" alt="Haircut 1" className="w-full h-full object-cover rounded-2xl shadow-lg hover-tilt" />
            </div>
            <div className="w-full h-full">
              <img src="/haircut2.jpeg" alt="Haircut 2" className="w-full h-full object-cover rounded-2xl shadow-lg hover-tilt" />
            </div>
            <div className="w-full h-full">
              <img src="/haircut3.jpeg" alt="Haircut 3" className="w-full h-full object-cover rounded-2xl shadow-lg hover-tilt" />
            </div>
            <div className="w-full h-full">
              <img src="/haircut4.jpeg" alt="Haircut 4" className="w-full h-full object-cover rounded-2xl shadow-lg hover-tilt" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
      </div>
    </div>
  );
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="bg-texture min-h-screen">
        <header className="fixed inset-x-0 top-0 z-50 header-classic shadow-md">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Barber and Beauty</span>
                <img className="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" />
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button 
                type="button" 
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <Link to="/services" className="text-sm/6 header-link-classic">Services</Link>
              <Link to="/find-us" className="text-sm/6 header-link-classic">Find Us</Link>
              <Link to="/contact" className="text-sm/6 header-link-classic">Contact</Link>
              <Link to="/reviews" className="text-sm/6 header-link-classic">Reviews</Link>
              <Link to="/meet-us" className="text-sm/6 header-link-classic">Meet Us</Link>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            </div>
          </nav>
          {/* Mobile menu, show/hide based on menu open state. */}
          {mobileMenuOpen && (
            <div className="lg:hidden" role="dialog" aria-modal="true">
              {/* Background backdrop, show/hide based on slide-over state. */}
              <div className="fixed inset-0 z-50 bg-gray-900/20" onClick={() => setMobileMenuOpen(false)}></div>
              <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <Link to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                    <span className="sr-only">Barber and Beauty</span>
                    <img className="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                  </Link>
                  <button 
                    type="button" 
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      <Link to="/services" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Services</Link>
                      <Link to="/find-us" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Find Us</Link>
                      <Link to="/contact" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                      <Link to="/reviews" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Reviews</Link>
                    </div>
                    <div className="py-6">
                      <Link to="/contact" className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </header>

        <Routes>
          <Route path="/" element={<HomeFadeInWrapper />} />
          <Route path="/services" element={<Services />} />
          <Route path="/find-us" element={<FindUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/meet-us" element={<MeetUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 