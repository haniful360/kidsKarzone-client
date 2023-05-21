import React, { useEffect, useState } from 'react';
import './Categories.css'
import SportCars from './SportCars';
import MiniFireTruck from './MiniFireTruck';
import MiniPoliceCar from './MiniPoliceCar';

const Categories = () => {
    const [toggleState, setToggleState] = useState(1);
    const [sportsCars, setSportsCars] = useState([])
    const [fireTrucks, setFireTrucks] = useState([])
    const [policeCars, setPoliceCars] = useState([])

    const sportsCar = 'SportsCar'
    const firetruck = 'MiniFireTruck'
    const policeCar = 'MiniPoliceCar'


    const toggleTab = (index) => {
        setToggleState(index);
    };
    // sports car
    useEffect(() => {
        fetch(`https://kids-car-zone-server.vercel.app/subcategory?subcategory=${sportsCar}`)
            .then(res => res.json())
            .then(data => {
                setSportsCars(data);
            })
    }, [])
    // mini fire truck
    useEffect(() => {
        fetch(`https://kids-car-zone-server.vercel.app/subcategory?subcategory=${firetruck}`)
            .then(res => res.json())
            .then(data => {
                setFireTrucks(data);
            })
    }, [])
    // mini police car
    useEffect(() => {
        fetch(`https://kids-car-zone-server.vercel.app/subcategory?subcategory=${policeCar}`)
            .then(res => res.json())
            .then(data => {
                setPoliceCars(data);
            })
    }, [])

    return (
        <div className='mb-16'>
            <div className='text-center shop-categories'>
                <h2 className='mb-3'>Shop Categories</h2>
                <p>Welcome to our car shop category, where you can find an extensive range <br /> of products and services related to automobiles. </p>
            </div>

            <div className="container shadow">
                <div className="bloc-tabs">
                    <button
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}
                    >
                        Sports Car
                    </button>
                    <button
                        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(2)}
                    >
                        Mini Fire Truck
                    </button>
                    <button
                        className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(3)}
                    >
                        Mini Police Car
                    </button>
                </div>

                <div className="content-tabs">
                    <div
                        className={toggleState === 1 ? "content  active-content" : "content"}
                    >
                        <h2 className='text-2xl text-[#105397]'>content:1</h2>
                        <hr />
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                            {
                                sportsCars.map(sCar => <SportCars key={sCar._id}
                                    sCar={sCar}
                                ></SportCars>)
                            }
                        </div>
                    </div>

                    <div
                        className={toggleState === 2 ? "content  active-content" : "content"}
                    >
                        <h2 className='text-2xl text-[#105397]'>content:2</h2>
                        <hr />
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            {
                                fireTrucks.map(fTruck => <MiniFireTruck key={fTruck._id}
                                    fTruck={fTruck}
                                ></MiniFireTruck>)
                            }
                        </div>
                    </div>

                    <div
                        className={toggleState === 3 ? "content  active-content" : "content"}
                    >
                        <h2 className='text-2xl text-[#105397]'>content:3</h2>
                        <hr />
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            {
                                policeCars.map(pCar => <MiniPoliceCar key={pCar._id}
                                    pCar={pCar}
                                ></MiniPoliceCar>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;