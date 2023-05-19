import React from 'react';
import Rating from 'react-rating';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaStar, FaRegStar } from 'react-icons/fa';
import useTitle from '../../hooks/useTitle';

const AllToyViewDetails = () => {
    const { id } = useParams();
    useTitle('AllDetails')
    const allToyDetails = useLoaderData();
    const { name, sellername, selleremail, price, subcategory, rating, quantity, photoURL, description } = allToyDetails;
    return (
        <div className='max-w-6xl mx-auto my-12'>
            <div className="card lg:card-side bg-base-100 shadow-md">
                <figure><img className='h-[400px]' src={photoURL} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Toy name: {name}</h2>
                    <p><span className='font-semibold text-lime-700'>Seller name</span>: {sellername}</p>
                    <p><span className='font-semibold text-lime-700'>Seller email</span>: {selleremail}</p>
                    <p><span className='font-semibold text-lime-700'>Subcategory</span>: {subcategory}</p>
                    
                    <p><span className='font-semibold text-lime-700'>Quantity</span>: {quantity}</p>
                    <p><span className='font-semibold text-lime-700'>Price</span>: ${price}</p>
                    <p><span className='font-semibold text-lime-700'>Description</span>: {description}</p>
                    <div className='flex items-center gap-2'>
                        <Rating
                            placeholderRating={rating}
                            readonly
                            emptySymbol={<FaRegStar className="text-warning"></FaRegStar>}
                            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                        {rating}
                    </div>
                   

                </div>
            </div>
        </div>
    );
};

export default AllToyViewDetails;