import React, { useState } from "react";

function Execise02() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [display,setDisplay] = useState(false)

    const handleChageName = (e:React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const handleChageEmail= (e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e:React.FormEvent) =>{
        e.preventDefault()
        if(name.length > 0 && email.length > 0){
            setDisplay(false)
        }else{
            setDisplay(true)
        }
    }

    return ( 
        <div >
            <h2>Thong tin nguoi dung</h2>
            <input type="text" placeholder="Nhap ten" onChange={handleChageName}/><br />
            <input type="text" placeholder="Nhap email" onChange={handleChageEmail}/><br />
            <button type="submit" onClick={handleSubmit}>Submit</button>
            <div className={display? `d-none` : ""}>
                <p>{name}</p>
                <p>{email}</p>
            </div>
        </div>
     )
}

export default Execise02;