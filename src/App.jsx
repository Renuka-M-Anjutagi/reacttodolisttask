import React from 'react';
import "./App.css";
import TodoInput from "./componets/TodoInput";
import TodoItem from "./componets/TodoItem";
import { Col, Row } from 'react-bootstrap';
function App() {

  const [todoItems, setTodoItems] = React.useState(
    [{
    id:'1',
    todo: 'Office Task -01',
    description:'Description of Office task -01',
    complete: false},
    {
      id:'2',
      todo: 'Office Task -02',
      description:'Description of Office task -02',
      complete: false
    },
    {
      id:'3',
      todo: 'Office Task -03',
      description:'Description of Office task -03',
      complete: true
  }])


    const createTodoItem = (todo,description) => {
      const newTodoItems = [...todoItems, { todo,description, complete: false }];
      setTodoItems(newTodoItems);
      };

      const [selectValue, setSelectValue] = React.useState("");
      const onChange = (event) => {
        const value = event.target.value;
        setSelectValue(value);
      }
      const deleteTodoItem = (index) => {
        const newTodoItems = [...todoItems]
        newTodoItems.splice(index, 1)
        setTodoItems(newTodoItems)
        }


        const completeTodoItem = (index) => {
          const newTodoItems = [...todoItems];
          newTodoItems[index].complete === false
          ? (newTodoItems[index].complete = true)
          : (newTodoItems[index].complete = false);

          console.log(newTodoItems[index]);
          setTodoItems(newTodoItems)
          };

 

          const updateTodoItem = (index) => {
            const newTodoItems = [...todoItems];
            const item = newTodoItems[index];
            let newItem = prompt(`Update ${item.todo}?`, item.todo);
            let newItem2 = prompt(`Update ${item.description}?`, item.description);
            let todoObj = { todo: newItem,description:newItem2, complete: false };
            newTodoItems.splice(index, 1, todoObj);
            if (newItem === null || newItem === "") {
            return;
            } else {
            item.todo = newItem;
            item.description = newItem2;
            }
            setTodoItems(newTodoItems);
            };


return (
<>
<div style={{width:'1530px',height:'1000px',border:'1px solid black',margin:'20px'}}>

   

    <div className="app">
         <TodoInput  createTodoItem={createTodoItem} />
    </div>

          <div style={{width:'725px',height:'100px',color:'green',paddingTop:'60px',margin:'20px',float:'left'}}>

                <p>Mytodos</p>

          </div>
          <div style={{width:'720px',height:'100px',paddingTop:'60px',margin:'20px',float:'right'}}>
                <p style={{float:'right'}}> Status Fillter 
                <select onChange={onChange}>
                  <option value="0">All</option>
                  <option value="1">1</option>
                </select></p> 
          </div>

      
      <div className='displayTodo'>
   
      {todoItems.map((item, index) => (
            <TodoItem
            key={index}
            index={index}
            item={item}
            deleteTodoItem={deleteTodoItem}
            completeTodoItem={completeTodoItem}
            updateTodoItem={updateTodoItem}
            />

            ))}
      </div>
</div>
   
</>

);
}
export default App;