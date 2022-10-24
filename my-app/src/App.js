import React from "react";
import { Hello } from './Hello'
import { Welcome } from "./Welcome"
import { Counter } from './Counter'
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from './ClickTracker'
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { ToDoList } from "./ToDoList";
import { Sum } from './Sum';
import { GitHubUser } from "./GitHubUser";
import { GitHubUserList } from "./GitHubUserList";
import { LoginForm} from "./ControlledForm";

const items = [

]

export class App extends React.Component {
    render() {
        return (
            <div>
                <div style={{ borderBottom: '2px solid grey' }}></div>
                <Hello />
                <div style={{ borderBottom: '2px solid grey' }}></div>
                <Welcome name='John' age={20} />
                <div style={{ borderBottom: '2px solid grey' }}></div>
                <Counter  />
                <div style={{ borderBottom: '2px solid grey' }}></div>
                <ClickCounter onCounterChange={(count) => {
                    return console.log("The counter is now", + count)}} /><br/>
                <div style={{borderBottom: '2px solid grey'}}></div><br/>
                <ClickTracker />
                <div style={{borderBottom: '2px solid grey'}}></div><br/>
                <InteractiveWelcome />
                <div style={{borderBottom: '2px solid grey'}}></div>
                <Login />
                <div style={{borderBottom: '2px solid grey'}}></div><br/>
                <UncontrolledLogin />
                <div style={{borderBottom: '2px solid grey'}}></div><br/>
                <ToDoList items={items} />
                <div style={{borderBottom: '2px solid grey'}}></div><br/>
                <Sum />
                <div style={{borderBottom: '2px solid grey'}}></div><br/>
                <GitHubUser username={'gianmarcotoso'}/>
                <div style={{borderBottom: '2px solid grey'}}></div><br/>
                <GitHubUserList />
                <div style={{borderBottom: '2px solid grey'}}></div><br/>
                <LoginForm /><br/>
                <div style={{borderBottom: '2px solid grey'}}></div><br/>
            </div>
        )
    }

}