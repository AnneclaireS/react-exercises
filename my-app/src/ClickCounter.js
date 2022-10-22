import React from "react";
import { useCounter } from "./useCounter";

export function ClickCounter({initialValue = 0}) {

    const {counter, onIncrement, onDecrement, onReset} = useCounter(initialValue);

 
  
    return (
      <div>
        <h2>This user's clicked {counter} times!</h2>
        <button onClick={onIncrement}>
        Click to Increment
        </button>
        <button onClick={onDecrement}>
        Click to Decrement
        </button>
        <button onClick={onReset}>
        Click to Reset
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