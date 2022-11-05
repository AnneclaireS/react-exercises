import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {RootApp} from './RootApp'



export function Root(){
return(
    <div>
        <BrowserRouter>
        <RootApp />
        </BrowserRouter>
    </div>
    
    )}