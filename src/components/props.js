import React from "react";
import PropItem from "./prop-item";

export default function Props() {
  return (
    <div className="page-container">
      <h1>Props</h1>
      <div>
        your goal on this page is to give the props item component some data and
        render it on the page.{" "}
        <p>(Bonus if you use a map function to loop over a list)</p>
      </div>
      <PropItem />
    </div>
  );
}
