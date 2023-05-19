import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import useTitle from '../../hooks/useTitle';
import Swal from 'sweetalert2';

const AddToys = () => {
    
    const { user } = useContext(AuthContext);
    useTitle('AddToys')
    const handleAddToys = (e) => {
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

        const addToys = { name, sellername, selleremail, price, subcategory, rating, quantity, photoURL, description }
        console.log(addToys);
    

        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(addToys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'OK'
                      })
                }
            })

    }
    return (
        <div className='bg-[#F4F3F0] px-4 md:px-28 py-16'>
            <h2 className='toy-title text-center'>Add a Toys</h2>
            <p className='toy-des'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, minima suscipit laborum quasi harum explicabo vitae consectetur rerum error nobis.</p>
            <form onSubmit={handleAddToys}>
                {/* row 1 */}
                <div className="md:flex gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name='name' className="input input-bordered w-full" />
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
                        <input type="number" placeholder="price" name='price' className="input input-bordered w-full" />
                    </div>
                </div>
                {/* row 3 */}
                <div className="md:flex gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">sub category</span>
                        </label>
                        <select name='subcategory' className="select select-bordered w-full">
                            <option value='SportsCar' selected>SportsCar</option>
                            <option value="MiniFireTruck">MiniFireTruck</option>
                            <option value='MiniPoliceCar'>MiniPoliceCar</option>
                        </select>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">rating</span>
                        </label>
                        <input type="text" placeholder="rating" name='rating' className="input input-bordered w-full" />
                    </div>
                </div>
                {/* row 4 */}
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
                {/* row 5 */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">details descriptions</span>
                    </label>
                    <textarea className="textarea textarea-bordered w-full" name='description' placeholder="Details Descriptions"></textarea>
                </div>
                <input type="submit" value="Add a Toys" className='btn btn-block btn btn-accent outline-0 text-white capitalize mt-6' />
            </form>
        </div>
    );
};

export default AddToys;