import React from "react";
import { toast } from 'react-toastify';


class AddTodo extends React.Component {
    state = {
        title: ''
    }
    handleOnchange = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    handleAddTodo = () => {
        if(!this.state.title){
            // if(undefined//null//empty) ==> false
            toast.error("No titles have been entered yet")
            return
        }
        let todo = {
            id: Math.floor(Math.random() * 1001),   
            title: this.state.title
        }

        this.props.addNewTodo(todo)
    }
    render() {
        let {title} = this.state
        return(

            <div className="app-todo">
                <input type="text" value={title}
                onChange={(e) => this.handleOnchange(e)}
                />
                <button type="button" className="add"
                onClick={()=> this.handleAddTodo()}
                >Add</button>
            </div>
        )
    }
}

export default AddTodo