import axios from "axios";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const yesStyle = {
    backgroundColor: "Red"
}

const noStyle= {
    backgroundColor: "blue"
}


const ViewOne = props => {
    const [onePirate, setOnePirate] = useState(null)
    const { _id } = useParams()
    const [update, setUpdate] = useState(false)
    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates/" + _id)
        .then(res => setOnePirate(res.data[0]))
        .catch(err => console.log(err))
    }, [update])

    const handlePerk = e => {
        axios.put("http://localhost:8000/api/pirates/update/" + _id, {[e.target.name]: !e.target.checked})
            .then((res) => {
                if (res.data.error) {

                    console.log("did not update perk(s)")
                } else {
                    setUpdate(!update)
                    console.log("done")
                }
            }) 
            .catch((err) => console.log(err));
    }
    return(
        <div>
            {
                onePirate ? <div className="m-5">
                    <h1 className="mt-5">{onePirate.name}</h1>
                    <div className="d-flex gap">
                        <div>
                            <img src={onePirate.propic} alt="" />
                            <div>
                                <h3>
                                    "{onePirate.catchphrase}" - {onePirate.name}
                                </h3>
                            </div>
                        </div>
                        <div className="boxp">
                            <h2>
                                About
                            </h2>
                            <p>Position: {onePirate.position}</p>
                            <p>Treasure found: {onePirate.treasures}</p>
                            <p>Peg Leg: <button style={onePirate.pegleg ? yesStyle : noStyle} checked={onePirate.pegleg} name="pegleg" onClick={handlePerk}>{onePirate.pegleg ? "Yes" : "No"}</button></p>
                            <p>Hook Hand: <button style={onePirate.hookhand ? yesStyle : noStyle} checked={onePirate.hookhand} name="hookhand" onClick={handlePerk}>{onePirate.hookhand ? "Yes" : "No"}</button></p>
                            <p>Eye Patch: <button style={onePirate.eyepatch ? yesStyle : noStyle} checked={onePirate.eyepatch} name="eyepatch" onClick={handlePerk}>{onePirate.eyepatch ? "Yes" : "No"}</button></p>
                        </div>
                    </div>
                </div> : ""
            }
        </div>
    );
}

export default ViewOne;