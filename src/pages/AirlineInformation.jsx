import React from "react";
import { useHistory } from "react-router";
import "../stylesheets/AirlineInformation.scss";
import {
  DashboardContainer,
  DashboardSideBar,
  NavigationBar,
} from "../components";


export const AirlineInformation = () => {
  const history = useHistory();
  {

    return (
      
      <div>
        <header className="FlightArrival-header">
      <form className="AirlineInformation-header" >
        
       <div className="dashboard_greeting_container">
          <NavigationBar greeting={`Welcome back!`} />
          
          
        <label>
        <h1> AIRLINE INFORMATION </h1>
        <p> Give us information on your arrival flight so we can optimize which packages show up on your listing..</p>

         DEPARTURE AIRLINE
         <br/>
          <select ><br/>
            <option value="Lahore">Lahore</option>
            <option value="Karachi">Karachi</option>
            <option value="Islamabad">Islamabad</option>
            <option value="Peshawar">Peshawar</option>
            <option value="Multan">Multan</option>
            <option value="Aegean Airlines">Aegean Airlines</option>
            <option value="Aeroglot">Aeroglot</option>
            <option value="Air Algerie">Air Algerie</option>
            <option value="Air Austral">Air Austral</option>
            <option value="Air France">Air France</option>
            <option value="Air Madagascar">Air Madagascar</option>
            <option value="Air Malta">Air Malta</option>
            <option value="Air Mauritius">Air Mauritius</option>
            <option value="Air Namibia">Air Namibia</option>
            <option value="Air Senegal">Air Senegal</option>
            <option value="Air Serbia">Air Seria</option>
            <option value="Alitalia">Alitalia</option>
            <option value="Austrian Airlines">Austrian Airlines</option>
            <option value="Badr Airlines">Badr Airlines</option>
            <option value="British Airways">British Airways</option>
            <option value="Brussels Airlines">Brussels Airlines</option>
            <option value="Cabo Verde Airlines">Cabo Verde Airlines</option>
            <option value="CEBIA InterContinental">CEBIA InterContinental</option>
            <option value="Cyprus Airlines">Cyprus Airlines</option>
            <option value="Delta Airlines">Delta Airlines</option>
            <option value="Egypt Air">Egypt Air</option>
            <option value="Ethiopian Airlines">Ethiopian Airlines</option>
            <option value="Iberia">Iberia</option>
            <option value="Kenya Airways">Kenya Airways</option>
            <option value="KLM">KLM</option>
            <option value="Libyan Airlines">Libyan Airlines</option>
            <option value="Lufthansa ">Lufthansa </option>
            <option value="Luxair">Luxair</option>
            <option value="Royal Airmaroc">Royal Airmaroc</option>
            <option value="Rwandair">Rwandair</option>
            <option value="South African Airways">South African Airways</option>
            <option value="STP Airways">STP Airways</option>
            <option value="Swiss InterNational Airlines">Swiss InterNational Airlines</option>
            <option value="TAAG Angola Airlines">TAAG Angola Airlines</option>
            <option value="TAP Portugal">TAP Portugal</option>
            <option value="TAROM">TAROM</option>
            <option value="Tassilli Airlines">Tassilli Airlines</option>
            <option value="Tunisair">Tunisair</option>
            <option value="Turkish Airlines">Turkish Airlines</option>
            <option value="Ukraine InterNational Airlines">Ukraine InterNational Airlines</option>
            <option value="Virgin Athlantic ">Virgin Athlantic </option>
            
            

          </select><br/>
       
       
       
   FLIGHT NUMBER<br/>
    <input type="int" name="flight number" /><br/> 
   CONFIRMATION CODE<br/>
    <input type="int" name="confirmation code" /><br/> 
 
 
        <br/>


        <button
                className="AirlineInformation__btn"
                variant="btn btn-success" onClick={() => history.push('CarryingCapacity')}
              >
                Next STEP
              </button>
              <br />
              <button
                className="AirlineInformation__btn"
                variant="btn btn-success" onClick={() => history.push('FlightArrival')}
              >
                Previous STEP
              </button>

        </label>
        
        </div>
        </form>
        
        </header>
        </div>

    );
  }
}