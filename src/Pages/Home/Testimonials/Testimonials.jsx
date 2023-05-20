import React from 'react';
import ClientReview from './ClientReview';
import person1 from '../../../assets/person1.png'
import person2 from '../../../assets/person2.png'
import person3 from '../../../assets/person3.png'
const Testimonials = () => {
    const reviews = [
        { _id: 1, description: 'I bought the mini toy car for my 5-year-old son, and he absolutely loves it! The car is the perfect size for his little hands, and the wheels roll smoothly. Its durable too, as it has survived many crashes and rough play sessions. Im impressed with the quality and would highly recommend it to other parents.', name: 'Steven smit', state: "New Delhi", img: person1},
        { _id: 2, description: "I'm a collector of miniature cars, and when I came across this mini toy car, I knew I had to add it to my collection. The attention to detail is incredible, from the intricate design to the vibrant colors. It's a great replica of a real car, and it looks fantastic on display. It's definitely one of the highlights of my collection.", name: 'Wilson Herry', state: "New york", img: person2},
        { _id: 3, description: "I purchased the mini toy car as a gift for my nephew's birthday, and he couldn't have been happier. He spent hours zooming the car around the house, creating his own little races and adventures. The car is easy to maneuver, and the compact size makes it perfect for indoor play.", name: 'William Son', state: "Melbourne" ,img: person3}
    ]
    return (
        <section className='my-20  lg:px-0 px-4'>
            <div className='flex justify-between items-center'>
                <div className=''>
                    <h4 className='font-bol text-xl text-[#105397]'>Testimonial</h4>
                    <h2 className='text-4xl'>What Our client Says</h2>
                </div>
                <div>
                    <img src='https://i.ibb.co/N1Hwkrh/quotation-39627-960-720.png' className="w-24 lg:w-36" alt="" />
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-28'>
                {
                    reviews.map(review => <ClientReview
                        key={review._id}
                        review={review}
                    ></ClientReview>)
                }
            </div>
        </section>
    );
};

export default Testimonials;