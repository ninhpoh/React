import { useState } from "react";

interface formState{
    content: string
    title: string
    age: number
}

function Form(){

    const [input,setInput]= useState<formState>({content: "",title: '',age: 0})

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        // setInput(e.target.value)
    }

    return(
        <div>
            <input type="text" placeholder="Nhap noi dung" onChange={handleChange}/>
            {/* <p>{input}</p> */}
        </div>
    )
}
export default Form;