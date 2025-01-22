import React, { useState, useEffect } from 'react';
import {useParams} from "react-router";
function SpotDetail(){
    const params=useParams();

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

    return(
        <article className="text-5xl">
            <p>Details van stepchart met ID: {params.id}</p>
            <p>Title: {spot.title}</p>
            <p>Difficulty: {spot.difficulty}</p>
            <p>Type: {spot.type}</p>
        </article>
    )
}

export default SpotDetail;