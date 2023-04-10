import React, { Component } from "react";

//------props--used------------------
// function UsedOfProps(props){
//     console.log(props);
//     return(
//         <div>
//             <h1>Hello {props.name}</h1>
//         </div>
//     )
// }
// export default UsedOfProps;

// -------props----Class---------------------
// class UsedOfProps extends Component{
//     render(){
//         console.log(this.props);
//         return(
//             <div>
//                 <h1>Helloooo....
//                     {this.props.name}</h1>
//             </div>
//         )
//     }
// }
// export default UsedOfProps;

//------Used------Arrow----------------
const Props = props => {
    return(
        <h1>Hello....{props.name} lecture time {props.Class}</h1>
    )
}
export default Props; 