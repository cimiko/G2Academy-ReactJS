import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Paragraft = () => {
    return <p>Hallo</p>
}

class ListPeople extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'G2 Academy',
            room: 12,
            is_bootcamp: true,
            session: {
                1: 'intro',
                2: 'content',
                3: 13
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
        console.log(this.state.name);
    }

    render() {
        const { people, ...restState } = this.state
        return (
            <>
                <PeopleList people={people} myFunction={this.myFunction} {...restState} Paragraft={<Paragraft/>} />
                {/* atau tanpa const */}
                {/* <PeopleList people={this.state.people} /> */}
            </>
        );
    }
}

const PeopleList = ({ name, room, is_bootcamp, session, people, myFunction, Paragraft }) => {
    const onClick = (name) => {
        alert(name);
    }

    // const onClick = (name) => e => {
    //     console.log(name);
    // }

    return (
        <>
            <p>name: {name}</p>
            <p>room: {room}</p>
            <p>is bootcamp: {is_bootcamp ? "Iya": "Bukan"}</p>
            <p>session: {session[2]}</p>
            {Paragraft}
            <ul>
                {people.map(x =>
                    <li key={x.id} onClick={() => onClick(x.name)}>{x.name}</li>
                    // <li key={x.id} onClick={onClick(x.name)}>{x.name}</li>
                )}
            </ul>
        </>
    )
}

PeopleList.propTypes = {
    name: PropTypes.string,
    room: PropTypes.number,
    is_bootcamp: PropTypes.bool,
    // session: PropTypes.object,
    session: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
    // session: PropTypes.shape({
    //     1: PropTypes.string,
    //     2: PropTypes.string,
    //     3: PropTypes.number
    // }),
    people: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number
        })
    )
}

// const PeopleList = (props) => {
//     const onClick = (name) => {
//         alert(name);
//     }

//     return (
//         <ul>
//             {props.people.map(x =>
//                 <li key={x.id} onClick={() => onClick(x.name)}>{x.name}</li>
//             )}
//         </ul>
//     )
// }

// class People extends Component {
//     render() {
//         return (
//             <ul>
//                 {props.people.map(x => 
//                 <li key={x.id}>{x.name}</li>
//                 )}
//             </ul>
//         )
//     }
// }

export default ListPeople;