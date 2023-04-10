
// function EventHandlers() {

//   const clickHandler = () => {
//     console.log('I clicked the button');
//   }
//   return (
//     <button onClick = {clickHandler}>Click</button>
//   )
// }

import React, { Component } from 'react'

class EventHandlers extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'User'
      }
    }
    clickHandler(){
        console.log(this);
        // this.setState({
        //     message: 'Happy Gudi Padwa'
        // })


    }
  render() {
    return (
        <>
        <h1>{this.state.message}</h1>
        <button onClick = {this.clickHandler}>Click</button>
        </>
    )
  }
}

export default EventHandlers
