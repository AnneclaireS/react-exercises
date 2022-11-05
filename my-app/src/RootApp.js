import { Routes, Route } from 'react-router-dom';
import { Welcome } from './Welcome';
import { Counter } from './Counter';
import { ShowGitHubUser } from './ShowGitHubUser';

export function RootApp() {
    return (
        <Routes >
            <Route path='/' element={<Welcome  name='Anna'/>}/>
            <Route path='counter' element={<Counter  initialValue={0}/>} />
            <Route path='users/:username' element={<ShowGitHubUser username={'AnneclaireS'} />} ></Route>
        </Routes>
    )
}