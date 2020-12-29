import React, {Component} from 'react';

class RowInput extends Component{
    constructor(props){
      super(props);
      this.state = {}
    }
    render(){
      const {label, name, onChangeValue} = this.props
      return (
        <>
            <div className="row-input">
                {label}: <input type="text" name={name} onChange={onChangeValue}/>
            </div>
        </>
      );
    }
  }

  export default RowInput;