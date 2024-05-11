import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const TodoInput = ({createTodoItem}) => {
const [value, setValue] = React.useState("")
const [description, setValueDesc] = React.useState("")

const handleSubmit = e => {
    e.preventDefault();
    if(value === ""){
    return console.log("Please add something to-do")
    }
    if(description === ""){
        return console.log("Please add something to-do")
    }
    createTodoItem(value,description)
   // createTodoItem(description)
    
    setValue("")
    setValueDesc("")

    }


return (
<div className='displayList'>
    <span style={{textAlign:'center',
    color: 'green',
    fontSize: '25px'
}}>My todo</span>
        <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder= "Todo Name"
        value={value} className='InputText'
        onChange={(e) => setValue(e.target.value)}
        />
        <input
        type="text"
        placeholder= "Todo Description"
        value={description} className='InputText' 
        onChange={(e) => setValueDesc(e.target.value)}
        />
        <button  type="button" style={{backgroundColor:'#13AD89',color:'white',
    height: '42px',
    width: '160px'}} onClick={handleSubmit}>Add Todo</button>
        </form>

</div>
)}
export default TodoInput