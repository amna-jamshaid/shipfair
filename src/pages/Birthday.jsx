import React, { useState } from "react";

import "../stylesheets/Onboarding.scss";
import { useHistory } from "react-router";
import {
    NavigationBar,
} from "../components";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export const Birthday = () => {
    const [date, setDate] = useState(new Date());
    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        setDate ("");
        history.push("Gender");
    };
    return (
        <div className="Onboarding">
            <div className="dashboard_greeting_container">
            <form onSubmit={submitHandler}>
                <NavigationBar greeting={`Welcome back!`} />
                <header className="Onboarding-header">
                    <h1> What is your birthday? </h1>
                    <p align="left">
                        (No worries much of this information will not be shown publicly <br />
                        on your profile).
                        <br />
                    </p>
                    <br />
                    
                    <DatePicker className="add_trip_input" 
                    selected={date} 
                    onChange={date => setDate(date)} />
                    <br />
                    <br />
                    
                    
                   
                    <button
                        className="Onboarding__btn"
                        variant="btn btn-success" onClick={() => history.push('Onboarding')}
                    >
                        Previous
                    </button>
                    <button className="button add_trip_submit">Submit</button>
                </header>
                </form>
            </div>
        </div>
    );
}

