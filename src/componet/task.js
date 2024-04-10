import React,{useState} from 'react'

function Task() {

    const [val,setVal] = useState('')
    const [values, setValues] = useState([])
    const addValue = () =>{
        setValues(
            [...values,{id:Date.now(), text:val}]
        )
       
    }
  return (
    <div>
      <input type="text" value={val} onChange={(event) => setVal(event.target.value)}/>
      <button onClick={()=>addValue()}>submit</button>
      {values.map((obj)=>{
        <p>{obj.text}</p>
      })}
    </div>
  )
}

export default task
