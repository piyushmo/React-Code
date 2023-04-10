import React, { Component } from "react";

import Child from "./Child";

class Parent extends Component {
    
    greet(){
      alert(`Namaste All`)
    }
    
  render() {
    return (
      <div>
        <Child greet={this.greet}/>
      </div>
    );
  }
}

export default Parent;
