import React from "react";
import "./TopNav.css";

const TopNav = () => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container">
                <span className="navbar-brand text-white" href="/">NYT-React</span>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/">Search</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/saved">Saved Articles</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
);

export default TopNav;