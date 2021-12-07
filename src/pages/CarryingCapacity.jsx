import React from "react";
import { useHistory } from "react-router";
import "../stylesheets/CarryingCapacity.scss";
import {
  NavigationBar,
} from "../components";


export const CarryingCapacity = () => {
  const history = useHistory();
  {
    return (
    <div>
      <form className="CarryingCapacity-header" >
          <div className="dashboard_greeting_container">
          <NavigationBar greeting={`Welcome back!`} />
          <header className="FlightArrival-header">
        <label>
        <h1> LUGGAGE SPACE </h1>
        <p> Estimate the maximum amount of space you have to carry an item.</p>

         ESTIMATED SPACE :
         <br/>
          <select ><br/>
            <option value="1/8">1/8</option>
            <option value="1/4">1/4</option>
            <option value="1/2">1/2</option>
            <option value="3/4">3/4</option>
            <option value="1-SUITCASE">1-SUITCASE</option>
            <option value="2-SUITCASES">2-SUITCASES</option>
            <option value="3-SUITCASES">3-SUITCASES</option>
            <option value="DOCUMENTS">DOCUMENTS</option>
          </select><br/>
        </label>
        <br/>
        <button
                className="CarryingCapacity__btn"
                variant="btn btn-success" onClick={() => history.push('Dashboard')}
              >
                Next STEP
              </button>
              <br />
              <button
                className="CarryingCapacity__btn"
                variant="btn btn-success" onClick={() => history.push('AirlineInformation')}
              >
                Previous STEP
              </button>
              </header>
        </div>
        
      </form>
      
      </div>
    );
  }
}