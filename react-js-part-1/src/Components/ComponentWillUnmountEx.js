
import React from 'react';
import WillUnmountPerent from './WillUnmountPerent';

class ComponentWillUnmountEx extends React.Component{
    // constructor(){
    //     console.warn("constructor");
    //     this.state = {
    //         show: true
    //     }
    // }

    // componentDidUpdate(){
    //     console.log("component updated");
    // }

    render(){
        return(
            <div><hr />
                <h2>component Toggle hide/show Child or Perent class</h2>
                {/* {this.state.show ? <WillUnmountPerent/>: "class is hide"}
                <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle hide/show Child class</button> */}
            </div>
        )
    }
}

export default ComponentWillUnmountEx;