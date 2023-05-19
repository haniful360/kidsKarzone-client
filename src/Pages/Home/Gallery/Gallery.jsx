import React from 'react';
import './Gallery.css'

const Gallery = () => {
    return (
        <div className='mb-12'>
            <div className="gallery">
                <h1>Our Gallery</h1>
                <p className='text-xl mb-10'>In our car gallery, we curate a diverse selection of vehicles that <br /> cater to various tastes and preferences. </p>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                    <div className="gallery_photo">
                        <img className='lg:w[400px] h-[300px]' src="https://i.ibb.co/XX8vXB2/download-3.jpg" alt="" />
                        <div className="layer">
                            <h3>OUR FANCY CARS</h3>
                        </div>
                    </div>
                    <div className="gallery_photo">
                        <img className='lg:w[400px] h-[300px]' src="https://i.ibb.co/zswK5Rc/images.jpg" alt="" />
                        <div className="layer">
                            <h3>OUR FANCY CARS</h3>
                        </div>
                    </div>
                    <div className="gallery_photo">
                        <img className='lg:w[400px] h-[300px]' src="https://i.ibb.co/R3fMcLW/maxresdefault.jpg" alt="" />
                        <div className="layer">
                            <h3>OUR FANCY CARS</h3>
                        </div>
                    </div>
                    <div className="gallery_photo">
                        <img className='lg:w[400px] h-[300px]' src="https://i.ibb.co/F8vfkbD/download.jpg" alt="" />
                        <div className="layer">
                            <h3>OUR FANCY CARS</h3>
                        </div>
                    </div>
                    <div className="gallery_photo">
                        <img className='lg:w[400px] h-[300px]' src="https://i.ibb.co/q9RGpYY/fire-1045906-640.jpg" alt="" />
                        <div className="layer">
                            <h3>OUR FANCY CARS</h3>
                        </div>
                    </div>
                    <div className="gallery_photo">
                        <img className='lg:w[400px] h-[300px]' src="https://i.ibb.co/gShyKxK/download-1.jpg" alt="" />
                        <div className="layer">
                            <h3>OUR FANCY CARS</h3>
                        </div>
                    </div>
                    <div className="gallery_photo">
                        <img className='lg:w[400px] h-[300px]' src="https://i.ibb.co/56qQzRk/images-2.jpg" alt="" />
                        <div className="layer">
                            <h3>OUR FANCY CARS</h3>
                        </div>
                    </div>
                    <div className="gallery_photo">
                        <img className='lg:w[400px] h-[300px]' src="https://i.ibb.co/gShyKxK/download-1.jpg" alt="" />
                        <div className="layer">
                            <h3>OUR FANCY CARS</h3>
                        </div>
                    </div>
                    <div className="gallery_photo">
                        <img className='lg:w[400px] h-[300px]' src="https://i.ibb.co/2n8kKNT/download.jpg" alt="" />
                        <div className="layer">
                            <h3>OUR FANCY CARS</h3>
                        </div>
                    </div>
                    <div className="gallery_photo">
                        <img className='lg:w[400px] h-[300px]' src="https://i.ibb.co/DbdZNTX/DK-M720-S-PP.jpg" alt="" />
                        <div className="layer">
                            <h3>OUR FANCY CARS</h3>
                        </div>
                    </div>
                    <div className="gallery_photo">
                        <img className='lg:w[400px] h-[300px]' src="https://i.ibb.co/2n8kKNT/download.jpg" alt="" />
                        <div className="layer">
                            <h3>OUR FANCY CARS</h3>
                        </div>
                    </div>
                    <div className="gallery_photo">
                        <img className='lg:w[400px] h-[300px]' src="https://i.ibb.co/2NkRPDw/s-l1600.jpg" alt="" />
                        <div className="layer">
                            <h3>OUR FANCY CARS</h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Gallery;