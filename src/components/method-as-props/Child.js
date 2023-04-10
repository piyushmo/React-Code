import React, { Component } from 'react'

class Child extends Component {
  render() {
    return (
      <div>
        <button onClick={()=> this.props.greet()}>Click</button>
      </div>
    )
  }
}

export default Child