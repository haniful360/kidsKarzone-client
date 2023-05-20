import React from 'react';
import { Link } from 'react-router-dom';

const AllToysTable = ({ allToy }) => {
    const { _id, name, sellername, selleremail, price, subcategory, rating, quantity, photoURL, description } = allToy;
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-16 h-16">
                            <img src={photoURL} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>{sellername}</td>
            <td>{name}</td>
            <td>{subcategory}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <th>

                <Link to={`/alltoydetails/${_id}`}>
                    <button className="btn btn-xs sm:btn-sm btn-accent text-white bg-[#105397] capitalize">Details</button>
                </Link>
            </th>
        </tr>
    );
};

export default AllToysTable;