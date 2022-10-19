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
import { Container } from "./Container";
import { LanguageComponent } from "./LanguageContext";





export class App extends React.Component {
   
    render() {
        return (
                <><LanguageComponent />
                <hr/>
                <Container className="container" title='My Awesome Application'>
                <Hello />
                <div style={{ borderBottom: '2px solid grey' }}></div>
                <Welcome name='John' age={20} />
                <div style={{ borderBottom: '2px solid grey' }}></div>
                <Counter initialValue={0} incrementAmount={1} incrementInterval={1000} />
                <div style={{ borderBottom: '2px solid grey' }}></div>
                <ClickCounter /><br />
                <div style={{ borderBottom: '2px solid grey' }}></div><br />
                <ClickTracker />
                <div style={{ borderBottom: '2px solid grey' }}></div><br />
                <InteractiveWelcome />
                <div style={{ borderBottom: '2px solid grey' }}></div>
                <Login />
                <div style={{ borderBottom: '2px solid grey' }}></div><br />
                <UncontrolledLogin />
                <div style={{ borderBottom: '2px solid grey' }}></div><br />
                <ToDoList render={(items, handleRemoveElement) => {
                    return (
                        items.map((todos, index) => (
                            <div key={index}>
                                <li>{todos}</li>
                                <button key={index} onClick={() => { handleRemoveElement(todos); } }>Remove Element</button>
                            </div>
                        ))
                    );
                } } />
                <div style={{ borderBottom: '2px solid grey' }}></div>

            </Container></>
        )
    }

}