import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import MyToysRow from './MyToysRow';
import { AuthContext } from '../../Providers/AuthProviders';
import Loading from '../Shared/Loading/Loading';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true)
    const [myToys, setMyToys] = useState([]);
    useTitle('MyToys')
    useEffect(() => {
        fetch(`https://kids-car-zone-server.vercel.app/toys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
                setLoading(false);
            })
    }, [user])
    // ascending data
    const handleAscending = () => {
        fetch(`https://kids-car-zone-server.vercel.app/ascending?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }

    // decending data
    const handleDecending = () => {
        fetch(`https://kids-car-zone-server.vercel.app/decending?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }

    // loading
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='max-w-7xl mx-auto my-12'>
            <h2 className='toy-title tracking-wider text-center text-4xl text-[#105397]'>My Toys</h2>
            <div className='flex gap-2 justify-end my-8'>
            <button onClick={handleAscending}  className="btn bg-[#3485d5] hover:bg-[#237cd4] tracking-widest">ascending </button>
                <button onClick={handleDecending}  className="btn bg-[#105397] hover:bg-[#105397] tracking-widest">Descending </button>
            </div>
            <div className="overflow-auto w-full mx-auto">
                <table className="table w-full mx-auto">
                    {/* head */}
                    <thead >
                        <tr>
                            <th>img</th>
                            <th>name</th>
                            <th>sellerName</th>
                            <th>price</th>
                            <th>A.quantity</th>
                            <th>S.category</th>
                            <th>rating</th>
                            <th>D.Descriptions</th>
                            <th>update/delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(toy => <MyToysRow key={toy._id}
                                toy={toy}
                                myToys={myToys}
                                setMyToys={setMyToys}
                            ></MyToysRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;