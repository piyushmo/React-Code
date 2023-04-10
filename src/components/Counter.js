import React, { Component} from "react";

//---------setState() Method-----
//-----Increment Counter--------

class Counter extends Component{
    constructor(props){
        super(props)

        this.state = {
            count: 0
        }
    }
    increment(){
         // eslint-disable-next-line react/no-direct-mutation-state
    //      this.setState({
    //        count: this.state.count + 1
    //      })
    //      console.log(this.state.count);
    // }
    this.setState((prevState, props) => ({
        count: prevState.count + 1
    }))
    console.log(this.state.count);
}
incrementFive(){
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
}
    render() {
        return(
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter;