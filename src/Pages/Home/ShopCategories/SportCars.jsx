import React from 'react';
import Rating from 'react-rating';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SportCars = ({ sCar }) => {
    const { _id, name, photoURL, rating, price } = sCar;
    return (
        <div className="card lg:card-side bg-base-100 shadow-md">
            <figure className=''> <img className='lg:w-[300px] lg:h-[250px] rounded' src={photoURL} alt="Album" /></figure>
            <div className="card-body">
                <h3 className="text-xl">{name}</h3>
                <p>price:${price}</p>
                <div className="flex justify-start items-center gap-1">
                    <Rating
                        placeholderRating={rating}
                        readonly
                        emptySymbol={<FaRegStar className="text-warning"></FaRegStar>}
                        placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                        fullSymbol={<FaStar></FaStar>}

                    />
                    <span>{rating}</span>

                </div>
                <div className="">
                    <Link to={`subCategoryDetails/${_id}`}>
                        <button className="btn btn-xs sm:btn-sm btn-accent text-white bg-[#105397] capitalize">viewDetails</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SportCars;