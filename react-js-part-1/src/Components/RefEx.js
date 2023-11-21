import React,{createRef} from 'react';


class RefEx extends React.Component {
    constructor() {
      super();
      this.inputRef = createRef();
      
    }
    componentDidMount(){
        // console.warn(this.inputRef.current.value="100");
    }
    getVal(){
        // console.warn(this.inputRef);
        this.inputRef.current.style.color="red";
        this.inputRef.current.style.backgroundColor="blue";
    }
    render() {
      return (
        <div><hr />
          <h2>Ref example (class componenet)</h2>
          <input type="text" ref={this.inputRef}/>
          <button onClick={()=>this.getVal()}>ref ex</button>
        </div>
      );
    }
  }
  export default RefEx;