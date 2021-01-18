import React, { Component } from 'react';
import './style.css'

class MenuBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="menubar">{this.props.children}</div>
        );
    }
}

export default MenuBar;