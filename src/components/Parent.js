import React, { Component } from "react";

import Child from "./Child";

class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'India'
      }
    }
    greet = (child) => {
        console.log(`Hello ${this.state.name} from ${child}`);
    }
  render() {
    return (
      <div>
        <Child greetHandler = {this.greet} />
      </div>
    );
  }
}

export default Parent;
