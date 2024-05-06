import Home from "./Component/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast'; // Import Toaster from 'react-hot-toast'

function App() {
  return (
    <div className="App">
      <Toaster />
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
