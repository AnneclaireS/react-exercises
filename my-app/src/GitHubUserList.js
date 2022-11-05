import { useEffect, useState } from "react";
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
        <ul>
        {list.map((user, index) => {
                return (
                    <li><GitHubUser key={index} username={user} /></li>
                )
            })}
        </ul>
    </div>
    
}
