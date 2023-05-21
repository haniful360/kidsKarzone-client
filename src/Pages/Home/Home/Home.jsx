import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Categories from '../ShopCategories/Categories';
import useTitle from '../../../hooks/useTitle';
import Gallery from '../Gallery/Gallery';
import Loading from '../../Shared/Loading/Loading';
import Testimonials from '../Testimonials/Testimonials';
import AboutServices from '../AboutServices/AboutServices';

const Home = () => {
    const [loading, setLoading] = useState(true)
    useTitle('Home')
    // spinner
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, (300))
    }, [])
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='max-w-6xl mx-auto'>
            <Banner></Banner>
            <Gallery></Gallery>
            <Categories></Categories>
            <AboutServices></AboutServices>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;