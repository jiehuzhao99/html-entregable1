import React, { Component } from 'react';

class StringCounter extends Component {
    state = { 
        stringCount: ''
     } 

     handleClickAdd = () => {
        let {stringCount} = this.state;
        stringCount += "a";
        this.setState({stringCount});
    }

    handleClickRemove = () => {
        let {stringCount} = this.state;
        stringCount = stringCount.slice(0, -1);
        this.setState({stringCount});
    }

    render() { 
        const {stringCount} = this.state;

        return (
            <div>
                <p>{stringCount}</p>
                <button onClick={this.handleClickAdd}>+</button>
                <button onClick={this.handleClickRemove}>-</button>
            </div>
        );
    }
}
 
export default StringCounter;