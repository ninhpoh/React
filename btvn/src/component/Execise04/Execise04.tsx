import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";

function Execise04() {
    return ( 
        <>
            <BrowserRouter>
                    <Routes>
                         <Route path="/register" element={<Register></Register>}></Route>
                    </Routes>
            </BrowserRouter>
        </>
     );
}

export default Execise04;