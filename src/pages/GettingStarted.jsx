import React from 'react'
import "../stylesheets/GettingStarted.scss";
import { useHistory } from "react-router";
import {
  DashboardContainer,
  DashboardSideBar,
  NavigationBar,
} from "../components";


export const GettingStarted = () => {
  const history = useHistory();
  return (
    <div className="GettingStarted">
      <div className="dashboard_greeting_container">
      <NavigationBar greeting={`Welcome back!`} />
      <header className="GettingStarted-header">
        <h1> POST A TRIP </h1>
        <h2> WHY AM I POSTING MY FLIGHT?</h2>
        <p align="left">
          By giving us information on your flight we can use our pairing <br />
          technology to give  you a listing of pakages. From there, you <br />
          can choose a package that fits your carrying capacity, travel <br />
          destination and time.<br />
        </p>
        <br/>
        <button
          className="GettingStarted__btn"
          variant="btn btn-success" onClick={() => history.push('FlightDeparture')}
        >
          Next STEP
        </button>
      </header>
      
      </div>
      <DashboardSideBar />
    </div>

  );
}
