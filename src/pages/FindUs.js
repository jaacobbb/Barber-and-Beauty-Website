import React from 'react';
import GoogleMap from '../components/GoogleMap';

function FindUs() {
  // Get the API key from environment variables
  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  
  // Barber shop coordinates (you may need to adjust these)
  const barberShopLocation = {
    lat: 39.1434,
    lng: -77.2014
  };

  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
        <div 
          className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" 
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
        />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-indigo-600">Find Us</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">Easily accessible, just as haircuts should be.</p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">Visit us in the heart of Gaithersburg.</p>
      
      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Location Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Location</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">9049 Gaither Rd<br />Gaithersburg, MD 20877</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <a href="tel:555-123-4567" className="text-indigo-600 hover:text-indigo-800">(555) 123-4567</a>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <a href="mailto:info@barberandbeauty.com" className="text-indigo-600 hover:text-indigo-800">info@barberandbeauty.com</a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hours</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">Monday - Friday</span>
                  <span className="text-gray-600">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">Saturday</span>
                  <span className="text-gray-600">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">Sunday</span>
                  <span className="text-gray-600">10:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Parking</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-600">
                Free parking available in our lot. Street parking also available on Gaither Rd.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Directions</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                Located on Gaither Rd between Muddy Branch Rd and Quince Orchard Rd. 
                Look for our red and white barber pole sign.
              </p>
              <a 
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('9049 Gaither Rd, Gaithersburg, MD 20877')}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Google Map */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Map</h2>
          {googleMapsApiKey ? (
            <GoogleMap 
              apiKey={googleMapsApiKey}
              center={barberShopLocation}
              zoom={15}
              markerTitle="Barber and Beauty"
              address="9049 Gaither Rd, Gaithersburg, MD 20877"
            />
          ) : (
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-500">Interactive Map</p>
                <p className="text-sm text-gray-400">Add your Google Maps API key to .env file</p>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('9049 Gaither Rd, Gaithersburg, MD 20877')}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 text-sm mt-2 inline-block"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mx-auto mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Visit?</h2>
        <p className="text-gray-600 mb-6">Book your appointment today or walk in during business hours</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:555-123-4567" className="bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition">
            Call Now
          </a>
          <a href="https://calendly.com/jacoblokheenlee9/30min" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition">
            Book Online
          </a>
        </div>
      </div>
    </div>
  );
}

export default FindUs; 