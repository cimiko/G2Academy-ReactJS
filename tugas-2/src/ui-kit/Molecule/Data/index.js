import React, { Component } from 'react';
import { Table, Pagination } from 'react-bootstrap'
import PropTypes from 'prop-types';
import { NavBar } from 'ui-kit/Molecule'
import Style from './style.module.css'

class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            filter: '',
            page: 2,
            person: []
        }
    }

    componentDidMount() {
        fetch(`https://swapi.dev/api/people/?page=${this.state.page}`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                this.setState({ person: res.results })
            })
    }

    onInput = e => {
        this.setState({ search: e.target.value })
    }


    onSearch = e => {
        e.preventDefault()
        let filterData = this.state.person.filter(value => { return value.nama.toLowerCase().includes(this.state.search.toLowerCase()) })

        this.setState({ filter: filterData })
    }

    onPrev = () => {
        this.setState({ page: this.state.page - 1})
        console.log(this.state.page);
    }

    onNext = () => {
        // this.setState({page: this.state.page + 1})
        // console.log(this.state.page);
        fetch(`https://swapi.dev/api/people/?page=2`)
            .then(res => res.json())
            .then(res => res.next())
            .then(res => {
                console.log(res)
                this.setState({ person: res.results })
            })
    }

    render() {
        const { person, filter, page } = this.state
        const fill = filter !== '' ? filter : person
        return (
            <>
                <NavBar search={this.onInput} btnSearch={this.onSearch} />
                <div className={Style.listData}>
                    <PersonList person={fill} />
                    <Page className={`justify-content-center ${Style.Page}`} page={page} onPrev={this.onPrev} onNext={this.onNext} />
                </div>
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
                        <th>Nama</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {person.map((x, index) =>
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{x.name}</td>
                            <td>{x.gender}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}
const Page = ({ className, page, onPrev, onNext }) => {
    return (
        <Pagination className={className}>
            <Pagination.First />
            <Pagination.Prev />

            <Pagination.Item onClick={onPrev}>{page - 1}</Pagination.Item>
            <Pagination.Item active>{page}</Pagination.Item>
            <Pagination.Item onClick={onNext}>{page + 1}</Pagination.Item>

            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    )
}

PersonList.propTypes = {
    person: PropTypes.arrayOf(
        PropTypes.objectOf(
            PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        ))
}



export default Data;