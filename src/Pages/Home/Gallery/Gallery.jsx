import React from 'react';
import './Gallery.css'

const Gallery = () => {
    return (
        <div className='mb-12'>
            <div className="gallery">
                <h2>Our Gallery</h2>
                <p className='text-xl mb-10'>In our car gallery, we curate a diverse selection of vehicles that <br /> cater to various tastes and preferences. </p>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                    <div className="gallery_photo" data-aos="fade-right">
                        <img className='lg:w[400px] h-[300px]' src="https://i.ibb.co/XX8vXB2/download-3.jpg" alt="" />
                        <div className="layer">
                            <h3>OUR FANCY CARS</h3>
                        </div>
                    </div>
                    <div className="gallery_photo" data-aos="fade-left">
                        <img className='lg:w[400px] h-[300px]' src="https://i.ibb.co/zswK5Rc/images.jpg" alt="" />
                        <div className="layer">
                            <h3>OUR FANCY CARS</h3>
                        </div>
                    </div>
                    <div className="gallery_photo"data-aos="fade-left">
                        <img className='lg:w[400px] h-[300px]' src="https://thumbs.dreamstime.com/b/ilidza-bosnia-herzegovina-may-police-car-old-timer-i-ilidza-bosnia-hrzegovina-ilidza-bosnia-herzegovina-may-police-car-200538246.jpg" alt="" />
                        <div className="layer">
                            <h3>OUR FANCY CARS</h3>
                        </div>
                    </div>
                    <div className="gallery_photo"data-aos="fade-right">
                        <img className='lg:w[400px] h-[300px]' src="https://i.ibb.co/F8vfkbD/download.jpg" alt="" />
                        <div className="layer">
                            <h3>OUR FANCY CARS</h3>
                        </div>
                    </div>
                    <div className="gallery_photo"data-aos="fade-right">
                        <img className='lg:w[400px] h-[300px]' src="https://i.ibb.co/q9RGpYY/fire-1045906-640.jpg" alt="" />
                        <div className="layer">
                            <h3>OUR FANCY CARS</h3>
                        </div>
                    </div>
                    <div className="gallery_photo"data-aos="fade-down">
                        <img className='lg:w[400px] h-[300px]' src="https://i.ibb.co/gShyKxK/download-1.jpg" alt="" />
                        <div className="layer">
                            <h3>OUR FANCY CARS</h3>
                        </div>
                    </div>
                    <div className="gallery_photo"data-aos="fade-up">
                        <img className='lg:w[400px] h-[300px]' src="https://i.ibb.co/56qQzRk/images-2.jpg" alt="" />
                        <div className="layer">
                            <h3>OUR FANCY CARS</h3>
                        </div>
                    </div>
                    <div className="gallery_photo"data-aos="fade-right">
                        <img className='lg:w[400px] h-[300px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBA-EiIPudBa3acy_M3z8fW7E6Gqg9mVwbFflsABfbC0M-gFEFR_yC5vkZPuCUb0H3PHc&usqp=CAU" alt="" />
                        <div className="layer">
                            <h3>OUR FANCY CARS</h3>
                        </div>
                    </div>
                    <div className="gallery_photo"data-aos="fade-up">
                        <img className='lg:w[400px] h-[300px]' src="https://m.media-amazon.com/images/I/61oGRLdWzAL._AC_UF894,1000_QL80_.jpg" alt="" />
                        <div className="layer">
                            <h3>OUR FANCY CARS</h3>
                        </div>
                    </div>
                    <div className="gallery_photo"data-aos="fade-up">
                        <img className='lg:w[400px] h-[300px]' src="https://i.ebayimg.com/images/g/4pcAAOSwBDlaxTn-/s-l1600.jpg" alt="" />
                        <div className="layer">
                            <h3>OUR FANCY CARS</h3>
                        </div>
                    </div>
                    <div className="gallery_photo"data-aos="fade-up">
                        <img className='lg:w[400px] h-[300px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZaCx1jlqOPwoWGhBmfDo3-GgWqgMH3F1quQ&usqp=CAU" alt="" />
                        <div className="layer">
                            <h3>OUR FANCY CARS</h3>
                        </div>
                    </div>
                    <div className="gallery_photo"data-aos="fade-up">
                        <img className='lg:w[400px] h-[300px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtbHnObyEDZBevi898PMQeuVTZ1xfI1lbLnOp71LrZ8Nwvq80YSkoGl1AoUgRIqCx7CPw&usqp=CAU" alt="" />
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