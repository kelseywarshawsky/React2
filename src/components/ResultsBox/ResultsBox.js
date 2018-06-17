import React from "react";
import "./ResultsBox.css";

export const ResultsBox = ({ children }) => (
    <div className="container">
        <div className="card mb-5">
            <h5 className="card-header bg-info text-white">Results</h5>
            <div className="card-body">
                {children}
            </div>
        </div>
    </div>
);

export default ResultsBox;
