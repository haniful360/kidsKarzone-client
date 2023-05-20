import React from 'react';

const ClientReview = ({ review }) => {
    const { name, description, img, state } = review;
    return (
        <div>
            <div className="card shadow-xl">
                <div className="card-body">
                    <p className='text-[20px]'>{description}</p>
                </div>
                <div className='flex pt-2 pb-8'>
                    <div className="ml-8 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                        <img className='w-12 h-12 rounded-xl' src={img} alt='' />
                    </div>
                    <div className='ml-4'>
                        <h2 className='text-xl font-bold'>{name}</h2>
                        <p>{state}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientReview;