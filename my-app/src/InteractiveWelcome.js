import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
    state = {
        username: '',
    }

    handleWelcome = (event) => {
        console.log(event);
        const value = event.target.value

        this.setState({
            username: value,
        })

    }
    render() {
        return (
            <div>
                <h2><code>Please insert your name:</code></h2>
                <input name='username' type='text' value={this.state.username} onChange={this.handleWelcome}></input>
                <h1><code><Welcome name={this.state.username} age={24}/></code></h1>
            </div>
        )
    }
}