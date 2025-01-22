import {Link} from "react-router";

function Spot({spot}){
    return (
        <article className="border-2 border-pink-400 p-4 m-4 -rotate-12">
            <h1 className="text-cyan-700">{spot.title}</h1>
            <Link to={`/spots/${spot.id}`}>Details</Link>
            <br></br>
            <Link to={`/edit/${spot.id}`}> Edit</Link>
            <br></br>
            <Link to={`/delete/${spot.id}`} className="text-red-500"> Delete</Link>
        </article>
    )
}

export default Spot;