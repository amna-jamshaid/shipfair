import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { NavigationBar } from "../components";
import "../stylesheets/AddTrip.scss";
import Footer from "../components/Footer";

export const Stuff = () => {
    const [description, setDescription] = useState("");


    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        setDescription("");
        history.push("/Finale");
    };

    return (
        
        <div className="Onboarding">
        <div className="dashboard_greeting_container">
            <NavigationBar greeting={`Welcome back!`} />
        </div>
                <form onSubmit={submitHandler}>
                    <h1 className="add_trip_heading">Now it's time for the fun stuff.<br/></h1>
                    Over the last two years, (when we weren’t experiencing a global <br/>
                        pandemic), where were you zipping off to? <br/>
                        <br/>
                        Go ahead, make us jealous...
                    <div>
                        <div className="add_trip_container">
                            
                        </div>
                        <div>
                            
                        </div>
                        <div>
                            <div className="add_board_desc_container">
                                <textarea
                                    className="add_trip_description"
                                    autoComplete="off"
                                    id="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    cols="10"
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
                        variant="btn btn-success" onClick={() => history.push('Fun')}
                    >
                        Previous
                    </button>
                   


                    <button
                        className="button add_trip_submit"
                        variant="btn btn-success" onClick={() => history.push('Finale')}
                    >
                        Next
                    </button>
                </form>
                <div> 
            <Footer/>
            </div>
            </div>
        
    );
};


