import React from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router";
import "../stylesheets/FlightArrival.scss";
import {
  NavigationBar,
} from "../components";



export const FlightArrival = () => {
  const history = useHistory();
  {


    return (
      <div className="FlightArrival">
        <div className="dashboard_greeting_container">
          <NavigationBar greeting={`Welcome back!`} />
          <header className="FlightArrival-header">
          
            <label>
            <h1> FLIGHT ARRIVAL </h1>
         <p> Give us information on your arrival flight so we can optimize which packages show up on your listing.</p>

         WHERE WILL YOU END THIS TRIP? <br/>
    <input type="text" name="end trip" /><br/>          
       
    <br/>WHAT'S YOUR ARRIVAL AIRPORT CODE?<br/>
   <input type="int" name="arrival code" /><br/> 

   <br/>ARRIVAL DATE<br/>
   <input type="date" name="date" /><br/> 
 
 
        <br/>
              <button
                className="FlightArrival__btn"
                variant="btn btn-success" onClick={() => history.push('AirlineInformation')}
              >
                Next STEP
              </button>
              <br />
              <button
                className="FlightArrival__btn"
                variant="btn btn-success" onClick={() => history.push('FlightDeparture')}
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