import React from "react";
import { Hello } from './Hello'
import { Welcome } from "./Welcome"
import { Counter } from './Counter'
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from './ClickTracker'


export class App extends React.Component {
    render() {
        return (
            <div>
                <div style={{borderBottom: '2px solid grey'}}></div>
                <Hello />
                <div style={{borderBottom: '2px solid grey'}}></div>
                <Welcome name='John' age={24} />
                <div style={{borderBottom: '2px solid grey'}}></div>
                <Counter initialValue={0} incrementAmount={1} incrementInterval={1000} />
                <div style={{borderBottom: '2px solid grey'}}></div>
                <ClickCounter /><br/>
                <div style={{borderBottom: '2px solid grey'}}></div><br/>
                <ClickTracker />
            </div>
        )
    }

}