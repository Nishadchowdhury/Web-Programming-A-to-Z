import React from 'react';

const AddUser = () => {

    const handleAddUser = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const user = {name , email};

        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log('success', data);
            alert('user added successfully!!!');
            event.target.reset();
        })

    }

    return (
        <div>
            <h1>please add a user</h1>
            
            <form onSubmit={handleAddUser} >
                <input type="text" name='name' placeholder="Name" required /> 
                <br />
                <input type="email" name='email' placeholder="Email" required />
                <br />
                <input type="submit" value="add user" />
            </form>
        </div>
    );
};

export default AddUser;