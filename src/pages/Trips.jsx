import React from 'react'
import "../stylesheets/Trips.scss";
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router";
import {
  DashboardContainer,
  DashboardSideBar,
  NavigationBar,
} from "../components";

export const Trips = () => {
  const history = useHistory();
  return (
    <div className="Trips">
      <div className="dashboard_greeting_container">
      <NavigationBar greeting={`Welcome Back!`} />
      <header className="Trips-header">
        <h1> YOUR TRIPS </h1>
        <br/>
        <Button
          className="Trips__btn"
          variant="btn btn-success" onClick={() => history.push('GettingStarted')} >
              ADD A TRIP
        </Button>
      </header>
      
      </div>
      <DashboardSideBar />
    </div>

  );
};
