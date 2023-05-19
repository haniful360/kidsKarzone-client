import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import AllToysTable from './AllToysTable';

const AllToys = () => {
    const [allToys, setAllToys] = useState([]);
    useTitle('AllToys')
    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])
    return (
        <div className='mb-12'>
            <h3>all toys:{allToys.length}</h3>
            <div className="overflow-y-auto w-full container">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>img</th>
                            <th>sellerName</th>
                            <th>toyname </th>
                            <th>S.category</th>
                            <th>price</th>
                            <th>quantity</th>
                            <th>details btn</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToys.map(allToy => <AllToysTable
                                key={allToy._id}
                                allToy={allToy}
                            ></AllToysTable>)
                        }

                    </tbody>
                    {/* foot */}
                    {/* <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot> */}

                </table>
            </div>
        </div>
    );
};

export default AllToys;