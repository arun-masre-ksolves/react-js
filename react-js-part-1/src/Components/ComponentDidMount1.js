
// import React, {Component} from 'react';
import React from 'react';


class ComponentDidMount1 extends React.Component {
    constructor(){
        super();
        // console.warn("constructor");
        this.state = {
            name: "anil"
        }
    }

    componentDidMount(){
        console.warn("componentDitMount");
    }

    render(){
        console.warn("render");
        return(
            <div><hr />
                <h2>Component Did Mount example ({this.state.name})</h2>
                <button onClick={()=>{this.setState({name: "arun"})}}>Update name</button>
            </div>
        )
    }

}

export default ComponentDidMount1;