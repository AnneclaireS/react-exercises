import { Routes, Route, Link } from 'react-router-dom';
import { Welcome } from './Welcome';
import { Counter } from './Counter';
import { ShowGitHubUser } from './ShowGitHubUser';


export function RootApp() {
    return (
        <div>
        <Routes >
            <Route path='/' element={<Welcome  name='Anna'/>}/>
            <Route path='counter' element={<Counter  initialValue={0}/>} />
            <Route path='users/:username' element={<ShowGitHubUser username={'AnneclaireS'} />} ></Route>
        </Routes>
        <div>
        
            <Link to='/'>Home</Link> | <Link to='/counter'>ShowCounter</Link> | <Link to='/users/:username'>GitHub name</Link>
         
        </div>

        </div>
    )
}