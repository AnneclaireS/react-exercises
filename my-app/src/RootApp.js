import { Routes, Route } from 'react-router-dom';
import { Welcome } from './Welcome';

export function RootApp() {
    return (
        <Routes >
            <Route path='/' element={<Welcome  name='Anna'/>}>

            </Route>
        </Routes>
    )
}