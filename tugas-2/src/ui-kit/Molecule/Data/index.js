import React, { Component } from 'react';
import { Navbar, Form, FormControl, Button, Table } from 'react-bootstrap'
import { Img } from 'ui-kit/Atom'
import logo from 'logo.svg'
import PropTypes from 'prop-types';

class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            filter: '',
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

function NavBar({ search, btnSearch }) {

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <Img
                    alt="logo"
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
      CIMIKO
    </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Form inline className="justify-content-end">
                    <FormControl type="text" placeholder="Ada yang mau dicari?" className=" mr-sm-2" onKeyUp={search} />
                    <Button type="submit" onClick={btnSearch}>Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

PersonList.propTypes = {
    person: PropTypes.arrayOf(
        PropTypes.objectOf(
            PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        ))
}

NavBar.propTypes = {
    search: PropTypes.func,
    btnSearch: PropTypes.func
}

export default Data;