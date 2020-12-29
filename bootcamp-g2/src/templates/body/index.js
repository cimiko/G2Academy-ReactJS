import React, {Component} from 'react';
import {RowInput} from '../../component'

class Body extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: "",
      address: ""
    }
    // this.valueName = ""
  }

  onChangeInput = (e) =>{
    // console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
      // this.valueName = e.target.value
    })
    // this.setState({
    //   name: e.target.value
    //   // this.valueName = e.target.value
    // })
    // if (e.target.name === "name") {
    //   this.setState({
    //       name: e.target.value
    //     })
    // }else if(e.target.email == "email"){
    //   this.setState({
    //     email: e.target.value
    //   })
    // }else if(e.target.address == "address"){
    //   this.setState({
    //     address: e.target.value
    //   })
    // }
  }
    render(){
      return (
        <>
          <RowInput label="Nama" name="name" onChangeValue={this.onChangeInput}/>
          <RowInput label="Email" name="email" onChangeValue={this.onChangeInput}/>
          <RowInput label="Alamat" name="address" onChangeValue={this.onChangeInput}/>
          {/* <div>{this.props.appName}</div> */}
          {/* <div>
            Name: <input type="text" name="name" onChange={this.onChangeInput}/>
          </div>
          <div>
            Email: <input type="text" name="email" onChange={this.onChangeInput}/>
          </div>
          <div>
            Address: <input type="text" name="address" onChange={this.onChangeInput}/>
          </div> */}
          {/* <div>
            Jenis Kelamin: <input type="radio" value="Laki-Laki" /> Laki-Laki
            <input type="radio" value="Perempuan" /> Perempuan
          </div> */}
          <div>
            Nama: {this.state.name}
          </div>
          <div>
            Email: {this.state.email}
          </div>
          <div>
            Address: {this.state.address}
          </div>

        </>
      );
    }
  }

  export default Body;