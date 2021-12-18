import React from 'react'
import "../stylesheets/Onboarding.scss";
import { useHistory } from "react-router";
import {
    NavigationBar,
} from "../components";


export const Onboarding = () => {
    const history = useHistory();
    return (
        <div className="Onboarding">
            <div className="dashboard_greeting_container">
                <NavigationBar greeting={`Welcome back!`} />
                <header className="Onboarding-header">
                    <h1> Hi, we're so glad you're here. </h1>
                    <p align="left">
                        Let’s finish your profile.<br />
                        We're going to ask you a few questions to get a better sense of who you are and what you're about.<br />

                        Let's start with the nitty gritty basics.
                        <br />
                    </p>
                    <br />
                    
                    <button
                        className="Onboarding__btn"
                        variant="btn btn-success" onClick={() => history.push('Birthday')}
                    >
                        Next
                    </button>
                </header>
            </div>
        </div>
    );
}

