import React, { useState, useEffect } from 'react';
import {useNavigate, useParams} from "react-router";

function Delete(){
    const params=useParams();
    const navigate = useNavigate();

    const [spot, setSpot] = useState([]);

    useEffect(() => {
        loadSingleData();
    }, []);

    const loadSingleData = async () => {
        const response = await fetch(`http://145.24.223.91:8058/stepcharts/${params.id}`, {
            headers: {
                'Accept': 'application/json'
            }
        });
        const data = await response.json();
        setSpot(data);
        console.log(data);
    }

    useEffect(() => {
        deleteSingleData();
    }, []);

    const deleteSingleData = async () => {
        const response = await fetch(`http://145.24.223.91:8058/stepcharts/${params.id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            }
        });
        const data = await response.json();
        setSpot(data);
    }

    navigate(`/spots`)
    return(
        <p>ID dat wordt gedelete: {params.id}</p>
    )
}

export default Delete;