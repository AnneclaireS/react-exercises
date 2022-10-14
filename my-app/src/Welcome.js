import React from "react"
import { Age } from "./Age"

export class Welcome extends React.Component {
    render() {
        return (
            <div>
                {this.props.name === 'John' && <p>Welcome, {this.props.name}!</p>}
                {!!(this.props.age > 18) && <Age age= {this.props.age}/>}
                {!(this.props.age > 18) && <p>You are very young!</p> }
            </div>
        )
        
    }
    
}

