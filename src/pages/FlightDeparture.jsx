import React from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router";
import "../stylesheets/FlightDeparture.scss";
import {
  DashboardContainer,
  DashboardSideBar,
  NavigationBar,
} from "../components";



export const FlightDeparture = () => {
  const history = useHistory();
  {


    return (
      <div className="FlightDeparture">
        <div className="dashboard_greeting_container">
          <NavigationBar greeting={`Welcome back!`} />
          <header className="FlightDeparture-header">
          
            <label>
              <h1> FLIGHT DEPARTURE </h1>
              <p> Give us information on your departure flight so we can optimize the packages that you see.</p>


              NAME YOUR TRIP <br />
              <input type="text" name="Trip Name" />
              <br />
              <br />TYPE OF TRIP
              <br />
              <select ><br />
                <option value="Business">Business</option>
                <option value="Educational">Educational</option>
                <option value="Family">Family</option>
                <option value="Government">Government</option>
                <option value="Leisure">Leisure</option>
                <option value="Voluntourism">Voluntourism</option>
                <option value="Work">Work</option>
              </select><br />


              <br />WHERE WILL YOU START THIS TRIP?<br />
              <input type="text" name="Trip Start" /><br />

              <br />WHAT'S YOUR DEPARTURE AIRPORT CODE?<br />
              <input type="text" name="Code" /><br />

              <br />DEAPARTURE DATE<br />
              <input type="date" name="date" /><br />


              <br />
              <button
                className="FlightDeparture__btn"
                variant="btn btn-success" onClick={() => history.push('FlightArrival')}
              >
                Next STEP
              </button>
              <br />
              <button
                className="FlightDeparture__btn"
                variant="btn btn-success" onClick={() => history.push('GettingStarted')}
              >
                Previous STEP
              </button>

            </label>

          </header>
        </div>
        
      </div>
    );
  }
}