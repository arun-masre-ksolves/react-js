import React,{useState} from 'react';

function Onchange () 
{

    const [data, setData] = useState(null);
    const [print, setprint] = useState(false);
        function getValue (val) {
            setData(val.target.value);
            setprint(false);
        }
    
    
    return (
        <div className='value'>
            {print ? <h1>{data}</h1>: null}
            <input type="text" onChange = {getValue} /> <br/><br/>
            <button onClick={()=>setprint(true)}>change input</button>
        </div>
    );
}

export default Onchange;