import React from "react";
import { Age } from "./Age"

export class Welcome extends React.Component {
    render() {
        return (
            <div>
                <p>Welcome, {this.props.name}!</p>
                <Age age= {this.props.age} />
            </div>
        )
    }
}

//Modify the Welcome component so that the Age component is rendered only if 
//the age prop is greater than 18.