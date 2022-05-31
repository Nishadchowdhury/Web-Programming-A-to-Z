import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SingleVolunteer from '../SingleVolunteer';

const Home = () => {

    const [volunteers, setVolunteer] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setVolunteer(data))
    }, [])

    //console.log(volunteers);

    return (
        <>
            <Header />
            <div className='p-4' >
                <div className='grid grid-cols-5 gap-5' >

                    {
                        volunteers.map(volunteer => <SingleVolunteer key={volunteer._id} data={volunteer} />)
                    }

                </div>
            </div>
        </>
    );
};

export default Home;