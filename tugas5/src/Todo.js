import React from 'react'
import { connect } from 'react-redux'
import { addtodo, updateTodo, deleteTodo } from './action'
import { Table, Button } from 'react-bootstrap'

class Todo extends React.Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
    // this.onChange = this.onChange.bind(this)
    // this.onSubmitTodo = this.onSubmitTodo.bind(this)
    // this.onEdit = this.onEdit.bind(this)
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmitTodo = () => {
    const { todo, add } = this.props
    console.log(todo);
    const id = todo.length === 0 ? 1 : todo[todo.length - 1].id + 1
    add({
      id,
      name: this.state.value
    })
    console.log(add);
    this.setState({ value: '' })
  }

  onEdit = (e) => {
    const { update } = this.props

    update({
      e,
      name: this.state.value
    })
    // console.log(add);
    // this.setState({value: ''})
  }

  onDelete = (e) => {
    const { todo, deleteData } = this.props
    const id = todo.filter(item => item.id === e ? item.splice(id, 1): item.id)
  }

  render() {
    const { value } = this.state
    const { todo } = this.props
    return (
      <div>
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
              <th colSpan='2'>Action</th>
            </tr>
          </thead>
          <tbody>
            {todo.map((x, i) =>
              <tr key={x.id}>
                <td>{i + 1}</td>
                <td>{x.name}</td>
                <td><Button onClick={() => this.onEdit(x.id)}>Edit</Button></td>
                <td><Button onClick={() => this.onDelete(x.id)}>Delete</Button></td>
              </tr>
            )}
          </tbody>
        </Table>
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
  deleteData: payload => dispatch(deleteTodo(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)