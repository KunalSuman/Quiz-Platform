import React from 'react';
import { BrowserRouter , Route,Routes} from 'react-router-dom';
import {Home} from './Pages/Home';
import {Admin} from './Pages/Admin';
import {Login} from './Pages/Login';
import {Tests} from './Pages/Tests';
import { Admin_landing } from './Pages/Admin_landing';
function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<Login/>} />
                <Route path="/home"element={<Home/>} />
                <Route path="/admin_landing" element ={<Admin_landing/>} />
                <Route path="/admin/:paperId" element = {<Admin/>} />
                <Route path="/test/:paperId" element = {<Tests/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;
