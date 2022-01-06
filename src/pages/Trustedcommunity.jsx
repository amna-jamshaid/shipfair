import React from 'react'
import "../stylesheets/Onboarding.scss";
import { useHistory } from "react-router";
import {
    NavigationBar,
} from "../components";
import Footer from "../components/Footer";


export const Trustedcommunity = () => {
    const history = useHistory();
    return (
        <div className="Onboarding">
            <div className="dashboard_greeting_container">
                <NavigationBar greeting={`Welcome back!`} />
            </div>

            <form>
            <header className="Onboarding-header">
                <h1> Welcome to our trusted community of travelers and shippers.</h1>
                </header>
                <br />

                <button
                    className="Onboarding__btn"
                    variant="btn btn-success" onClick={() => history.push('Dashboard')}
                >
                    Take Me To My Dashboard
                </button>

                <br />
                <button
                    className="Onboarding__btn"
                    variant="btn btn-success" onClick={() => history.push('Document')}
                >
                    Back
                </button>
               
            
            </form>

            <div>
                <Footer />
            </div>
        </div>
    );
}

