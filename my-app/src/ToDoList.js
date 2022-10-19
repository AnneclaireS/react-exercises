import React from "react";

export class ToDoList extends React.Component {
    state = {
        items: [],
        element: ''
    }

    handleEnterElement = (event) => {

        const value = event.target.value


        this.setState(() => {
            return { element: value }

        })
    }

    handleAddElement = () => {

        const newValue = this.state.element


        this.setState(() => {
            return {
                items: [...this.state.items, newValue],
                element: ''
            }
        })
    }

    handleReset = () => {

        this.setState({
            items: [],
            element: ''
        })
    }

    handleRemoveElement = (index) => {
        let newList = this.state.items
        newList.splice(index, 1);
        this.setState({ items: newList })
    }

    render() {
        return (
            <div>
                <h3>Add element:</h3>
                <input value={this.state.element} onChange={this.handleEnterElement}></input><br /><br />
                <button onClick={this.handleAddElement}>Click to add</button>
                <button onClick={this.handleReset}>Click to reset</button>
                <ul>
                {this.props.render(this.state.items, this.handleRemoveElement)}
                </ul>
              

            </div>

        )

    }
} 

