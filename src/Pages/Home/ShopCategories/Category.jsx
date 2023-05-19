import React, { useEffect, useState } from 'react';
import './Categories.css'


const Category = () => {
  
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className=''>
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
                        <h2></h2>
                        <hr />
                        <div className="grid lg:grid-cols-3 gap-10">
                            <div className="card card-compact bg-base-100 shadow-md">
                                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">view details button</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={toggleState === 2 ? "content  active-content" : "content"}
                    >
                        <h2>Content 2</h2>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                            voluptatum qui adipisci.
                        </p>
                    </div>

                    <div
                        className={toggleState === 3 ? "content  active-content" : "content"}
                    >
                        <h2>Content 3</h2>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                            Accusamus in quia odit aspernatur provident et ad vel distinctio
                            recusandae totam quidem repudiandae omnis veritatis nostrum
                            laboriosam architecto optio rem, dignissimos voluptatum beatae
                            aperiam voluptatem atque. Beatae rerum dolores sunt.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;