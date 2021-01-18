import React, { Component } from 'react';
import './style.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="header">ini modular header</div>
         );
    }
}

class Header2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="header">ini modular header 2</div>
         );
    }
}
 
export {Header2};
export default Header;