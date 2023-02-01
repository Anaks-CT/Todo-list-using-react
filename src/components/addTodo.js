
import React from "react";
export default function AddTodo(props){
    function editTask(event) {
        props.setIndex()
        props.setTask('')
        event.preventDefault();
        props.setAllTask(prevData => prevData.map((item, i) => i===props.index-1 ? {...item, title : props.newTask} : item ))}
    return(
        <form className="d-flex justify-content-center align-items-center mb-4">
            <div className="d-flex justify-content-center align-items-center">
                <div className="form-outline flex-fill d-flex align-items-center">
                    {props.index && <p className="m-0">{props.index}.</p>}
                    <input
                    required
                    type="text"
                    name="newTask"
                    value={props.newTask}
                    onChange={props.todoInput}
                    className="rounded border p-2"
                    placeholder="Enter New Task"
                    />
                </div>
                {props.index ? <button onClick={editTask} className="btn btn-info ms-2">Edit</button> : <button onClick={props.addTask} className="btn btn-info ms-2">Add</button> } 
            </div>
        </form>

    )
}