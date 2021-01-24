import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'ui-kit/Atom';
import style from './style.module.css';
import { Table } from 'react-bootstrap'

// function Paragraph() {
//     return <p>Halo</p>
// }

class ListPeople extends Component {
    constructor() {
        super()
        this.state = {
            name: 'G2 Academy',
            room: 12,
            is_bootcamp: true,
            session: {
                1: 'intro',
                2: 12,
                3: 'final'
            },
            people: [
                {
                    id: 1,
                    name: 'Obi Wan',
                    status: 'Jedi'
                },
                {
                    id: 2,
                    name: 'Luke Skywalker',
                    status: 'Padawan'
                },
                {
                    id: 3,
                    name: 'Qui Gon',
                    status: 'Jedi Master'
                }
            ]
        }
    }

    myFunction = () => {
        console.log(this.state.name)
    }

    onInput = e => {
        this.setState({ name: e.target.value })
        console.log(this.state.name);
    }

    addPeople = (e) => {
        e.preventDefault()
        let joined = this.state.people.concat({
            id: this.state.people.length + 1,
            name: this.state.name,
            status: "Tambahan Baru"
        });
        this.setState({ people: joined, name: '' })
        console.log(this.state.people);
    }

    render() {
        const { people, ...restState } = this.state

        return (
            <>
                <div className={style.flex}>
                    <Input type="text" value={this.state.name} placeholder="Masukan Nama Anda!!" onChange={this.onInput} className="form-control w-25 mt-5 mb-5" />
                    <Button className={`${style.btn} mt-5 mb-5`} onClick={this.addPeople}>Add</Button>
                </div>
                <People
                    people={people}
                    {...restState}
                />
            </>
        )
    }
}

function People({
    name,
    room,
    is_bootcamp,
    session,
    people,
    myFunction,
    Paragraph
}) {
    // const onClick = name => {
    //     console.log(name)
    //     myFunction()
    // }

    // const addPeople = () => {
    //     // e.preventDefault()
    //     let joined = this.state.people.concat({name});
    //     this.setState({ people: joined})
    // }

    return (
        <>
            {/* <P>name: {name}</P>
            <P>room: {room}</P>
            <P>is bootcamp: {is_bootcamp ? 'iya' : 'bukan'}</P>
            <P>session: {session[2]}</P>
            {Paragraph} */}
            {/* <input type="text" name="name" value={name} placeholder="input nama jedi baru" onChange={onChange()}/> */}
            {/* <button>Add Jedi</button> */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map(x => (
                        // <li key={x.id} onClick={() => onClick(x.name)}>
                        //     {x.name}
                        // </li>
                        <tr>
                            <td>{x.id}</td>
                            <td>{x.name}</td>
                            <td>{x.status}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

People.propTypes = {
    // name: PropTypes.oneOf(['G2 Academy', 'Academy']),
    name: PropTypes.string,
    room: PropTypes.number,
    is_bootcamp: PropTypes.bool,
    session: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
    Paragraph: PropTypes.element,
    people: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number
        })
    )
}

export default ListPeople