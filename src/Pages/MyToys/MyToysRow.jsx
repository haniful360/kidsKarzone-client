import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

const MyToysRow = ({ toy, myToys, setMyToys }) => {
    const { _id, sellername, description, photoURL, name, rating, quantity, price, subcategory } = toy;

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then(result => {
                if (result.isConfirmed) {
                    fetch(`https://kids-car-zone-server.vercel.app/toys/${id}`, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount === 1) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your Toy has been deleted.',
                                    'success'
                                )
                                const remaining = myToys.filter(myToy => myToy._id !== _id)
                                setMyToys(remaining)
                            }
                        })
                }
            })
    }

    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-16 h-16">
                            <img src={photoURL} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{sellername}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <td>{subcategory}</td>
            <td><Rating
                placeholderRating={rating}
                readonly
                emptySymbol={<FaRegStar className="text-warning"></FaRegStar>}
                placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                fullSymbol={<FaStar></FaStar>}
            />{rating}</td>
            <td>{description}</td>
            <th className='flex gap-3'>
                <Link to={`/updatetoys/${_id}`}>
                    <button className="btn btn-ghost bg-base-200 rounded-full btn-md"><AiOutlineEdit className='w-4 h-6 text-[#105397]'></AiOutlineEdit></button>
                </Link>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost bg-base-200 rounded-full btn-md"><AiOutlineDelete className='w-4 h-6 text-red-400'></AiOutlineDelete></button>
            </th>
        </tr>
    );
};

export default MyToysRow;