// import React from 'react';
import react, {Component} from 'react';

class ClassComponent extends Component {
    constructor(){
        super();
        // console.warn("hdjhdj");
        // console.warn(this.props.name);
        this.state = {
            email : "anil@gmail.com"
        }
    }
    render(){
        // console.warn(this.state.email);
        return (
    <div>
        {/* <h2>user Component {this.props.name}</h2> */}
        <h2>Email: {this.state.email}</h2>
        <button onClick={()=>this.setState({email: "arun@gmail.com"})}>update email</button>
    </div>
        )
    }
}

export default ClassComponent;