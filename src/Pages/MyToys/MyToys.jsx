import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import MyToysRow from './MyToysRow';

const MyToys = () => {
    const [myToys, setMyToys] = useState([])
    useTitle('MyToys')
    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [])
    return (
        <div>
            <h3>my toys:{myToys.length}</h3>
            <div className="overflowauto w-full">
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
                            <th>name</th>
                            <th>price</th>
                            <th>A.quantity</th>
                            <th>D.Descriptions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(toy => <MyToysRow key={toy._id}
                                toy={toy}
                            ></MyToysRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;