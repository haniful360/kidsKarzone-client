import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../ShopCategories/Categories';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div className='max-w-6xl mx-auto'>
            <Banner></Banner>
            <Categories></Categories>
        </div>
    );
};

export default Home;