import React from 'react';
import useServices from '../../Hooks/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices();

    const handleDelete = id => {
        const proceed = window.confirm("are you sure ?");
        if (proceed) {
            const url = `https://mighty-crag-66119.herokuapp.com/service/${id}`;
            fetch(url, {
                method: "delete"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(service => service._id != id)
                    setServices(remaining);
                })
        }
    }

    return (
        <div>
            <h2>Manage Your Services</h2>
            {
                services.map(service => <div key={service._id} >
                    <h5 >{service.name} <button onClick={() => handleDelete(service._id)} >X</button> </h5>
                </div>)
            }
        </div>
    );
};

export default ManageServices;
