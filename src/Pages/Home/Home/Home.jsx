import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../ShopCategories/Categories';
import useTitle from '../../../hooks/useTitle';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    useTitle('Home')
    return (
        <div className='max-w-6xl mx-auto'>
            <Banner></Banner>
            <Gallery></Gallery>
            <Categories></Categories>
        </div>
    );
};

export default Home;