import "../stylesheets/PackageDetails.scss";
import React, { useState } from 'react'
import { useHistory } from "react-router";

export const PackageDetails = () => {
  const history = useHistory();
  const [formData, setfromData] = useState({
    // isAgree: false,
    line: ""
  })
  const handleChange = event => {
    const target = event.target
    const name = target.name
    const value = target.value
    setfromData({
      ...formData,
      [name]: value
    })
  }
  return (
    <div className="PackageDetails">
      <h1 id="kal">Packages Details</h1>
      <p >Give us more details on your preferences for this package. <br />
        Check the product description to get the most accurate possible.<br />
        Otherwise, weigh your pre-owned item using an scale at home.<br /> </p>
      <form>
        <p>Round up to the nearest pound</p>
        <label >WHAT IS THE ESTIMATED WEIGHT?</label>
        <span>&nbsp;</span>

        <input
          type="text"
          required />
        <span>&nbsp;&nbsp;</span>
        <select>
          <option value="lbs">lbs</option>
        </select>
        <h3>Shipment Priority</h3>

        <input type="radio" value="line1 selected" name="line"
          onChange={handleChange} //checked={formData.line=="line1"}
        />

        <label id="kale">Give me the best deal you have! i.e The price of the shipment is most important to you.</label><br />
        <input type="radio" value="line2 selected" name="line" id="kale"
          onChange={handleChange} //checked={formData.line=="line2"}
        />
        <label id="kale">I need my package by a certain future date. i.e The future arrival date is most important to you.</label><br />
        <input type="radio" value="line3 selected" name="line"
          onChange={handleChange} //checked={formData.line=="line3"}
        />
        <label id="kale">I need this package immediately! i.e Speed is the most important factor to you.</label><br />
        <p id="kal"> Line: {formData.line}</p>
        <label>Indicate Your Price Range</label><br />
        <input type="text" /> <label id="kale">Min</label>
        <span>&nbsp;</span>
        <input type="text" /> <label id="kale">Max</label><br />
        <text id="kal">-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</text>
        <label >ADDITIONAL NOTES FOR THE TRAVELER THAT WILL TAKE THIS PACKAGE</label><br />
        <textarea
          required>
        </textarea><br />
        <button >Submit</button>
        <br />
        <br />
        <button
          className="PackageDetails__btn"
          variant="btn btn-success" onClick={() => history.push('ItemCapacity')}
        >
          NEXT STEP
        </button>
        <br />
        <br />
        <button
          className="PackageDetails__btn"
          variant="btn btn-success" onClick={() => history.push('PackageOverview')}
        >
          PREVIOUS STEP
        </button>











      </form>
    </div>
  )
}