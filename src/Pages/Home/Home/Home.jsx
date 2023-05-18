import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../ShopCategories/Categories';

const Home = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Banner></Banner>
            <Categories></Categories>
        </div>
    );
};

export default Home;