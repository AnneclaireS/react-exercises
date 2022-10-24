import { useGitHubUser } from './useGitHubUser'
import { useEffect } from 'react'

export function GitHubUser({ username }) {

    const {data, error, loading, onFetchUser} = useGitHubUser(username)

    useEffect(() => {
        onFetchUser(username)
    }, [username])


    return <div>
        {loading && <h1>Loading...</h1>}
        {error && <h1>An error occurred while processing your request</h1>}
        {data && <h1>User's name: {data.name}</h1>}

    </div>

} 