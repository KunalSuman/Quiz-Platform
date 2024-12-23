import React from 'react';
import { BrowserRouter , Route,Routes} from 'react-router-dom';
import {Home} from './Pages/Home';
import {Admin} from './Pages/Admin';
import {Test} from './Test';
function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Test />} />
                <Route path="/home"element={<Home/>} />
                <Route path="/admin" element = {<Admin/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;
