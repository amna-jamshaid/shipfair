import React from 'react'
import "../stylesheets/GettingStartedParcel.scss";
import { useHistory } from "react-router";
import {
  DashboardContainer,
  DashboardSideBar,
  NavigationBar,
} from "../components";


export const GettingStartedParcel = () => {
  const history = useHistory();
  return (
    <div className="GettingStartedParcel">
      <div className="dashboard_greeting_container">
      <NavigationBar greeting={`Welcome back!`} />
      <header className="GettingStartedParcel-header">
        <h1> POST A PACKAGE </h1>
        <h2> WHY AM I POSTING A PACKAGE?</h2>
        <p align="left">
          By giving us information of your package, we can use our  <br />
          pairing technology to give  your pakages to travelers.  <br />
          From there, you are match with someone that fits your  <br />
          package siza, travel destination and time preferences.<br />
        </p>
        <br/>
        <button
          className="GettingStartedParcel__btn"
          variant="btn btn-success" onClick={() => history.push('PackageOverview')} 
        >
          Next STEP
        </button>
        <button
          className="GettingStartedParcel__btn"
          variant="btn btn-success" onClick={() => history.push('Parcels')} 
        >
          Previous STEP
        </button>
      </header>
      
      </div>
      <DashboardSideBar />
    </div>

  );
}
