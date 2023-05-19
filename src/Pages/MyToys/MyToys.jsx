import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import MyToysRow from './MyToysRow';
import { AuthContext } from '../../Providers/AuthProviders';
import Loading from '../Shared/Loading/Loading';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([])
    const [loading, setLoading] = useState(true)
    useTitle('MyToys')
    useEffect(() => {
        fetch(`http://localhost:5000/toys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
                setLoading(false)
            })
    }, [myToys])
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className='max-w-6xl mx-auto my-12'>
            <div className="overflowauto w-full mx-auto">
                <table className="table w-full mx-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>img</th>
                            <th>name</th>
                            <th>sellername</th>
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