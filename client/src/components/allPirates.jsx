import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ViewAll = props => {
    const [pirates, setPirates] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates")
            .then(res => setPirates(res.data))
            .catch(err => console.log(err))
    }, [pirates])

    const deleteHandler = id => {
        axios.delete("http://localhost:8000/api/pirates/delete/" + id)
            .then(() => console.log("Pirate Deleted"))
            .catch(err => console.log("Error while Deleting", err))
    }

    return (
        <div>
            <div className="d-flex gap">
            <h2 className="mt-5 border-top border-primary">Pirate Crew</h2>
            <Link to={"/pirates/add"}><button className="btn btn-primary"> Create Pirate </button> 
            </Link>
            </div>
            {
                pirates ? pirates.sort((a,b) => a.name.localeCompare(b.name)).map((item, i) => <div key={i}>
                    <h1>{item.name}</h1>
                    <div className="d-flex gap">
                        <img className="propic" src={item.propic} alt="pirate profile pic" />
                        <div>
                            <Link to={`/pirates/${item._id}`}>
                                <button className="btn btn-info">View Pirate</button>
                            </Link>
                        </div>
                        <div>
                            <button onClick={() => deleteHandler(item._id)} className="btn btn-danger">Walk the Plank</button>
                        </div>
                    </div>
                </div>  ) : ""
            }
        </div>
    )
}

export default ViewAll;