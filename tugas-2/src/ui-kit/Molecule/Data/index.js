import React, { Component } from 'react';
import { Table } from 'react-bootstrap'

class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            person: [{
                id: 1,
                nama: "Andi",
                domisili: "Jakarta"
            }, {
                id: 2,
                nama: "Joko",
                domisili: "Bekasi"
            }, {
                id: 3,
                nama: "Regina",
                domisili: "Bogor"
            }, {
                id: 4,
                nama: "Saiful",
                domisili: "Tangerang"
            }, {
                id: 5,
                nama: "Rudi",
                domisili: "Serang"
            }]
        }
    }
    render() {
        const { person, search } = this.state
        return (
            <>
                <PersonList person={person} search={search} />
            </>
        );
    }
}

const PersonList = ({ person, search }) => {
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama</th>
                        <th>Domisili</th>
                    </tr>
                </thead>
                <tbody>
                    {person.map(x =>
                        <tr key={x.id}>
                            <td>{x.id}</td>
                            <td>{x.nama}</td>
                            <td>{x.domisili}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    )
}

export default Data;