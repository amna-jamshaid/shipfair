import React from 'react'
import "../stylesheets/Onboarding.scss";
import { useHistory } from "react-router";
import {
    NavigationBar,
} from "../components";


export const Fun = () => {
    const history = useHistory();
    return (
        <div className="Onboarding">
            <div className="dashboard_greeting_container">
                <NavigationBar greeting={`Welcome back!`} />
                <header className="Onboarding-header">
                    <h1> Now it's time for the fun stuff. </h1>
                    <br />
                    
                    <button
                        className="Onboarding__btn"
                        variant="btn btn-success" onClick={() => history.push('Role')}
                    >
                        Previous
                    </button>

                    <button
                        className="Onboarding__btn"
                        variant="btn btn-success" onClick={() => history.push('Stuff')}
                    >
                        Next
                    </button>

                </header>
            </div>
        </div>
    );
}

