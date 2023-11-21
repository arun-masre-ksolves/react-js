import React,{useEffect, useRef, useState} from 'react';

function PreviousState () 
{

    const [count, setCount] = useState(0);
    const lastValue = useRef();

    useEffect(()=>{
        lastValue.current = count;
    });
    const previousValue = lastValue.current;
        
    function changeState() {
        setCount(count+1);
    }
    return (
        <div><hr />
            <h1>Previous state example</h1>
            <h2>Currect state State ({count})</h2>
            <h2>Previous State ({previousValue})</h2>
            <button onClick={changeState}>change state</button>
        </div>
    );
}

export default PreviousState;