import React from 'react';

function Services() {
  return (
    <div className="fade-in-down">
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
          <h2 className="text-base/7 font-semibold text-indigo-600">Services</h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">We have something for everyone.</p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">Whether it's a small touch up or total makeover, we've got you covered.</p>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-8 lg:max-w-4xl lg:grid-cols-2 lg:gap-x-8">
          <div className="rounded-3xl bg-white/60 p-8 ring-1 ring-gray-900/10 sm:p-10">
            <h3 id="tier-hobby" className="text-base/7 font-semibold text-indigo-600">Men's Haircut</h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-semibold tracking-tight text-gray-900">$15</span>
            </p>
            <p className="mt-6 text-base/7 text-gray-600">Shampoo, Trim, and Style.</p>
            <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-600 sm:mt-10">
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                Quick
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                Affordable
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                Comfortable
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                Stylish
              </li>
            </ul>
            <a href="https://calendly.com/jacoblokheenlee9/30min" target="_blank" rel="noopener noreferrer" aria-describedby="tier-hobby" className="mt-8 block rounded-md px-4 py-3 sm:px-3.5 sm:py-2.5 text-center text-sm font-semibold text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-10">Book an Appointment</a>
          </div>
          <div className="rounded-3xl bg-white/60 p-8 ring-1 ring-gray-900/10 sm:p-10">
            <h3 id="tier-hobby" className="text-base/7 font-semibold text-indigo-600">Women's Haircut</h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-semibold tracking-tight text-gray-900">$20</span>
            </p>
            <p className="mt-6 text-base/7 text-gray-600">Endless Style Options.</p>
            <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-600 sm:mt-10">
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                Quick
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                Affordable
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                Comfortable
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                Stylish
              </li>
            </ul>
            <a href="https://calendly.com/jacoblokheenlee9/30min" target="_blank" rel="noopener noreferrer" aria-describedby="tier-hobby" className="mt-8 block rounded-md px-4 py-3 sm:px-3.5 sm:py-2.5 text-center text-sm font-semibold text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-10">Book an Appointment</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;