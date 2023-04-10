// function Destructuring(props) {
//     const {name, job, title} = props
//   return (
//     <h2>Name is {name} who is {job} having degree {title}</h2>
//   )
// }

import React, { Component } from "react";

export class Destructuring extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name1: 'Anup',
         surname: 'Bhusari',
         contact: 123456789
      }
    }
  render() {
    const {name, job, title} = this.props
    const {name1, contact} = this.state
    return (
        <>
      <h2> Name is {name} Work in {job} having degree {title} </h2>

      <h3>Name is {name1} {this.state.surname} and contact is {contact}</h3>
      </>
    );
  }
}

export default Destructuring;
