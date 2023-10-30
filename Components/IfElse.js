
import {useState} from 'react';

function IfElse () {

// const [value, getValue]= useState(false);
//     return (
//         <div>
//             <hr />
//             {value? <h1>hello anil</h1>:<h1>welcome to home page</h1>}
//         </div>
//     );
// }

const [value, getValue]= useState(2);
    return (
        <div>
            {value=='1'? <h1>hello anil</h1>:value=='2'?<h1>welcome to home page</h1>:<h3>hello</h3>}
        </div>
    );
}

export default IfElse;