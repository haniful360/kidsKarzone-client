import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const SubCategoryDetails = () => {
    const { id } = useParams();
    const singleSubcategory = useLoaderData();
    const { name, sellername, selleremail, price, subcategory, rating, quantity, photoURL, description } = singleSubcategory;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photoURL} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubCategoryDetails;