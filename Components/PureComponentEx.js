import React from "react";

// Simple Component example (updating component every times)
// class PureComponentEx extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       count: 0,
//     };
//   }
//   render() {
//     console.warn ("update componenet")
//     return (
//       <div>
//         <h2>PureComponent example ({this.state.count})</h2>
//         <button onClick={()=> this.setState({count: this.state.count})}>update Count</button>
//       </div>
//     );
//   }
// }

// Pure Component Example (updating component only when states and props are update )

class PureComponentEx extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    console.warn("update componenet");
    return (
      <div>
        <p>example of PureComponent by Class component</p>
        <h2>Pure Component example ({this.state.count})</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          update Count
        </button>
      </div>
    );
  }
}
export default PureComponentEx;
