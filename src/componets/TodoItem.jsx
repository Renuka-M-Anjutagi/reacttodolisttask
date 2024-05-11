const TodoItem = ({ item, index, deleteTodoItem, completeTodoItem, 
    updateTodoItem }) => {
    return (
    <div className="todo-list">
    <li>
    Name  : {item.todo}</li>
    <li>
    Description :  {item.description}</li>
    <li>
    Status : <button style={{color:'white',backgroundColor: item.complete ? "#FE7E7F" : "#13AD89"}} onClick={() => completeTodoItem(index)}>{item.complete ? "Not Complete" : "Complete"}</button>

    </li>
    <div className="btns">
    
    <button style={{backgroundColor:'#13AD89',color:'white'}} onClick={() => updateTodoItem(index)}>Edit</button>
    <button style={{backgroundColor:'#CA6124',color:'white'}} onClick={() => deleteTodoItem(index)}>Delete</button>
    </div>
    </div>)
    };

    
    export default TodoItem