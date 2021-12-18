import React, { useContext, useState } from "react";
import "../stylesheets/Onboarding.scss";
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from "react-router";
import {
    NavigationBar,
} from "../components";


export const Document = () => {
    const history = useHistory();
    const [document, setDocument] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        setDocument("");
        history.push("Trustedcommunity");
    };
    return (
        <div className="Onboarding">
            <div className="dashboard_greeting_container">
            <form onSubmit={submitHandler}>
                <NavigationBar greeting={`Welcome back!`} />
                <header className="Onboarding-header">
                    <h1> Please upload a picture of your government ID, passport, driver's
                        license, state-issued ID, birth certificate or any other form of
                        identification. </h1>

                    <p> If you have an upcoming trip or package you want to ship, we suggest getting verified
                        as soon as possible. You’ll earn a Trust Badge for your profile once verified --
                        and trust us it pays off. <br />

                        Verified shippers and travelers have the best shot at finding a match in our community!<br />

                        (You can always skip this, and get verified later too).
                    </p>

                    <div style={{
                        display: 'flex',
                        margin: 'auto',
                        width: 400,
                        flexWrap: 'wrap',
                    }}>
                        <div style={{ width: '100%', float: 'left' }}>
                            <h3>How to use create button to choose file in ReactJS?</h3> <br />
                        </div>
                        
                        <label htmlFor="contained-button-file">
                        <input
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="contained-button-file"
                            autoComplete="off"
                            value={document}
                            onChange={(e) => setDocument(e.target.value)}
                        />
                            <Button variant="contained" color="primary" component="span">
                                Upload
                            </Button>
                        </label>
                        <h3>  OR  </h3>
                        <input accept="image/*" id="icon-button-file"
                            type="file" style={{ display: 'none' }} />
                        <label htmlFor="icon-button-file">
                            <IconButton color="primary" aria-label="upload picture"
                                component="span">
                                <PhotoCamera />
                            </IconButton>
                        </label>
                    </div>

                    <br />

                    <button
                        className="Onboarding__btn"
                        variant="btn btn-success" onClick={() => history.push('Finale')}
                    >
                        Previous
                    </button>
                    <br />
                    <button
                        className="Onboarding__btn"
                        variant="btn btn-success" onClick={() => history.push('Trustedcommunity')}
                    >
                        Next
                    </button>
                </header>
                </form>
            </div>
        </div>
    );
}

