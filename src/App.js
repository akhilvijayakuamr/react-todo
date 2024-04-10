import { useState } from 'react';
import './App.css';


function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("")
  const [toggleSubmit, setToggleSubmit] = useState(true)
  const [isEdit, setIsEdit] = useState(null)
  const [values, setValues] = useState([])
  const [val, setVal] = useState('')

  const addTodo =()=>{
    const isDuplicate = todos.some(item => item.text === todo);
    if (!todo.trim()){
      alert("please fill item")


    }else  if (isDuplicate){
      alert("The task is already exists")
    }   
    else if(todo && !toggleSubmit){
      setTodos(
        todos.map((ele)=>{
          if(ele.id === isEdit){
            return{...ele, text:todo}
          }
          return ele
        })
      )
      setTodo("")
      setToggleSubmit(true)
      setIsEdit(null)
    }
    else{
      setTodos([...todos,{id:Date.now(), text:todo, status:false}])
      setTodo("")
    }
    
  }

  const deleteTodo =(id)=>{
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editItem =(id)=>{
    let newEditItem = todos.find((elm) =>{
      return elm.id === id
    });
    setToggleSubmit(false)
    setTodo(newEditItem.text)
    setIsEdit(id)
  }
  return (
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>Add activity 🌝 ☕ </h2>
    </div>
    <div className="input">
      <input type="text" placeholder="🖊️ Add item..."  value={todo} onChange={(event)=> setTodo(event.target.value)}/>
      {
        toggleSubmit ? <i className="fas fa-plus" onClick={()=> addTodo()}></i> :
        <i className="fa-solid fa-pen-to-square" onClick={()=> addTodo()}></i>
      }
      
    </div>
    {
      todos.map((obj) =>{
        return(
          <div className="todos" key={obj.id}>
      <div className="todo">
        <div className="left">
          <input type="checkbox" name="" id="" value={obj.id} onChange={(event)=>{
            setTodos(todos.filter(obj2 =>{
              if (obj2.id === obj.id){
                obj2.status = event.target.checked
              }
              return obj2
            }))
          }}/>
          <p>{obj.text}</p>
        </div>
        <div className="right">
          <i className="fa-solid fa-pen-to-square" onClick={()=>editItem(obj.id)}></i>
  
          <i className="fas fa-times" onClick={()=>deleteTodo(obj.id)}></i>
        </div>
      </div>
    </div>
        )
      })
    }
    
  </div>
  );
}

export default App;
