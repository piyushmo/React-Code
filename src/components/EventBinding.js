import React, { Component } from 'react';

class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'User- Fastival'
      }
    //this.clickHandler = this.clickHandler.bind(this)
    }

   clickHandler =  () => {
        this.setState({
            message: 'Happy Gudi Padwa'
        })
        console.log(this)
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBinding