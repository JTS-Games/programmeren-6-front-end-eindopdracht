import {useEffect, useState} from "react";
import Spot from "./Spot";
function Spots(){
    const [spots, setSpots] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const response = await fetch('http://145.24.223.91:8058/stepcharts/', {
            headers: {
                'Accept': 'application/json'
            }
        });
        const data = await response.json();
        setSpots(data.items);
    }

    return (
        <section className="flex flex-col justify-center items-center bg-fuchsia-100 py-10 text-5xl rotate-1">
            {spots ? (
                    <div className="flex flex-wrap">
                        {spots.map((spot) => (
                            <Spot key={spot.id} spot={spot}/>
                        ))}
                    </div>
                )
                : (
                    <div>
                        <p>spots worden ingeladen</p>
                    </div>
                )}
        </section>
    )
}

export default Spots;