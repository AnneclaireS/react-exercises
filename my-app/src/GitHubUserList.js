import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { GitHubUser } from "./GitHubUser";


export function GitHubUserList() {

    const [user, setUser] = useState('');
    const [list, setList] = useState([]);

    function handleEnterUser(event) {
        const NewUsername = event.target.value
        setUser(NewUsername)
    } 

    function handleAddUser() {
        setList([...list, user])
        setUser('')
    }

    useEffect (() => {
        console.log(list)
    }, [list])


    return <div>
        <h3>Insert a valid username to see the magic: </h3>
        <input name='user' value={user} onChange={handleEnterUser}></input>
        <button onClick={handleAddUser}>Click to add</button>
       <div>
        {list.map((user, index) => (
                <div>
                <Link key={index} to={user}>{user}</Link>
                <Outlet/>
                </div>
            ))}
        </div>
        <Outlet />
    </div>
    
}
