import React from 'react';
import banner1 from '../../../assets/banner1.jpg'
import banner2 from '../../../assets/banner2.jpg'
import banner3 from '../../../assets/banner3.webp'
import banner4 from '../../../assets/banner4.webp'
import './Banner.css';


import { HiArrowSmRight, HiArrowSmLeft } from 'react-icons/hi';

const Banner = () => {
    return (
        <div className="carousel w-full lg:h-[80vh] h-[500px]  rounded-lg mt-4">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full" />
                <div className="absolute flex w-full items-center justify-center  h-full bg-gradient-to-r top-0 from-[#15151566] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-5 pl-6 text-center '>
                        <h2 className='banner-title'>Affordable  Price <br /> For Car Servicing</h2>
                        <p className='banner-des'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='flex gap-3'>
                            <button className="btn block mx-auto btn-secondary capitalize">get started</button>

                        </div>
                    </div>
                </div>
                {/* banner arrow icon */}
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 gap-6 bottom-0">
                    <a href="#slide4" className="btn btn-circle"><HiArrowSmLeft></HiArrowSmLeft></a>
                    <a href="#slide2" className="btn btn-circle btn-secondary"><HiArrowSmRight></HiArrowSmRight></a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <img src={banner2} className="w-full" />
                <div className="absolute flex w-full items-center justify-center  h-full bg-gradient-to-r top-0 from-[#15151566] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-5 pl-6 text-center '>
                        <h2 className='banner-title'>Affordable  Price <br /> For Car Servicing</h2>
                        <p className='banner-des'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='flex gap-3'>
                            <button className="btn block mx-auto btn-secondary capitalize">get started</button>

                        </div>
                    </div>
                </div>
                {/* banner arrow icon */}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 gap-6 bottom-0">
                    <a href="#slide1" className="btn btn-circle"><HiArrowSmLeft></HiArrowSmLeft></a>
                    <a href="#slide3" className="btn btn-circle btn-secondary"><HiArrowSmRight></HiArrowSmRight></a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
            <img src={banner3} className="w-full" />
                <div className="absolute flex w-full items-center justify-center  h-full bg-gradient-to-r top-0 from-[#15151566] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-5 pl-6 text-center '>
                        <h2 className='banner-title'>Affordable  Price <br /> For Car Servicing</h2>
                        <p className='banner-des'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='flex gap-3'>
                            <button className="btn block mx-auto btn-secondary capitalize">get started</button>

                        </div>
                    </div>
                </div>
                {/* banner arrow icon */}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 gap-6 bottom-0">
                    <a href="#slide2" className="btn btn-circle"><HiArrowSmLeft></HiArrowSmLeft></a>
                    <a href="#slide4" className="btn btn-circle btn-secondary"><HiArrowSmRight></HiArrowSmRight></a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
            <img src={banner4} className="w-full" />
                <div className="absolute flex w-full items-center justify-center  h-full bg-gradient-to-r top-0 from-[#15151566] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-5 pl-6 text-center '>
                        <h2 className='banner-title'>Affordable  Price <br /> For Car Servicing</h2>
                        <p className='banner-des'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='flex gap-3'>
                            <button className="btn block mx-auto btn-secondary capitalize">get started</button>

                        </div>
                    </div>
                </div>
                {/* banner arrow icon */}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 gap-6 bottom-0">
                    <a href="#slide3" className="btn btn-circle"><HiArrowSmLeft></HiArrowSmLeft></a>
                    <a href="#slide1" className="btn btn-circle btn-secondary"><HiArrowSmRight></HiArrowSmRight></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;