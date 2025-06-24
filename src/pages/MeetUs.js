import React from 'react';

const barbers = [
  {
    name: 'Phuong Tran',
    photo: '/barber1.jpg',
    bio: 'Phuong is a master barber with 20+ years of experience. She specializes in classic cuts and is known for her attention to detail and warm personality.'
  },
  {
    name: 'Julie Kim',
    photo: '/barber2.jpg',
    bio: 'Julie brings a modern touch to traditional styles. Her clients love her creativity and her ability to make everyone feel at home.'
  },
  {
    name: 'Jenny Lee',
    photo: '/barber3.jpg',
    bio: 'Jenny is passionate about helping clients look and feel their best. She is an expert in fades, beard trims, and friendly conversation.'
  },
  {
    name: 'Ben Nguyen',
    photo: '/barber4.jpg',
    bio: 'Ben is a skilled barber with a knack for precision. He enjoys working with all hair types and is always up for a challenge.'
  },
  {
    name: 'Aileen Smith',
    photo: '/barber5.jpg',
    bio: 'Aileen is known for her gentle touch and her ability to create stylish looks for men, women, and kids alike.'
  },
  {
    name: 'Enrique Santos',
    photo: '/barber6.jpg',
    bio: 'Enrique brings energy and enthusiasm to the shop. He loves classic shaves and making every client leave with a smile.'
  },
];

function MeetUs() {
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
          <h2 className="text-base/7 font-semibold accent-underline" style={{ color: 'var(--muted-blue)' }}>Meet Us</h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">Get to know your barbers</p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">Our team is dedicated to making you look and feel your best. Meet the barbers who make it happen!</p>
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
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {barbers.map((barber, idx) => (
            <div key={barber.name} className="rounded-3xl bg-white/60 p-8 ring-1 ring-gray-900/10 accent-left-bar flex flex-col items-center text-center shadow-lg hover-tilt transition">
              <img
                src={barber.photo}
                alt={barber.name}
                className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-[#b94a4a] bg-gray-200"
                onError={e => { e.target.onerror = null; e.target.src = 'https://api.dicebear.com/7.x/initials/svg?seed=' + encodeURIComponent(barber.name); }}
              />
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--muted-blue)' }}>{barber.name}</h3>
              <p className="text-gray-700 text-base">{barber.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MeetUs; 