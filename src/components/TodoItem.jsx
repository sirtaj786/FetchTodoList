import React from 'react'

const TodoItem = ({data,handelDel}) => {
   
  return (
    <div style={{display:"flex",textAlign:"center", placeItems:"center",marginLeft:"5rem",justifyContent:"space-between",width:"40%",border:"0.5rem solid tomato"}}>
    <div>{data.id}</div>
    <div>{data.title}</div>
    <button onClick={()=>handelDel(data.id)}>Delete</button>
    </div>
  )
}

export default TodoItem