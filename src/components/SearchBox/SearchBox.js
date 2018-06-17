import React from "react";
import "./SearchBox.css";

const SearchBox = () => (
    <div className="container">
        <div className="card mb-4">
            <h5 className="card-header bg-info text-white"><i className="fa fa-newspaper-o" aria-hidden="true"></i> Query</h5>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="topic">Topic</label>
                        <input type="text" className="form-control" id="topic" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="startYear">Start Year</label>
                        <input type="number" className="form-control" id="startYear" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="endYear">End Year</label>
                        <input type="number" className="form-control" id="endYear" />
                    </div>
                    <button type="submit" className="btn btn-danger mb-2">Search</button>
                </form>
            </div>
        </div>
    </div>
);

export default SearchBox;