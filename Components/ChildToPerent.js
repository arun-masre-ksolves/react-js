import React from 'react';

function ChildToPerent (props) {
    const data = "Arun Masre";

    return (
        <div>
            <h1>hello</h1>
            <button onClick={()=>props.alert(data)}>Click me</button>
        </div>
    )
    
}

export default ChildToPerent;