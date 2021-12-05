import React from 'react'
import "../stylesheets/Parcels.scss";
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router";
import {
    DashboardContainer,
    DashboardSideBar,
    NavigationBar,
  } from "../components";
  

  export const Parcels = () => {
    const history = useHistory();
    return (
      <div className="Parcels">
        <div className="dashboard_greeting_container">
        <NavigationBar greeting={`YOUR PARCELS`} />
        <header className="Parcels-header">
          <h1> YOUR PARCELS </h1>
          <br/>
          <Button
            className="Parcels__btn"
            variant="btn btn-success" onClick={() => history.push('GettingStartedParcel')} >
                ADD A PACKAGE
          </Button>
        </header>
        
        </div>
        <DashboardSideBar />
      </div>
  
    );
  };