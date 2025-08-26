import { useEffect, useState } from "react";

function Execise01(){
    const [name,setName] = useState(`Tran An Ninh`)

    return(
        <>
            <p>Ho va Ten: {name}</p>
        </>
    )
}
export default Execise01;