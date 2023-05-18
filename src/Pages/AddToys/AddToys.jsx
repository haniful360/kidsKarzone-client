import React from 'react';

const AddToys = () => {
    return (
        <div className='bg-[#F4F3F0] px-4 md:px-28 py-16'>
            <h2 className='coffee-title text-center'>Add a Toys</h2>
            <p className='coffee-des'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, minima suscipit laborum quasi harum explicabo vitae consectetur rerum error nobis.</p>
            <form>
                {/* Name */}
                <div className="md:flex gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <input type="text" placeholder="Name" name='name' className="input input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">seller name</span>
                        </label>
                        <input type="text" placeholder="seller name" name='sellername' className="input input-bordered w-full" />
                    </div>
                </div>
                {/* supplier */}
                <div className="md:flex gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">seller email</span>
                        </label>
                        <input type="email" placeholder="seller email" name='selleremail' className="input input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">price</span>
                        </label>
                        <input type="number" placeholder="price" name='price' className="input input-bordered w-full" />
                    </div>
                </div>
                {/* category */}
                <div className="md:flex gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">sub category</span>
                        </label>
                        <select name='subcategory' className="select select-bordered w-full">
                            <option disabled selected>Hot Hatches</option>
                            <option>Muscle Cars</option>
                            <option>Super cars</option>
                        </select>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">rating</span>
                        </label>
                        <input type="number" placeholder="rating" name='rating' className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="md:flex gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">available quantity</span>
                        </label>
                        <input type="number" placeholder="available quantity" name='quantity' className="input input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input type="text" placeholder="PhotoURL" name='PhotoURL' className="input input-bordered w-full" />
                    </div>
                </div>
                {/* photo url */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">details descriptions</span>
                    </label>
                    <textarea className="textarea textarea-bordered w-full" placeholder="Details Descriptions"></textarea>
                </div>
                <input type="submit" value="Add a Toys" className='btn btn-block btn btn-accent outline-0 text-white capitalize mt-6' />
            </form>
        </div>
    );
};

export default AddToys;