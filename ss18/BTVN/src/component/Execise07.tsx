import React from "react"

interface State {
    list: string[]
}

const handleSubmit = (e:React.InputEvent<HTMLInputElement>) => {
    
}

function ToDoList(){

    return(
        <div style={{width:`250px`,margin:`20px`}}>
            <input type="text" placeholder="Nhap cong viec"/>
            <div>
                
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default ToDoList