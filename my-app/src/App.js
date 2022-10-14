import React from "react";
import { Hello } from './Hello'
import { Welcome } from "./Welcome"
import { Counter } from './Counter'


export class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome name='John' age={23} />
                <Counter initialValue={0} incrementAmount={1} incrementInterval={1000} />
            </div>
        )
    }

}