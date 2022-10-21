import React, {useEffect, useState} from "react";

export function ClickCounter(props, {initialValue = 0}) {
    let [count, setCount] = useState(initialValue);

    const handleCounterIncrement= () => {
      setCount(count += 1)
  }

    useEffect(() => {
      props.onCounterChange(count)
      
    }, [count, props])
    
 
  
    return (
      <div>
        <h2>This user's clicked {count} times!</h2>
        <button onClick={handleCounterIncrement}>
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