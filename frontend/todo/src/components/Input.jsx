import { useState } from 'react'
import axios from 'axios'
import './Input.css'

export const Input = (props)=>{
    let [itemName, setItemName] = useState('list me here please')
    let [enteredDate, setEnteredDate] = useState('')

    //ASSIGNS THE NEWLY INPUT DATA TO AN OBJECT. 
    //THE OBJECT IS THEN ROUTED INTO THE ITEM MODEL ON THE SERVER AND THEN POSTED TO THE COLLECTIONS MODEL
    let submitHandler = (evt)=>{
        evt.preventDefault()
        let newItem = {
            todoItem : itemName,
            date : enteredDate
        }
        axios.post('/todos', newItem)
        setItemName('')
        setEnteredDate('')
        //window.location.reload(true)
        props.onRefresh()
        }   
    
    //SETS THE STATE FOR THE DESIRED ITEM TASKER TO BE ENTERED INTO THE DATABASE
    let itemChangeHandler = (evt)=>{
        setItemName(evt.target.value)
        console.log(evt.target.value)
    }

    //SETS THE STATE FOR THE DESIRED ITEM TASKER DATE TO BE ENTERED INTO THE DATABASE
    let dateChangeHandler = (evt)=>{
        setEnteredDate(evt.target.value)
        console.log(evt.target.value)
    }

    return(
        <form onSubmit={submitHandler}>
        <div>
            <div>
            <label>to do item 👉 </label>
            <input className="inner" type="text" maxLength="21" size="24" value={itemName} onChange={itemChangeHandler}></input>
            </div>
            <div>
                <label>due by 👉 </label>
                <input className="inputdate" type="datetime-local" min='2022-09-01' max='2023-01-01' value={enteredDate} onChange={dateChangeHandler}></input>
            <button className="submitter" type="submit">add 📝</button>
            </div>   
        </div>
        </form>
        
    )
} 