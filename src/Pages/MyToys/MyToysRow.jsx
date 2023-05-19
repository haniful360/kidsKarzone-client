import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

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
                    fetch(`http://localhost:5000/toys/${id}`, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount === 1) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your Coffee has been deleted.',
                                    'success'
                                )
                                const remaining = myToys.filter(booking => booking._id !== _id)
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
                        <div className="mask mask-squircle w-20 h-20">
                            <img src={photoURL} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{sellername}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{subcategory}</td>
            <td>{rating}</td>
            <td>{description}</td>
            <th>
                <Link to={`/updatetoys/${_id}`}>
                    <button className="btn btn-ghost btn-md">u</button>
                </Link>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-md">X</button>
            </th>
        </tr>
    );
};

export default MyToysRow;