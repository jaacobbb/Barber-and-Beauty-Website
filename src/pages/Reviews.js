import React, { useState } from 'react';

function Reviews() {
  const [reviewForm, setReviewForm] = useState({
    name: '',
    rating: 5,
    comment: ''
  });

  const handleReviewChange = (e) => {
    setReviewForm({
      ...reviewForm,
      [e.target.name]: e.target.value
    });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    console.log('Review submitted:', reviewForm);
    alert('Thank you for your review!');
    setReviewForm({ name: '', rating: 5, comment: '' });
  };

  const testimonials = [
    {
      id: 1,
      name: "Ben N.",
      rating: 5,
      date: "2024-04-23",
      comment: "My barber's name was Phuong and she did a fine job. Typically, back home in Massachusetts, I pay at least 50% more for the same hair cut and the cost of living is around the same. Phuong used scissors and electric clippers and cut expertly, confidenly, and quickly. What's not to like? Tip: It's probably a good idea to show the barbers pictures of the type of haircut you want. You can have these on your smart phone when you come in. English is not their first language."
    },
    {
      id: 2,
      name: "Andrew S.",
      rating: 5,
      date: "2022-03-12",
      comment: "I've been trying to find an affordable place to cut my hair since relocating to the area. Found barber and Beauty on yelp and gave it a shot. What it takes some barbers to do, takes Julie about 10-15 minutes. This Korean owned barbershop is now my go to place. Located in a strip mall with plenty of parking."
    },
    {
      id: 3,
      name: "Enrique S.",
      rating: 5,
      date: "2023-04-21",
      comment: "Jenny did a great job with my haircut. I am new in Gaithersburg/ Rockville area and had a hard time looking for a barbershop that can do my haircut I like it to be. I just told Jenny how I wanted it and BOOM, she did great job. Highly recommended salon and look for Jenny. Thanks Jenny, now I know where to go for my future haircuts."
    },
    {
      id: 4,
      name: "Aileen S.",
      rating: 5,
      date: "2017-01-15",
      comment: "Just walked in to get a curve shaped, layered, 6-inch cut. The ladies are really friendly and there were customers of all sorts of ethnicities. They'll follow specific requests and I heard two of the ladies ask their customers if they wanted their usual. Men get $14 cuts and ladies get $17 cuts. They also have a mani and pedi side of the store but I have no checked that out."
    },
    {
      id: 5,
      name: "Istvan T.",
      rating: 5,
      date: "2018-02-07",
      comment: "We came here because of the wonderful Korean ladies who cut hair here. We have a Korean international student living with our family. He needed a haircut and I wanted to find someone with great experience cutting Korean hair. We were definitely not disappointed. Greeted warmly when we walked in. Offered a haircut while I waited. Felt very at home here. These ladies are so nice. If my wife didn't cut my hair I would come here too. I should mention, they cut all kinds of hair. There was a young, blonde haired, blue eyed college aged guy getting what looked to be a nice trendy modern cut with a floppy front. Definitely give them a try. NB-the shop is tucked down in the back of the shopping center just to the right of the dentist with the purple and white sign. No waiting in the middle of the day on a Wednesday. Kamsamnida! (Thank you!)"
    },
    {
      id: 6,
      name: "Honey B.",
      rating: 5,
      date: "2022-4-19",
      comment: "Great service! Awesome people...very friendly and accommodating! Plus, they don't overcharge. Most of all, you'd never regret after seeing the result. Amazing job guys!"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const averageRating = testimonials.reduce((acc, review) => acc + review.rating, 0) / testimonials.length;

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
          <h2 className="text-base/7 font-semibold accent-underline" style={{ color: 'var(--muted-blue)' }}>Reviews</h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">See what our customers are saying about us</p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">Read authentic reviews from our satisfied customers and share your own experience with us.</p>
        
        {/* Overall Rating */}
        <div className="mx-auto mt-16 text-center">
          <div className="flex justify-center items-center mb-4">
            {renderStars(Math.round(averageRating))}
          </div>
          <p className="text-2xl font-bold text-gray-900">{averageRating.toFixed(1)} out of 5</p>
          <p className="text-gray-600">Based on {testimonials.length} reviews</p>
        </div>

        {/* Reviews Grid */}
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
          {testimonials.map((review) => (
            <div key={review.id} className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="flex">
                    {renderStars(review.rating)}
                  </div>
                </div>
                <span className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</span>
              </div>
              <p className="text-gray-700 mb-4">"{review.comment}"</p>
              <p className="font-semibold text-gray-900">- {review.name}</p>
            </div>
          ))}
        </div>

        {/* Review Form */}
        <div className="mx-auto mt-16 max-w-2xl accent-left-bar">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Leave a Review</h2>
            <form onSubmit={handleReviewSubmit} className="space-y-6">
              <div>
                <label htmlFor="review-name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="review-name"
                  name="name"
                  value={reviewForm.name}
                  onChange={handleReviewChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rating
                </label>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setReviewForm({ ...reviewForm, rating: star })}
                      className="focus:outline-none"
                    >
                      <svg
                        className={`w-8 h-8 ${star <= reviewForm.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="review-comment" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Review
                </label>
                <textarea
                  id="review-comment"
                  name="comment"
                  value={reviewForm.comment}
                  onChange={handleReviewChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Tell us about your experience..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition font-medium"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mx-auto mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience It Yourself?</h2>
          <p className="text-gray-600 mb-6">Book an appointment and join our satisfied customers</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:555-123-4567" className="bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition">
              Call to Book
            </a>
            <a href="https://calendly.com/jacoblokheenlee9/30min" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition">
              Book Online
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;