import React from 'react'
import "../stylesheets/Onboarding.scss";
import { useHistory } from "react-router";
import {
    NavigationBar,
} from "../components";


export const Finale = () => {
    const history = useHistory();
    return (
        <div className="Onboarding">
            <div className="dashboard_greeting_container">
                <NavigationBar greeting={`Welcome back!`} />
                <header className="Onboarding-header">
                    <h1> And now the finale. It's time to get verified. </h1>
                    
                    <br />

                    <button
                        className="Onboarding__btn"
                        variant="btn btn-success" onClick={() => history.push('Stuff')}
                    >
                        Previous
                    </button>
                    <br />
                    <button
                        className="Onboarding__btn"
                        variant="btn btn-success" onClick={() => history.push('Document')}
                    >
                        Next
                    </button>
                </header>
            </div>
        </div>
    );
}

