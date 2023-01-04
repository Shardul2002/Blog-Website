import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/home";
import Aboutus from "./pages/aboutus";
import Compose from "./pages/compose";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
      <BrowserRouter>
        <Routes>   
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/aboutus' element={<Aboutus />} />
          <Route exact path='/compose' element={<Compose />} />
        </Routes> 
      </BrowserRouter>
  );
}

export default App;
