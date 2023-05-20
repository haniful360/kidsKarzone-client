import React from 'react';

const AboutServices = () => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-6 lg:px-0 px-4">
                <div data-aos="zoom-in">
                    <h1 className="text-4xl leading-[78px] uppercase font-bold">We are provide  professional  service</h1>
                   
                    <p className="py-6 lg:w-[600px]"> If your toy car experiences any mechanical issues, our skilled technicians are here to help. From fixing jammed wheels to repairing broken gears, we have the expertise to diagnose and resolve a wide range of mechanical problems. We use high-quality replacement parts to ensure durability and functionality</p>
                    <button className="btn tracking-widest bg-[#105397]">Learn More</button>
                </div>
                <div className='bg-[#105397d0] rounded-2xl' data-aos="zoom-in">
                    <img src="https://static-01.daraz.com.bd/p/a82070d3ff8fff7b7e0e32257140ea3c.jpg_720x720.jpg_.webp" className="lg:w-[600px] rounded-lg" />
                </div>
            </div>
        </div>
    );
};

export default AboutServices;