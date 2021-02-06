import React from 'react'
import { connect } from 'react-redux'
import { addtodo, updateTodo, deleteTodo, filterTodo } from '../../action'
import { Table, Button } from 'react-bootstrap'
import { Header, Body, Footer } from 'ui-kit/Organism'
import style from './style.module.css'

class Todo extends React.Component {
  constructor() {
    super()
    this.state = {
      value: '',
      edit: '',
      data: [],
      id: 1, 
      search: '',
      filter: ''
    }
  }

  fetch = () => {
    const { todo } = this.props
    this.setState({ data: todo })
  }

  componentDidMount() {
    this.fetch()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.todo !== this.state.data) {
      this.fetch()
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onInputSearch = async(e) => {
    this.setState(await{ search: e.target.value })
  }

  onSubmitTodo = async () => {
    const { todo, add } = this.props
    console.log(todo);
    // const id = todo.length === 0 ? 1 : todo[todo.length - 1].id + 1
    await this.setState({ id: todo.length + 1 })
    add({
      id: this.state.id,
      name: this.state.value
    })
    console.log(add);
    await this.fetch()
    this.setState({ value: '' })
  }

  onEdit = async (e) => {
    const { todo, update } = this.props

    const dataName = await todo.filter(item => item.id === todo[e].id)

    console.log(dataName[0].id);
    await todo.splice(e, 1)
    update({
      id: dataName[0].id,
      name: this.state.value
    })
    this.setState({ value: '' })
  }

  onDelete = async (e) => {
    const { todo, deleteData } = this.props
    // await this.fetch()
    const del = await todo.splice(e, 1)
    deleteData({ del })
  }
  
  onSearch = async() => {
    const { todo } = this.props
    
    const dataName =  await todo.filter(item => {return item.name.toLowerCase().includes(this.state.search.toLowerCase())})

    this.setState({filter: dataName})
  }

  render() {
    const { value, data, filter } = this.state
    const fill = filter !== '' ? filter : data
    // const { todo } = this.props
    return (
      <div>
        <Header onInput={this.onInputSearch} onSearch={this.onSearch} />
        <Body className={style.body}>
          <input
            type="text"
            name="value"
            placeholder="what are you going to do?"
            onChange={this.onChange}
            value={value}
          />
          <button onClick={this.onSubmitTodo}>Add Todo</button>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>ID Person</th>
                <th>ToDo</th>
                <th colSpan='2'>Action</th>
              </tr>
            </thead>
            <tbody>
              {fill.map((x, i) =>
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{x.id}</td>
                  <td>{x.name}</td>
                  <td><Button onClick={() => this.onEdit(i)}>Edit</Button></td>
                  <td><Button onClick={() => this.onDelete(i)}>Delete</Button></td>
                </tr>
              )}
            </tbody>
          </Table>
        </Body>
        <Footer/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todo: state.todo
})

const mapDispatchToProps = dispatch => ({
  add: payload => dispatch(addtodo(payload)),
  update: payload => dispatch(updateTodo(payload)),
  deleteData: payload => dispatch(deleteTodo(payload)),
  filterData: payload => dispatch(filterTodo(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)