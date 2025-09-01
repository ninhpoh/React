import React, { useState } from "react";

function Execise01() {
    

    const [input,setInput] = useState(0)

    const handleChage = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value.length)
    }

    return ( 
        <>
            <h3>Kiem tra do dai chuoi:</h3>
            <input type="text" placeholder="Nhap noi dung vao day" onChange={handleChage}></input>
            {input>=5 && <p>Chuoi dai hon 5 ky tu</p>}
        </>
     );
}

export default Execise01;