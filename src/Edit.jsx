import React, { useState } from 'react';
import {useNavigate, useParams} from "react-router";

function SpotEdit(){
    const navigate = useNavigate();
    const params=useParams();

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        review: '',
    });

    const handleInputChange = (event) => {

        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const postData = async() => {
        const result = await fetch(`http://145.24.223.91:8058/stepcharts/${params.id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'PUT',
            body: JSON.stringify(formData)
        });
        const data = await result.json();
        console.log(data.id)
        navigate(`/spots/${data.id}`)

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        postData();
        console.log('Form submitted:', formData);
    }

    return (
        <form className="bg-amber-100 text-5xl p-5" onSubmit={handleSubmit}>
            <h1>Edit spot</h1>
            <div>
                <label htmlFor="Title">Title: </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="description">Description: </label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="review">Review:</label>
                <input
                    type="review"
                    id="review"
                    name="review"
                    value={formData.review}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    )

}

export default SpotEdit;