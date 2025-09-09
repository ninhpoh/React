import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";

function Execise03() {
    return ( 
        <>
            <BrowserRouter>
                    <Routes>
                         <Route path="/login" element={<Login></Login>}></Route>
                    </Routes>
            </BrowserRouter>
        </>
     );
}

export default Execise03;