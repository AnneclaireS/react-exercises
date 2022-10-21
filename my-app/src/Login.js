import React, { useState } from "react";

export function Login() {

    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false,
        disabled: true
    })

    const handleInputChange = (event) => {

        const { name, value, type, checked } = event.target


        setData((data) => {
            return {
                ...data,
                [name]: type === 'checkbox' ? checked : value,
            }

        })
    }

    console.log(data)




    const onLogin = (event) => {
        console.log(data.username, data.password, data.remember)
        setData((data) => {
            return {
                ...data,
                username: "",
                password: "",
                remember: false
            }
        })
    }


    const handleResetState = () => {
        
        setData((data) => {
            return {
                ...data,
                username: "",
                password: "",
                remember: false
            }
        })
    }


    const MyStyle = {
        backgroundColor: data.password.length < 8 ? 'red' : 'green'
    }
    return (
        <div>
            <h3 style={{ color: 'blue' }}>Insert your username:</h3>
            <input name='username' type='text' value={data.username} onChange={handleInputChange}></input>
            <h3 style={{ color: 'blue' }}>Insert your password:</h3>
            <input name='password' type='password' value={data.password} onChange={handleInputChange}></input><br />
            <label style={{ color: 'blue' }}><h3>Tick if completed &gt;
                <input name='remember' type='checkbox' checked={data.remember} onChange={handleInputChange}></input>
            </h3></label>
            <button type="submit" style={MyStyle} disabled={!data.username || !data.password} onClick={onLogin}>Login</button>
            <button style={{ color: 'blue', fontSize: 14, fontWeight: 'bold' }} onClick={handleResetState}>Press to reset</button>
            <br /><br />
        </div>
    )

}