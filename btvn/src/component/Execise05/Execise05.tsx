import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";

function Execise05() {
    return ( 
        <>
            <BrowserRouter>
                    <Routes>
                        <Route path="*" element={<NotFound></NotFound>}></Route>
                    </Routes>
            </BrowserRouter>
        </>
     );
}

export default Execise05;