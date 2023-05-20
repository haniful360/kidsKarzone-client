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
        fetch(`http://localhost:5000/toys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
                setLoading(false);
            })
    }, [])
    // ascending data
    const handleAscending = () => {
        // e.preventDefault()
        fetch(`http://localhost:5000/ascending?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }

    // decending data
    const handleDecending = () => {
        fetch(`http://localhost:5000/decending?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }
    
    // loading
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='max-w-6xl mx-auto my-12'>
            <div>
                <button onClick={handleAscending} className="btn btn-outline btn-success">Ascending</button>
                <button onClick={handleDecending} className="btn btn-outline btn-accent">Descending </button>
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