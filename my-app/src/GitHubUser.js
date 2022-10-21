import {useEffect, useState} from "react"

export function GitHubUser({username}) {

    const [data, setData] = useState(null)

    useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            console.log(json)

            setData(json)
        })
    }, [username])

    return <div>
        {data && <h1>User's name: {data.name}</h1>}
        {data && <h1>On GitHub: {data.login}</h1>}
        {data && <h1>Followers: {data.followers}</h1>}

    </div>
    
} 