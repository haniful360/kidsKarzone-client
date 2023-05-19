import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = () => {
    const [subcategories, setSubCategories] = useState(['SportsCar'])
    useEffect(() => {
        fetch(`http://localhost:5000/subcategory?subcategory=${subcategories}`)
            .then(res => res.json())
            .then(data => {
                setSubCategories(data);
            })
    }, [])
    return (
        <div className='mb-16'>
            <div className='text-center'>
                <h2 className='shop-title mb-3'>Shop Categories</h2>
                <p>Welcome to our car shop category, where you can find an extensive range <br /> of products and services related to automobiles. </p>
            </div>
            <p>length:{subcategories.length}</p>

            {
                subcategories.map(sCategory => <Category
                    key={sCategory._id}
                    sCategory={sCategory}
                ></Category>)
            }
        </div>
    );
};

export default Categories;