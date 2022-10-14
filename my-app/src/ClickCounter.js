import React from "react";


export class ClickCounter extends React.Component {
    state = {
        count: 0
    }


    handleCounterIncrement = () =>{

        this.setState((state) => {
            return {
                count: state.count + 1,
            }
        })
    }
    render(){
        return(
            <div>
            <h2 style={{color:'purple'}}><em>This user's clicked {this.state.count} times!</em></h2>
            <button onClick={this.handleCounterIncrement}><strong>ClickCounter</strong></button>
            </div>
        )
    }
}