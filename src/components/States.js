import React, { Component } from "react";

// class States extends Component {
//     constructor(){
//         super();
//         this.state ={
//             message: 'User'
//         }
//     }
//     render(){
//         return(
//             <h2>{this.state.message}</h2>
//         )
//     }
// }
// export default States;

class States extends Component{
    constructor(){
        super();
        this.state={
            massage:'User'
        }
    }
    clickHandler(){
        this.setState({
            message:'User has now loggedin'
        })
    }
        render(){
            return(
                <div>
                <h2>{this.state.massage}</h2>
                <button onClick={() => this.clickHandler()}>LogIn</button>
                </div>  
            )
        }
}
export default States;