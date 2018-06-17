import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <div className="mx-auto">
                <h1 className="display-4 text-center text-info">(ReactJS) New York Times Article Scrubber</h1>
                <p className="lead text-center">Search for and save articles of interest.</p>
            </div>
        </div>
    </div>
);

export default Jumbotron;