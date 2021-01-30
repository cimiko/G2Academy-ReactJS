import React, { Component } from 'react';
import { Table } from 'react-bootstrap'
import PropTypes from 'prop-types';
import {Space} from 'ui-kit/Atom'
import { NavBar, PaginationBtn } from 'ui-kit/Molecule'
import Style from './style.module.css'

class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            filter: ''
        }
    }

    onInput = e => {
        this.setState({ search: e.target.value })
    }


    onSearch = e => {
        e.preventDefault()
        let filterData = this.props.person.filter(value => { return value.name.toLowerCase().includes(this.state.search.toLowerCase()) })

        this.setState({ filter: filterData })
    }

    render() {
        const {  filter } = this.state
        const { person, Next, Prev , page, dataLength, number} = this.props
        const fill = filter !== '' ? filter : person

        return (
            <>
                <NavBar search={this.onInput} btnSearch={this.onSearch} />
                <div className={Style.listData}>
                    <PersonList person={fill} page={page} no={number} />
                    <Space/>
                    <PaginationBtn className={`justify-content-center ${Style.Page}`} page={page} dataLength={dataLength} onPrev={Prev} onNext={Next} />
                </div>
            </>
        );
    }
}

const PersonList = ({ person, page, no }) => {
    // const listNo = page === 1 ? no ++1 : no ++11

    return (
        <div className={Style.wrapper}>
            <Table striped bordered hover className={Style.personTable}>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Gender</th>
                        <th>Hair Color</th>
                        <th>Skin Color</th>
                    </tr>
                </thead>
                <tbody>
                    {person.map((x, index) =>
                        <tr key={index + no}>
                            <td>{index + no}</td>
                            <td>{x.name}</td>
                            <td>{x.gender}</td>
                            <td>{x.hair_color}</td>
                            <td>{x.skin_color}</td>
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