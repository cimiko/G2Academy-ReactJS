import React, {Component} from 'react';

class Input extends Component{
    constructor(props){
      super(props);
      this.state = {}
    }
    render(){
      const {nameInput, onChangeInput} = this.props
      return (
        <input type="text" name={nameInput} onChange={onChangeInput} />
      );
    }
  }

  export default Input;