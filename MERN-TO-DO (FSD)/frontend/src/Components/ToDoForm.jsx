import { useState } from "react"
import { addNewTodo } from "../Redux/actions"
import { useDispatch } from "react-redux"



const ToDoForm = () => {

    const dispatch = useDispatch();

  

    const[text,setText] = useState("")



    const onFormSubmit = (e) =>{
        e.preventDefault();
        dispatch(addNewTodo(text))
        setText("")
    }



    const onInputChange = (e) => {

        setText(e.target.value)
    }


    return(
        <form action="submit" className="form" onSubmit={onFormSubmit}>
            <input type="text" placeholder="Enter your task" className="input" onChange={onInputChange} value={text}/>
        </form>
    )
}

export default ToDoForm;