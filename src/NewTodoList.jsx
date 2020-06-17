import React,{Component} from 'react';
import uuid from 'react-uuid'

class NewTodoList extends Component{

    constructor(props){
        super(props);
        this.state = {task:""}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.newTodo({...this.state,id:uuid()})
        this.setState(
            {
                task:''
            }
        )
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        }
        )
    }

    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                placeholder="Enter to do"
                name = "task"
                id= "task"
                value={this.state.task}
                onChange={this.handleChange}>
                </input>
                <button>Add</button>
            </form>
            </div>
        )
    }
}

export default NewTodoList;