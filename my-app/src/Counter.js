import React from "react";
import { ClickCounter } from "./ClickCounter";
import { CounterDisplay } from "./CounterDisplay"



export class Counter extends React.Component {
    state = {
        count: this.props.initialValue,
    }
    
    componentDidMount() {


        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + this.props.incrementAmount,
                }
            })
        }, this.props.incrementInterval)

    }
    render() {
        return (
            <>
                <CounterDisplay displCount={this.state.count} />
                <ClickCounter />
            </>
        )
    }
}