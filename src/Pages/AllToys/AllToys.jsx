import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import AllToysTable from './AllToysTable';
import Loading from '../Shared/Loading/Loading';

const AllToys = () => {
    const [allToys, setAllToys] = useState([]);
    const [loading, setLoading] = useState(true)
    const [searchName, setSearchName] = useState('')

    useTitle('AllToys')
    useEffect(() => {
        fetch('https://kids-car-zone-server.vercel.app/alltoys')
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
                setLoading(false)
            })
    }, [])

    const url = `https://kids-car-zone-server.vercel.app/toyname?name=${searchName}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
            })
    }, [searchName])
    const handleToyName = (e) => {
        console.log(e.target.value);
        setSearchName(e.target.value);
    }

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='my-12'>
           
            <h2 className='toy-title tracking-wider text-center text-4xl text-[#105397] my-4' data-aos="fade-down">All Toys</h2>
            <div className='text-center'>
                <input onChange={handleToyName} type="text" placeholder="Search toy name..." className="input input-bordered w-full mb-5 max-w-sm" />
            </div>
            <div className="overflow-y-auto w-full max-w-6xl mx-auto">
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
                </table>
            </div>
         
        </div>

        
    );
};

export default AllToys;