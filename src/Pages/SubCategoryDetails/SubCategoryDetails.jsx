import React, { useEffect, useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import useTitle from '../../hooks/useTitle';

const SubCategoryDetails = () => {
    const [loading, setLoading] = useState(true);

    const singleSubcategory = useLoaderData();
    const { name, sellername, selleremail, price, subcategory, rating, quantity, photoURL, description } = singleSubcategory;

    useTitle('subcategory')

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 200);
    }, [])
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='max-w-6xl mx-auto my-16' data-aos="fade-down">
            <div className="card w-5/12 mx-auto shadow border-2 border-t-[#105397]">
                <figure><img className='h-[350px] w-full' src={photoURL} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        name:
                        <span className='font-semibold text-[26px] text-[#105397]'> {name}</span>
                        <div className="badge bg-[#105397]">NEW</div>
                    </h2>
                    <p>sellername: <span className='font-semibold text-[22px] text-[#105397]'>{sellername}</span> </p>
                    <p >selleremail: <span className='font-semibold text-[22px] text-[#105397]'>{selleremail}</span> </p>
                    <p>subcategory: <span className='font-semibold text-[22px] text-[#105397]'>{subcategory}</span> </p>
                    <p>price: <span className='font-semibold text-[22px] text-[#105397]'>{price}</span> </p>
                    <p>quantity: <span className='font-semibold text-[22px] text-[#105397]'>{quantity}</span> </p>
                    <p>description: <span className='font-semibold text-[22px] text-[#105397]'>{description}</span> </p>
                    <div className='flex items-center gap-1'>
                        <Rating
                            placeholderRating={rating}
                            readonly
                            emptySymbol={<FaRegStar className="text-warning"></FaRegStar>}
                            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                            fullSymbol={<FaStar></FaStar>}

                        />
                        <div className='w-6 h-6 rounded-full bg-slate-300'>
                            <span className=''>{rating}</span>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="badge text-[#105397] badge-outline">#Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubCategoryDetails;