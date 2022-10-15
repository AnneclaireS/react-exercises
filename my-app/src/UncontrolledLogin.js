import React from "react";

export class UncontrolledLogin extends React.Component {

    handleFormSubmit = (event) => {
        event.preventDefault()

        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked

        console.log({
            username,
            password,
            remember
        })
    }

    render() {
        
        return(
            <div>
                <form onSubmit={this.handleFormSubmit}>
                <h3 style={{color:'purple'}}>Insert your username:</h3>
                <input name='username' type='text' required></input>
                <h3 style={{color:'purple'}}>Insert your password:</h3>
                <input name='password' type='password' required></input><br/>
                <label style={{color:'purple'}}><h3>Tick if completed &gt;
                <input name='remember' type='checkbox' ></input>
                </h3></label>
                <button style={{color:'purple', fontSize:14, fontWeight:'bold'}} type="submit">Login</button>
                <button style={{color:'purple', fontSize:14, fontWeight:'bold'}} type='reset'>Press to reset</button>
                </form>
                <br/><br/>
            </div>
        )
    }
}