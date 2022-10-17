import React from "react";

export class ToDoList extends React.Component {
    state = {
        items :[],
        element : ''
    }

    handleEnterElement = (event) => {

        const value = event.target.value


        this.setState(() => {
            return {element : value}
            
        })
    }

    handleAddElement = () => {

        const newValue = this.state.element


        this.setState(() => {
            return {
                items : [...this.state.items, newValue],
                element:''
            }
        })

        
    }
    render() {
        return (
            <div>
                <h3>Add element:</h3>
                <input value={this.state.element} onChange={this.handleEnterElement}></input><br/><br/>
                <button onClick={this.handleAddElement}>Click to add</button>
                <ul>
                    {this.state.items.map((item) => (<li>{item}</li>))}
                </ul>
            </div>

        )        
            
    }
}