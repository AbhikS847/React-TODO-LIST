import React,{Component} from 'react';

class Todo extends Component{
    constructor(props){
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
        this.state = {
            isEditing:false,
            task:this.props.task
        }
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);

    }
    handleRemove(){
        this.props.removeTodo(this.props.id);

    }

    toggleForm(){
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleUpdate(evt){
        evt.preventDefault();
        this.props.updateTodo(this.props.id,this.state.task);
        this.setState({
            isEditing: false
        })
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        }
        )
    }

    render(){
        let result;
        if(this.state.isEditing){
        result = (
            <div>
                <form onSubmit={this.handleUpdate}>
                    <input type="text" value={this.state.task} name="task" onChange={this.handleChange} placeholder="edit to do..."></input>
                    <button>Save</button>
                </form>
            </div>

        )    
        }
        else{
            result = (<div>
            <button onClick={this.toggleForm}>Edit</button>
            <button onClick = {this.handleRemove}>Delete</button>
                <p>{this.props.task}</p>
            </div>)
        }

        return result;
    }
}

export default Todo;