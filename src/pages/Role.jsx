import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { NavigationBar } from "../components";
import "../stylesheets/AddTrip.scss";

export const Role = () => {
  const [title, setTitle] = useState("");
  const [title1, setTitle1] = useState("");
  const [title2, setTitle2] = useState("");
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    setTitle("");
    setTitle1("");
    setTitle2("");

    history.push("Fun");
  };

  return (
    <>
      <NavigationBar />
      <div className="dashboard_container trips">
        <form onSubmit={submitHandler}>
          <h1 className="add_trip_heading">To maintain a trusted community of  travelers and shippers,<br/> 
           we also need to learn a bit about the work you do</h1>
          
          <div>
            <div className="add_trip_container">
              <label className="trip_input_labels " htmlFor="title">
              What's your role?
              
              </label>
              <input
                className="add_trip_input"
                type="text"
                id="title"
                autoComplete="off"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <br/> 
            <div className="add_trip_container">
              <label className="trip_input_labels " htmlFor="title1">
              What industry do you work in?
              
              </label>
              <input
                className="add_trip_input"
                type="text"
                id="title1"
                autoComplete="off"
                value={title1}
                onChange={(e) => setTitle1(e.target.value)}
              />
            </div>
            <br/> 
            <div className="add_trip_container">
              <label className="trip_input_labels " htmlFor="title2">
              Who is your employer?
             
              </label>
              <input
                className="add_trip_input"
                type="text"
                id="title2"
                autoComplete="off"
                value={title2}
                onChange={(e) => setTitle2(e.target.value)}
              />
            </div>

            
            
            <div></div>
          </div>
          <div>
            <button className="button add_trip_submit">Submit</button>
          </div>
          <br/> 
          <button
                        className="Onboarding__btn"
                        variant="btn btn-success" onClick={() => history.push('Community')}
                    >
                        Previous
                    </button>
                    <br/>
                    <button
                        className="Onboarding__btn"
                        variant="btn btn-success" onClick={() => history.push('Fun')}
                    >
                        Next
                    </button>
        </form>
      </div>
    </>
  );
};


