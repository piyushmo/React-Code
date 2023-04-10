import React from "react";

//----used arrow --props nahi direct variable pass
// const Destructuring = ({name, compName}) => {
    const Destructuring = props => {
        const {name, compName} = this.props
    
    return(
        <div>
            <h1>
                Hello {name} ur company name: {compName}
            </h1>
        </div>
    )
}

export default Destructuring;