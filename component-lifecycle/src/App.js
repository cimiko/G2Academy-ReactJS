import React, { Component } from 'react';

// const hari = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu']

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: new Date(),
//       hour: 0
//     }
//   }

//   componentDidMount() {
//     this.timer = setInterval(() => this.tick(), 1000)
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer)
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const {hour, date} = this.state
//     if(prevState.hour !== hour){
//       const d = date.setHours(date.getHours() * 4)
//       this.setState({date: new Date(d)})
//     }
//   }
  

//   tick = () => {
//     this.setState({ date: new Date() })
//   }

//   onChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value})
//   }

//   render() {
//     const { date, hour } = this.state
//     return (
//       <div>
//         <h2>It is {date.toLocaleTimeString()}</h2>
//         <h2>{date.getFullYear()}</h2>
//         <h2>{date.getMonth() + 1}</h2>
//         <h2>Ini Hari {hari[date.getDay() - 1]}</h2>

//         <span>Tambah</span>
//         <input type="number" value={hour} onChange={this.onChange} />

//         <span>Jam</span>
//       </div>
//     );
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      people: []
     }
  }

  componentDidMount() {
    fetch('https://swapi.dev/api/people')
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({people: res.results})
      })
  }

  render() { 
    const { people } = this.state
    return ( 
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Tinggi</th>
            <th>Berat</th>
          </tr>
        </thead>
        <tbody>
          {people.map(x => (
            <tr>
              <td>{x.name}</td>
              <td>{x.height}</td>
              <td>{x.mass}</td>
            </tr>
          ))}
        </tbody>
      </table>
     );
  }
}


export default App;

