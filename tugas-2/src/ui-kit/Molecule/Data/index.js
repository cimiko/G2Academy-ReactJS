import React, { Component } from 'react';
import { Table } from 'react-bootstrap'
import PropTypes from 'prop-types';
import {NavBar} from 'ui-kit/Molecule'
import Style from './style.module.css'

class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            filter: '',
            person: [{
                id: 19918656,
                nama: "Andi",
                domisili: "Jakarta"
            }, {
                id: 19935874,
                nama: "Joko",
                domisili: "Bekasi"
            }, {
                id: 19964852,
                nama: "Regina",
                domisili: "Bogor"
            }, {
                id: 19729875,
                nama: "Saiful",
                domisili: "Tangerang"
            }, {
                id: 19855698,
                nama: "Rudi",
                domisili: "Serang"
            }]
        }
    }

    onInput = e => {
        this.setState({ search: e.target.value })
    }


    onSearch = e => {
        e.preventDefault()
        let filterData = this.state.person.filter(value => { return value.nama.toLowerCase().includes(this.state.search.toLowerCase()) })

        this.setState({ filter: filterData })
    }

    render() {
        const { person, filter } = this.state
        const fill = filter !== '' ? filter : person
        return (
            <>
                <NavBar search={this.onInput} btnSearch={this.onSearch} />
                <PersonList person={fill} />
            </>
        );
    }
}

const PersonList = ({ person }) => {
    return (
        <div className={Style.wrapper}>
            <Table striped bordered hover className={Style.personTable}>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>ID Person</th>
                        <th>Nama</th>
                        <th>Domisili</th>
                    </tr>
                </thead>
                <tbody>
                    {person.map((x, index) =>
                        <tr key={x.id}>
                            <td>{index + 1}</td>
                            <td>{x.id}</td>
                            <td>{x.nama}</td>
                            <td>{x.domisili}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}

PersonList.propTypes = {
    person: PropTypes.arrayOf(
        PropTypes.objectOf(
            PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        ))
}



export default Data;