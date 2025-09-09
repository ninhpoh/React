import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";

function Execise01() {
    return ( 
        <>
            <BrowserRouter>
                    <Routes>
                        <Route path="/home" element={<Execise01></Execise01>}></Route>
                        <Route path="/contact" element={<About></About>}></Route>
                        <Route path="/about"  element={<About></About>}></Route>
                    </Routes>
            </BrowserRouter>
        </>
     );
}

export default Execise01;