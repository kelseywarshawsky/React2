import React from "react";
import "./SavedBox.css";

const SavedBox = ({ children }) => (
    <div className="container">
        <div className="card mb-5">
            <h5 className="card-header bg-info text-white"><i class="fa fa-download" aria-hidden="true"></i> Saved Articles</h5>
            <div className="card-body">
                {children}
            </div>
        </div>
    </div>
);

export default SavedBox;