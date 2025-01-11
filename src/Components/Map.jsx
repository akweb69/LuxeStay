import React from 'react';
import HeadingTitle from '../Utils/HeadingTitle';

const Map = () => {
    return (
        <div className='w-full bg-gradient-to-t from-indigo-100 to-indigo-50 '>
            <HeadingTitle one={"Our Location"} two={"Enjoy seamless connectivity, with nearby restaurants, shopping centers, and attractions that make your stay truly unforgettable"}></HeadingTitle>

            <div className="w-11/12 mx-auto md:grid grid-cols-1 lg:grid-cols-3 gap-8 ">
                {/* Address Section */}

                <div className="col-span-1 lg:col-span-1 pb-4 ">

                    <p className="text-indigo-800 text-2xl md:text-4xl font-bold font-font1 mt-2">
                        LuxeStay
                    </p>
                    <p className="text-gray-600 mt-2">
                        <strong>Find Us On:</strong> 162 164 Nguyễn Lương Bằng, Phù Đổng, Pleiku, Gia Lai 60000, Vietnam
                    </p>
                    <p className="text-gray-600 mt-2">
                        <strong>Phone:</strong> +880 1768037870
                    </p>
                    <p className="text-gray-600 mt-2">
                        <strong>Email:</strong> akwebdev69@gmail,com
                    </p>
                </div>

                {/* Map Section */}
                <div className="col-span-1 lg:col-span-2 border border-indigo-400 rounded-xl h-[400px]">
                    <iframe className='rounded-xl p-1 bg-indigo-50 md:p-2 h-full'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.662948022017!2d108.00886024104861!3d13.978656984798745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316c1fb13cc0d97b%3A0xe28ceab1486c431c!2zS2jDoWNoIHPhuqFuIEx1eHN0YXkgJiBDb2ZmZWU!5e0!3m2!1sen!2sbd!4v1735115809851!5m2!1sen!2sbd"
                        width="100%"
                        height="500"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                </div>
            </div>
        </div>
    );
};

export default Map;
