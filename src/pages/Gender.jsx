import React from "react";
import "../stylesheets/Onboarding.scss";
import { useHistory } from "react-router";
import {
    NavigationBar,
} from "../components";



export const Gender = () => {
    const history = useHistory();
    return (
        <div className="Onboarding">
            <div className="dashboard_greeting_container">
                <NavigationBar greeting={`Welcome back!`} />
                <header className="Onboarding-header">
                    <h1> What is your sex and gender? </h1>
                    <br />
                    <p align="left">
                    I identify as a 
                        <br />
                    </p>
                    
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                    <select className="add_trip_input">
                        <option>Woman</option>
                        <option>Man</option>
                        <option>Non-Binary</option>
                        <option>Prefer not to say</option>
                    </select>
                    <br />
                    <p align="left">
                    <br />
                    My gender is 
                    <br />
                    </p>
                    
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                    <select className="add_trip_input">
                        <option>Female</option>
                        <option>Male</option>
                    </select>
                    <br />
                    <br />
                    <button
                        className="Onboarding__btn"
                        variant="btn btn-success" onClick={() => history.push('Birthday')}
                    >
                        Previous
                    </button>
                   
                    

                    <button
                        className="Onboarding__btn"
                        variant="btn btn-success" onClick={() => history.push('Country')}
                    >
                        Next
                    </button>
                </header>
            </div>
        </div>
    );
}

