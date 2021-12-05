import React from "react";
import "../stylesheets/ItemCapacity.scss";
import { useHistory } from "react-router";

export const ItemCapacity = () => {
  const history = useHistory();
  return(
    <div className="capacity">
      <h2>Package Size</h2>
       <p>Estimate how much space you believe you package will take up in a standard suitcase. To get the most accurate sizing, physically put your package in a suitcase and eyeball the result. <br/>         
         </p>
       <p>The average size of traveler luggage is 27 x 21 x 14 inches and we use it for our calculations.</p>  
       <label>Estimated Space</label>
       <select>
           <option value="1/2">1/2</option>
           <option value="1/4">1/4</option>
           <option value="1/8">1/8</option>
           <option value="3/4">3/4</option>
           <option value="1 Suitcases">1 Suitcases</option>
           <option value="2 Suitcases">2 Suitcases</option>
           <option value="3 Suitcases">3 Suitcases</option>
           <option value="Documents">Documents</option>
       </select> 
       <span>&nbsp;</span>
       <button 
       onClick={() =>{history.push("DashBoard");
       }}
       >Next Step</button> 
       <br/>
       
       <button 
       onClick={() =>{history.push("PackageDetails");
       }}
       >Previous Step</button> 
    </div>
 )
}
