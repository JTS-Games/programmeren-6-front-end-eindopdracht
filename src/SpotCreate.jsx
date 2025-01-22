import React, { useState } from 'react';
import {useNavigate} from "react-router";

function SpotCreate(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        difficulty: '',
        type: '',
    });

    const handleInputChange = (event) => {

        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const postData = async() => {
        const result = await fetch('http://145.24.223.91:8058/stepcharts/', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
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
        <form className="bg-amber-100 text-5xl p-5 -rotate-45 text-fuchsia-600" onSubmit={handleSubmit}>
            <h1>Create a new stepchart</h1>
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
                <label htmlFor="difficulty">Difficulty: </label>
                <input
                    type="text"
                    id="difficulty"
                    name="difficulty"
                    value={formData.difficulty}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="type">Type:</label>
                <input
                    type="text"
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    )

}

export default SpotCreate;