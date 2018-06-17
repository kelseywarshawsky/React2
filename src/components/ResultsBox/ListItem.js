import React from "react";

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export const ListItem = props => (
  <li className="list-group-item">
    <div className="container">
      <div className="row">
        <div className="xs-8 sm-8">
            <h3>{props.title}</h3>
            <p>Date published: {props.date}</p>
        </div>
        <div className="xs-4 sm-4">
          
        </div>
      </div>
    </div>
  </li>
);

export default ListItem;