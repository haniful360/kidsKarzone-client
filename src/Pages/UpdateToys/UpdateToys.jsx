import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import useTitle from '../../hooks/useTitle';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';

const UpdateToys = () => {

    const { user } = useContext(AuthContext);
    const loadToyData = useLoaderData();
    const {_id,name, sellername, selleremail, price, subcategory, rating, quantity, photoURL, description} = loadToyData;
    useTitle('UpdateToys')
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const sellername = form.sellername.value;
        const selleremail = form.selleremail.value;
        const price = form.price.value;
        const subcategory = form.subcategory.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const photoURL = form.PhotoURL.value;
        const description = form.description.value;

        const updateToys = { name, sellername, selleremail, price, subcategory, rating, quantity, photoURL, description }
      
        fetch(`https://kids-car-zone-server.vercel.app/toys/${_id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateToys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount ===1){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your Data is Update',
                        icon: 'success',
                        confirmButtonText: 'OK'
                      })
                }
                // form.reset();
            })

    }
    return (
        <div className='bg-[#F4F3F0] px-4 md:px-28 py-16'>
            <h2 className='toy-title text-center'>Update a Toys</h2>
            <p className='toy-des'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, minima suscipit laborum quasi harum explicabo vitae consectetur rerum error nobis.</p>
            <form onSubmit={handleUpdate}>
                {/* row 1 */}
                <div className="md:flex gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={name} placeholder="Name" name='name' className="input input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">seller name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} placeholder="seller name" name='sellername' className="input input-bordered w-full" />
                    </div>
                </div>
                {/* row 2 */}
                <div className="md:flex gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">seller email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} placeholder="seller email" name='selleremail' className="input input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">price</span>
                        </label>
                        <input type="number" defaultValue={price} placeholder="price" name='price' className="input input-bordered w-full" />
                    </div>
                </div>
                {/* row 3 */}
                <div className="md:flex gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">sub category</span>
                        </label>
                        <select defaultValue={subcategory} name='subcategory' className="select select-bordered w-full">
                            <option selected>SportsCar</option>
                            <option>MiniFireTruck</option>
                            <option>MiniPoliceCar</option>
                        </select>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">rating</span>
                        </label>
                        <input type="number" defaultValue={rating} placeholder="rating" name='rating' className="input input-bordered w-full" />
                    </div>
                </div>
                {/* row 4 */}
                <div className="md:flex gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">available quantity</span>
                        </label>
                        <input type="number" defaultValue={quantity} placeholder="available quantity" name='quantity' className="input input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input type="text" defaultValue={photoURL} placeholder="PhotoURL" name='PhotoURL' className="input input-bordered w-full" />
                    </div>
                </div>
                {/* row 5 */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">details descriptions</span>
                    </label>
                    <textarea className="textarea textarea-bordered w-full" name='description' defaultValue={description} placeholder="Details Descriptions"></textarea>
                </div>
                <input type="submit" value="Add a Toys" className='btn btn-block btn btn-accent outline-0 text-white capitalize mt-6' />
            </form>
        </div>
    );
};

export default UpdateToys;