import React, {useState} from "react";

export function ClickCounter() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <h2>This user's clicked {count} times!</h2>
        <button onClick={() => setCount(count + 1)}>
        Click Counter
        </button>
      </div>
    );
  }


// export class ClickCounter extends React.Component {
//     state = {
//         count: 0
//     }


//     handleCounterIncrement = () =>{

//         this.setState((state) => {
//             return {
//                 count: state.count + 1,
//             }
//         })
//     }
//     render(){
//         return(
//             <div>
//             <h2><em>This user's clicked {this.state.count} times!</em></h2>
//             <button onClick={this.handleCounterIncrement}><strong>ClickCounter</strong></button>
//             </div>
//         )
//     }
// }