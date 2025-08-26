import { useEffect, useState } from "react";

interface Props{
    name: string
}

function Abc(props: Props){

    useEffect(()=>{
        console.log(`asdad`);
        
    })

    const [count,setCount] = useState(0)

    function handleClick() {
        setCount((prevCount)=> prevCount+1)
    }

    return(
        <>
            <h5>ho va ten: {props.name}</h5>
            <p>{count}</p>
            <button onClick={handleClick}>dasda</button>
        </>
    )
}
export default Abc;