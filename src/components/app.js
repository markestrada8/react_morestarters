import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="page-container">
        <h1>React Practice</h1>
        <div>
          on this page your goal is to use some component lifecycle methods on
          this page to console log when youpage has mounted and is about to
          unmount.
          <p>(Bonus points if you implement more lifecycle methods)</p>
        </div>
      </div>
    );
  }
}
