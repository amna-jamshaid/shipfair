import React, { useContext, useState } from "react";
import "../stylesheets/Onboarding.scss";
import { useHistory } from "react-router";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

import {
    NavigationBar,
} from "../components";



export const Country = () => {
    const [country, selectCountry] = useState("");
    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        selectCountry("");
        history.push("Address");
    };

    return (


            <div className="dashboard_container trips">
                
                <NavigationBar greeting={`Welcome back!`} />
                <form onSubmit={submitHandler}>
                    <h1> What is your place of birth? </h1>

                    <br />

                    <div className="add_trip_container">
                        <label className="trip_input_labels " htmlFor="country">
                            
                        </label>
                        <CountryDropdown
                           className="add_trip_input"
                           id="country"
                            value = {country}
                            onChange= {selectCountry}  />
                    </div>

                    <br/>
                    <br/>
                    <button
                        className="Onboarding__btn"
                        variant="btn btn-success" onClick={() => history.push('Gender')}
                    >
                        Previous
                    </button>
                    


                    <button className="button add_trip_submit">Submit</button>

                </form>
            </div>

           
        
         );

};
