import React from 'react';
import banner1 from '../../../assets/banner1.jpg'
import banner2 from '../../../assets/banner2.jpg'
import banner3 from '../../../assets/banner3.webp'
import banner4 from '../../../assets/banner4.webp'
import './Banner.css';
import { HiArrowSmRight, HiArrowSmLeft } from 'react-icons/hi';

const Banner = () => {
    return (
        <div className="carousel w-full lg:h-[80vh] h-[500px]  rounded-lg mt-4"data-aos="zoom-in-up"
        data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full" />
                <div className="absolute flex w-full items-center justify-center  h-full bg-gradient-to-r top-0 from-[#15151566] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-5 pl-6 text-center '>
                        <h2 className='banner-title'>Stylish and Compact <br /> Urban Travel</h2>
                        <p className='banner-des'>Be a hero on wheels with the Rescue Hero Mini Car! Equipped with emergency lights a <br />
                            nd realistic sirens, this miniature rescue vehicle is ready to spring into action.
                            Rush to the <br /> scene of pretend emergencies, whether it's a stranded toy or a fallen action figure.</p>
                        <div className='flex gap-3'>
                            <button className="btn block mx-auto btn-secondary capitalize">get started</button>

                        </div>
                    </div>
                </div>
                {/* banner arrow icon */}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 gap-6 bottom-0">
                    <a href="#slide4" className="btn btn-circle"><HiArrowSmLeft></HiArrowSmLeft></a>
                    <a href="#slide2" className="btn btn-circle btn-secondary"><HiArrowSmRight></HiArrowSmRight></a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full" />
                <div className="absolute flex w-full items-center justify-center  h-full bg-gradient-to-r top-0 from-[#15151566] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-5 pl-6 text-center '>
                        <h2 className='banner-title'>
                            Save the Day with <br /> Action-Packed Adventures!"</h2>
                        <p className='banner-des'>
                            Experience the city in style with the sleek and compact City Cruiser Mini Car!
                            This trendy little ride is <br /> perfect for navigating busy streets and crowded parking lots. With its modern 
                            design and efficient <br /> engine, it effortlessly weaves through traffic and fits into
                            tight parking spaces.</p>
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
                        <h2 className='banner-title'>The Ultimate <br /> Racing Thrill!</h2>
                        <p className='banner-des'>Get ready for high-speed action with the Speedy Racer Mini Car! This pint-sized
                            vehicle packs a <br /> punch with its sleek design and powerful motor. Zoom through the
                            track, <br /> maneuvering tight corners and leaving your competitors in the dust</p>
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
                        <h2 className='banner-title'> Conquer the Toughest Terrains</h2>
                        <p className='banner-des'>
                            Take on extreme off-road adventures with the Wild Off-Roader Mini Car! 
                            This rugged vehicle is built <br /> to tackle the toughest terrains with ease.
                            Its durable construction, oversized tires, and powerful suspension <br /> system make it perfect for
                            conquering rocky mountains, sandy dunes, and muddy trails.</p>
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