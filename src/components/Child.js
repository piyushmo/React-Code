import React, { Component } from 'react'

class Child extends Component {
  render() {
    return (
      <button onClick={()=>this.props.greetHandler('Maharashtra')}>Click</button>
    )
  }
}

export default Child