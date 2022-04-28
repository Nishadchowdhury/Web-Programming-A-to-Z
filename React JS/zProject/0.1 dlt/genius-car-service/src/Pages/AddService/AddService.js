import React from 'react';
import { useForm } from "react-hook-form";
const AddService = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {

        const url = `https://mighty-crag-66119.herokuapp.com/service/`;
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

    }

    return (
        <div className='w-25 mx-auto' >
            <h2>Please Add a service</h2>

            <form className='d-flex flex-column gap-2' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea placeholder='description' {...register("description")} />
                <input placeholder='price' type="number" {...register("price")} />
                <input placeholder='photo Url' type="text" {...register("img")} />
                <input placeholder='' type="submit" />
            </form>
        </div>
    );
};

export default AddService;