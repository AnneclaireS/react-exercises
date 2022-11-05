import { GitHubUser } from "./GitHubUser"

export function ShowGitHubUser({username}){
return(
    <div>
        <h1><GitHubUser username={username} /> </h1>
    </div>
    )
}