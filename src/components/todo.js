
import { useState } from "react";
import "../style.css"

export default function Todo(props){
    function dlt(value){
        props.setAllTask(prevData => {
        return prevData.filter(item => item !==value )
        })
      }
      function checkBoxTick(event){
        props.setAllTask(prevData => {
            return prevData.map(item =>{
                if(item.title === event.target.value){
                    return {title : item.title, completed :!item.completed}
                }else{
                    return item
                }
            })
        })
      }
      
      
      let todoElems
      props.allTask !== null ? 
        todoElems=props.allTask.map((item, i) => {
        return(
            <div className=" d-flex justify-content-around align-items-center">
                <span className="col-1 text-center">
                    {i+1}
                </span>
                <li className="col-11 list-group-item d-flex justify-content-between align-items-center border-0 mb-2 rounded">
                    <div className="d-flex">
                        <input className="mx-2"defaultChecked={item.completed} id={item.title} name={item.title} type="checkbox" onClick={checkBoxTick} value={item.title} aria-label="..." />
                        {!item.completed ? <p className="m-0">{item.title}</p> : <s>{item.title}</s>}
                    </div>
                    <div>
                        <i onClick={()=>props.edit(item,i+1)} className="mx-2 fa-solid fa-pen-to-square"></i>
                        <i onClick={()=>dlt(item)} className="fa-solid fa-trash"></i>
                    </div>
                </li>
            </div>
        )
    }) : console.log();
    return(
        <ul className="list-group mb-0">
            {todoElems}
        </ul>
    )
}