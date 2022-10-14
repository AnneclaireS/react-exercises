import React from "react";

export class Login extends React.Component {
    state = {
        username: '',
        password: '',
        remember: false
    }

    handleLogin = (event) => {
        
        const value = event.target.value
        const name = event.target.name
        const type = event.target.type
        const checked = event.target.checked

        this.setState({
            [name]: type === 'checkbox' ? checked : value,
        }) 
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h3 style={{color:'blue'}}>Insert your username:</h3>
                <input name='username' type='text' value={this.state.username} onChange={this.handleLogin}></input>
                <h3 style={{color:'blue'}}>Insert your password:</h3>
                <input name='password' type='password' value={this.state.password} onChange={this.handleLogin}></input><br/>
                <label style={{color:'blue'}}><h3>Tick if completed &gt;
                <input name='remember' type='checkbox' checked={this.state.remember} onChange={this.handleLogin}></input>
                </h3></label>
            </div>
        )
    }
}