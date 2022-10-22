import { useState } from "react";

export function ControlledForm() {
      
    const [data, setData] = useState({
        username: '',
        password: '',
    })

    function onLogin(event) {
        const value = event.target.value
        const name = event.target.name
      
        setData(() => {
            return {
                [name] : value
            }

        })
    }  
    console.log(data)

    return ({
        username: data.username,
        password: data.password,
        onLogin
    })
}

export function LoginForm() {

    const {username, password, onLogin} = ControlledForm()

    return (
        <div>
            <input name='username' value={username} onChange={onLogin}></input>
            <input name='password' type='password' value={password} onChange={onLogin}></input>
        </div>
    )
}