import React, { useEffect, useState } from 'react';
import useServices from '../../../Hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services] = useServices();

    // const [scrollPosition, setScrollPosition] = useState(0);
    // const handleScroll = () => {
    //     const position = window.pageYOffset;
    //     setScrollPosition(position);
    // };

    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

    // console.log(scrollPosition);



    return (
        <div id="services" ref={services} className='container border-1 border'>
            <div className="row">
                <h1 className='text-primary text-center mt-5'> Our Services</h1>
                <div className="services-container">
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        >
                        </Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;