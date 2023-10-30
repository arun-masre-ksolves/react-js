
import React,{useState} from 'react';


function Forms () {
    const [name, setName] = useState("");
    const [intrest, setIntrest] = useState(false);
    const [tnc, setTnc] = useState("");

    function getFormData (e) {
        console.warn(name,intrest, tnc)
        e.preventDefault(e);
    }
    return(

        <div><hr />
            <form onSubmit={getFormData}>
                <h1>handle form data in react</h1>
                <input type="text" placeholder='enter text here' onChange={(e)=>setName(e.target.value)}/> <br/><br/>
                <select onChange={(e)=>setIntrest(e.target.value)}>
                    <option>marver</option>
                    <option>Dc</option>
                </select><br /><br />
                <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/><span>Accept Terms and conditions</span><br/><br/>
                <button type="submit">Submit</button>
            </form><hr />
        </div>
    );
}

export default Forms;