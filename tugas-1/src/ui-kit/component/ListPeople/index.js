import React, { Component } from 'react'
import PropTypes from 'prop-types'

function Paragraph() {
    return <p>Halo</p>
}

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
        this.setState({ name: e.target.value})
        console.log(this.state.name);
    }

    addPeople = (e) => {
        e.preventDefault()
        let joined = this.state.people.concat( {
            id: this.state.people.length + 1,
            name: this.state.name, 
            status: "Tambahan Baru" } );
        this.setState({ people: joined, name: '' })
        console.log(this.state.people);
    }

    render() {
        const { people, ...restState } = this.state

        return (
            <>
                <People
                    people={people}
                    myFunction={this.myFunction}
                    Paragraph={<Paragraph />}
                    {...restState}
                />
                <input type="text" value={this.state.name} placeholder="Masukan Nama Anda!!" onChange={this.onInput}/>
                <button onClick={this.addPeople}>Add</button>
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
    const onClick = name => {
        console.log(name)
        myFunction()
    }

    // const addPeople = () => {
    //     // e.preventDefault()
    //     let joined = this.state.people.concat({name});
    //     this.setState({ people: joined})
    // }

    return (
        <>
            <p>name: {name}</p>
            <p>room: {room}</p>
            <p>is bootcamp: {is_bootcamp ? 'iya' : 'bukan'}</p>
            <p>session: {session[2]}</p>
            {Paragraph}
            {/* <input type="text" name="name" value={name} placeholder="input nama jedi baru" onChange={onChange()}/> */}
            {/* <button>Add Jedi</button> */}
            <ul>
                {people.map(x => (
                    <li key={x.id} onClick={() => onClick(x.name)}>
                        {x.name}
                    </li>
                ))}
            </ul>
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