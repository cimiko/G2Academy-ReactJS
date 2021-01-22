// import React from 'react';
import React, { Component, Fragment } from 'react';
import './style.css';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 10
        }
        // this.onAdd = this.onAdd.bind(this)
        // this.onSubtract = this.onSubtract.bind(this)
    }

    onAdd = () => {
        this.setState(state => ({ counter: state.counter + 1 }))
    }

    onSubtract = () => {
        this.setState(state => ({ counter: state.counter - 1 }))
    }

    render() {
        const { counter } = this.state
        return (
            <Fragment>
                <div className="flex">
                    <button onClick={this.onSubtract}>-</button>
                    <button onClick={this.onAdd}>+</button>
                </div>
                {/* <p>{this.state.counter}</p> */}
                <p>{counter}</p>
            </Fragment>
        );
    }
}

export default Counter;