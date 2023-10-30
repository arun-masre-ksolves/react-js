

import React from 'react';

class ShouldComponantUpdateEx extends React.Component{
    constructor(){
        super();
        console.warn("constructor");
        this.state = {
            count:0
        }
    }

    shouldComponentUpdate(){
        console.warn("component updated", this.state.count);
        if(this.state.count<=10)
        {
            return true;
        }
    }

    render(){
        return(
            <div><hr />
                <h2>Should component update example ({this.state.count})</h2>
                <button onClick={()=>{this.setState({count: this.state.count + 1})}}>Update Count</button>
            </div>
        )
    }
}

export default ShouldComponantUpdateEx;
