import React, {setState, Component } from 'react'
import Img_class_state from './Img_class_state';

export class Class_state extends Component {
    constructor() {
        super();
        this.state = {
            name:"Rajesh nagar",
            email: "raj@gmail.com",
            age: 32,
            number: 1,
            isImage: true
        }
    }
    render() {
        return (
            <div>
                <button onClick={() => this.setState({name:"Akash Nagar"})}>change</button>
                <h1>{this.state.name}</h1>

                <hr />
                <button onClick={() => { this.setState({email: "rajeshnagar@gmail.com", age: 34 }) }}>change</button>
                <h1>Hi my email is : {this.state.email} and my age is : {this.state.age}</h1>

                <hr />

                <button onClick={() => this.setState({number: this.state.number + 1 })}>+</button>
                <h1>{this.state.number}</h1>
                <button onClick={() => this.setState({number: this.state.number - 1 })}>+</button>

                <hr />

                <button onClick={() => this.setState({isImage: false })}>Hide</button>
                <button onClick={() => this.setState({isImage: true })}>Show</button>
                <button onClick={() => this.setState({isImage: !this.state.isImage })}>Hide/Show</button>
                {this.state.isImage ? <Img_class_state/> : null}

            </div>
        )
    }
}
export default Class_state