import React from 'react';
import Rating from 'react-rating';
import { FaStar, FaRegStar } from 'react-icons/fa';
const ClientReview = ({ review }) => {
    const { name, description, img, state } = review;
    return (
        <div>
            <div className="card shadow-md my-2" data-aos="zoom-in-up"
                data-aos-easing="linear"
                data-aos-duration="500">
                <div className="card-body">
                    <p className='text-[20px]'>{description}</p>
                </div>
                <div className='flex pt-2 pb-8'>
                    <div className="ml-8 rounded-full ring ring-[#105397] ring-offset-base-100 w-12 h-12 ring-offset-2">
                        <img className='h-12 rounded-3xl' src={img} alt='' />
                    </div>
                    <div className='ml-4'>
                        <h2 className='text-xl text-[#105397] font-bold'>{name}</h2>
                        <p>{state}</p>
                        <Rating
                            placeholderRating='4.6'
                            readonly
                            emptySymbol={<FaRegStar className="text-warning"></FaRegStar>}
                            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientReview;