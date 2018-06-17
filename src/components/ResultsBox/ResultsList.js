import React from "react";

// ResultsList renders a bootstrap list item
export const ResultsList = props => (
  <ul className="list-group">{props.children}</ul>
);

export default ResultsList;