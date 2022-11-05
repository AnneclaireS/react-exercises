import { Routes, Route, Link } from 'react-router-dom';
import { Welcome } from './Welcome';
import { Counter } from './Counter';
import { ShowGitHubUser } from './ShowGitHubUser';
import { GitHubUserList } from './GitHubUserList';


export function RootApp() {
    return (
        <div>
        <Routes >
            <Route path='*' element={<div><p>Page Not Found</p> <Link to="/" >Back Home</Link></div>} />
            <Route path='/' element={<Welcome  name='Anna'/>}/>
            <Route path='counter' element={<Counter  initialValue={0}/>} />
            <Route path='users' element={<GitHubUserList  />} >
                <Route path=':username' element={<ShowGitHubUser />} />
            </Route>
        </Routes>
        <div>
        
            <Link to='/'>Home</Link> | <Link to='/counter'>ShowCounter</Link> | <Link to='/users'>GitHub name</Link>
         
        </div>

        </div>
    )
}