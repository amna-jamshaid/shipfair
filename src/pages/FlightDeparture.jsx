import React from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router";
import "../stylesheets/FlightDeparture.scss";


export class FlightDeparture extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Choose your flight" };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  render() {

    <header className="FlightDeparture-header">
        <p>
          Welcome to the the ShipFair Website
        </p>
      </header>
    return (
      <form className="FlightDeparture-header" onSubmit={this.handleSubmit}>
        <label>
        <h1> FLIGHT DEPARTURE </h1>
        <p> Give us information on your departure flight so we can optimize the packages that you see.</p>

                
    NAME YOUR TRIP <br/>
    <input type="text" name="Trip Name" />
    <br/>
    <br/>TYPE OF TRIP
         <br/>
          <select value={this.state.value} onChange={this.handleChange}><br/>
            <option value="Business">Business</option>
            <option value="Educational">Educational</option>
            <option value="Family">Family</option>
            <option value="Government">Government</option>
            <option value="Leisure">Leisure</option>
            <option value="Voluntourism">Voluntourism</option>
            <option value="Work">Work</option>     
            </select><br/>


    <br/>WHERE WILL YOU START THIS TRIP?<br/>
   <input type="text" name="Trip Start" /><br/> 

   <br/>WHAT'S YOUR DEPARTURE AIRPORT CODE?<br/>
   <input type="text" name="Code" /><br/> 

   <br/>DEAPARTURE DATE<br/>
   <input type="date" name="date" /><br/> 
 
 
        <br/>
       <input  className="FlightDeparture__btn " type="submit" value="NEXT STEP" /> <br/> 
        <input className="FlightDeparture__btn " type="button" value="PREVIOUS STEP" onClick = "GettingStarted" />
        
        </label>
        </form>
    );
  }
}