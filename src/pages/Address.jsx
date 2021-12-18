import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { NavigationBar } from "../components";
import "../stylesheets/AddTrip.scss";

export const Address = () => {
    const [description, setDescription] = useState("");
    const [descrip, setDescrip] = useState("");


    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        let id = Math.random() * 1000000;
        setDescription("");
        setDescrip("");

        history.push("Community");
    };

    return (
        <>
            <NavigationBar />
            <div className="dashboard_container trips">
                <form onSubmit={submitHandler}>
                    <h1 className="add_trip_heading">Where do you live? <br/>
We'll use this information to match you with better packages and travelers.</h1>
List a permanent address where you might get official mail sent, like a bank statements,<br/>
 or diploma sent. Also list a temporary one if you live or work more than half the year <br/>
  in another country. 
                    <div>
                        <div className="add_trip_container">
                            
                        </div>
                        <div>
                            <div className="add_trip_desc_container">
                                <label className="trip_input_labels one" htmlFor="description">
                                    Temporary Address
                                </label>
                                <textarea
                                    className="add_trip_description"
                                    autoComplete="off"
                                    id="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    cols="30"
                                    rows="10"
                                ></textarea>
                            </div>
                        </div>
                        <div>
                            <div className="add_trip_desc_container">
                                <label className="trip_input_labels one" htmlFor="description">
                                    Permanent Address
                                </label>
                                <textarea
                                    className="add_trip_descrip"
                                    autoComplete="off"
                                    id="descrip"
                                    value={descrip}
                                    onChange={(e) => setDescrip(e.target.value)}
                                    cols="30"
                                    rows="10"
                                ></textarea>
                            </div>
                        </div>
                        
                        <div></div>
                    </div>

                    <div>
                        <button className="button add_trip_submit">Submit</button>
                    </div>
                   
                    <button
                        className="button add_trip_submit"
                        variant="btn btn-success" onClick={() => history.push('Country')}
                    >
                        Previous
                    </button>
                   


                    <button
                        className="button add_trip_submit"
                        variant="btn btn-success" onClick={() => history.push('Community')}
                    >
                        Next
                    </button>
                </form>
            </div>
        </>
    );
};


