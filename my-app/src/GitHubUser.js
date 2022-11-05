import useSWR from 'swr'



const fetcher = (url) => fetch(url).then((response) => response.json())

function useGitHubUser(username){

    const {data, error} = useSWR(`https://api.github.com/users/${username}`, fetcher)
    
    return{
        data,
        loading: !data && !error,
        error,
    }
}

export function GitHubUser({ username }) {

    const {data, error, loading} = useGitHubUser(username)




    return <div>
        {loading && <h1>Loading...</h1>}
        {error && <h1>An error occurred while processing your request</h1>}
        {data && <h1>User's name: {data.name}</h1>}

    </div>

} 