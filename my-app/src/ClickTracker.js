import React from "react";

export class ClickTracker extends React.Component {
    state = {
        target: "",
    }

    handleButtonClick = (event) => {
        
        const value = event.target.innerText


        this.setState(() => {
            return {
                target: value
            }
            
        })
    }
    render() {
        return (
            <div>
                <button style={{ color: 'green' }}  onClick={this.handleButtonClick}>Green button</button>
                <button style={{ color: 'red' }}  onClick={this.handleButtonClick}>Red button</button>
                <button style={{ color: 'blue' }} onClick={this.handleButtonClick}>Blue button</button>
                <br />
                <h1>The latest pressed button was : {this.state.target}</h1>
            </div>
        )
    }
}