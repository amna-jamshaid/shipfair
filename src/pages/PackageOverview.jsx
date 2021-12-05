import React from 'react'
import "../stylesheets/PackageOverview.scss";
import { useHistory } from "react-router";

import {
    NavigationBar,
} from "../components";


export const PackageOverview = () => {
    const history = useHistory();
    return (
        <div className="PackageOverview">
            <div className="dashboard_greeting_container">
                <NavigationBar greeting={`Welcome back!`} />
                <header className="PackageOverview-header">
                    <h1> PACKAGE OVERVIEW </h1>

                    <p align="left">
                        Create a package that will fill no more than one standard suitcase at most. For the best and most frequent results.
                        Keep the package under 1/4 of a standard suitcase.  <br />
                        <br />
                        We define the package as a couple of one or more of the same item. If the items are not the same, Create
                        separate packages.<br />
                        <br />
                        A "To Buy" Package type is defined as an item or items that need to bought from a physical or online store
                        .'Pre Owned' items do not need to be purchased.
                    </p>

                    <br/>

                    <p align="left">  <label> <b> NAME YOUR PACKAGE  </b> </label> </p>
                    <input />

                    <br />

                    <p align="left">  <label> <b> WHAT ARE YOU SHIPPING? </b> </label> </p>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                    <select>
                        <option>Apparel</option>
                        <option>Beauty/Grooming</option>
                        <option>Food Stuff</option>
                        <option>Other</option>
                        <option>Paper Documents</option>
                        <option>Passport</option>
                        <option>Shoes</option>
                        <option>Tech</option>
                        <option>Textile/Cloth</option>
                    </select>
                    <br/>

                    <p align="left">  <label> <b> WHERE IS YOUR PACKAGE COMING FROM? </b> </label> </p>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                    <select>
                        <option>Choose An Address</option>
                        <option>From My Permanent Address</option>
                        <option>From My Temporary Address</option>
                        <option>From a New Address</option>
                    </select>
                    <br/>

                    <input />

                    <br />

                    <p align="left">  <label> <b> WHERE IS YOUR PACKAGE GOING? </b> </label> </p>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                    <select>
                        <option>Choose An Address</option>
                        <option>To My Permanent Address</option>
                        <option>To My Temporary Address</option>
                        <option>To a New Address</option>
                    </select> <br/>

                    <input />

                    <br />

                    <p align="left">  <label> <b>PACKAGE TYPE </b> </label> </p>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                    <select>
                        <option>Choose An Option</option>
                        <option>For Small Business</option>
                        <option>For Personal</option>
                        <option>For Government</option>
                    </select>
                    <br/>

                    <p align="left">  <label> <b> HOW MANY OF THIS ITEMS? </b> </label> </p>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                    <select>
                        <option>Choose An Option</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                    <br/>

                    <button
                        className="PackageOverview__btn"
                        variant="btn btn-success" onClick={() => history.push('PackageDetails')}
                    >
                        Next STEP
                    </button>

                    <button
                        className="PackageOverview__btn"
                        variant="btn btn-success" onClick={() => history.push('GettingStartedParcel')} 
                    >
                        PREVIOUS STEP
                    </button>

                </header>

            </div>
        </div>
    );
}