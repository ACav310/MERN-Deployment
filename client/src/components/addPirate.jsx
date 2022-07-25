import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AddForm = props => {
    const navigate = useNavigate();
    // form object 
    const [myForm, setForm] = useState({
        name: "",
        propic: "",
        treasures: 0,
        catchphrase: "",
        position: "first mate",
        pegleg: true,
        eyepatch: true,
        hookhand: true
    });
    
    const onChangeHandler = e => {
        setForm({...myForm, [e.target.name]: e.target.value});
        console.log(e.target.checked)
        console.log(e.target.name)
    }

    const checkBoxHandler = e => {
        setForm({...myForm, [e.target.name]: e.target.checked})
    }

    const [errors, setErrors] = useState({});

    const formHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pirates/new", myForm)
            .then(res => {
                // post unsuccessful
                if(res.data.error){
                    console.log("something went wrong ")
                    setErrors(res.data.error.errors)
                } else{ // post successful
                    console.log("we did it")
                    navigate("/");
                }
            })
            .catch(err => console.log(err))
        
    }
    return(
        <div>
            <h2>Create Pirate</h2>
            <form onSubmit={formHandler}>

                <div className="form-group d-flex gap">
                    <label htmlFor="name">Pirate Name: </label>
                    <input type="text" name="name" onChange={onChangeHandler}/>
                    { errors.name ? <span className="text-danger">{ errors.name.message}</span>: ""}
                </div>

                <div className="form-group d-flex gap">
                    <label htmlFor="propic">Profile pic - Img Url: </label>
                    <input type="text" name="propic" onChange={onChangeHandler}/>
                    { errors.propic ? <span className="text-danger">{ errors.propic.message}</span>: ""}
                </div>

                <div className="form-group d-flex gap">
                    <label htmlFor="treasures"># of treasures: </label>
                    <input type="number" name="treasures" onChange={onChangeHandler}/>
                    { errors.treasures ? <span className="text-danger">{ errors.treasures.message}</span>: ""}
                </div>

                <div className="form-group d-flex gap">
                    <label htmlFor="catchphrase"> Pirate Catch Phrase: </label>
                    <input type="text" name="catchphrase" onChange={onChangeHandler}/>
                    { errors.catchphrase ? <span className="text-danger">{ errors.catchphrase.message}</span>: ""}
                </div>

                <div className="form-group d-flex gap">
                    <label htmlFor="position">Crew Position </label>
                    <select onChange={onChangeHandler} name="position">
                        <option value="First Mate">First Mate</option>
                        <option value="Captain">Captain</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="powder Monkey">Powder Monkey</option>
                    </select>
                    { errors.position ? <span className="text-danger">{errors.position.message}</span>: ""}
                </div>

                <div className="d-flex justify-content-between">
                    <div className="form-group d-flex gap">
                        <input type="checkbox" name="pegleg" checked={myForm.pegleg} onChange={checkBoxHandler}/>
                        <label htmlFor="pegleg"> Peg Leg</label>
                    </div>
                    
                    <div className="form-group d-flex gap">
                        <input type="checkbox" name="eyepatch" checked={myForm.eyepatch} onChange={checkBoxHandler}/>
                        <label htmlFor="eyepatch"> Eye Patch</label>
                    </div>
                    <div className="form-group d-flex gap">
                        <input type="checkbox" name="hookhand" checked={myForm.hookhand} onChange={checkBoxHandler}/>
                        <label htmlFor="hookhand"> Hook Hand</label>
                    </div>
                </div>


                <div className="form-group">
                    <input type="submit" value="Create Pirate" />
                </div>
            </form>
        </div>
    );
}

export default AddForm;