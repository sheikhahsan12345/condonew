import React from "react";
import { BrowserRouter ,Routes, Route, } from "react-router-dom";
import Home from "../Home";


function AppRouter(){

return(
 <>
   <BrowserRouter>
   <Routes>
    <Route path ="/" element={<Home/>}></Route>
    </Routes>
 </BrowserRouter>

 </>

    )
}




export default AppRouter;