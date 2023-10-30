
import React from 'react';

class ComponantDidUpdateEx extends React.Component{
    constructor(){
        super();
        console.warn("constructor");
        this.state = {
            names : "aasish",
            count:0
        }
    }

    componentDidUpdate(prePops, preState){
        console.log("component updated", preState);
    }

    render(){
        return(
            <div><hr />
                <h2>component Did update example ({this.state.names})({this.state.count})</h2>
                <button onClick={()=>{this.setState({names: "navin"})}}>Update name</button>
                <button onClick={()=>{this.setState({count: this.state.count + 1})}}>Update Count</button>
            </div>
        )
    }
}

export default ComponantDidUpdateEx;
