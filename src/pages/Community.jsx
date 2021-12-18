import React from 'react'
import "../stylesheets/Onboarding.scss";
import { useHistory } from "react-router";
import {
    NavigationBar,
} from "../components";


export const Community = () => {
    const history = useHistory();
    return (
        <div className="Onboarding">
            <div className="dashboard_greeting_container">
                <NavigationBar greeting={`Welcome back!`} />
                <header className="Onboarding-header">
                    <h1> To maintain a trusted community of  travelers and shippers,<br />
                     we also need to learn a bit about the work you do. </h1>
                    <br />
                    
                    <button
                        className="Onboarding__btn"
                        variant="btn btn-success" onClick={() => history.push('Address')}
                    >
                        Previous
                    </button>
                    <br/>
                    <button
                        className="Onboarding__btn"
                        variant="btn btn-success" onClick={() => history.push('Role')}
                    >
                        Next
                    </button>
                </header>
            </div>
        </div>
    );
}

