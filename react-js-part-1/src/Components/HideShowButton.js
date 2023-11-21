import React from 'react';

function HideShowButton (p) {
    const [status, setStatus] = React.useState(true);
    return (
        <div><hr/>
            {
                status ?<h2>hello world</h2> : null
                }

            <button onClick={()=>setStatus(true)}>show</button>
            <button onClick={()=>setStatus(false)}>hide</button>

            <button onClick={()=>setStatus(!status)}>hide/show</button>
        </div>
        
    );
}

export default HideShowButton;