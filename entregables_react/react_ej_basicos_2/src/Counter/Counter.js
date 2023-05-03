import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        counter: 0
     } 

    render() { 
        const {counter} = this.state;
        return (
            <div>
                <p>{counter}</p>
                <button onClick={() => this.setState({counter: counter + 1})}>+</button>
                <button onClick={() => this.setState({counter: counter - 1})}>-</button>
            </div>
        );
    }
}
 
export default Counter;