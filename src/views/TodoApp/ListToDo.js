import React from "react";
import './ListToDo.scss'
import Addtodo from './AddTodo'
import { toast } from 'react-toastify';

class ListToDo extends React.Component {
    state = {
        listTodo: [
            { id: 'todo1', title: 'Doing Homework' },
            { id: 'todo2', title: 'Making Video' },
            { id: 'todo3', title: 'Playing Game' }
        ],
        editTodo: {}
    }
    addNewTodo = (todo) => {
        this.setState({
            listTodo: [...this.state.listTodo, todo]
        })
        toast.success("Add new todo success")
    }
    handleDeletTodo = (todo) => {
        let curentTodos = this.state.listTodo
        curentTodos = curentTodos.filter(item => item.id !== todo.id)
        this.setState({
            listTodo: curentTodos
        })
        toast.success('Delete success')
    }
    handleEditTodo = (todo) => {
        let { editTodo, listTodo } = this.state;

        let isEmptyObj = Object.keys(editTodo).length === 0;

        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {

            let listTodosCopy = [...listTodo];

            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));

            listTodosCopy[objIndex].title = editTodo.title;

            this.setState({
                listTodo: listTodosCopy,
                editTodo: {}
            })
            toast.success("Update todo succeed!")
            return;
        }

        //edit
        this.setState({
            editTodo: todo
        })
    }
    handOnChangeleEditTodo = (e) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = e.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render() {
        let { listTodo, editTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0
        return (
            <>
                <p>
                    To Do Apps with React
                </p>
                <div className="list-todo-container">
                    <Addtodo addNewTodo={this.addNewTodo} />
                    <div className="list-todo-content">
                        {listTodo && listTodo.length > 0 &&
                            listTodo.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {isEmptyObj === true ?
                                            <span> {index + 1} - {item.title}</span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1} - <input value={editTodo.title}
                                                            onChange={(e) => this.handOnChangeleEditTodo(e)}
                                                        />
                                                    </span>
                                                    :
                                                    <span>
                                                        {index + 1} - {item.title}
                                                    </span>
                                                }
                                            </>

                                        }
                                        <button className="edit"
                                            onClick={() => this.handleEditTodo(item)}
                                        >
                                            {isEmptyObj === false && editTodo.id === item.id ?
                                                'Save' : 'Edit'}
                                        </button>
                                        <button className="delete"
                                            onClick={() => this.handleDeletTodo(item)}
                                        >Delete</button>
                                    </div>
                                )
                            })
                        }


                    </div>

                </div>
            </>
        )
    }
}

export default ListToDo