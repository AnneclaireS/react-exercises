import React from "react";

export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        this.interval = null;
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1,
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
        <div>
            <h1>Counter: {this.state.count}</h1>
        </div>
        )
    }
}